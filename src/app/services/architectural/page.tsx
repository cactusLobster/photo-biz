import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural Photography Phoenix | Commercial & Residential",
  description: "Professional architectural photography in Phoenix, Scottsdale, and Arizona. Documentation for architects, builders, and developers. Residential, commercial, and hospitality projects.",
  keywords: "architectural photographer phoenix, architecture photography arizona, commercial building photographer scottsdale, residential architecture photography",
};

const includes = [
  "Pre-shoot consultation to understand design intent",
  "Exterior coverage (multiple angles, context shots)",
  "Interior documentation of key spaces",
  "Detail shots of significant architectural elements",
  "Twilight/dusk photography (when applicable)",
  "Drone aerials for site context",
  "Professional post-processing",
  "High-resolution files for print and web",
];

const projectTypes = [
  { name: "Custom Homes", desc: "Luxury residences and custom builds" },
  { name: "Multi-Family", desc: "Apartments, condos, townhomes" },
  { name: "Commercial", desc: "Office buildings, retail, mixed-use" },
  { name: "Hospitality", desc: "Hotels, resorts, restaurants" },
  { name: "Institutional", desc: "Schools, healthcare, civic buildings" },
  { name: "Adaptive Reuse", desc: "Historic renovations and conversions" },
];

const faqs = [
  {
    q: "What's the difference between architectural and real estate photography?",
    a: "Real estate photography is optimized for quick listing turnaround — efficient coverage to sell a property. Architectural photography is more deliberate — designed to document design intent, showcase craftsmanship, and create portfolio-quality images for architects and builders.",
  },
  {
    q: "How do you handle Arizona's harsh sunlight?",
    a: "Timing is everything. I schedule exterior shoots for golden hour or blue hour when possible. For midday shoots, I use techniques to manage contrast and harsh shadows. Interior work is less dependent on time of day.",
  },
  {
    q: "Do you photograph buildings under construction?",
    a: "Yes — construction progress documentation is a core service. I can set up recurring visits to document the build process, which is valuable for marketing, investor updates, and project records.",
  },
  {
    q: "Can you photograph at night?",
    a: "Absolutely. Twilight and night photography can be incredibly dramatic for the right building. I use professional lighting and long exposures to capture architecture after dark.",
  },
  {
    q: "How far in advance should I book?",
    a: "For optimal scheduling (best light conditions, no conflicts), 2-3 weeks is ideal. I can often accommodate shorter notice, but timing flexibility may be limited.",
  },
];

export default function ArchitecturalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
              For Architects & Builders
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Architectural
              <br />
              <span className="text-zinc-400">Photography</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              Your buildings are the result of years of work — design, engineering, 
              construction, problem-solving. I capture images that honor that process 
              and showcase the finished result.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                See Architectural Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600">
            <span>Featured architectural image</span>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Project Types
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projectTypes.map((type) => (
              <div
                key={type.name}
                className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
              >
                <h3 className="font-semibold">{type.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
              <p className="mt-4 text-zinc-400">
                Every architectural shoot is tailored to the project, but here's what you can expect:
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">✓</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Portfolio Is Your Pipeline
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Every completed project is a marketing asset. Great architectural 
                photography helps you win awards, get published, attract new clients, 
                and command higher fees.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                I understand architecture — design intent, materiality, how light 
                defines space. I'm not just documenting buildings; I'm helping you 
                tell the story of your work.
              </p>
            </div>
            <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
              <span>Architectural detail shot</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-800 pb-8">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Document Your Project?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Let's discuss your building, your timeline, and exactly what you need. 
            I'll provide a detailed quote with no surprises.
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
