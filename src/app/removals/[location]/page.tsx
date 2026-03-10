import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug, getAllLocationSlugs } from "@/data/locations";
import LocationPage from "@/components/LocationPage";

interface Props {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: `removalists ${location.name}, furniture removals ${location.name}, movers ${location.name}, ${location.name} removalists gold coast, moving company ${location.name} QLD ${location.postcode}`,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
      locale: "en_AU",
      url: `https://www.paradiseremovals.com.au/removals/${location.slug}`,
    },
    alternates: {
      canonical: `https://www.paradiseremovals.com.au/removals/${location.slug}`,
    },
  };
}

export default async function LocationLandingPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: `Paradise Removals - ${location.name}`,
    description: location.metaDescription,
    url: `https://www.paradiseremovals.com.au/removals/${location.slug}`,
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "QLD",
      postalCode: location.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Gold Coast",
        "@id": "https://www.wikidata.org/wiki/Q140075",
      },
      {
        "@type": "Place",
        name: location.name,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.lat,
          longitude: location.lng,
        },
      },
      ...location.nearbySuburbs.map((suburb) => ({
        "@type": "Place" as const,
        name: suburb,
      })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: location.testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: location.testimonial.rating.toString(),
        bestRating: "5",
      },
      reviewBody: location.testimonial.text,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Removal Services in ${location.name}`,
      itemListElement: location.services.map((service, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: {
            "@type": "Place",
            name: location.name,
          },
          provider: {
            "@type": "MovingCompany",
            name: "Paradise Removals",
          },
        },
        position: i + 1,
      })),
    },
    sameAs: [
      "https://www.facebook.com/paradiseremovalsau",
      "https://www.instagram.com/paradiseremovals",
    ],
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
        name: "Removals",
        item: "https://www.paradiseremovals.com.au/#areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.name} Removalists`,
        item: `https://www.paradiseremovals.com.au/removals/${location.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: location.metaTitle,
    description: location.metaDescription,
    url: `https://www.paradiseremovals.com.au/removals/${location.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Paradise Removals",
      url: "https://www.paradiseremovals.com.au",
    },
    about: {
      "@type": "Place",
      name: location.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.lat,
        longitude: location.lng,
      },
    },
    breadcrumb: {
      "@id": `https://www.paradiseremovals.com.au/removals/${location.slug}#breadcrumb`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LocationPage location={location} />
    </>
  );
}
