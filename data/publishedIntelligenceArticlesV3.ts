import {
  intelligenceArticles as publishedArticles,
  type PublishedIntelligenceArticle,
} from "@/data/publishedIntelligenceArticlesV2";

const articleFive: PublishedIntelligenceArticle = {
  slug: "building-intelligence-capital",
  series: "The Intelligence Economy Series",
  articleNumber: 5,
  category: "Intelligence Capital",
  title:
    "Building Intelligence Capital: Turning the Five Pillars into Competitive Advantage",
  subtitle:
    "A practical guide to converting the five pillars of Intelligence Capital into deliberate organisational capabilities that improve learning, decisions, innovation, and long-term performance.",
  excerpt:
    "Intelligence Capital does not grow by accident. Organisations build it through deliberate investment in people, responsible AI augmentation, knowledge sharing, decision quality, and continuous innovation.",
  publishedAt: "2026-07-30",
  readingTime: "6 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Capital",
    "Artificial Intelligence",
    "Human Intelligence",
    "Knowledge Sharing",
    "Decision Intelligence",
    "Innovation Intelligence",
    "Leadership",
    "Future of Work",
    "Organisational Capability",
    "Competitive Advantage",
    "TIEN",
  ],
  relatedFrameworks: [
    "The Five Pillars of Intelligence Capital™",
    "Intelligence Capital Framework™",
    "Intelligence Capital Scorecard™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7486002846744735744?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "Intelligence Capital does not grow by accident. It grows by design.",
    },
    {
      heading: "From understanding the pillars to building capability",
      paragraphs: [
        "In my previous article, I introduced The 5 Pillars of Intelligence Capital™ as the foundation for succeeding in the Intelligence Economy.",
        "Understanding the pillars is important.",
        "Building them is transformational.",
        "Like financial capital, Intelligence Capital requires deliberate investment, continuous development, and effective management.",
        "So how can organisations begin? I believe the journey starts with five practical commitments.",
      ],
    },
    {
      heading: "1. Invest in People Before Technology",
      paragraphs: [
        "Technology is only as effective as the people who use it.",
        "Organisations must continuously develop critical thinking, creativity, leadership, emotional intelligence, and problem-solving skills.",
        "Human Intelligence remains the foundation of every intelligent enterprise.",
      ],
    },
    {
      heading: "2. Use AI to Augment, Not Replace",
      paragraphs: [
        "Artificial Intelligence should empower people to make faster, smarter, and more informed decisions.",
        "The goal is not replacing human capability but amplifying it.",
        "Organisations that balance human judgement with AI will outperform those that rely on either one alone.",
      ],
    },
    {
      heading: "3. Build a Knowledge-Sharing Culture",
      paragraphs: [
        "Knowledge locked away in documents—or in people’s minds—creates little value.",
        "Organisations should capture, organise, share, and reuse knowledge so that learning becomes a continuous organisational capability rather than an individual advantage.",
      ],
    },
    {
      heading: "4. Improve Decision Quality",
      paragraphs: [
        "Every organisation is ultimately the sum of its decisions.",
        "Leaders should strengthen decision-making by combining reliable data, practical experience, strategic thinking, and AI-powered insights.",
        "Better decisions create better organisations.",
      ],
    },
    {
      heading: "5. Make Innovation Everyone’s Responsibility",
      paragraphs: [
        "Innovation should not be limited to a single department.",
        "Every employee should be encouraged to identify opportunities, solve problems, and improve processes.",
        "Organisations that innovate continuously remain competitive continuously.",
      ],
    },
    {
      heading: "Turning the five commitments into competitive advantage",
      paragraphs: [
        "When these five practices become part of an organisation’s culture, Intelligence Capital grows naturally.",
        "The result is an enterprise that learns faster, adapts quicker, makes better decisions, and creates sustainable value.",
        "Technology may be accessible to everyone.",
        "Intelligence Capital will not be.",
        "That is what will separate tomorrow’s leaders from tomorrow’s followers.",
      ],
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 5 of The Intelligence Economy Series.",
        "In Article 6, I will introduce the Intelligence Capital Scorecard™—a practical framework for measuring how prepared an individual or organisation is for the Intelligence Economy.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 5),
  articleFive,
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
