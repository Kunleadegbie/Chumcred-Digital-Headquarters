import type { ReactNode } from "react";

export default function FeatureCard({ index, title, description, children }: { index?: string; title: string; description: string; children?: ReactNode }) {
  return <article className="premium-card group rounded-[1.5rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200"><div className="flex items-start justify-between gap-4">{index ? <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-black text-emerald-800">{index}</span> : <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />}{children}</div><h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-navy-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article>;
}
