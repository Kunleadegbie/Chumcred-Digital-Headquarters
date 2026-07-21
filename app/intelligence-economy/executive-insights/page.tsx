import type { Metadata } from "next";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";

export const metadata: Metadata = { title: "Executive Insights | Intelligence Economy", description: "Concise strategic intelligence for executives, boards, policymakers, and institutional leaders." };

const themes = [
  ["Enterprise AI and Strategy", "How leaders can move from experimentation to governed, value-led enterprise AI adoption."],
  ["Intelligence Leadership", "The judgement, learning, communication, and moral leadership capabilities required for intelligent organisations."],
  ["Workforce Transformation", "How organisations can redesign roles, skills, learning systems, and work for human-AI collaboration."],
  ["Decision Quality", "Practical approaches for strengthening evidence, context, judgement, alignment, and execution."],
  ["Africa's Intelligence Economy", "Strategic opportunities for talent, institutions, entrepreneurship, technology, and inclusive growth."],
  ["Organisational Intelligence", "How knowledge, data, people, technology, and networks can operate as one intelligence system."],
];

export default function ExecutiveInsightsPage() {
  return <><IntelligencePageHero eyebrow="For leaders and institutions" title="Executive Insights" description="Concise, decision-oriented perspectives designed to help executives, boards, policymakers, and institutional leaders interpret change and act with greater intelligence." primaryHref="/intelligence-economy/research" primaryLabel="Research Centre" secondaryHref="/partnerships" secondaryLabel="Executive Engagements" /><IntelligenceSubnav /><section className="py-20 sm:py-28"><div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">{themes.map(([title, text], index) => <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"><span className="text-xs font-bold tracking-[0.16em] text-gold-500">BRIEF {String(index + 1).padStart(2, "0")}</span><h2 className="mt-7 text-2xl font-semibold text-navy-950">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p><span className="mt-8 inline-block text-sm font-bold text-emerald-700">Executive brief forthcoming</span></article>)}</div></section></>;
}
