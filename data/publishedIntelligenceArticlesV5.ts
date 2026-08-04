import { intelligenceArticles as publishedArticles } from "@/data/publishedIntelligenceArticlesV4";
import type { PublishedIntelligenceArticle } from "@/data/publishedIntelligenceArticlesBase";

const articleSeven: PublishedIntelligenceArticle = {
  slug: "intelligence-enterprise",
  series: "The Intelligence Economy Series",
  articleNumber: 7,
  category: "Organisational Intelligence",
  title:
    "The Intelligence Enterprise™: Building Organizations That Learn, Decide and Innovate Better",
  subtitle:
    "Technology enables transformation, but the defining advantage of an Intelligence Enterprise is its ability to embed continuous learning, better decisions, shared knowledge, and sustained innovation into everyday work.",
  excerpt:
    "An Intelligence Enterprise is not defined by how much technology it owns, but by how effectively it learns, decides, shares knowledge, collaborates, and turns intelligence into better outcomes.",
  publishedAt: "2026-08-03",
  readingTime: "6 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Enterprise",
    "Intelligence Capital",
    "Organisational Intelligence",
    "Artificial Intelligence",
    "Leadership",
    "Innovation",
    "Future of Work",
    "Digital Transformation",
    "Knowledge Sharing",
    "Decision Intelligence",
    "TIEN",
  ],
  relatedFrameworks: [
    "The Intelligence Enterprise™",
    "Intelligence Capital Framework™",
    "The Five Pillars of Intelligence Capital™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7488488719205969920?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "The organizations that will lead the future are not those with the most technology—they are those with the greatest intelligence.",
    },
    {
      heading: "Why technology alone does not create an intelligent organisation",
      paragraphs: [
        "For years, organisations have pursued digital transformation, investing in cloud computing, automation, analytics, and Artificial Intelligence.",
        "Yet many still struggle with slow decision-making, fragmented knowledge, poor collaboration, and limited innovation.",
        "Why? Because technology alone does not create an intelligent organisation.",
        "An Intelligence Enterprise™ intentionally embeds intelligence into how people work, decisions are made, knowledge is shared, and innovation is sustained. Technology enables this transformation—but it does not define it.",
      ],
    },
    {
      heading: "1. It Learns Continuously",
      paragraphs: [
        "Learning becomes part of everyday work.",
        "Employees and leaders continuously develop new skills, adapt to change, and improve their capabilities.",
      ],
    },
    {
      heading: "2. It Makes Better Decisions",
      paragraphs: [
        "It combines data, experience, critical thinking, and AI-powered insights to improve the quality—not just the speed—of decision-making.",
      ],
    },
    {
      heading: "3. It Shares Knowledge Freely",
      paragraphs: [
        "Knowledge is captured, shared, and applied across the organisation so that collective intelligence becomes a competitive advantage.",
      ],
    },
    {
      heading: "4. It Innovates Continuously",
      paragraphs: [
        "Innovation is everyone’s responsibility.",
        "Employees are encouraged to solve problems, improve processes, and contribute new ideas every day.",
      ],
    },
    {
      heading: "5. It Places Intelligence at the Centre of Strategy",
      paragraphs: [
        "Every major decision is guided by one question: ‘Will this improve our Intelligence Capital?’",
        "Organisations that consistently answer ‘yes’ become more resilient, adaptive, and competitive.",
      ],
    },
    {
      heading: "The real differentiator in an AI-enabled world",
      paragraphs: [
        "The Intelligence Enterprise is not defined by the technology it owns, but by its ability to learn faster, decide better, collaborate effectively, and innovate continuously.",
        "As AI becomes accessible to every organisation, technology alone will no longer provide sustainable competitive advantage.",
        "The real differentiator will be an organisation’s ability to transform intelligence into better outcomes.",
        "That is the hallmark of an Intelligence Enterprise™.",
      ],
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 7 of The Intelligence Economy Series.",
        "In Article 8, I will introduce Intelligence Leadership™—the mindset and capabilities leaders need to thrive in the Intelligence Economy.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 7),
  articleSeven,
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
