import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architectural & Interior Photographer Scottsdale | Design Photography",
  description: "Professional architectural and interior design photography in Scottsdale, Arizona. Serving architects, interior designers, builders, and luxury real estate in North Scottsdale, Old Town, and DC Ranch.",
  keywords: "architectural photographer scottsdale, interior design photographer scottsdale, scottsdale real estate photography, luxury home photographer scottsdale az",
};

const neighborhoods = [
  "North Scottsdale",
  "Old Town Scottsdale", 
  "DC Ranch",
  "Grayhawk",
  "Gainey Ranch",
  "McCormick Ranch",
  "Pinnacle Peak",
  "Troon",
  "Desert Mountain",
  "Silverleaf",
];

const services = [
  {
    title: "Architectural Photography",
    description: "Document residential and commercial architecture throughout Scottsdale — from desert modern homes to contemporary commercial projects.",
    href: "/services/architectural",
  },
  {
    title: "Interior Design Photography",
    description: "Portfolio-quality images for Scottsdale interior designers. Perfect for your website, Houzz, and publication submissions.",
    href: "/services/interior-design",
  },
  {
    title: "Luxury Real Estate Photography",
    description: "High-end listing photography including twilight shoots and drone aerials for Scottsdale's competitive luxury market.",
    href: "/services/real-estate",
  },
];

export default function ScottsdalePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
              Service Area
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Scottsdale
              <br />
              <span className="text-zinc-400">Architecture & Interior Photography</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              Scottsdale's design scene is world-class — from desert contemporary homes in 
              North Scottsdale to boutique hotels in Old Town. I capture architecture and 
              interiors that reflect the unique character of this market.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
              >
                Book a Scottsdale Shoot
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                View Scottsdale Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600">
            <span>Featured Scottsdale project image</span>
          </div>
        </div>
      </section>

      {/* Local expertise */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Local Knowledge, Professional Results
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Scottsdale's desert light is both a gift and a challenge. The golden hour 
                here is unlike anywhere else — but so is the harsh midday sun. I know 
                exactly when to schedule shoots for the best results.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Whether you're documenting a custom build in Desert Mountain, photographing 
                a designer's work in Gainey Ranch, or capturing a new restaurant in Old Town, 
                I understand what makes Scottsdale properties special.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Optimal scheduling for desert light conditions
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Experience with desert modern and contemporary styles
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Fast response times — I'm local, not flying in
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
              <span>Scottsdale project detail</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Services in Scottsdale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all"
              >
                <h3 className="text-xl font-semibold group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm text-amber-500 font-medium">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Scottsdale Neighborhoods I Serve
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            From gated communities to urban infill, I photograph properties throughout Scottsdale.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {neighborhoods.map((neighborhood) => (
              <span
                key={neighborhood}
                className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Scottsdale work */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Recent Scottsdale Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600"
              >
                <span className="text-sm">Scottsdale Project {i}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400 transition-colors"
            >
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Book a Scottsdale Shoot?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Let's discuss your project. I'll help you plan the perfect shoot — 
            timing, prep, and exactly what you need.
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
