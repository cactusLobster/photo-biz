import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Jeremy Haik Photography",
  description: "Phoenix-based architectural and interior design photographer. Learn about my approach to capturing architecture, interiors, and luxury real estate.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="aspect-[3/4] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600 sticky top-32">
              <span>Your headshot here</span>
            </div>

            {/* Bio */}
            <div>
              <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Jeremy Haik
              </h1>
              <p className="mt-6 text-xl text-zinc-300 leading-relaxed">
                Architectural and interior design photographer based in Phoenix, Arizona.
              </p>
              
              <div className="mt-8 space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  I photograph buildings, interiors, and spaces for architects, interior 
                  designers, builders, and luxury real estate professionals throughout 
                  the Phoenix metro area.
                </p>
                <p>
                  My approach is simple: understand your vision, then capture it in a way 
                  that serves your goals — whether that's winning awards, landing new clients, 
                  selling a property, or getting published.
                </p>
                <p>
                  Great architectural photography isn't just about technical skill. It's about 
                  understanding design intent, anticipating how light will move through a space, 
                  and knowing which details matter. That's what I bring to every shoot.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h2 className="text-lg font-semibold mb-4">Clients Include</h2>
                <ul className="grid grid-cols-2 gap-2 text-zinc-400">
                  <li>• Architects</li>
                  <li>• Interior Designers</li>
                  <li>• Custom Home Builders</li>
                  <li>• Developers</li>
                  <li>• Luxury Real Estate Agents</li>
                  <li>• Hotels & Resorts</li>
                  <li>• Restaurants</li>
                  <li>• Commercial Spaces</li>
                </ul>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h2 className="text-lg font-semibold mb-4">Service Areas</h2>
                <p className="text-zinc-400">
                  Based in Phoenix. Serving Scottsdale, Paradise Valley, Arcadia, Tempe, 
                  Mesa, Chandler, and the greater Phoenix metro area. Available for travel.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
