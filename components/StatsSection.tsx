const stats = [
  { value: "3+", label: "Intelligence platforms", note: "Built and expanding" },
  { value: "300+", label: "Professionals empowered", note: "Through learning and advisory" },
  { value: "8", label: "Industries served", note: "Cross-sector experience" },
  { value: "3", label: "Strategic transformation projects", note: "High-impact engagements" },
  { value: "Growing", label: "Framework library", note: "Original intellectual property" },
  { value: "Emerging", label: "Research institute", note: "Intelligence Economy knowledge" },
];

export default function StatsSection() {
  return (
    <section className="relative z-10 -mt-10 pb-10">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-premium sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative border-b border-slate-100 p-6 last:border-b-0 sm:p-7 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] text-navy-950 sm:text-4xl">{stat.value}</p>
              <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-400">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
