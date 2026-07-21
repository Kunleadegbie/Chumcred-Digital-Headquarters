"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ResearchPublication } from "@/data/intelligencePublications";

export default function PublicationFilter({ publications }: { publications: ResearchPublication[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => publications.filter((item) => {
    const haystack = `${item.title} ${item.summary} ${item.topic} ${item.industry} ${item.keywords.join(" ")}`.toLowerCase();
    return (type === "All" || item.type === type) && haystack.includes(query.toLowerCase());
  }), [publications, query, type]);

  return (
    <div>
      <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="publication-search">Search publications</label>
        <input id="publication-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title, topic, industry, or keyword" className="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-emerald-500" />
        <div className="flex flex-wrap gap-2">
          {["All", "Executive Brief", "White Paper"].map((option) => (
            <button key={option} type="button" onClick={() => setType(option)} className={`rounded-full px-4 py-3 text-xs font-bold transition ${type === option ? "bg-navy-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"}`}>{option}</button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filtered.map((publication) => (
          <article key={publication.slug} className="flex min-h-[360px] flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em]">
              <span className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-800">{publication.type}</span>
              <span className="text-slate-400">{publication.year}</span>
              <span className="text-slate-400">{publication.readingTime}</span>
            </div>
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy-950">{publication.title}</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">{publication.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">{publication.topic}</span>
              <span className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">{publication.industry}</span>
            </div>
            <div className="mt-auto flex flex-wrap gap-4 pt-8">
              <Link href={`/intelligence-economy/research/${publication.slug}`} className="button-dark">Read publication <span>→</span></Link>
              <a href={publication.download} download className="inline-flex items-center font-bold text-emerald-800">Download PDF ↓</a>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 ? <p className="mt-8 rounded-2xl bg-slate-100 p-6 text-center text-slate-600">No publications match your search.</p> : null}
    </div>
  );
}
