import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Jeremy Haik Photography",
  description: "Architectural photography, interior design photography, luxury real estate, and commercial photography services in Phoenix, Scottsdale, and Paradise Valley.",
};

const services = [
  {
    title: "Architectural Photography",
    href: "/services/architectural",
    description: "Commercial and residential architecture documentation for architects, builders, and developers. Capture design intent, craftsmanship, and context.",
    features: ["Exterior & interior coverage", "Day and twilight options", "Drone aerials", "Construction progress"],
    icon: "🏛️",
  },
  {
    title: "Interior Design Photography",
    href: "/services/interior-design",
    description: "Portfolio-ready images for interior designers. Capture the details, textures, and lighting that define your work.",
    features: ["Designer portfolio sessions", "Detail & vignette shots", "Publication-ready quality", "Full commercial rights"],
    icon: "🛋️",
  },
  {
    title: "Luxury Real Estate",
    href: "/services/real-estate",
    description: "High-end listing photography that sells. Twilight shoots, drone aerials, and magazine-quality images for luxury properties.",
    features: ["Twilight/blue hour specialty", "Drone photography", "Virtual staging consultation", "Fast turnaround"],
    icon: "🏠",
  },
  {
    title: "Commercial & Hospitality",
    href: "/services/commercial",
    description: "Hotels, restaurants, offices, and retail spaces. Images that attract guests, customers, and tenants.",
    features: ["Hotel & resort photography", "Restaurant interiors", "Office & workspace", "Retail environments"],
    icon: "🏨",
  },
  {
    title: "Drone & Aerial Photography",
    href: "/services/drone",
    description: "Licensed FAA Part 107 drone photography for architecture, real estate, and commercial projects.",
    features: ["FAA Part 107 certified", "4K video capability", "Site context & aerials", "Mountain & landscape views"],
    icon: "🚁",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Services</h1>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Specialized photography for design professionals. Every shoot is tailored 
              to serve your specific goals — whether that's winning clients, getting 
              published, or selling properties.
            </p>
          </div>

          {/* Services list */}
          <div className="space-y-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold group-hover:text-amber-500 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-amber-500 font-medium lg:self-center">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-16 p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-center">
            <h3 className="text-lg font-semibold">Custom Quotes for Every Project</h3>
            <p className="mt-2 text-zinc-400 max-w-2xl mx-auto">
              Every project is different. I'll provide a detailed quote based on your 
              specific needs — scope, location, timeline, and deliverables. No surprises.
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
