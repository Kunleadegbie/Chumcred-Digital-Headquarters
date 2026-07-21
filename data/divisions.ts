export type Division = {
  title: string;
  slug: string;
  summary: string;
  capabilities: string[];
};

export const divisions: Division[] = [
  {
    title: "AI & Technology",
    slug: "ai-technology",
    summary:
      "We design intelligent platforms, automation systems, decision tools, and data products for African business realities.",
    capabilities: ["AI product strategy", "Data platforms", "Automation systems"]
  },
  {
    title: "Employability & Workforce Development",
    slug: "workforce-development",
    summary:
      "We help people, employers, and institutions close the gap between education, work readiness, and market opportunity.",
    capabilities: ["Talent intelligence", "Career readiness", "Employer programs"]
  },
  {
    title: "Credit & Financial Intelligence",
    slug: "financial-intelligence",
    summary:
      "We build analytics, credit visibility, portfolio tools, and decision frameworks that make finance more transparent.",
    capabilities: ["Credit analysis", "Portfolio intelligence", "Risk visibility"]
  },
  {
    title: "Consulting & Advisory",
    slug: "consulting-advisory",
    summary:
      "We support enterprises, SMEs, and public institutions with strategy, operating models, transformation, and growth advisory.",
    capabilities: ["Enterprise strategy", "Transformation roadmaps", "Market entry"]
  },
  {
    title: "Training & Capacity Development",
    slug: "training-capacity",
    summary:
      "We deliver high-impact learning programs that strengthen leadership, digital competence, analytics, and execution culture.",
    capabilities: ["Executive training", "Digital upskilling", "Program design"]
  },
  {
    title: "Real Estate & Investments",
    slug: "real-estate-investments",
    summary:
      "We explore structured investment opportunities, property intelligence, and asset-backed growth initiatives.",
    capabilities: ["Investment research", "Property advisory", "Asset strategy"]
  }
];
