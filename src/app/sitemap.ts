import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://pandadigital.dev", changeFrequency: "weekly", priority: 1 },
    { url: "https://pandadigital.dev/start-project", changeFrequency: "monthly", priority: 0.8 }
  ];
}
