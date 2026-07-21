export type FrameworkPublication = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  status: string;
  summary: string;
  purpose: string;
  audience: string[];
  components: { title: string; description: string }[];
  applications: string[];
  outcomes: string[];
  relatedArticleSlugs: string[];
  download: string;
  citation: string;
  keywords: string[];
};

export type ResearchPublication = {
  slug: string;
  title: string;
  type: "Executive Brief" | "White Paper";
  topic: string;
  industry: string;
  year: number;
  audience: string[];
  readingTime: string;
  summary: string;
  keyFindings: string[];
  recommendations: string[];
  sections: { heading: string; paragraphs: string[] }[];
  relatedFrameworkSlugs: string[];
  download: string;
  citation: string;
  keywords: string[];
};

export const frameworkPublications: FrameworkPublication[] = [
  {
    slug: "intelligence-capital-framework",
    title: "Intelligence Capital Framework™",
    shortTitle: "Intelligence Capital",
    category: "Enterprise Strategy",
    status: "Foundation framework",
    summary: "A strategic model for identifying, integrating, and strengthening the intelligence assets that create sustainable advantage.",
    purpose: "To help leaders move beyond isolated investments in people, data, technology, and knowledge by managing them as one connected portfolio of intelligence assets.",
    audience: ["Boards and executives", "Strategy leaders", "Transformation teams", "Public institutions"],
    components: [
      { title: "Intelligence assets", description: "The human, artificial, knowledge, data, and network capabilities available to the organisation." },
      { title: "Integration", description: "The mechanisms that connect intelligence assets across functions, decisions, workflows, and ecosystems." },
      { title: "Application", description: "The disciplined conversion of intelligence into better judgement, action, innovation, and performance." },
      { title: "Renewal", description: "Continuous learning, governance, measurement, and investment that sustain intelligence advantage over time." },
    ],
    applications: ["Enterprise strategy", "AI readiness", "Capability assessment", "Workforce transformation", "Innovation portfolio design"],
    outcomes: ["Clear intelligence priorities", "Better alignment of people and technology", "Stronger decision quality", "A measurable capability roadmap"],
    relatedArticleSlugs: ["intelligence-capital-strategic-asset", "five-pillars-intelligence-capital"],
    download: "/downloads/intelligence-capital-framework.pdf",
    citation: "Adegbie, A. (2026). Intelligence Capital Framework™. Chumcred Intelligence Institute.",
    keywords: ["intelligence capital", "enterprise strategy", "AI readiness", "organisational capability"],
  },
  {
    slug: "five-pillars-intelligence-capital",
    title: "The Five Pillars of Intelligence Capital™",
    shortTitle: "Five Pillars",
    category: "Capability Architecture",
    status: "Published framework",
    summary: "A practical architecture connecting Human, Artificial, Knowledge, Data, and Network Intelligence.",
    purpose: "To give individuals and organisations a balanced view of the capabilities required to thrive in the Intelligence Economy.",
    audience: ["Executives", "HR and learning leaders", "AI programme teams", "Educators and professionals"],
    components: [
      { title: "Human Intelligence", description: "Judgement, creativity, critical thinking, ethics, leadership, and emotional intelligence." },
      { title: "Artificial Intelligence", description: "Technologies that augment work, automate tasks, accelerate analysis, and support innovation." },
      { title: "Knowledge Intelligence", description: "The ability to capture, organise, share, and apply knowledge where it creates value." },
      { title: "Data Intelligence", description: "The transformation of trusted data into insight, foresight, decisions, and action." },
      { title: "Network Intelligence", description: "Value created through relationships, communities, partnerships, platforms, and ecosystems." },
    ],
    applications: ["Capability development", "Leadership programmes", "AI adoption", "Workforce assessment", "Professional development"],
    outcomes: ["Balanced capability investment", "Shared language for intelligence", "Improved AI-human collaboration", "Clear development priorities"],
    relatedArticleSlugs: ["five-pillars-intelligence-capital", "intelligence-capital-strategic-asset"],
    download: "/downloads/five-pillars-intelligence-capital.pdf",
    citation: "Adegbie, A. (2026). The Five Pillars of Intelligence Capital™. Chumcred Intelligence Institute.",
    keywords: ["five pillars", "human intelligence", "artificial intelligence", "knowledge intelligence", "data intelligence", "network intelligence"],
  },
  {
    slug: "intelligence-value-chain",
    title: "Intelligence Value Chain™",
    shortTitle: "Value Chain",
    category: "Value Creation",
    status: "Initial publication",
    summary: "A model showing how organisations transform information into insight, decisions, action, learning, and measurable value.",
    purpose: "To make intelligence creation visible as an end-to-end operating process rather than a collection of disconnected analytical activities.",
    audience: ["Operations leaders", "Business analysts", "Data and AI teams", "Transformation offices"],
    components: [
      { title: "Signals and information", description: "Relevant internal and external inputs are captured, verified, and organised." },
      { title: "Interpretation and insight", description: "Context, analysis, experience, and models convert information into meaning." },
      { title: "Decision and action", description: "Insight is translated into choices, priorities, interventions, and coordinated execution." },
      { title: "Learning and value", description: "Outcomes are measured, lessons are captured, and the intelligence system is improved." },
    ],
    applications: ["Decision process redesign", "Analytics operating models", "Knowledge management", "Performance improvement", "AI workflow design"],
    outcomes: ["Faster insight-to-action cycles", "Reduced information waste", "Improved accountability", "Continuous organisational learning"],
    relatedArticleSlugs: ["building-intelligence-driven-organisation", "next-great-economic-era"],
    download: "/downloads/intelligence-value-chain.pdf",
    citation: "Adegbie, A. (2026). Intelligence Value Chain™. Chumcred Intelligence Institute.",
    keywords: ["intelligence value chain", "decision intelligence", "insight to action", "organisational learning"],
  },
  {
    slug: "intelligence-maturity-model",
    title: "Intelligence Maturity Model™",
    shortTitle: "Maturity Model",
    category: "Assessment",
    status: "Initial publication",
    summary: "A staged pathway for assessing how effectively an organisation develops, coordinates, governs, and applies intelligence.",
    purpose: "To provide leaders with a practical baseline and progression path for becoming a more intelligence-driven organisation.",
    audience: ["Boards", "Executive teams", "Transformation leaders", "Internal audit and governance teams"],
    components: [
      { title: "Level 1 - Fragmented", description: "Intelligence is informal, reactive, isolated, and dependent on individuals." },
      { title: "Level 2 - Emerging", description: "Selected tools, data practices, and capability initiatives begin to take shape." },
      { title: "Level 3 - Integrated", description: "People, processes, platforms, knowledge, and governance are deliberately connected." },
      { title: "Level 4 - Adaptive", description: "Intelligence continuously improves decisions, learning, innovation, and execution." },
      { title: "Level 5 - Intelligent Enterprise", description: "Intelligence is embedded across the operating model and extended through ecosystems." },
    ],
    applications: ["Enterprise diagnostic", "AI transformation planning", "Governance reviews", "Capability roadmaps", "Benchmarking"],
    outcomes: ["Evidence-based maturity baseline", "Prioritised transformation roadmap", "Leadership alignment", "Measurable progress indicators"],
    relatedArticleSlugs: ["building-intelligence-driven-organisation", "intelligence-capital-strategic-asset"],
    download: "/downloads/intelligence-maturity-model.pdf",
    citation: "Adegbie, A. (2026). Intelligence Maturity Model™. Chumcred Intelligence Institute.",
    keywords: ["intelligence maturity", "enterprise assessment", "AI transformation", "organisational intelligence"],
  },
];

