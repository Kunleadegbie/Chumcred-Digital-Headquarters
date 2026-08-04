import { intelligenceArticles as publishedArticles } from "@/data/publishedIntelligenceArticlesV3";
import type { PublishedIntelligenceArticle } from "@/data/publishedIntelligenceArticlesBase";

const articleSix: PublishedIntelligenceArticle = {
  slug: "intelligence-capital-scorecard",
  series: "The Intelligence Economy Series",
  articleNumber: 6,
  category: "Intelligence Capital",
  title:
    "Measuring Intelligence Capital: Introducing the Intelligence Capital Scorecard™",
  subtitle:
    "A practical framework for assessing how effectively an organisation learns, applies AI, shares knowledge, makes decisions, and innovates in the Intelligence Economy.",
  excerpt:
    "Most organisations measure financial performance, customer satisfaction, or employee engagement, but few measure their ability to learn, think, decide, and innovate. The Intelligence Capital Scorecard™ addresses that gap.",
  publishedAt: "2026-08-01",
  readingTime: "5 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Capital",
    "Intelligence Capital Scorecard",
    "Human Intelligence",
    "Artificial Intelligence",
    "Knowledge Intelligence",
    "Decision Intelligence",
    "Innovation Intelligence",
    "Leadership",
    "Future of Work",
    "Enterprise Intelligence",
    "TIEN",
  ],
  relatedFrameworks: [
    "Intelligence Capital™",
    "The 5 Pillars of Intelligence Capital™",
    "Intelligence Capital Scorecard™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7487920039581642752?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "What gets measured gets managed. What gets managed gets improved.",
    },
    {
      heading: "The missing measure in modern organisations",
      paragraphs: [
        "In the previous article, I discussed how organisations can build Intelligence Capital.",
        "The next logical question is: How do we know whether we are making progress?",
        "Many organisations measure financial performance. Some measure customer satisfaction. Others measure employee engagement.",
        "But very few measure their ability to learn, think, decide, and innovate.",
        "I believe this is a missing piece in today’s business landscape.",
      ],
    },
    {
      heading: "Introducing the Intelligence Capital Scorecard™",
      paragraphs: [
        "That is why I propose the Intelligence Capital Scorecard™—a practical framework for assessing an organisation’s readiness for the Intelligence Economy.",
        "Rather than measuring only financial results, the scorecard evaluates five critical capabilities.",
      ],
    },
    {
      heading: "1. Human Intelligence",
      bullets: [
        "Are people continuously learning?",
        "Do they demonstrate critical thinking, creativity, and leadership?",
      ],
    },
    {
      heading: "2. Artificial Intelligence",
      bullets: [
        "Is AI being used to augment decision-making, productivity, and innovation?",
      ],
    },
    {
      heading: "3. Knowledge Intelligence",
      bullets: [
        "Is organisational knowledge captured, shared, and applied effectively?",
      ],
    },
    {
      heading: "4. Decision Intelligence",
      bullets: [
        "Are decisions timely, evidence-based, and consistently producing better outcomes?",
      ],
    },
    {
      heading: "5. Innovation Intelligence",
      bullets: [
        "Is innovation embedded in the organisation’s culture, processes, and strategy?",
      ],
    },
    {
      heading: "From digital enablement to intelligence-driven performance",
      paragraphs: [
        "An organisation that scores highly across these five dimensions is not just digitally enabled—it is intelligence-driven.",
        "The objective is not to achieve a perfect score overnight.",
        "The objective is to identify strengths, close capability gaps, and improve continuously.",
        "In the Intelligence Economy, organisations that measure and strengthen their Intelligence Capital will be better positioned to adapt, compete, and lead.",
      ],
    },
    {
      quote:
        "The future will not be won by those who simply adopt AI. It will be won by those who build the capability to use intelligence more effectively than anyone else.",
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 6 of The Intelligence Economy Series.",
        "In Article 7, we will explore The Intelligence Enterprise™—what distinguishes organisations that consistently outperform because intelligence is embedded in the way they think, decide, and innovate.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 6),
  articleSix,
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
