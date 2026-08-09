import {
  researchPublications as existingResearchPublications,
  type ResearchPublication,
} from "@/data/intelligencePublications";

export type ResearchCentrePublication = Omit<ResearchPublication, "type"> & {
  type: ResearchPublication["type"] | "Position Paper";
};

const positionPaper001: ResearchCentrePublication = {
  slug: "position-paper-001-intelligence-economy",
  title: "The Intelligence Economy™: A New Framework for Business, Leadership and National Competitiveness in the Age of Artificial Intelligence",
  type: "Position Paper",
  topic: "Intelligence Economy",
  industry: "Cross-industry",
  year: 2026,
  audience: [
    "Boards and executives",
    "Policymakers",
    "Educators and researchers",
    "Institutional leaders",
    "Professionals and entrepreneurs",
  ],
  readingTime: "51 pages",
  summary:
    "Position Paper No. 001 of the Chumcred Intelligence Institute presents an integrated framework for understanding the Intelligence Economy, Intelligence Capital™, Human-AI collaboration, enterprise transformation, leadership, workforce capability, innovation, and national competitiveness.",
  keyFindings: [
    "The deeper economic transformation is not simply the rise of Artificial Intelligence, but the emergence of intelligence itself as an increasingly important economic capability.",
    "Intelligence Capital™ is the collective capability through which people, knowledge, technology, learning, judgement, decision-making, and innovation are transformed into sustainable value.",
    "Sustainable Intelligence Capital depends on the integration of Human Intelligence, Artificial Intelligence, Knowledge Intelligence, Decision Intelligence, and Innovation Intelligence.",
    "Digital maturity alone does not create an Intelligence Enterprise™; organisations must embed intelligence across strategy, leadership, culture, governance, operations, and workforce capability.",
    "National competitiveness will increasingly depend on the ability of economies to develop, mobilise, govern, and apply human, technological, knowledge, research, decision, and innovation capabilities.",
  ],
  recommendations: [
    "Recognise intelligence as a strategic resource and place Intelligence Capital™ on the board and executive agenda.",
    "Assess organisational capability across the Five Pillars of Intelligence Capital™ and identify the gaps constraining performance.",
    "Develop responsible Human-AI collaboration rather than treating AI adoption as an end in itself.",
    "Embed continuous learning, knowledge sharing, better decision-making, innovation, and responsible governance into everyday operations.",
    "Measure whether intelligence capability is improving productivity, decision quality, innovation, customer outcomes, adaptability, and sustainable value creation.",
  ],
  sections: [
    {
      heading: "From information to intelligence",
      paragraphs: [
        "The paper argues that information remains essential but is increasingly abundant. As access to data, knowledge, and intelligent tools becomes more widespread, the differentiating capability shifts toward interpreting what matters, understanding implications, making better decisions, and creating value from what is known.",
        "It defines the Intelligence Economy™ as an economic paradigm in which sustainable value is created through the continuous development and application of Human Intelligence, Artificial Intelligence, knowledge, decision-making capability, and innovation to improve individual, organisational, institutional, and national performance.",
      ],
    },
    {
      heading: "Intelligence Capital™ as the strategic asset",
      paragraphs: [
        "At the centre of the framework is Intelligence Capital™: the collective capability of individuals, organisations, and institutions to continuously learn, generate insight, make better decisions, solve complex problems, innovate, and integrate Human Intelligence with Artificial Intelligence to create sustainable value.",
        "The paper presents Intelligence Capital as an integrating and amplifying capability rather than a replacement for financial, physical, human, intellectual, or social capital.",
      ],
    },
    {
      heading: "The Five Pillars and the Intelligence Enterprise™",
      paragraphs: [
        "The Five Pillars of Intelligence Capital™ are Human Intelligence, Artificial Intelligence, Knowledge Intelligence, Decision Intelligence, and Innovation Intelligence. Their value comes from integration rather than isolated investment.",
        "When these capabilities become embedded across strategy, leadership, culture, governance, operations, and workforce development, the organisation begins to evolve into an Intelligence Enterprise™ that learns continuously, shares knowledge, decides intelligently, innovates systematically, and adapts purposefully.",
      ],
    },
    {
      heading: "Leadership, workforce and Intelligence Transformation™",
      paragraphs: [
        "The paper introduces Intelligence Leadership™ as the capability to develop people, combine Human and Artificial Intelligence responsibly, improve decision quality, and create the organisational conditions in which Intelligence Capital can grow.",
        "It also defines The Intelligence Workforce™ around continuous learning, AI literacy, critical thinking, judgement, Human-AI collaboration, adaptability, and innovation, and proposes Intelligence Transformation™ as the deliberate process of embedding these capabilities across the enterprise.",
      ],
    },
    {
      heading: "From enterprise capability to national competitiveness",
      paragraphs: [
        "The argument extends beyond individual organisations through National Intelligence Competitiveness™: the capacity of a nation to develop, mobilise, and apply Human Intelligence, Artificial Intelligence, knowledge, research, decision capability, and innovation to improve productivity, resilience, prosperity, and long-term competitiveness.",
        "The paper closes with a leadership agenda, an emerging measurement architecture for Intelligence Capital™, and a research agenda inviting researchers, educators, institutions, businesses, and policymakers to test, critique, adapt, and extend the framework.",
      ],
    },
  ],
  relatedFrameworkSlugs: [
    "intelligence-capital-framework",
    "five-pillars-intelligence-capital",
    "intelligence-value-chain",
    "intelligence-maturity-model",
  ],
  download: "/downloads/chumcred-position-paper-001-intelligence-economy.pdf",
  citation:
    "Adegbie, A. (2026). The Intelligence Economy: A New Framework for Business, Leadership and National Competitiveness in the Age of Artificial Intelligence. Position Paper No. 001. Chumcred Intelligence Institute, Lagos.",
  keywords: [
    "Intelligence Economy",
    "Intelligence Capital",
    "Artificial Intelligence",
    "Human-AI collaboration",
    "Five Pillars of Intelligence Capital",
    "Intelligence Enterprise",
    "Intelligence Leadership",
    "Intelligence Workforce",
    "Intelligence Transformation",
    "National Intelligence Competitiveness",
    "Chumcred Intelligence Institute",
    "Position Paper",
  ],
};

export const researchPublications: ResearchCentrePublication[] = [
  positionPaper001,
  ...existingResearchPublications,
];

export const getResearchPublication = (slug: string) =>
  researchPublications.find((item) => item.slug === slug);
