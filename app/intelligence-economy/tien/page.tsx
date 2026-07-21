import type { Metadata } from "next";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";

export const metadata: Metadata = { title: "TIEN | The Intelligence Economy Network", description: "Join The Intelligence Economy Network, a community for professionals, executives, researchers, entrepreneurs, and institutions." };

export default function TienPage() {
  return (
    <>
      <IntelligencePageHero eyebrow="Community arm" title="The Intelligence Economy Network (TIEN)" description="A global community connecting professionals, executives, researchers, entrepreneurs, educators, and institutions committed to shaping intelligence-driven organisations and economies." primaryHref="https://www.linkedin.com/groups/26390107" primaryLabel="Join TIEN on LinkedIn" secondaryHref="/intelligence-economy" secondaryLabel="Explore the Knowledge Hub" />
      <IntelligenceSubnav />
      <section className="py-20 sm:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Our purpose</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950">Community turns ideas into a movement.</h2></div><div className="space-y-6 text-lg leading-9 text-slate-600"><p>TIEN exists to create dialogue, shared learning, collaboration, and professional connection around the Intelligence Economy.</p><p>The network provides a meeting point between thought leadership and practice—helping members explore emerging ideas, learn across sectors, contribute perspectives, and participate in the development of a new body of knowledge.</p></div></div></section>
      <section className="bg-white py-20 sm:py-28"><div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["Learn", "Engage with original articles, frameworks, research, and expert conversations."],["Connect", "Build relationships across professions, sectors, institutions, and countries."],["Contribute", "Share insights, practical experience, research questions, and emerging perspectives."],["Collaborate", "Identify opportunities for events, research, education, partnerships, and innovation."]].map(([title,text])=><article key={title} className="rounded-3xl border border-slate-200 p-7"><h2 className="text-2xl font-semibold text-navy-950">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></section>
      <section className="py-20"><div className="section-shell rounded-[2.5rem] bg-navy-950 p-8 text-white sm:p-12"><p className="eyebrow text-emerald-300">Become a founding participant</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em]">Join the conversation shaping the Intelligence Economy.</h2><a href="https://www.linkedin.com/groups/26390107" target="_blank" rel="noopener noreferrer" className="button-primary mt-8">Join TIEN on LinkedIn <span>↗</span></a></div></section>
    </>
  );
}
