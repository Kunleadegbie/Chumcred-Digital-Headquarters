import { intelligenceArticles as publishedArticles } from "@/data/publishedIntelligenceArticlesV7";
import type { PublishedIntelligenceArticle } from "@/data/publishedIntelligenceArticlesBase";

const articleTen: PublishedIntelligenceArticle = {
  slug: "intelligence-transformation-framework",
  series: "The Intelligence Economy Series",
  articleNumber: 10,
  category: "Intelligence Transformation",
  title:
    "The Intelligence Transformation Framework™: A Roadmap for Thriving in the Intelligence Economy",
  subtitle:
    "A four-stage roadmap for helping organisations progress from traditional operations to intelligence-driven enterprises where learning, decisions, innovation, and value creation are deliberately strengthened.",
  excerpt:
    "The Intelligence Transformation Framework™ maps the journey from a Traditional Enterprise to an Intelligence-Driven Enterprise, showing how organisations can embed Intelligence Capital into strategy, operations, decisions, and innovation.",
  publishedAt: "2026-08-05",
  readingTime: "7 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: true,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Transformation Framework",
    "Intelligence Capital",
    "Intelligence Enterprise",
    "Artificial Intelligence",
    "Digital Transformation",
    "Organisational Transformation",
    "Future of Work",
    "Leadership",
    "Innovation",
    "Enterprise Intelligence",
    "TIEN",
  ],
  relatedFrameworks: [
    "Intelligence Transformation Framework™",
    "Intelligence Capital Framework™",
    "The Five Pillars of Intelligence Capital™",
    "The Intelligence Enterprise™",
    "Intelligence Leadership™",
    "The Intelligence Workforce™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7490651616220676096?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "The organisations that succeed tomorrow will not simply adopt Artificial Intelligence—they will transform how they think, learn, decide, and create value.",
    },
    {
      heading: "From understanding the Intelligence Economy to transforming for it",
      paragraphs: [
        "Over the past nine articles, we have explored the foundations of the Intelligence Economy.",
        "We have established that intelligence is becoming the world’s new competitive advantage.",
        "Intelligence Capital is the defining strategic asset of this new era.",
        "Organisations must intentionally develop the five pillars of Intelligence Capital.",
        "Leaders, workforces, and enterprises must evolve to thrive in an AI-powered world.",
        "The next question is no longer why organisations should change. It is how.",
        "I believe that journey can be understood through The Intelligence Transformation Framework™.",
      ],
    },
    {
      heading: "The four stages of Intelligence Transformation",
      paragraphs: [
        "The framework consists of four stages that describe how organisations progress from traditional operating models to intelligence-driven enterprises.",
      ],
    },
    {
      heading: "Stage 1 – Traditional Enterprise",
      paragraphs: [
        "Organisations rely on manual processes, experience-based decisions, and fragmented knowledge.",
        "Technology supports operations but does not drive strategy.",
      ],
    },
    {
      heading: "Stage 2 – Digital Enterprise",
      paragraphs: [
        "Digital tools improve efficiency through automation, analytics, and connected systems.",
        "Operations become faster, but intelligence is still developing.",
      ],
    },
    {
      heading: "Stage 3 – Intelligent Enterprise",
      paragraphs: [
        "Organisations begin combining Human Intelligence with Artificial Intelligence.",
        "Knowledge is shared, decisions improve, innovation accelerates, and learning becomes continuous.",
      ],
    },
    {
      heading: "Stage 4 – Intelligence-Driven Enterprise",
      paragraphs: [
        "Intelligence becomes part of the organisation’s DNA.",
        "Every major decision, process, innovation, and strategy is guided by the deliberate development of Intelligence Capital.",
        "These organisations are more adaptive, resilient, innovative, and prepared for continuous change.",
      ],
    },
    {
      heading: "Why this transformation matters",
      paragraphs: [
        "The Intelligence Economy is not simply another phase of digital transformation.",
        "It represents a new way of creating value.",
        "Organisations that embrace this transformation today will define tomorrow’s industries.",
        "Those that delay may find themselves competing with organisations that learn faster, decide better, and innovate more consistently.",
      ],
    },
    {
      quote:
        "The future belongs to organisations that transform intelligence into their greatest strategic advantage.",
    },
    {
      heading: "The question is whether your organisation will lead",
      paragraphs: [
        "The Intelligence Economy has already begun.",
        "The question is no longer whether your organisation will participate.",
        "The question is whether it will lead.",
      ],
    },
    {
      heading: "Season 1 Complete",
      paragraphs: [
        "Thank you for following The Intelligence Economy Series.",
        "Together, we have explored:",
      ],
      bullets: [
        "The Intelligence Economy",
        "Intelligence Capital",
        "The 5 Pillars of Intelligence Capital™",
        "Building and Measuring Intelligence Capital",
        "The Intelligence Enterprise™",
        "Intelligence Leadership™",
        "The Intelligence Workforce™",
        "The Intelligence Transformation Framework™",
      ],
    },
    {
      heading: "The journey continues",
      paragraphs: [
        "This is only the beginning.",
        "In the coming weeks, I will publish The Intelligence Economy Position Paper, bringing these ideas together into a practical framework for business leaders, policymakers, educators, and organisations preparing for the future.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 10),
  articleTen,
].sort((a, b) => (a.articleNumber ?? 999) - (b.articleNumber ?? 999));

export function getArticleBySlug(slug: string) {
  return intelligenceArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  article: PublishedIntelligenceArticle,
  limit = 3,
) {
  return intelligenceArticles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        (candidate.category === article.category ||
          candidate.series === article.series),
    )
    .slice(0, limit);
}
