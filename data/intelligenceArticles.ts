export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
};

export type IntelligenceArticle = {
  slug: string;
  series: string;
  articleNumber?: number;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  featured: boolean;
  keywords: string[];
  relatedFrameworks: string[];
  pdfPath: string;
  sections: ArticleSection[];
};

export const intelligenceArticles: IntelligenceArticle[] = [
  {
    slug: "intelligence-economy-next-great-economic-era",
    series: "The Intelligence Economy Series",
    articleNumber: 1,
    category: "Intelligence Economy",
    title: "The Intelligence Economy: The Next Great Economic Era",
    subtitle:
      "Why intelligence is becoming the defining strategic asset for individuals, organisations, and nations.",
    excerpt:
      "The world is moving beyond an economy shaped primarily by physical production and information access. The next era will be defined by the capacity to combine human judgement, artificial intelligence, knowledge, data, and networks to create value.",
    publishedAt: "2026-07-01",
    readingTime: "8 min read",
    author: {
      name: "Adekunle Adegbie, PhD",
      role: "Founder & Chief Executive, Chumcred Limited",
    },
    featured: true,
    keywords: [
      "Intelligence Economy",
      "Artificial Intelligence",
      "Economic Transformation",
      "Africa",
      "Future of Work",
    ],
    relatedFrameworks: [
      "Intelligence Capital Framework™",
      "Intelligence Value Chain™",
    ],
    pdfPath:
      "/publications/articles/intelligence-economy-next-great-economic-era.pdf",
    sections: [
      {
        paragraphs: [
          "Every economic era is shaped by a dominant source of value. The Industrial Economy elevated machinery, factories, and physical production. The Information Economy elevated computing, connectivity, and access to information. The emerging Intelligence Economy elevates the ability to transform information, technology, knowledge, and human capability into better decisions and measurable outcomes.",
          "This transition is not simply another technology cycle. It changes how organisations compete, how professionals create value, and how nations build prosperity. Information is abundant; the scarce capability is the intelligence required to interpret it, act on it, and learn faster than circumstances change.",
        ],
      },
      {
        heading: "From information abundance to intelligence advantage",
        paragraphs: [
          "The Information Economy made data and knowledge easier to access. Yet access alone does not guarantee understanding, sound judgement, or effective action. Organisations can possess more data than ever and still make weak decisions. Professionals can access unlimited information and still struggle to distinguish what matters.",
          "The Intelligence Economy therefore rewards the capacity to connect signals, recognise patterns, exercise judgement, collaborate across networks, and use artificial intelligence responsibly. Competitive advantage moves from merely possessing information to applying intelligence consistently.",
        ],
      },
      {
        heading: "What creates value in the Intelligence Economy?",
        bullets: [
          "Human judgement, creativity, leadership, and ethical reasoning.",
          "Artificial intelligence that augments analysis, automation, and innovation.",
          "Knowledge systems that capture and apply institutional learning.",
          "Reliable data transformed into insight, foresight, and action.",
          "Networks and ecosystems that expand reach, trust, and collective capability.",
        ],
      },
      {
        heading: "The opportunity for Africa",
        paragraphs: [
          "Africa does not have to reproduce every stage of earlier industrial development before participating in the Intelligence Economy. Digital platforms, mobile infrastructure, youthful talent, entrepreneurial energy, and AI-enabled services create opportunities to leapfrog traditional constraints.",
          "But this opportunity will not be realised automatically. It requires investment in intelligence capabilities: education that strengthens thinking, institutions that preserve knowledge, trusted data systems, responsible AI adoption, and networks that connect talent to markets and opportunity.",
        ],
      },
      {
        quote:
          "The winners in the Intelligence Economy will not necessarily be those with the most information, but those best able to convert intelligence into responsible action and sustained value.",
      },
      {
        heading: "The leadership imperative",
        paragraphs: [
          "Leaders must begin treating intelligence as an enterprise capability rather than an isolated technology project. AI strategy, workforce development, knowledge management, data governance, and ecosystem partnerships must be coordinated around clear value creation priorities.",
          "The Intelligence Economy is already emerging. The strategic question is no longer whether it will arrive, but whether individuals, organisations, and nations will build the capabilities required to lead within it.",
        ],
      },
    ],
  },
  {
    slug: "intelligence-capital-defining-strategic-asset",
    series: "The Intelligence Economy Series",
    articleNumber: 2,
    category: "Intelligence Capital",
    title: "Intelligence Capital: The Defining Strategic Asset of the New Economy",
    subtitle:
      "A practical way to understand the combined intelligence capabilities that determine future competitiveness.",
    excerpt:
      "Technology may power the Intelligence Economy, but Intelligence Capital determines who succeeds in it. It is the combined capacity of people, AI, knowledge, data, and networks to create sustainable value.",
    publishedAt: "2026-07-08",
    readingTime: "9 min read",
    author: {
      name: "Adekunle Adegbie, PhD",
      role: "Founder & Chief Executive, Chumcred Limited",
    },
    featured: true,
    keywords: [
      "Intelligence Capital",
      "Competitive Advantage",
      "Organisational Intelligence",
      "AI Strategy",
    ],
    relatedFrameworks: [
      "Intelligence Capital Framework™",
      "Five Pillars of Intelligence Capital™",
    ],
    pdfPath:
      "/publications/articles/intelligence-capital-defining-strategic-asset.pdf",
    sections: [
      {
        paragraphs: [
          "For decades, organisations have measured capital largely through financial, physical, and human assets. Those assets remain important, but they do not fully explain why some organisations learn faster, adapt earlier, make better decisions, and repeatedly create new value.",
          "Intelligence Capital provides a broader lens. It represents the combined intelligence capabilities available to an individual, organisation, or economy and the ability to coordinate those capabilities toward purposeful outcomes.",
        ],
      },
      {
        heading: "What is Intelligence Capital?",
        paragraphs: [
          "Intelligence Capital is the collective capacity to understand, decide, act, and learn by combining human intelligence, artificial intelligence, knowledge, data, and networks. It is not a single technology, department, or dataset. It is an integrated strategic asset.",
          "Like financial capital, Intelligence Capital can be accumulated, invested, deployed, wasted, or eroded. Organisations strengthen it when they develop people, improve data quality, capture knowledge, adopt useful technology, and build trusted partnerships. They weaken it when insight remains fragmented, experience leaves with employees, systems do not communicate, or AI is deployed without governance and purpose.",
        ],
      },
      {
        heading: "Why traditional capability models are no longer sufficient",
        bullets: [
          "Human talent alone cannot process the scale and speed of modern information flows.",
          "AI without context, judgement, and governance can produce fast but unreliable outcomes.",
          "Knowledge that remains trapped in documents or individual memory cannot scale.",
          "Data without quality, interpretation, and action creates cost rather than advantage.",
          "Organisations operating in isolation lose the value of ecosystems and collective intelligence.",
        ],
      },
      {
        heading: "Intelligence Capital as a source of advantage",
        paragraphs: [
          "When Intelligence Capital is strong, organisations detect change earlier, coordinate expertise more effectively, innovate with greater confidence, and make decisions that improve through feedback. The organisation becomes more than a collection of functions; it becomes an intelligent system.",
          "This is particularly important in uncertain environments. Strategy can no longer depend only on periodic plans. It requires continuous sensing, interpretation, experimentation, and learning.",
        ],
      },
      {
        quote:
          "Technology may power the Intelligence Economy, but Intelligence Capital is what determines who succeeds in it.",
      },
      {
        heading: "The management challenge",
        paragraphs: [
          "Leaders need a deliberate Intelligence Capital agenda. They must identify which intelligence assets already exist, where capability gaps constrain performance, and how investment in people, systems, data, knowledge, and partnerships can reinforce one another.",
          "The organisations that manage Intelligence Capital with the same discipline applied to finance and operations will be better positioned to create durable advantage in the new economy.",
        ],
      },
    ],
  },
  {
    slug: "building-intelligence-driven-organisation",
    series: "The Intelligence Economy Series",
    articleNumber: 3,
    category: "Organisational Intelligence",
    title: "Building an Intelligence-Driven Organisation",
    subtitle:
      "How leaders can move from isolated AI tools and fragmented information to coordinated organisational intelligence.",
    excerpt:
      "An intelligent organisation is not defined by the number of AI tools it purchases. It is defined by how effectively people, technology, knowledge, data, and networks work together to improve decisions and outcomes.",
    publishedAt: "2026-07-14",
    readingTime: "9 min read",
    author: {
      name: "Adekunle Adegbie, PhD",
      role: "Founder & Chief Executive, Chumcred Limited",
    },
    featured: false,
    keywords: [
      "Organisational Intelligence",
      "Enterprise AI",
      "Transformation",
      "Leadership",
      "Knowledge Management",
    ],
    relatedFrameworks: [
      "Intelligence Maturity Model™",
      "Intelligence Transformation Framework™",
    ],
    pdfPath:
      "/publications/articles/building-intelligence-driven-organisation.pdf",
    sections: [
      {
        paragraphs: [
          "Many organisations are adopting artificial intelligence, analytics platforms, collaboration tools, and automation. Yet adding more technology does not automatically create a more intelligent organisation. Tools can remain disconnected, insights can fail to reach decision-makers, and employees can continue working around systems rather than through them.",
          "An intelligence-driven organisation coordinates its capabilities so that signals become insight, insight becomes decisions, decisions become action, and action generates learning.",
        ],
      },
      {
        heading: "The characteristics of an intelligent organisation",
        bullets: [
          "It has clarity about the decisions and outcomes that matter most.",
          "It combines frontline experience with data and analytical insight.",
          "It captures knowledge rather than repeatedly solving the same problems.",
          "It uses AI to augment people, not merely to automate activity.",
          "It learns continuously through feedback, experimentation, and review.",
          "It connects internal capability with external partners and communities.",
        ],
      },
      {
        heading: "Begin with decisions, not technology",
        paragraphs: [
          "The most effective transformation programmes begin by identifying critical decisions: where the organisation loses time, where judgement is inconsistent, where information arrives too late, and where better intelligence would create measurable value.",
          "Technology selection should follow that diagnosis. This reverses the common pattern of purchasing tools first and searching for useful applications afterwards.",
        ],
      },
      {
        heading: "Build an intelligence operating rhythm",
        paragraphs: [
          "Organisational intelligence requires routines. Teams need structured ways to review signals, challenge assumptions, share lessons, measure outcomes, and revise action. Dashboards are useful only when they are connected to accountability and decision-making.",
          "Leaders also need to create psychological safety for learning. When employees hide uncertainty or failure, the organisation loses intelligence. When teams can surface weak signals and challenge established thinking, the organisation becomes more adaptive.",
        ],
      },
      {
        quote:
          "An intelligent organisation does not merely possess intelligence. It creates a system through which intelligence consistently improves action.",
      },
      {
        heading: "A practical transformation sequence",
        bullets: [
          "Define strategic outcomes and priority decisions.",
          "Map existing human, AI, knowledge, data, and network capabilities.",
          "Identify fragmentation, duplication, and intelligence gaps.",
          "Design integrated workflows and governance.",
          "Develop workforce capability and leadership behaviour.",
          "Measure value, capture learning, and improve continuously.",
        ],
      },
    ],
  },
  {
    slug: "five-pillars-intelligence-capital",
    series: "The Intelligence Economy Series",
    articleNumber: 4,
    category: "Intelligence Capital",
    title: "The Five Pillars of Intelligence Capital™",
    subtitle:
      "A practical framework for building sustainable competitive advantage in the Intelligence Economy.",
    excerpt:
      "Intelligence Capital becomes actionable through five mutually reinforcing pillars: Human Intelligence, Artificial Intelligence, Knowledge Intelligence, Data Intelligence, and Network Intelligence.",
    publishedAt: "2026-07-20",
    readingTime: "10 min read",
    author: {
      name: "Adekunle Adegbie, PhD",
      role: "Founder & Chief Executive, Chumcred Limited",
    },
    featured: true,
    keywords: [
      "Five Pillars of Intelligence Capital",
      "Human Intelligence",
      "Artificial Intelligence",
      "Knowledge Intelligence",
      "Data Intelligence",
      "Network Intelligence",
    ],
    relatedFrameworks: [
      "Five Pillars of Intelligence Capital™",
      "Intelligence Capital Framework™",
    ],
    pdfPath:
      "/publications/articles/five-pillars-intelligence-capital.pdf",
    sections: [
      {
        paragraphs: [
          "Technology may power the Intelligence Economy, but Intelligence Capital is what determines who succeeds in it. The next question is therefore practical: how do individuals and organisations build Intelligence Capital?",
          "The answer lies in five mutually reinforcing pillars. Each represents a distinct capability, but their greatest value emerges when they operate as an integrated system.",
        ],
      },
      {
        heading: "1. Human Intelligence",
        paragraphs: [
          "Everything begins with people. Critical thinking, creativity, judgement, emotional intelligence, leadership, ethics, and problem-solving remain the foundation of intelligent performance.",
          "Technology can enhance these capabilities, but it cannot eliminate the need for responsibility, context, empathy, and wise judgement. Organisations must therefore invest in the quality of thinking, not only the quantity of skills.",
        ],
      },
      {
        heading: "2. Artificial Intelligence",
        paragraphs: [
          "Artificial Intelligence is the amplifier. It helps people work faster, analyse deeper, automate repetitive tasks, personalise experiences, and uncover patterns hidden within large volumes of information.",
          "The objective is not simply to replace activity. It is to redesign work so that machines handle scale and repetition while people focus on judgement, relationships, creativity, and strategic action.",
        ],
      },
      {
        heading: "3. Knowledge Intelligence",
        paragraphs: [
          "Knowledge has little value if it remains trapped in documents, databases, or people’s minds. Knowledge Intelligence is the ability to capture, organise, share, and apply what an organisation knows.",
          "It turns experience into reusable capability. It reduces repeated mistakes, accelerates onboarding, preserves institutional memory, and ensures that lessons reach the people who need them.",
        ],
      },
      {
        heading: "4. Data Intelligence",
        paragraphs: [
          "Data Intelligence is the capacity to transform reliable data into insight, foresight, decisions, and action. It requires more than dashboards. It depends on data quality, context, analytical capability, governance, and clear ownership of outcomes.",
          "The intelligent organisation does not ask only what happened. It asks why it happened, what may happen next, and what action should now be taken.",
        ],
      },
      {
        heading: "5. Network Intelligence",
        paragraphs: [
          "No individual or organisation possesses all the intelligence it needs. Network Intelligence is the value created through relationships, communities, partnerships, platforms, and ecosystems.",
          "Strong networks expand access to expertise, markets, trust, innovation, and opportunity. In the Intelligence Economy, the capacity to connect and coordinate intelligence across boundaries becomes a major source of advantage.",
        ],
      },
      {
        quote:
          "The strength of Intelligence Capital is not determined by the strongest individual pillar, but by how effectively all five pillars reinforce one another.",
      },
      {
        heading: "From framework to action",
        paragraphs: [
          "The Five Pillars provide a practical diagnostic. Leaders can assess where their organisation is strong, where intelligence remains fragmented, and which investments will create the greatest strategic value.",
          "The goal is not to maximise every pillar independently. It is to build a balanced intelligence system aligned with purpose, strategy, customers, and measurable outcomes.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return intelligenceArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: IntelligenceArticle, limit = 3) {
  return intelligenceArticles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        (candidate.category === article.category ||
          candidate.series === article.series),
    )
    .slice(0, limit);
}
