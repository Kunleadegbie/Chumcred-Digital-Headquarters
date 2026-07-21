export type Platform = {
  name: string;
  category: string;
  description: string;
  targetUsers: string;
  features: string[];
  link: string;
  status?: "Live" | "In development" | "Coming soon";
  image?: string;
};

export const platforms: Platform[] = [
  {
    name: "TalentIQ",
    category: "Employability & Workforce Intelligence",
    description:
      "An AI-powered employability platform connecting skills, job readiness, career development, and employer demand.",
    targetUsers: "Students, graduates, employers, institutions, and workforce programmes",
    features: ["CV Intelligence", "SmartMatch", "InterviewIQ", "Career readiness"],
    link: "https://talentiq.chumcred.com",
    status: "Live",
    image: "/images/platforms/talentiq.png"
  },
  {
    name: "Credit & Intelligence Engine",
    category: "Credit & Financial Intelligence",
    description:
      "A credit intelligence and financial analysis engine designed to improve business assessment, risk visibility, and decision quality.",
    targetUsers: "Banks, financial institutions, analysts, suppliers, and businesses",
    features: ["Credit analytics", "Risk assessment", "Business intelligence", "Decision support"],
    link: "https://clie.chumcred.com",
    status: "Live",
    image: "/images/platforms/clie.png"
  },

  {
    name: "Chumcred Academy LMS",
    category: "Executive Education & Workforce Development",
    description:
      "A digital learning ecosystem delivering practical AI, business, leadership, and professional development programmes for individuals and organisations.",
    targetUsers: "Professionals, organisations, institutions, facilitators, and learners",
    features: ["Structured learning", "Assessments", "Certificates", "Professional resources"],
    link: "https://lms.chumcred.com",
    status: "Live",
    image: "/images/platforms/lms.png"
  },

  {
    name: "StratIQ",
    category: "Business Growth & Intelligence",
    description:
      "An executive strategy and business intelligence platform for diagnosing performance, uncovering growth opportunities, and translating insight into action.",
    targetUsers: "Executives, SMEs, consultants, finance teams, and transformation leaders",
    features: ["Revenue intelligence", "Leakage detection", "Executive dashboards", "Action planning"],
    link: "https://stratiq.chumcred.com",
    status: "Live"
  },
  {
    name: "ProfitIQ",
    category: "Profitability Intelligence",
    description:
      "A profitability and performance intelligence platform helping businesses understand margins, costs, revenue quality, and operating outcomes.",
    targetUsers: "Business owners, CFOs, finance teams, consultants, and analysts",
    features: ["Profit analytics", "Margin visibility", "Performance tracking", "Executive insights"],
    link: "https://profitiq.chumcred.com",
    status: "Live"
  },
  {
    name: "HealthIQ",
    category: "Healthcare Intelligence",
    description:
      "A digital health intelligence platform focused on operational visibility, healthcare analytics, reporting, and better service decisions.",
    targetUsers: "Healthcare providers, administrators, organisations, and public health programmes",
    features: ["Health analytics", "Operational dashboards", "Performance reporting", "Care intelligence"],
    link: "https://healthiq.chumcred.com",
    status: "Live"
  },
  {
    name: "TaxIQ",
    category: "Tax & Compliance Intelligence",
    description:
      "A tax intelligence and compliance platform simplifying reporting, evidence management, visibility, and financial compliance workflows.",
    targetUsers: "Businesses, finance teams, tax professionals, and consultants",
    features: ["Tax reporting", "Compliance tracking", "Workflow analytics", "Financial insight"],
    link: "https://taxiq.chumcred.com",
    status: "Live"
  },
  {
    name: "NGX Portfolio Optimizer",
    category: "Investment Intelligence",
    description:
      "A Nigerian equities portfolio intelligence platform supporting portfolio analysis, risk interpretation, and disciplined investment decisions.",
    targetUsers: "Investors, analysts, portfolio managers, and advisory firms",
    features: ["Portfolio optimisation", "Stock analytics", "Risk metrics", "Investment dashboards"],
    link: "https://tradeiq.chumcred.com",
    status: "Live"
  },
  {
    name: "Teens",
    category: "Youth Development & Learning",
    description:
      "A future-readiness platform empowering teenagers with AI literacy, career awareness, digital skills, and personal development resources.",
    targetUsers: "Teenagers, schools, parents, and youth development organisations",
    features: ["AI learning", "Career awareness", "Digital skills", "Youth development"],
    link: "https://teens.chumcred.com",
    status: "Live"
  },
  {
    name: "Voicescribe AI",
    category: "AI & Productivity",
    description:
      "An AI-powered voice intelligence platform for transcription, summarisation, searchable archives, and professional knowledge capture.",
    targetUsers: "Professionals, churches, organisations, educators, and researchers",
    features: ["AI transcription", "Smart summaries", "Searchable archive", "Knowledge capture"],
    link: "#",
    status: "In development"
  },
  {
    name: "Chumcred Nexus",
    category: "AI & Enterprise Solutions",
    description:
      "An integrated enterprise intelligence ecosystem connecting document intelligence, analytics, automation, and collaborative workflows.",
    targetUsers: "Businesses, institutions, enterprise teams, and ecosystem partners",
    features: ["Document intelligence", "Analytics", "Automation", "Enterprise workflows"],
    link: "#",
    status: "In development"
  }
];
