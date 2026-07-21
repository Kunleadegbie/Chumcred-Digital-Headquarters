import type { Metadata } from "next";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { resourceTypes } from "@/data/intelligenceEconomy";

export const metadata: Metadata = { title: "Resource Library | Intelligence Economy", description: "Guides, templates, infographics, videos, frameworks, and teaching resources for the Intelligence Economy." };

export default function ResourcesPage() {
  return (
    <>
      <IntelligencePageHero eyebrow="Practical knowledge" title="Resource Library" description="Tools and learning assets that make Intelligence Economy ideas easier to understand, teach, assess, and apply." primaryHref="/intelligence-economy/frameworks" primaryLabel="Framework Library" secondaryHref="/academy" secondaryLabel="Explore Academy" />
      <IntelligenceSubnav />
      <section className="py-20 sm:py-28"><div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resourceTypes.map(([title, description], index) => <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7"><span className="text-xs font-bold tracking-[0.16em] text-emerald-700">0{index + 1}</span><h2 className="mt-7 text-2xl font-semibold text-navy-950">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">{description}</p><span className="mt-8 inline-block rounded-full bg-slate-100 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Resources coming soon</span></article>)}</div></section>
    </>
  );
}
