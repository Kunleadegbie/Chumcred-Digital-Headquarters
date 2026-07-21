import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { frameworkPublications, getFrameworkPublication } from "@/data/intelligencePublications";

export function generateStaticParams() { return frameworkPublications.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const framework = getFrameworkPublication(slug);
  if (!framework) return {};
  return { title: `${framework.title} | Chumcred Intelligence Institute`, description: framework.summary, keywords: framework.keywords };
}

export default async function FrameworkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const framework = getFrameworkPublication(slug);
  if (!framework) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 intelligence-grid opacity-35" />
        <div className="section-shell relative z-10">
          <Link href="/intelligence-economy/frameworks" className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">← Framework Library</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.34fr] lg:items-end">
            <div><p className="eyebrow text-gold-300">{framework.category}</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">{framework.title}</h1><p className="mt-7 max-w-3xl text-lg leading-9 text-white/65">{framework.summary}</p></div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">Publication status</p><p className="mt-3 text-xl font-semibold">{framework.status}</p><a href={framework.download} download className="button-primary mt-6 w-full justify-center">Download framework PDF ↓</a></div>
          </div>
        </div>
      </section>
      <IntelligenceSubnav />
      <main>
        <section className="py-20 sm:py-28"><div className="section-shell grid gap-10 lg:grid-cols-[0.62fr_0.38fr]"><div><p className="eyebrow">Purpose</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950">What this framework is designed to achieve.</h2><p className="mt-6 text-lg leading-9 text-slate-600">{framework.purpose}</p></div><aside className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7"><h3 className="text-xl font-semibold text-navy-950">Designed for</h3><ul className="mt-5 space-y-3 text-sm text-slate-700">{framework.audience.map((item) => <li key={item}>✓ {item}</li>)}</ul></aside></div></section>
        <section className="bg-white py-20 sm:py-28"><div className="section-shell"><p className="eyebrow">Framework architecture</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950">Core components.</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{framework.components.map((component, index) => <article key={component.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"><span className="text-xs font-bold text-emerald-700">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-2xl font-semibold text-navy-950">{component.title}</h3><p className="mt-4 leading-8 text-slate-600">{component.description}</p></article>)}</div></div></section>
        <section className="py-20 sm:py-28"><div className="section-shell grid gap-8 lg:grid-cols-2"><div className="rounded-[2rem] bg-navy-950 p-8 text-white"><p className="eyebrow text-gold-300">Applications</p><ul className="mt-7 space-y-4 text-white/70">{framework.applications.map((item) => <li key={item}>→ {item}</li>)}</ul></div><div className="rounded-[2rem] border border-slate-200 bg-white p-8"><p className="eyebrow">Expected outcomes</p><ul className="mt-7 space-y-4 text-slate-600">{framework.outcomes.map((item) => <li key={item}>✓ {item}</li>)}</ul></div></div></section>
        <section className="bg-white py-20"><div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.45fr]"><div><p className="eyebrow">Citation and intellectual property</p><p className="mt-5 rounded-2xl bg-slate-100 p-5 font-mono text-sm leading-7 text-slate-700">{framework.citation}</p><p className="mt-5 text-sm leading-7 text-slate-500">This framework is original intellectual property of Chumcred Limited. Reproduction, adaptation, training delivery, assessment use, or commercial application requires appropriate attribution and, where applicable, written licensing permission.</p></div><div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7"><h3 className="text-2xl font-semibold text-navy-950">Institutional application</h3><p className="mt-4 leading-7 text-slate-600">Engage Chumcred for executive workshops, assessments, licensing, and transformation support.</p><Link href="/partnerships" className="mt-6 inline-flex font-bold text-emerald-800">Discuss an engagement →</Link></div></div></section>
      </main>
    </>
  );
}
