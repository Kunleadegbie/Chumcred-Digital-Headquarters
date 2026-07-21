import type { Metadata } from "next";
import Link from "next/link";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { intelligencePillars } from "@/data/intelligenceEconomy";

export const metadata: Metadata = {
  title: "Intelligence Capital™ | Chumcred Intelligence Institute",
  description: "Understand Intelligence Capital™, the strategic asset that combines human, artificial, knowledge, data, and network intelligence.",
};

export default function IntelligenceCapitalPage() {
  return (
    <>
      <IntelligencePageHero
        eyebrow="The defining strategic asset"
        title="Intelligence Capital™"
        description="The collective capacity of an individual, organisation, institution, or society to generate, combine, apply, and continuously improve intelligence in order to create value and achieve meaningful outcomes."
        primaryHref="/intelligence-economy/five-pillars"
        primaryLabel="Explore the Five Pillars"
        secondaryHref="/intelligence-economy/frameworks"
        secondaryLabel="Visit Framework Library"
      />
      <IntelligenceSubnav />
      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Why it matters</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-5xl">The asset behind intelligent advantage.</h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-slate-600">
            <p>Technology may power the Intelligence Economy, but Intelligence Capital determines who succeeds within it. It reflects not merely what an organisation knows, but how effectively it thinks, learns, connects, decides, and acts.</p>
            <p>Intelligence Capital becomes valuable when its components reinforce one another: capable people use artificial intelligence responsibly, reliable data supports judgement, knowledge moves across the organisation, and networks expand access to ideas and opportunities.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Capability architecture</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-5xl">Five connected sources of intelligence.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {intelligencePillars.map((pillar) => (
              <article key={pillar.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-lg font-bold text-gold-300">{pillar.code}</span>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
          <Link href="/intelligence-economy/five-pillars" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">Study the complete pillar model <span>→</span></Link>
        </div>
      </section>
      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            ["Individuals", "Build stronger judgement, learning agility, AI capability, professional networks, and personal knowledge systems."],
            ["Organisations", "Coordinate intelligence across people, technology, data, processes, leadership, and institutional knowledge."],
            ["Economies", "Develop the talent, infrastructure, institutions, innovation systems, and networks required for inclusive intelligent growth."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-navy-950">{title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
