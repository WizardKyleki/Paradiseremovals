import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import PackingContent from "@/components/PackingContent";

export const metadata: Metadata = {
  title: "Packing Services Gold Coast | Paradise Removals - Professional Packing",
  description:
    "Professional packing services on the Gold Coast. Expert packers, premium materials, fragile item specialists. Full or partial packing for homes & offices. Get a free quote!",
  keywords:
    "packing services gold coast, professional packers, furniture packing, fragile item packing, moving packing service, gold coast removalists packing",
  openGraph: {
    title: "Packing Services | Paradise Removals Gold Coast",
    description:
      "Expert packing services for your Gold Coast move. Premium materials, careful handling, and full insurance coverage.",
    type: "website",
    locale: "en_AU",
  },
  alternates: {
    canonical: "https://www.paradiseremovals.com.au/services/packing",
  },
};

const packingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Professional Packing Services",
  description:
    "Expert packing services for residential and commercial moves across the Gold Coast. Premium materials, fragile item specialists, full insurance coverage.",
  provider: {
    "@type": "MovingCompany",
    name: "Paradise Removals",
    url: "https://www.paradiseremovals.com.au",
    telephone: "+61434428785",
    areaServed: { "@type": "City", name: "Gold Coast" },
  },
  areaServed: {
    "@type": "City",
    name: "Gold Coast",
    containedInPlace: { "@type": "State", name: "Queensland" },
  },
  serviceType: "Packing Service",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "AUD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.paradiseremovals.com.au",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Packing Services",
      item: "https://www.paradiseremovals.com.au/services/packing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What packing materials do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use premium packing materials including double-walled cardboard boxes, acid-free tissue paper, bubble wrap, foam padding, wardrobe boxes with hanging rails, and heavy-duty packing tape. Fragile items receive additional custom protection.",
      },
    },
    {
      "@type": "Question",
      name: "Can you pack just fragile or valuable items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our partial packing service lets you handle the straightforward items while our specialists take care of glassware, artwork, antiques, electronics, and other delicate belongings that need professional handling.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book packing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking at least one week ahead, especially for full-home packing. However, we accommodate shorter notice requests when availability allows. End-of-month periods are busiest, so earlier is always better.",
      },
    },
    {
      "@type": "Question",
      name: "Do you also unpack at the destination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our unpacking service includes placing items in designated rooms, unwrapping furniture and fragile items, setting up beds and key furniture, and removing all packing materials so you can settle in immediately.",
      },
    },
  ],
};

export default function PackingPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <PackingContent />
      <WaveDivider fillColor="#050a30" bgColor="white" variant="wave2" />
      <Footer />
      <BackToTop />
    </main>
  );
}
