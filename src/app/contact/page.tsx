import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Phoenix Architectural & Interior Photography",
  description: "Get in touch for architectural, interior design, or luxury real estate photography in Phoenix, Scottsdale, and Paradise Valley. Quick quotes and flexible scheduling.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column - info */}
            <div>
              <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Let's Talk About
                <br />
                <span className="text-zinc-400">Your Project</span>
              </h1>
              <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
                Whether you're ready to book or just exploring options, I'd love to hear 
                about your project. Quick responses, no pressure — just helpful advice.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Email</h3>
                  <a href="mailto:hello@example.com" className="mt-2 text-lg text-white hover:text-amber-500 transition-colors">
                    hello@example.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Phone</h3>
                  <a href="tel:+16025551234" className="mt-2 text-lg text-white hover:text-amber-500 transition-colors">
                    (602) 555-1234
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Location</h3>
                  <p className="mt-2 text-lg text-zinc-300">Phoenix, Arizona</p>
                  <p className="text-zinc-500">Serving the entire Valley</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <h3 className="font-semibold">Typical Response Time</h3>
                <p className="mt-2 text-zinc-400 text-sm">
                  I respond to most inquiries within a few hours during business days. 
                  For urgent requests, call or text directly.
                </p>
              </div>
            </div>

            {/* Right column - form */}
            <div>
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone <span className="text-zinc-500">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="(602) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                    Type of Project
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="architectural">Architectural Photography</option>
                    <option value="interior">Interior Design Photography</option>
                    <option value="real-estate">Luxury Real Estate</option>
                    <option value="commercial">Commercial / Hospitality</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-zinc-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">When do you need the shoot?</option>
                    <option value="asap">ASAP / Rush</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">Within a month</option>
                    <option value="flexible">Flexible / Planning ahead</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Tell Me About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="What are you photographing? Location? Any specific requirements?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-zinc-500 text-center">
                  I'll respond within a few hours with availability and a quote estimate.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
