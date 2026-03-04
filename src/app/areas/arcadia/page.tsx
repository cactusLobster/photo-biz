import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arcadia Architectural & Interior Photographer | Phoenix Design Photography",
  description: "Professional architectural and interior design photography in Arcadia, Phoenix. Specializing in mid-century modern, contemporary renovations, and luxury homes in one of Phoenix's most desirable neighborhoods.",
  keywords: "arcadia photographer phoenix, interior design photographer arcadia, arcadia real estate photography, mid-century modern photographer phoenix",
};

const features = [
  "Mid-century modern expertise",
  "Contemporary renovation documentation", 
  "Luxury kitchen & bath photography",
  "Designer portfolio sessions",
  "Twilight exterior photography",
  "Drone aerials (Camelback Mountain views)",
];

export default function ArcadiaPage() {
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
              Arcadia
              <br />
              <span className="text-zinc-400">Architecture & Interior Photography</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              Arcadia's blend of mid-century character and modern renovation makes it 
              one of Phoenix's most photographed neighborhoods. From Ralph Haver originals 
              to contemporary additions, I capture what makes Arcadia special.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
              >
                Book an Arcadia Shoot
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                View Arcadia Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600">
            <span>Featured Arcadia project</span>
          </div>
        </div>
      </section>

      {/* Why Arcadia */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Where Mid-Century Meets Modern
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Arcadia is a photographer's dream — citrus trees, mountain views, 
                and some of the best residential architecture in the Valley. The 
                neighborhood's ongoing renovation boom means designers and builders 
                constantly need quality documentation.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                I understand the balance between honoring mid-century bones and 
                showcasing contemporary updates. Whether it's a faithful restoration 
                or a modern reimagining, I capture the intent behind the design.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-300">
                    <span className="text-amber-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
              <span>Arcadia interior detail</span>
            </div>
          </div>
        </div>
      </section>

      {/* For Designers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-12 md:p-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold">For Arcadia Designers</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                If you're an interior designer working in Arcadia, you know the competition 
                is fierce. Your portfolio needs to stand out. I specialize in capturing 
                the details that define your work — the custom millwork, the carefully 
                selected materials, the way light moves through your spaces.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/interior-design"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
                >
                  Designer Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-600 text-white rounded-full hover:bg-zinc-800 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Capture Your Arcadia Project?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            From Camelback Road to Indian School, I know Arcadia. Let's make your project shine.
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
