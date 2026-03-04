import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const RAW_DIR = './raw-photos';
const OUT_DIR = './public/portfolio';
const MAX_WIDTH = 1600;
const QUALITY = 80;

const PROJECT_NAMES = {
  'abc_chelsea': 'ABC Carpet & Home Chelsea',
  'abcV': 'ABC Carpet & Home Villagio',
  'conveyor': 'NY Art Book Fair',
  'DasHaus': 'Das Haus',
  'HBF': 'HBF Showroom',
  'hgg_2017': 'Holidays at the Guggenheim',
  'humanScale': 'Humanscale Showroom',
  'SVA': 'SVA MFA Photography',
  'tinaKim': 'Tina Kim Gallery'
};

async function processProject(projectDir) {
  const projectName = basename(projectDir);
  const outPath = join(OUT_DIR, projectName);
  
  await mkdir(outPath, { recursive: true });
  
  const files = await readdir(projectDir);
  const jpgs = files.filter(f => f.toLowerCase().endsWith('.jpg') && !f.startsWith('.'));
  
  console.log(`Processing ${projectName}: ${jpgs.length} images`);
  
  const processed = [];
  for (const file of jpgs) {
    const inputPath = join(projectDir, file);
    const outputFile = file.toLowerCase().replace(/\s+/g, '-');
    const outputPath = join(outPath, outputFile);
    
    try {
      await sharp(inputPath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: QUALITY })
        .toFile(outputPath);
      
      processed.push({ file: outputFile, project: projectName });
    } catch (err) {
      console.error(`  Failed: ${file}`, err.message);
    }
  }
  
  return { project: projectName, displayName: PROJECT_NAMES[projectName] || projectName, images: processed.map(p => p.file) };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  
  const projects = await readdir(RAW_DIR);
  const projectDirs = projects.filter(p => !p.startsWith('.') && !p.endsWith('.zip'));
  
  const manifest = [];
  
  for (const project of projectDirs) {
    const projectPath = join(RAW_DIR, project);
    const result = await processProject(projectPath);
    manifest.push(result);
  }
  
  // Write manifest
  const manifestPath = './src/data/portfolio.json';
  await mkdir('./src/data', { recursive: true });
  const fs = await import('fs');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('\nManifest written to', manifestPath);
  console.log('Total projects:', manifest.length);
  console.log('Total images:', manifest.reduce((sum, p) => sum + p.images.length, 0));
}

main().catch(console.error);
