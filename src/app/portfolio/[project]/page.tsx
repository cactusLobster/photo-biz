import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import portfolioData from "@/data/portfolio.json";

type Props = {
  params: Promise<{ project: string }>;
};

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ project: p.project }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = await params;
  const projectData = portfolioData.find((p) => p.project === project);
  
  if (!projectData) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${projectData.displayName} | Jeremy Haik Photography`,
    description: `Photography from ${projectData.displayName}. ${projectData.images.length} images.`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const projectData = portfolioData.find((p) => p.project === project);
  
  if (!projectData) {
    notFound();
  }

  return (
    <div className="pt-20">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {projectData.displayName}
            </h1>
            <p className="mt-2 text-zinc-400">
              {projectData.images.length} images
            </p>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={image}
                className={`relative ${index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'} bg-zinc-900 rounded-xl overflow-hidden`}
              >
                <Image
                  src={`/portfolio/${projectData.project}/${image}`}
                  alt={`${projectData.displayName} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {(() => {
              const currentIndex = portfolioData.findIndex((p) => p.project === project);
              const prevProject = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
              const nextProject = currentIndex < portfolioData.length - 1 ? portfolioData[currentIndex + 1] : null;

              return (
                <>
                  {prevProject ? (
                    <Link
                      href={`/portfolio/${prevProject.project}`}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      ← {prevProject.displayName}
                    </Link>
                  ) : <span />}
                  {nextProject ? (
                    <Link
                      href={`/portfolio/${nextProject.project}`}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {nextProject.displayName} →
                    </Link>
                  ) : <span />}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Like What You See?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Let's discuss your project and create something great together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
