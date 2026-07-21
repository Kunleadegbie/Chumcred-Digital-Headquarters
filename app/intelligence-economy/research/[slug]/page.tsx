import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { frameworkPublications, getResearchPublication, researchPublications } from "@/data/intelligencePublications";

export function generateStaticParams() { return researchPublications.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const publication = getResearchPublication(slug);
  if (!publication) return {};
  return { title: `${publication.title} | Chumcred Intelligence Institute`, description: publication.summary, keywords: publication.keywords };
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const publication = getResearchPublication(slug);
  if (!publication) notFound();
  const relatedFrameworks = frameworkPublications.filter((framework) => publication.relatedFrameworkSlugs.includes(framework.slug));

  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-28"><div className="section-shell"><Link href="/intelligence-economy/research" className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">← Research Centre</Link><div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.36fr] lg:items-end"><div><div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.14em]"><span className="rounded-full bg-emerald-400/10 px-3 py-2 text-emerald-300">{publication.type}</span><span className="px-3 py-2 text-white/45">{publication.year}</span><span className="px-3 py-2 text-white/45">{publication.readingTime}</span></div><h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">{publication.title}</h1><p className="mt-7 max-w-3xl text-lg leading-9 text-white/65">{publication.summary}</p></div><a href={publication.download} download className="button-primary justify-center">Download publication PDF ↓</a></div></div></section>
      <IntelligenceSubnav />
      <main>
        <section className="py-20 sm:py-28"><div className="section-shell grid gap-8 lg:grid-cols-2"><div className="rounded-[2rem] border border-slate-200 bg-white p-8"><p className="eyebrow">Key findings</p><ul className="mt-7 space-y-5">{publication.keyFindings.map((item) => <li key={item} className="flex gap-4 leading-8 text-slate-600"><span className="font-bold text-emerald-700">•</span>{item}</li>)}</ul></div><div className="rounded-[2rem] bg-navy-950 p-8 text-white"><p className="eyebrow text-gold-300">Executive recommendations</p><ol className="mt-7 space-y-5">{publication.recommendations.map((item, index) => <li key={item} className="flex gap-4 leading-8 text-white/70"><span className="font-bold text-emerald-300">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></div></section>
        <section className="bg-white py-20 sm:py-28"><article className="section-shell max-w-4xl">{publication.sections.map((section) => <section key={section.heading} className="border-b border-slate-200 py-10 first:pt-0 last:border-0"><h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy-950">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-lg leading-9 text-slate-600">{paragraph}</p>)}</section>)}</article></section>
        <section className="py-20"><div className="section-shell"><p className="eyebrow">Related frameworks</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{relatedFrameworks.map((framework) => <Link key={framework.slug} href={`/intelligence-economy/frameworks/${framework.slug}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium"><p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">{framework.category}</p><h3 className="mt-4 text-xl font-semibold text-navy-950">{framework.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{framework.summary}</p></Link>)}</div></div></section>
        <section className="bg-white py-20"><div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.45fr]"><div><p className="eyebrow">Recommended citation</p><p className="mt-5 rounded-2xl bg-slate-100 p-5 font-mono text-sm leading-7 text-slate-700">{publication.citation}</p><p className="mt-5 text-sm leading-7 text-slate-500">© 2026 Chumcred Limited. Commercial reproduction, redistribution, adaptation, or training use requires permission. Reasonable quotation is permitted with full attribution.</p></div><div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7"><h3 className="text-2xl font-semibold text-navy-950">Research collaboration</h3><p className="mt-4 leading-7 text-slate-600">Partner with Chumcred on applied research, executive briefings, industry studies, and institutional programmes.</p><Link href="/partnerships" className="mt-6 inline-flex font-bold text-emerald-800">Explore collaboration →</Link></div></div></section>
      </main>
    </>
  );
}
