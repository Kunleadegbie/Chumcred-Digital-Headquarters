import type { MetadataRoute } from "next";
import { intelligenceArticles } from "@/data/publishedIntelligenceArticles";
import { frameworkPublications, researchPublications } from "@/data/intelligencePublications";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://company.chumcred.com";
  const staticRoutes = [
    "",
    "/company",
    "/leadership",
    "/solutions",
    "/platforms",
    "/portfolio",
    "/insights",
    "/academy",
    "/partnerships",
    "/contact",
    "/intelligence-economy",
    "/intelligence-economy/intelligence-capital",
    "/intelligence-economy/five-pillars",
    "/intelligence-economy/frameworks",
    "/intelligence-economy/research",
    "/intelligence-economy/articles",
    "/intelligence-economy/resources",
    "/intelligence-economy/executive-insights",
    "/intelligence-economy/tien",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route.includes("articles") ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/intelligence-economy" ? 0.95 : 0.75,
    })),
    ...frameworkPublications.map((framework) => ({
      url: `${baseUrl}/intelligence-economy/frameworks/${framework.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...researchPublications.map((publication) => ({
      url: `${baseUrl}/intelligence-economy/research/${publication.slug}`,
      lastModified: new Date(`${publication.year}-01-01`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...intelligenceArticles.map((article) => ({
      url: `${baseUrl}/intelligence-economy/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: article.featured ? 0.85 : 0.75,
    })),
  ];
}
