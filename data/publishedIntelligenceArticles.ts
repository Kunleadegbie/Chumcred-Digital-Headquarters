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

const articleTwo: PublishedIntelligenceArticle = {
  slug: "from-information-to-intelligence",
  series: "The Intelligence Economy Series",
  articleNumber: 2,
  category: "Intelligence Economy",
  title: "From Information to Intelligence: Why Information Is No Longer Enough",
  subtitle:
    "Information defined the last economy. The next era will be shaped by the ability to transform information into insight, decisions, and value.",
  excerpt:
    "Information is no longer scarce. Competitive advantage now depends on how effectively organisations interpret information, recognise patterns, apply judgement, and convert insight into action.",
  publishedAt: "2026-07-24",
  readingTime: "5 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Capital",
    "Artificial Intelligence",
    "Leadership",
    "Future of Work",
    "Digital Transformation",
    "Innovation",
    "TIEN",
    "Information Economy",
    "Business Intelligence",
    "Decision Intelligence",
  ],
  relatedFrameworks: [
    "Intelligence Capital Framework™",
    "Intelligence Value Chain™",
    "The Five Pillars of Intelligence Capital™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7483756813700636672?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "Information was the defining asset of the last economy. Intelligence will be the defining asset of the next.",
    },
    {
      heading: "Information became the currency of the last economy",
      paragraphs: [
        "For decades, organisations competed to collect more information.",
        "They built databases, implemented ERP systems, invested in Business Intelligence platforms, and accumulated vast amounts of data.",
        "Information became the currency of the Information Economy.",
      ],
    },
    {
      heading: "Information is no longer scarce",
      paragraphs: [
        "But today, something has changed.",
        "Information is no longer scarce—it is everywhere.",
        "Every minute, billions of searches are performed, millions of emails are exchanged, and enormous volumes of data are created.",
        "Yet, while we have more information than ever before, many organisations are overwhelmed by it.",
      ],
    },
    {
      heading: "More information does not guarantee better outcomes",
      paragraphs: [
        "More information does not automatically lead to better decisions, innovation, or competitive advantage.",
        "Information without interpretation often creates confusion rather than clarity.",
        "This is where the Intelligence Economy begins.",
      ],
    },
    {
      heading: "From information to intelligence",
      paragraphs: [
        "Tomorrow’s leaders will not be those with the largest databases, but those that transform information into insight, insight into decisions, and decisions into value.",
        "That transformation is what I call intelligence.",
        "Intelligence is more than data or knowledge. It is the ability to understand context, recognise patterns, anticipate change, solve problems, and make better decisions.",
      ],
    },
    {
      heading: "Human intelligence and artificial intelligence must work together",
      paragraphs: [
        "Artificial Intelligence is accelerating this shift, but technology alone is not enough.",
        "Without human judgement, creativity, ethics, and strategic thinking, AI remains a powerful tool—not a complete solution.",
        "The future belongs to organisations that combine human intelligence with artificial intelligence.",
      ],
    },
    {
      heading: "The new source of competitive advantage",
      paragraphs: [
        "That is why I believe we are moving beyond the Information Economy into the Intelligence Economy.",
        "In this new era, success will not be determined by who owns the most information, but by who develops the greatest Intelligence Capital.",
      ],
    },
    {
      quote:
        "How effectively are we turning information into intelligence?",
    },
    {
      heading: "The question every leader should ask",
      paragraphs: [
        "The question every leader should now ask is no longer: ‘How much information do we have?’",
        "Instead, it should be: ‘How effectively are we turning information into intelligence?’",
        "The organisations that answer this question first will define the next decade.",
      ],
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 2 of The Intelligence Economy Series.",
        "In Article 3, we will explore Intelligence Capital—why I believe it will become one of the most valuable strategic assets of the 21st century.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  articleOne,
  articleTwo,
  ...existingArticles.filter(
    (article) => article.articleNumber !== 1 && article.articleNumber !== 2,
  ),
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
