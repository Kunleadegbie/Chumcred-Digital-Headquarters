export default function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return <div className="grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-premium sm:grid-cols-2 lg:grid-cols-4">{items.map((item, i) => <div key={item.label} className={`p-6 sm:p-7 ${i ? "border-t border-slate-200 sm:border-l sm:border-t-0" : ""}`}><p className="text-3xl font-semibold tracking-[-0.04em] text-navy-950">{item.value}</p><p className="mt-2 text-sm font-semibold text-slate-500">{item.label}</p></div>)}</div>;
}
