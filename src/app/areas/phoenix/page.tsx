import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phoenix Architectural & Interior Photographer | Design Photography",
  description: "Professional architectural and interior design photography in Phoenix, Arizona. Serving architects, interior designers, builders, and real estate professionals throughout Central Phoenix.",
  keywords: "architectural photographer phoenix, interior design photographer phoenix, phoenix real estate photography, commercial photographer phoenix az",
};

const neighborhoods = [
  "Downtown Phoenix",
  "Arcadia",
  "Biltmore",
  "Camelback Corridor",
  "Encanto",
  "Willo",
  "Roosevelt Row",
  "Central Phoenix",
  "Ahwatukee",
  "Desert Ridge",
  "North Phoenix",
];

export default function PhoenixPage() {
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
              Phoenix
              <br />
              <span className="text-zinc-400">Architecture & Interior Photography</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              From historic Willo bungalows to downtown high-rises, Phoenix architecture 
              tells a story of reinvention. I capture the full spectrum — mid-century 
              restorations, contemporary builds, and everything in between.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
              >
                Book a Phoenix Shoot
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                View Phoenix Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600">
            <span>Featured Phoenix project</span>
          </div>
        </div>
      </section>

      {/* Local expertise */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Phoenix's Design Renaissance
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Phoenix is having a moment. Downtown's transformation, the Arcadia 
                renovation boom, and a new generation of architects embracing desert 
                modernism have created demand for photography that does justice to 
                this work.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Whether you're documenting a Roosevelt Row adaptive reuse project, 
                a Biltmore-area custom home, or a commercial interior in the Camelback 
                Corridor, I bring both technical skill and an understanding of what 
                makes Phoenix architecture distinctive.
              </p>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Based in Phoenix — fast response, no travel fees
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  Experience with desert light and harsh sun
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="text-amber-500">✓</span>
                  All architectural styles — historic to contemporary
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
              <span>Phoenix project detail</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Phoenix Neighborhoods I Serve
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            From the urban core to the edges of the Valley.
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
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Capture Your Phoenix Project?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Let's discuss your property or design project. Quick quotes, flexible scheduling.
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
