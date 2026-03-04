import Link from "next/link";

const services = [
  { name: "Architectural Photography", href: "/services/architectural" },
  { name: "Interior Design Photography", href: "/services/interior-design" },
  { name: "Luxury Real Estate", href: "/services/real-estate" },
  { name: "Commercial & Hospitality", href: "/services/commercial" },
  { name: "Drone Photography", href: "/services/drone" },
];

const areas = [
  { name: "Phoenix", href: "/areas/phoenix" },
  { name: "Scottsdale", href: "/areas/scottsdale" },
  { name: "Paradise Valley", href: "/areas/paradise-valley" },
  { name: "Arcadia", href: "/areas/arcadia" },
  { name: "All Areas", href: "/areas" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-xl font-semibold tracking-tight">
              JEREMY HAIK
            </span>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              High-end architectural and interior photography for designers, architects, and developers in the Phoenix metro area.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Service Areas</h3>
            <ul className="mt-4 space-y-3">
              {areas.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a href="tel:+16025551234" className="hover:text-white transition-colors">
                  (602) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="pt-2">
                <p>Phoenix, Arizona</p>
                <p>Serving the Valley</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Jeremy Haik Photography. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-zinc-300">Privacy</Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-zinc-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
