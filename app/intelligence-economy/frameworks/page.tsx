import type { Metadata } from "next";
import Link from "next/link";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { frameworkPublications } from "@/data/intelligencePublications";

export const metadata: Metadata = {
  title: "Framework Library™ | Chumcred Intelligence Institute",
  description: "Explore original Chumcred frameworks for intelligence strategy, capability development, decision value, and organisational maturity.",
};

export default function FrameworksPage() {
  return (
    <>
      <IntelligencePageHero eyebrow="Original intellectual property" title="Framework Library™" description="Practical models that translate Intelligence Economy thinking into assessment, strategy, capability development, leadership, and transformation." primaryHref="/intelligence-economy/research" primaryLabel="Explore Research Centre" secondaryHref="/partnerships" secondaryLabel="Institutional Licensing" />
      <IntelligenceSubnav />
      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2">
            {frameworkPublications.map((framework, index) => (
              <article key={framework.slug} className="group flex min-h-[410px] flex-col rounded-[2rem] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{framework.category}</span>
                  <span className="text-xs font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy-950">{framework.title}</h2>
                <p className="mt-5 text-sm leading-7 text-slate-600">{framework.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">{framework.applications.slice(0, 3).map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-[11px] font-bold text-slate-600">{item}</span>)}</div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                  <Link href={`/intelligence-economy/frameworks/${framework.slug}`} className="button-dark">Explore framework <span>→</span></Link>
                  <a href={framework.download} download className="font-bold text-emerald-800">Download PDF ↓</a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 rounded-[2rem] bg-navy-950 p-8 text-white sm:p-10">
            <p className="eyebrow text-gold-300">Institutional access</p>
            <h2 className="mt-4 text-3xl font-semibold">Apply a Chumcred framework in your organisation.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/60">Framework licensing, executive workshops, assessments, facilitator development, and advisory engagements are available for organisations seeking structured implementation support.</p>
            <Link href="/partnerships" className="button-primary mt-7">Discuss an institutional engagement <span>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
