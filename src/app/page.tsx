import Link from "next/link";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

const services = [
  {
    title: "Architectural Photography",
    description: "Showcase your buildings, homes, and structures with images that capture both design intent and atmosphere.",
    href: "/services/architectural",
    icon: "🏛️",
  },
  {
    title: "Interior Design Photography",
    description: "Portfolio-ready images for interior designers. Capture the details, textures, and lighting that define your work.",
    href: "/services/interior-design",
    icon: "🛋️",
  },
  {
    title: "Luxury Real Estate",
    description: "Twilight shoots, drone aerials, and magazine-quality images that sell high-end properties faster.",
    href: "/services/real-estate",
    icon: "🏠",
  },
  {
    title: "Commercial & Hospitality",
    description: "Hotels, restaurants, offices, and retail spaces. Images that attract guests and customers.",
    href: "/services/commercial",
    icon: "🏨",
  },
];

const clients = [
  "Architects",
  "Interior Designers",
  "Builders",
  "Developers",
  "Real Estate Agents",
  "Hotels & Resorts",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background placeholder - replace with actual hero image */}
        <div className="absolute inset-0 bg-zinc-950">
          <Image 
            src="/hero.jpg" 
            alt="Commercial interior photography" 
            fill 
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
            Phoenix • Scottsdale • Paradise Valley
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Architectural & Interior
            <br />
            <span className="text-zinc-400">Photography</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            High-end photography for architects, interior designers, and developers. 
            Images that showcase your work and win you more projects.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-zinc-500 uppercase tracking-widest">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Specialized photography for design professionals. Every shoot is tailored to showcase your unique work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-all"
              >
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 text-xl font-semibold group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-zinc-400 leading-relaxed">
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

      {/* Portfolio Preview */}
      <section className="py-24 lg:py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
              <p className="mt-2 text-zinc-400">A selection of recent architectural and interior projects.</p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-amber-500 font-medium hover:text-amber-400 transition-colors"
            >
              View all work →
            </Link>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.slice(0, 6).map((project) => (
              <Link
                key={project.project}
                href={`/portfolio/${project.project}`}
                className="group relative aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/portfolio/${project.project}/${project.images[0]}`}
                  alt={project.displayName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-semibold">{project.displayName}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Designer CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">For Interior Designers</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Your portfolio is your business card. I specialize in capturing the details, 
              textures, and lighting that make your designs shine — ready for your website, 
              Instagram, and publication submissions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-24 lg:py-32 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Serving the Phoenix Metro Area</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Based in Phoenix, available throughout the Valley and beyond.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Phoenix", "Scottsdale", "Paradise Valley", "Arcadia", "Biltmore", "Tempe", "Mesa", "Chandler", "Cave Creek", "Fountain Hills"].map((area) => (
              <Link
                key={area}
                href={`/areas/${area.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Showcase Your Work?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Let's discuss your project. I'll help you figure out exactly what you need — 
            no pressure, just good advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
