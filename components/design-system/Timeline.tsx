export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="mx-auto max-w-5xl">
      {items.map((item, index) => (
        <div key={`${item.period}-${item.title}`} className="grid gap-5 border-l-2 border-emerald-200 pb-10 pl-8 last:pb-0 sm:grid-cols-[190px_1fr]">
          <div className="relative pt-1">
            <span className="absolute -left-[39px] top-2 h-4 w-4 rounded-full border-4 border-white bg-emerald-500 shadow" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{item.period}</p>
          </div>
          <article className="premium-card rounded-[1.5rem] p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Milestone {index + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-navy-950">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
