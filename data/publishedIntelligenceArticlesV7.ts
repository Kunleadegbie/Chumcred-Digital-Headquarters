import { intelligenceArticles as publishedArticles } from "@/data/publishedIntelligenceArticlesV6";
import type { PublishedIntelligenceArticle } from "@/data/publishedIntelligenceArticlesBase";

const articleNine: PublishedIntelligenceArticle = {
  slug: "intelligence-workforce",
  series: "The Intelligence Economy Series",
  articleNumber: 9,
  category: "Future of Work",
  title: "The Intelligence Workforce™: Preparing People for the Intelligence Economy",
  subtitle:
    "Preparing people to thrive in an AI-powered workplace through continuous learning, AI literacy, human-centred capability, human-AI collaboration, and adaptability.",
  excerpt:
    "Artificial Intelligence is transforming work, but the greatest organisational challenge is preparing people to learn continuously, use AI responsibly, and create greater value alongside intelligent technologies.",
  publishedAt: "2026-08-04",
  readingTime: "6 min read",
  author: {
    name: "Adekunle Adegbie, PhD",
    role: "Founder & Chief Executive, Chumcred Limited",
  },
  featured: false,
  keywords: [
    "The Intelligence Economy",
    "Intelligence Workforce",
    "Future of Work",
    "Artificial Intelligence",
    "AI Literacy",
    "Continuous Learning",
    "Human-AI Collaboration",
    "Human-Centred Skills",
    "Reskilling",
    "Adaptability",
    "Leadership",
    "Innovation",
    "TIEN",
  ],
  relatedFrameworks: [
    "The Intelligence Workforce™",
    "Intelligence Leadership™",
    "Intelligence Capital Framework™",
    "The Five Pillars of Intelligence Capital™",
    "Intelligence Transformation Framework™",
  ],
  pdfPath: "",
  sourceUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7490329386676736002?utm_source=share&utm_medium=member_ios&rcm=ACoAABMjArcBWBK3Ax47chawJTCvYX1Miu75haI",
  sections: [
    {
      quote:
        "The future of work is not about humans versus AI. It is about humans empowered by AI.",
    },
    {
      heading: "The workplace is changing faster than ever",
      paragraphs: [
        "Artificial Intelligence is changing the workplace at an unprecedented pace.",
        "Routine tasks are increasingly automated.",
        "New roles are emerging.",
        "The skills employers value are evolving.",
        "Yet the greatest challenge facing organisations is not technology.",
        "It is preparing people for a new way of working.",
      ],
    },
    {
      heading: "What is The Intelligence Workforce™?",
      paragraphs: [
        "I call this The Intelligence Workforce™—a workforce equipped to learn continuously, think critically, collaborate effectively, and use Artificial Intelligence to create greater value.",
        "Building an Intelligence Workforce requires five commitments.",
      ],
    },
    {
      heading: "1. Continuous Learning",
      paragraphs: [
        "Learning can no longer be occasional.",
        "Organisations must create a culture where employees continuously acquire new knowledge and adapt to changing business needs.",
      ],
    },
    {
      heading: "2. AI Literacy",
      paragraphs: [
        "Every professional, regardless of role, should understand how AI works, where it adds value, and how to use it responsibly.",
        "AI literacy is becoming as essential as digital literacy.",
      ],
    },
    {
      heading: "3. Human-Centred Skills",
      paragraphs: [
        "As AI automates routine work, uniquely human capabilities become even more valuable.",
      ],
      bullets: [
        "Critical thinking",
        "Creativity",
        "Communication",
        "Emotional intelligence",
        "Ethical judgement",
      ],
    },
    {
      heading: "4. Human-AI Collaboration",
      paragraphs: [
        "The future workplace is not built around replacing people.",
        "It is built around enabling people and AI to work together, combining human judgement with machine intelligence to achieve better outcomes.",
      ],
    },
    {
      heading: "5. Adaptability",
      paragraphs: [
        "Change is now a constant.",
        "The most successful professionals will not necessarily be those who know the most today, but those who can learn, adapt, and grow the fastest.",
      ],
    },
    {
      heading: "Why the Intelligence Workforce matters",
      paragraphs: [
        "The organisations that invest in these capabilities will build workforces that are more resilient, innovative, and prepared for the future.",
        "The Intelligence Economy will not eliminate the need for people.",
        "It will increase the value of people who can continuously learn and intelligently apply technology.",
        "Because in the Intelligence Economy, people remain the greatest creators of value—AI simply helps them achieve more.",
      ],
    },
    {
      heading: "Next in the series",
      paragraphs: [
        "This is Article 9 of The Intelligence Economy Series.",
        "In Article 10, we will conclude Season 1 by introducing The Intelligence Transformation Framework™—a practical roadmap for helping organisations transition from traditional enterprises to intelligence-driven organisations.",
        "Shaping the Future Through Intelligence.",
      ],
    },
  ],
};

export const intelligenceArticles: PublishedIntelligenceArticle[] = [
  ...publishedArticles.filter((article) => article.articleNumber !== 9),
  articleNine,
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
