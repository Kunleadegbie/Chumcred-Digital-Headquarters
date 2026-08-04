import { intelligenceArticles as publishedArticles } from "@/data/publishedIntelligenceArticlesV5";
import type { PublishedIntelligenceArticle } from "@/data/publishedIntelligenceArticlesBase";

const articleEight: PublishedIntelligenceArticle = {
  slug: "intelligence-leadership",
  series: "The Intelligence Economy Series",
  articleNumber: 8,
  category: "Intelligence Leadership",
  title:
    "Intelligence Leadership™: Leading in an Age Where Intelligence Is the Greatest Competitive Advantage",
  subtitle:
    "A leadership model for the Intelligence Economy—built on continuous learning, strategic thinking, better decisions, empowered people, and responsible innovation.",
  excerpt:
    "Every economic era demands a different kind of leadership. The Intelligence Economy requires leaders who can combine people, knowledge, data, and Artificial Intelligence to improve decisions, strengthen organisations, and create lasting value.",
  publishedAt: "2026-08-04",
  readingTime: "6 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Leadership",
    "Leadership",
    "Artificial Intelligence",
    "Future of Work",
    "Innovation",
    "Human Intelligence",
    "Decision Intelligence",
    "Responsible AI",
    "Intelligence Capital",
    "TIEN",
  ],
  relatedFrameworks: [
    "Intelligence Leadership™",
    "Intelligence Capital Framework™",
    "The Intelligence Enterprise™",
    "Decision Intelligence™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7489973786251878400?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "The future will not be led by those who know the most, but by those who learn, adapt, and make better decisions the fastest.",
    },
    {
      heading: "Every economic era demands a different kind of leadership",
      paragraphs: [
        "Every economic era demands a different kind of leadership.",
        "The Industrial Economy rewarded leaders who optimised production.",
        "The Information Economy rewarded leaders who managed knowledge.",
        "The Intelligence Economy requires something different.",
        "It requires Intelligence Leadership™.",
      ],
    },
    {
      heading: "What Intelligence Leadership means",
      paragraphs: [
        "Intelligence Leadership is not about having all the answers.",
        "It is about creating an environment where people, knowledge, and Artificial Intelligence work together to produce better decisions and better outcomes.",
        "An Intelligence Leader demonstrates five essential qualities.",
      ],
    },
    {
      heading: "1. Learns Continuously",
      paragraphs: [
        "Great leaders never stop learning.",
        "They remain curious, embrace new ideas, and constantly develop their capabilities.",
      ],
    },
    {
      heading: "2. Thinks Strategically",
      paragraphs: [
        "They look beyond today’s challenges to anticipate tomorrow’s opportunities and risks.",
        "They see patterns before others see problems.",
      ],
    },
    {
      heading: "3. Makes Better Decisions",
      paragraphs: [
        "They combine data, experience, human judgement, and AI-powered insights to make informed and timely decisions.",
      ],
    },
    {
      heading: "4. Empowers People",
      paragraphs: [
        "They recognise that Intelligence Capital grows when people are trusted, developed, and encouraged to contribute their ideas.",
        "Leadership is about multiplying intelligence—not controlling it.",
      ],
    },
    {
      heading: "5. Leads Responsible Innovation",
      paragraphs: [
        "They encourage experimentation while ensuring technology is used ethically, responsibly, and for long-term value creation.",
      ],
    },
    {
      heading: "The new measure of leadership",
      paragraphs: [
        "In the Intelligence Economy, leadership is no longer measured only by authority or experience.",
        "It is measured by the ability to learn faster, adapt quicker, make better decisions, and help others succeed.",
        "As Artificial Intelligence becomes available to every organisation, the true differentiator will not be the technology itself.",
        "It will be the quality of leadership guiding its use.",
      ],
    },
    {
      quote:
        "Technology may transform business. Intelligence Leadership transforms organisations.",
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 8 of The Intelligence Economy Series.",
        "In Article 9, we will explore The Intelligence Workforce™—how organisations can prepare people to thrive in an AI-powered future through continuous learning, reskilling, and human-AI collaboration.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 8),
  articleEight,
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