export const researchPublications: ResearchPublication[] = [
  {
    slug: "intelligence-economy-executive-brief",
    title: "The Intelligence Economy: An Executive Brief",
    type: "Executive Brief",
    topic: "Intelligence Economy",
    industry: "Cross-industry",
    year: 2026,
    audience: ["Executives", "Boards", "Policymakers", "Institutional leaders"],
    readingTime: "12 min read",
    summary: "A concise leadership guide to the transition from the Information Economy to an era in which intelligence becomes the primary source of value, advantage, and resilience.",
    keyFindings: [
      "Information access is no longer sufficient; advantage increasingly comes from interpretation, judgement, coordination, and application.",
      "AI creates the greatest value when combined with human, knowledge, data, and network intelligence.",
      "Organisations require deliberate intelligence architecture, not isolated technology projects.",
      "Leadership, governance, learning, and responsible application will determine sustainable outcomes.",
    ],
    recommendations: [
      "Define an enterprise intelligence ambition linked to strategy.",
      "Assess Intelligence Capital across the five pillars.",
      "Redesign critical decisions and workflows around the Intelligence Value Chain.",
      "Invest in leadership capability, governance, and continuous learning.",
    ],
    sections: [
      { heading: "A new economic transition", paragraphs: ["Economic eras are shaped by the assets that most strongly determine productivity and advantage. Industrial economies were organised around physical capital. Information economies elevated data, connectivity, and digital systems. The emerging Intelligence Economy is organised around the capacity to combine human judgement, artificial intelligence, knowledge, data, and networks to create superior outcomes."] },
      { heading: "What leaders must understand", paragraphs: ["The Intelligence Economy is broader than AI adoption. It changes how organisations learn, decide, innovate, serve customers, develop people, and coordinate ecosystems. Technology is an amplifier, but value depends on the quality of the intelligence system around it."] },
      { heading: "The leadership agenda", paragraphs: ["Leaders must treat intelligence as a strategic asset, establish governance for responsible application, develop intelligence capabilities across the workforce, and connect investments to measurable business and societal outcomes."] },
    ],
    relatedFrameworkSlugs: ["intelligence-capital-framework", "five-pillars-intelligence-capital"],
    download: "/downloads/intelligence-economy-executive-brief.pdf",
    citation: "Adegbie, A. (2026). The Intelligence Economy: An Executive Brief. Chumcred Intelligence Institute.",
    keywords: ["intelligence economy", "executive brief", "AI strategy", "economic transformation"],
  },
  {
    slug: "building-intelligence-driven-organisations-white-paper",
    title: "Building Intelligence-Driven Organisations",
    type: "White Paper",
    topic: "Enterprise Transformation",
    industry: "Cross-industry",
    year: 2026,
    audience: ["CEOs", "Transformation leaders", "AI and data leaders", "Consultants"],
    readingTime: "22 min read",
    summary: "A practical white paper explaining how organisations can move from fragmented information and isolated AI initiatives toward integrated intelligence capabilities and adaptive execution.",
    keyFindings: [
      "Many organisations possess extensive data and technology but lack coordinated intelligence capability.",
      "Transformation succeeds when strategy, operating models, people, knowledge, data, AI, and governance evolve together.",
      "Intelligence maturity should be assessed across decisions, workflows, learning systems, leadership, and ecosystem relationships.",
      "A staged roadmap reduces risk and connects capability investments to operational value.",
    ],
    recommendations: [
      "Begin with a strategic intelligence diagnostic and priority decision map.",
      "Establish cross-functional governance and accountable executive sponsorship.",
      "Develop a portfolio of high-value intelligence use cases.",
      "Measure adoption, decision quality, cycle time, learning, and realised value.",
      "Build repeatable systems for capability renewal and responsible scaling.",
    ],
    sections: [
      { heading: "The intelligence gap", paragraphs: ["Organisations often confuse the possession of information with the ability to act intelligently. Dashboards, reports, databases, and AI tools may proliferate while decisions remain slow, knowledge remains trapped, and learning remains inconsistent."] },
      { heading: "The intelligent operating model", paragraphs: ["An intelligence-driven organisation deliberately connects strategic intent, human capability, AI, knowledge, data, decision processes, governance, and external networks. Intelligence becomes part of how work is designed and managed, rather than a specialist activity at the edge of the enterprise."] },
      { heading: "A staged transformation path", paragraphs: ["A practical journey begins with diagnosis, focuses on priority decisions and workflows, establishes enabling foundations, scales proven use cases, and institutionalises learning. The Intelligence Maturity Model provides a common language for sequencing this journey."] },
      { heading: "Measuring value", paragraphs: ["Measurement should extend beyond tool adoption. Leaders should track decision quality, speed, productivity, customer outcomes, risk reduction, innovation, knowledge reuse, workforce capability, and financial value."] },
    ],
    relatedFrameworkSlugs: ["intelligence-value-chain", "intelligence-maturity-model", "intelligence-capital-framework"],
    download: "/downloads/building-intelligence-driven-organisations.pdf",
    citation: "Adegbie, A. (2026). Building Intelligence-Driven Organisations. Chumcred Intelligence Institute.",
    keywords: ["intelligence-driven organisation", "enterprise transformation", "AI operating model", "organisational intelligence"],
  },
];

export const getFrameworkPublication = (slug: string) => frameworkPublications.find((item) => item.slug === slug);
export const getResearchPublication = (slug: string) => researchPublications.find((item) => item.slug === slug);
