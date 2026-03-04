import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Jeremy Haik Photography",
  description: "Architectural and interior photography throughout the Phoenix metro area. Serving Phoenix, Scottsdale, Paradise Valley, Arcadia, Tempe, Mesa, Chandler, and more.",
};

const areas = [
  {
    name: "Phoenix",
    href: "/areas/phoenix",
    description: "Downtown, Arcadia, Biltmore, Camelback Corridor, and Central Phoenix.",
  },
  {
    name: "Scottsdale",
    href: "/areas/scottsdale",
    description: "North Scottsdale, Old Town, DC Ranch, Grayhawk, Gainey Ranch, and Troon.",
  },
  {
    name: "Paradise Valley",
    href: "/areas/paradise-valley",
    description: "Arizona's most exclusive residential community. Luxury estates and custom homes.",
  },
  {
    name: "Arcadia",
    href: "/areas/arcadia",
    description: "Mid-century modern, contemporary renovations, and Phoenix's hottest neighborhood.",
  },
  {
    name: "Tempe",
    href: "/areas/tempe",
    description: "University area, downtown Tempe, and surrounding residential neighborhoods.",
  },
  {
    name: "Mesa",
    href: "/areas/mesa",
    description: "East Valley's largest city. Residential and commercial photography.",
  },
  {
    name: "Chandler",
    href: "/areas/chandler",
    description: "Tech corridor, downtown Chandler, and residential communities.",
  },
  {
    name: "Gilbert",
    href: "/areas/gilbert",
    description: "Heritage District, Agritopia, and family-focused communities.",
  },
  {
    name: "Cave Creek & Carefree",
    href: "/areas/cave-creek",
    description: "Desert foothills, custom homes, and rustic luxury.",
  },
  {
    name: "Fountain Hills",
    href: "/areas/fountain-hills",
    description: "Mountain views, golf communities, and distinctive architecture.",
  },
];

export default function AreasPage() {
  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Service Areas</h1>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Based in Phoenix, serving the entire Valley. Local knowledge, professional results, 
              no travel fees within the metro area.
            </p>
          </div>

          {/* Areas grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 hover:border-zinc-700 transition-all"
              >
                <h2 className="text-xl font-semibold group-hover:text-amber-500 transition-colors">
                  {area.name}
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                  {area.description}
                </p>
                <span className="inline-flex items-center mt-4 text-sm text-amber-500 font-medium">
                  View details →
                </span>
              </Link>
            ))}
          </div>

          {/* Travel note */}
          <div className="mt-16 p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-center">
            <h3 className="text-lg font-semibold">Travel Outside the Valley?</h3>
            <p className="mt-2 text-zinc-400 max-w-2xl mx-auto">
              I'm available throughout Arizona and can travel for the right projects. 
              Sedona, Tucson, Flagstaff, and beyond. Contact me for a custom quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
