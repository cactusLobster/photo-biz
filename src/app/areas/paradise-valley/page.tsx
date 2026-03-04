import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paradise Valley Architectural & Interior Photographer | Luxury Home Photography",
  description: "Professional architectural and interior design photography in Paradise Valley, Arizona. Specializing in luxury estates, custom homes, and high-end interior design for the Valley's most exclusive community.",
  keywords: "paradise valley photographer, luxury home photographer paradise valley, architectural photography paradise valley az, interior design photographer paradise valley",
};

const neighborhoods = [
  "Paradise Valley Ranchos",
  "Clearwater Hills",
  "Paradise Hills",
  "Camelback Country Estates",
  "Mummy Mountain",
  "Lincoln Hills",
  "Finisterre",
  "Mockingbird Lane",
];

export default function ParadiseValleyPage() {
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
              Paradise Valley
              <br />
              <span className="text-zinc-400">Luxury Photography</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              Paradise Valley is Arizona's most exclusive residential community — where 
              custom estates and world-class design deserve photography that matches. 
              I specialize in capturing the craftsmanship and vision behind these exceptional properties.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
              >
                Book a Paradise Valley Shoot
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                View Luxury Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600">
            <span>Featured Paradise Valley estate</span>
          </div>
        </div>
      </section>

      {/* Why PV is special */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Where Arizona's Finest Homes Deserve the Finest Photography
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Paradise Valley properties aren't just expensive — they're architectural 
                statements. Custom millwork, imported materials, designer landscapes, 
                and mountain views that define luxury living.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Whether you're an architect documenting a custom build, a designer 
                showcasing your interiors, or a luxury agent marketing a $10M+ listing, 
                I understand what buyers and publications expect from Paradise Valley imagery.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Twilight and blue hour specialty
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Drone aerials showcasing mountain views
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Magazine-quality detail shots
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
              <span>Luxury detail shot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Paradise Valley Neighborhoods
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Serving all Paradise Valley enclaves and estates.
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

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Capture Your Paradise Valley Project?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Let's discuss your property or design project. I'll help you plan the perfect shoot.
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
