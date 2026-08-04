import {
  intelligenceArticles as existingArticles,
  type IntelligenceArticle,
} from "@/data/intelligenceArticles";

export type PublishedIntelligenceArticle = IntelligenceArticle & {
  sourceUrl?: string;
};

const articleOne: PublishedIntelligenceArticle = {
  slug: "rise-of-the-intelligence-economy",
  series: "The Intelligence Economy Series",
  articleNumber: 1,
  category: "Intelligence Economy",
  title:
    "The Rise of the Intelligence Economy: Why Artificial Intelligence Is Redefining Work, Business and Human Potential",
  subtitle:
    "A new economic era is emerging—one in which the ability to combine human intelligence, artificial intelligence, learning, and innovation will increasingly determine how individuals, organisations, and nations create value.",
  excerpt:
    "The world is moving beyond the Information Economy into a new era where competitive advantage belongs to those who learn faster, think better, innovate continuously, and combine human intelligence with artificial intelligence.",
  publishedAt: "2026-07-21",
  readingTime: "5 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: true,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Capital",
    "Artificial Intelligence",
    "Future of Work",
    "Digital Transformation",
    "Leadership",
    "Innovation",
    "Business Intelligence",
    "Enterprise AI",
    "TIEN",
    "Technology",
    "Learning",
    "Thought Leadership",
  ],
  relatedFrameworks: [
    "Intelligence Capital Framework™",
    "The Five Pillars of Intelligence Capital™",
    "Intelligence Value Chain™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7483390992013000704?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      paragraphs: [
        "For more than two centuries, the world has experienced profound economic transformations.",
      ],
    },
    {
      heading: "The economic eras that shaped value creation",
      paragraphs: [
        "The Agricultural Economy rewarded those who cultivated the land.",
        "The Industrial Economy rewarded those who built factories and scaled production.",
        "The Information Economy rewarded those who could create, process, and distribute knowledge.",
        "Today, I believe we are witnessing the birth of another era—the Intelligence Economy.",
      ],
    },
    {
      heading: "More than Artificial Intelligence",
      paragraphs: [
        "This is not simply about Artificial Intelligence.",
        "It is about a fundamental shift in how individuals, businesses, institutions, and nations create value.",
        "In the Intelligence Economy, competitive advantage will increasingly belong to those who can learn faster, think better, innovate continuously, make smarter decisions, and effectively combine human intelligence with artificial intelligence.",
      ],
    },
    {
      heading: "The transformation is already happening",
      paragraphs: [
        "Artificial Intelligence is reshaping industries.",
        "Automation is redefining jobs.",
        "Data is changing how decisions are made.",
        "Digital transformation has become a business imperative.",
        "The workplace of tomorrow will reward adaptability more than routine, intelligence more than information, and innovation more than repetition.",
      ],
    },
    {
      quote: "Are we preparing ourselves for the Intelligence Economy?",
    },
    {
      heading: "A new mindset for a new era",
      paragraphs: [
        "The question is no longer whether change is coming.",
        "I believe this new era demands more than adopting new technologies. It requires developing a new mindset—one that sees intelligence as the world’s most valuable strategic resource.",
        "That belief is what inspired the creation of The Intelligence Economy Network (TIEN)—a global community dedicated to exploring how intelligence, technology, leadership, and innovation can help individuals and organisations thrive in the years ahead.",
      ],
    },
    {
      heading: "The Intelligence Economy has already begun",
      paragraphs: [
        "The Intelligence Economy is not a prediction for the future.",
        "It has already begun.",
        "Those who understand it early will help shape it.",
        "Those who ignore it risk being shaped by it.",
      ],
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 1 of The Intelligence Economy Series.",
        "In Article 2, we will explore why information is no longer enough and why intelligence is becoming the world’s new competitive advantage.",
        "Join The Intelligence Economy Network (TIEN) to continue the journey.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  articleOne,
  ...existingArticles.filter((article) => article.articleNumber !== 1),
];

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
