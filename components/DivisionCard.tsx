import Link from "next/link";
import type { Division } from "@/data/divisions";

export default function DivisionCard({ division, index = 0 }: { division: Division; index?: number }) {
  return (
    <article
      id={division.slug}
      className="premium-card group scroll-mt-32 rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium sm:p-8"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-black text-emerald-800">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-500">
          Solution division
        </span>
      </div>
      <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-navy-950">{division.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{division.summary}</p>
      <div className="mt-7 border-t border-slate-100 pt-6">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-emerald-700">Core capabilities</p>
        <ul className="mt-4 grid gap-3">
          {division.capabilities.map((capability) => (
            <li key={capability} className="flex gap-3 text-sm font-semibold text-navy-800">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              {capability}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy-950 transition group-hover:text-emerald-700">
        Discuss this capability <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
