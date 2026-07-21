import type { Metadata } from "next";
import Link from "next/link";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import PublicationFilter from "@/components/PublicationFilter";
import { researchPublications } from "@/data/intelligencePublications";
import { researchCollections } from "@/data/intelligenceEconomy";

export const metadata: Metadata = {
  title: "Research Centre | Chumcred Intelligence Institute",
  description: "Executive briefs, white papers, research reports, industry studies, and applied intelligence for leaders and institutions.",
};

export default function ResearchPage() {
  return (
    <>
      <IntelligencePageHero eyebrow="Evidence and foresight" title="Research Centre" description="A permanent home for rigorous analysis, practical intelligence, and original research on the forces reshaping organisations, work, industries, and economies." primaryHref="#publications" primaryLabel="Browse Publications" secondaryHref="/partnerships" secondaryLabel="Research Partnerships" />
      <IntelligenceSubnav />
      <section id="publications" className="scroll-mt-36 py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl"><p className="eyebrow">Initial publication collection</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950">Research designed for decision and action.</h2><p className="mt-5 text-lg leading-9 text-slate-600">Search the current collection by publication type, topic, industry, or keyword. Further research reports and sector studies will be added progressively.</p></div>
          <div className="mt-10"><PublicationFilter publications={researchPublications} /></div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl"><p className="eyebrow">Publication architecture</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950">A growing institutional repository.</h2></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {researchCollections.map((item, index) => (
              <article key={item.slug} className="group min-h-[250px] bg-white p-8 transition hover:bg-navy-950 hover:text-white">
                <span className="text-xs font-bold tracking-[0.16em] text-emerald-600">0{index + 1}</span>
                <h3 className="mt-7 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-white/60">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20"><div className="section-shell rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 sm:p-10"><h2 className="text-3xl font-semibold text-navy-950">Collaborate on Intelligence Economy research.</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">Chumcred welcomes universities, research institutes, corporations, development organisations, professional bodies, and public institutions seeking applied research and executive insight.</p><Link href="/partnerships" className="mt-7 inline-flex font-bold text-emerald-800">Explore research partnerships →</Link></div></section>
    </>
  );
}
