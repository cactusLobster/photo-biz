import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Portfolio | Jeremy Haik Photography",
  description: "Architectural, interior design, and commercial photography portfolio. View projects including gallery installations, showrooms, and retail spaces.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Portfolio</h1>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Commercial and architectural photography for galleries, showrooms, 
              and cultural institutions.
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.map((project) => (
              <Link
                key={project.project}
                href={`/portfolio/${project.project}`}
                className="group block"
              >
                <div className="aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden relative group-hover:ring-2 ring-amber-500 transition-all">
                  <Image
                    src={`/photo-biz/portfolio/${project.project}/${project.images[0]}`}
                    alt={project.displayName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold group-hover:text-amber-500 transition-colors">
                    {project.displayName}
                  </h3>
                  <p className="text-sm text-zinc-500">
                    {project.images.length} images
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Have a Project in Mind?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            I'd love to hear about your upcoming shoot. Let's create something great together.
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
