import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Design Photography Phoenix | Portfolio Photos for Designers",
  description: "Professional interior design photography in Phoenix and Scottsdale. Portfolio-ready images for interior designers — perfect for your website, Instagram, and publication submissions.",
  keywords: "interior design photographer phoenix, interior photographer scottsdale, design portfolio photographer arizona, interior design photography",
};

const includes = [
  "Pre-shoot planning call to understand your design vision",
  "Professional lighting to capture textures and materials",
  "Multiple angles of each space",
  "Detail shots of custom elements and finishes",
  "Twilight/dusk shots (when applicable)",
  "Full post-processing and color correction",
  "High-resolution files for print and web",
  "Quick turnaround (typically 5-7 business days)",
];

const useCases = [
  {
    title: "Portfolio & Website",
    description: "High-resolution images optimized for your website, Houzz, and portfolio presentations.",
  },
  {
    title: "Social Media",
    description: "Scroll-stopping images for Instagram, Pinterest, and LinkedIn that showcase your aesthetic.",
  },
  {
    title: "Publications",
    description: "Magazine-ready quality for submissions to Phoenix Home & Garden, LUXE, Architectural Digest, and more.",
  },
  {
    title: "Awards & Competitions",
    description: "Professional documentation for ASID, IIDA, and other design award submissions.",
  },
];

const faqs = [
  {
    q: "How should I prepare the space for a shoot?",
    a: "I'll send you a detailed prep guide, but generally: declutter surfaces, remove personal items, and ensure all bulbs are working. I'll handle the rest — adjusting furniture, styling vignettes, and optimizing the space for camera.",
  },
  {
    q: "Do you work directly with my clients?",
    a: "Absolutely. I can coordinate directly with homeowners or work through you — whatever makes the project smoother. I'm professional and discreet.",
  },
  {
    q: "How long does a typical shoot take?",
    a: "A standard residential interior shoot takes 2-4 hours depending on square footage and complexity. Larger projects or multiple spaces may require a full day.",
  },
  {
    q: "Can I use the photos anywhere?",
    a: "Yes — you receive full commercial usage rights. Use them on your website, social media, in publications, for awards, and in client presentations.",
  },
  {
    q: "What about staging? Should I hire a stager?",
    a: "If the space is already designed and furnished, usually no additional staging is needed. I can advise during our pre-shoot call if I think anything would help.",
  },
  {
    q: "Do you photograph commercial interiors too?",
    a: "Yes — offices, retail spaces, restaurants, hospitality, and more. The approach is similar, with attention to brand and functionality.",
  },
];

export default function InteriorDesignPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-medium tracking-widest uppercase text-sm mb-4">
              For Interior Designers
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Interior Design
              <br />
              <span className="text-zinc-400">Photography</span>
            </h1>
            <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
              Your designs deserve images that capture every detail, texture, and lighting decision. 
              Portfolio-ready photography that wins you more clients and gets you published.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium bg-amber-500 text-zinc-950 rounded-full hover:bg-amber-400 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-zinc-700 text-white rounded-full hover:bg-zinc-800 transition-colors"
              >
                See Interior Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-600">
            <span>Featured interior image</span>
          </div>
        </div>
      </section>

      {/* Why designers need great photos */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Portfolio Is Your Best Salesperson
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                Potential clients browse your website for 30 seconds before deciding if you're "the one." 
                Those first impressions are made entirely by your images.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                iPhone photos don't capture what makes your designs special — the way light falls on 
                a custom millwork detail, the texture of that hand-glazed tile, the carefully 
                considered color palette. That's what I capture.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Great photography doesn't just document your work — it elevates it. It's the 
                difference between "nice room" and "I need to hire this designer."
              </p>
            </div>
            <div className="aspect-[4/3] bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600">
              <span>Before/after or detail shot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Where You'll Use These Images
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
              >
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-zinc-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
              <p className="mt-4 text-zinc-400">
                Every shoot is tailored to your project, but here's what you can expect:
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-1">✓</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-800 pb-8">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Capture Your Next Project</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Whether it's a single room refresh or a full home renovation, I'd love to hear about your project 
            and help you plan the perfect shoot.
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
