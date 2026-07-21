import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read Chumcred Limited insights on AI in Africa, workforce transformation, business intelligence, financial analytics, government digitization, employability technology, and enterprise AI."
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="section-shell">
          <p className="eyebrow text-gold-300">Insights</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            Executive perspectives on intelligence-led transformation in Africa.
          </h1>
        </div>
      </section>
      <section className="py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Thought leadership"
            title="Investor-ready commentary across the themes shaping African enterprise."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((article) => (
              <article key={article.title} className="premium-card rounded p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{article.category}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-navy-950">{article.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                <a href="#" className="mt-6 inline-flex text-sm font-bold text-emerald-700">
                  Article placeholder <span aria-hidden="true" className="ml-2">-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Turn market insight into institutional action with Chumcred." />
    </>
  );
}
