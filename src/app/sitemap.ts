import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ["", "weekly", 1],
    ["/work", "weekly", 0.9],
    ["/work/enterprise-ai-support-agent", "monthly", 0.8],
    ["/work/u-app", "monthly", 0.65],
    ["/services", "monthly", 0.9],
    ["/lab", "weekly", 0.75],
    ["/engineering", "weekly", 0.75],
    ["/engineering/ai-agents-production", "monthly", 0.7],
    ["/engineering/authentication-is-not-authorization", "monthly", 0.7],
    ["/engineering/microservices-complexity", "monthly", 0.7],
    ["/about", "monthly", 0.7],
    ["/start-project", "monthly", 0.9]
  ] as const;

  return routes.map(([path, changeFrequency, priority]) => ({
    url: `https://pandadigital.dev${path}`,
    changeFrequency,
    priority
  }));
}
