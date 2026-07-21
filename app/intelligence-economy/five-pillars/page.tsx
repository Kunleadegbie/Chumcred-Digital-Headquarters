import type { Metadata } from "next";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { intelligencePillars } from "@/data/intelligenceEconomy";

export const metadata: Metadata = {
  title: "The Five Pillars of Intelligence Capital™ | Chumcred",
  description: "Explore Human, Artificial, Knowledge, Data, and Network Intelligence—the five pillars of Intelligence Capital™.",
};

export default function FivePillarsPage() {
  return (
    <>
      <IntelligencePageHero eyebrow="Intelligence Capital architecture" title="The Five Pillars of Intelligence Capital™" description="A practical framework for developing the connected capabilities that enable people and organisations to create sustainable advantage in the Intelligence Economy." primaryHref="/intelligence-economy/intelligence-capital" primaryLabel="Understand Intelligence Capital" secondaryHref="/intelligence-economy/frameworks" secondaryLabel="Explore all frameworks" />
      <IntelligenceSubnav />
      <section className="py-20 sm:py-28">
        <div className="section-shell space-y-6">
          {intelligencePillars.map((pillar, index) => (
            <article key={pillar.slug} id={pillar.slug} className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
              <div className="flex items-center gap-5 lg:block">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-950 text-2xl font-bold text-gold-300">{pillar.code}</span>
                <p className="mt-0 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 lg:mt-5">Pillar {String(index + 1).padStart(2, "0")}</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy-950 sm:text-4xl">{pillar.title}</h2>
                <p className="mt-5 text-lg leading-9 text-slate-600">{pillar.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {pillar.focus.map((item) => <span key={item} className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800">{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
