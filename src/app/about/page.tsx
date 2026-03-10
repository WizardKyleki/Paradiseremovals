import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import BackToTop from "@/components/BackToTop";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Paradise Removals - Gold Coast's Best Local Removalists",
  description:
    "Learn why Paradise Removals is the Gold Coast's most trusted furniture removals company. Experienced crew, fully insured, affordable rates. Serving Arundel, Southport, Helensvale, Coomera, Labrador & Parkwood.",
  openGraph: {
    title: "About Paradise Removals | Gold Coast Removalists",
    description:
      "Meet the team behind Gold Coast's most trusted removals service. Professional, affordable, and stress-free furniture moves.",
    type: "website",
    locale: "en_AU",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Paradise Removals",
  description:
    "Learn about Paradise Removals — Gold Coast's trusted local furniture removalists.",
  url: "https://www.paradiseremovals.com.au/about",
  mainEntity: {
    "@type": "MovingCompany",
    name: "Paradise Removals",
    description:
      "Gold Coast's trusted furniture removalists. Professional, affordable, and stress-free removals.",
    foundingLocation: {
      "@type": "Place",
      name: "Gold Coast, Queensland, Australia",
    },
    areaServed: {
      "@type": "City",
      name: "Gold Coast",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
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
      name: "About Us",
      item: "https://www.paradiseremovals.com.au/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <AboutContent />
      <WaveDivider fillColor="#050a30" bgColor="#0a1470" variant="wave2" />
      <Footer />
      <BackToTop />
    </main>
  );
}
