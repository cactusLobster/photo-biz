import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy Haik | Phoenix Architectural & Interior Photography",
  description: "High-end architectural, interior design, and luxury real estate photography in Phoenix, Scottsdale, and Paradise Valley. Serving architects, designers, and developers.",
  keywords: "architectural photographer phoenix, interior design photographer scottsdale, luxury real estate photography arizona, jeremy haik photographer",
  openGraph: {
    title: "Jeremy Haik | Phoenix Architectural & Interior Photography",
    description: "High-end architectural, interior design, and luxury real estate photography in Phoenix, Scottsdale, and Paradise Valley.",
    type: "website",
    locale: "en_US",
  },
};

// JSON-LD Schema for LocalBusiness + Photographer
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  name: "Jeremy Haik Photography",
  description: "High-end architectural, interior design, and luxury real estate photography in Phoenix, Scottsdale, and Paradise Valley.",
  url: "https://jeremyhaik.com",
  telephone: "(602) 555-1234",
  email: "hello@jeremyhaik.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Scottsdale" },
    { "@type": "City", name: "Paradise Valley" },
    { "@type": "City", name: "Tempe" },
    { "@type": "City", name: "Mesa" },
    { "@type": "City", name: "Chandler" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Photography",
          description: "Professional photography for residential and commercial architecture.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Design Photography",
          description: "Portfolio-ready images for interior designers.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Real Estate Photography",
          description: "High-end listing photography including twilight and drone.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
