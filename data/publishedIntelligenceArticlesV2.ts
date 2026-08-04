import {
  intelligenceArticles as publishedArticles,
  type PublishedIntelligenceArticle,
} from "@/data/publishedIntelligenceArticlesBase";

const articleFour: PublishedIntelligenceArticle = {
  slug: "five-pillars-of-intelligence-capital",
  series: "The Intelligence Economy Series",
  articleNumber: 4,
  category: "Intelligence Capital",
  title: "The 5 Pillars of Intelligence Capital™",
  subtitle:
    "A practical framework for developing the human, artificial, knowledge, decision, and innovation capabilities that create sustainable advantage in the Intelligence Economy.",
  excerpt:
    "Intelligence Capital is built through five reinforcing pillars: Human Intelligence, Artificial Intelligence, Knowledge Intelligence, Decision Intelligence, and Innovation Intelligence.",
  publishedAt: "2026-07-28",
  readingTime: "6 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Capital",
    "Five Pillars of Intelligence Capital",
    "Human Intelligence",
    "Artificial Intelligence",
    "Knowledge Intelligence",
    "Decision Intelligence",
    "Innovation Intelligence",
    "Leadership",
    "Innovation",
    "Future of Work",
    "Digital Transformation",
    "TIEN",
  ],
  relatedFrameworks: [
    "The Five Pillars of Intelligence Capital™",
    "Intelligence Capital Framework™",
    "Intelligence Value Chain™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7484871980215783424?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "Technology may power the Intelligence Economy, but Intelligence Capital is what determines who succeeds in it.",
    },
    {
      heading: "A practical framework for building Intelligence Capital",
      paragraphs: [
        "In my previous article, I introduced Intelligence Capital as the defining strategic asset of the Intelligence Economy.",
        "The next question is obvious: How do individuals and organisations build Intelligence Capital?",
        "I believe the answer lies in what I call The 5 Pillars of Intelligence Capital™.",
        "Together, these pillars provide a practical framework for building sustainable competitive advantage.",
      ],
    },
    {
      heading: "1. Human Intelligence",
      paragraphs: [
        "Everything begins with people.",
        "Critical thinking, creativity, judgement, emotional intelligence, leadership, and problem-solving form the foundation of intelligent performance.",
        "Technology can enhance these capabilities, but it cannot replace them. Human Intelligence remains the foundation of every intelligent organisation.",
      ],
    },
    {
      heading: "2. Artificial Intelligence",
      paragraphs: [
        "Artificial Intelligence is the amplifier.",
        "It helps people work faster, analyse deeper, automate repetitive tasks, and uncover insights hidden within vast amounts of information.",
        "The objective is not to replace people, but to augment human capability.",
      ],
    },
    {
      heading: "3. Knowledge Intelligence",
      paragraphs: [
        "Knowledge has little value if it remains trapped in documents, databases, or people’s minds.",
        "Knowledge Intelligence is the ability to capture, organise, share, and apply knowledge so it becomes accessible and actionable.",
        "Organisations that learn faster gain a lasting advantage.",
      ],
    },
    {
      heading: "4. Decision Intelligence",
      paragraphs: [
        "Every strategy, investment, innovation, and customer experience begins with a decision.",
        "Decision Intelligence combines data, experience, context, human judgement, and AI-driven insights to make better decisions.",
        "Better decisions create better outcomes.",
      ],
    },
    {
      heading: "5. Innovation Intelligence",
      paragraphs: [
        "The ultimate purpose of intelligence is value creation.",
        "Innovation Intelligence transforms ideas into new products, improved services, smarter processes, and sustainable growth.",
        "It ensures intelligence produces measurable impact.",
      ],
    },
    {
      heading: "Five pillars working as one system",
      paragraphs: [
        "These five pillars reinforce one another.",
        "When organisations develop all five, they build Intelligence Capital—enabling them to adapt faster, innovate continuously, and compete more effectively.",
        "I believe organisations that intentionally invest in these five pillars today will become the leaders of tomorrow’s Intelligence Economy.",
      ],
    },
    {
      quote:
        "The future will not belong to those with the most technology. It will belong to those with the greatest Intelligence Capital.",
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 4 of The Intelligence Economy Series.",
        "In Article 5, we will explore how organisations can intentionally build Intelligence Capital and turn these five pillars into measurable capability.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 4),
  articleFour,
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
