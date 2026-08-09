import type { Metadata } from "next";
import Link from "next/link";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { resourceTypes } from "@/data/intelligenceEconomy";

export const metadata: Metadata = { title: "Resource Library | Intelligence Economy", description: "Guides, templates, infographics, institutional publications, videos, frameworks, and teaching resources for the Intelligence Economy." };

export default function ResourcesPage() {
  return (
    <>
      <IntelligencePageHero eyebrow="Practical knowledge" title="Resource Library" description="Tools and learning assets that make Intelligence Economy ideas easier to understand, teach, assess, and apply." primaryHref="/intelligence-economy/frameworks" primaryLabel="Framework Library" secondaryHref="/intelligence-economy/research" secondaryLabel="Research Centre" />
      <IntelligenceSubnav />
      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-navy-950 to-navy-800 p-8 text-white sm:p-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Featured institutional publication · Position Paper No. 001</p>
              <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">The Intelligence Economy™</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/65">A New Framework for Business, Leadership and National Competitiveness in the Age of Artificial Intelligence.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-4 lg:mt-0 lg:justify-end">
              <Link href="/intelligence-economy/research/position-paper-001-intelligence-economy" className="button-primary">View publication <span>→</span></Link>
              <a href="/downloads/chumcred-position-paper-001-intelligence-economy.pdf" download className="button-secondary">Download PDF ↓</a>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 sm:pb-28"><div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resourceTypes.map(([title, description], index) => <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-7"><span className="text-xs font-bold tracking-[0.16em] text-emerald-700">0{index + 1}</span><h2 className="mt-7 text-2xl font-semibold text-navy-950">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">{description}</p><span className="mt-8 inline-block rounded-full bg-slate-100 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">Resources coming soon</span></article>)}</div></section>
    </>
  );
}
