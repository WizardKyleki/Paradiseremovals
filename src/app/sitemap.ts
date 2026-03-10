import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";

const BASE_URL = "https://www.paradiseremovals.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = locations.map((location) => ({
    url: `${BASE_URL}/removals/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/packing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locationPages,
  ];
}
