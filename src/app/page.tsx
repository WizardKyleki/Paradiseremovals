import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuoteWizard from "@/components/QuoteWizard";
import Services from "@/components/Services";
import WaveDivider from "@/components/WaveDivider";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TruckAnimation from "@/components/TruckAnimation";

const mainSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Paradise Removals",
  description:
    "Gold Coast's trusted furniture removalists. Professional, affordable, and stress-free removals across the Gold Coast.",
  url: "https://www.paradiseremovals.com.au",
  telephone: "+61434428785",
  email: "info@paradiseremovals.com.au",
  image: "https://www.paradiseremovals.com.au/images/logo.jpg",
  logo: "https://www.paradiseremovals.com.au/images/logo.jpg",
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.9506,
    longitude: 153.3994,
  },
  areaServed: [
    { "@type": "City", name: "Gold Coast" },
    { "@type": "Place", name: "Arundel" },
    { "@type": "Place", name: "Southport" },
    { "@type": "Place", name: "Helensvale" },
    { "@type": "Place", name: "Coomera" },
    { "@type": "Place", name: "Labrador" },
    { "@type": "Place", name: "Parkwood" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Removal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Removals",
          description:
            "Door-to-door furniture removals across the Gold Coast.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interstate Removals",
          description:
            "Safe, reliable interstate removals with tracking and insurance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office Relocations",
          description:
            "Efficient commercial moving to minimise business downtime.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Packing Services",
          description:
            "Expert packing with premium materials for all belongings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Assembly",
          description:
            "Disassembly and reassembly of beds, desks, wardrobes and more.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storage Solutions",
          description:
            "Secure, climate-monitored storage facilities between moves.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/paradiseremovalsau",
    "https://www.instagram.com/paradiseremovals",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Paradise Removals",
  url: "https://www.paradiseremovals.com.au",
  description:
    "Gold Coast's trusted furniture removalists. Professional, affordable, and stress-free removals.",
  publisher: {
    "@type": "Organization",
    name: "Paradise Removals",
    logo: {
      "@type": "ImageObject",
      url: "https://www.paradiseremovals.com.au/images/logo.jpg",
    },
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navbar />
      <Hero />
      <QuoteWizard />

      <TruckAnimation />

      <Services />

      <WaveDivider fillColor="#111FA2" bgColor="white" variant="wave2" />
      <WhyChooseUs />

      <TruckAnimation reverse bgColor="bg-sand-light" />
      <ServiceAreas />

      <WaveDivider fillColor="white" bgColor="#f5f8ff" variant="wave3" />
      <About />

      <WaveDivider fillColor="#070e4a" bgColor="white" variant="wave2" />
      <Testimonials />

      <WaveDivider fillColor="#050a30" bgColor="#070e4a" variant="wave2" />
      <Footer />

      <BackToTop />
    </main>
  );
}
