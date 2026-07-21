export default function QuotePanel({ quote, attribution, role }: { quote: string; attribution: string; role: string }) {
  return (
    <aside className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-premium sm:p-10">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="relative">
        <span className="text-6xl font-serif leading-none text-emerald-300/60">“</span>
        <blockquote className="-mt-3 text-2xl font-semibold leading-relaxed tracking-[-0.03em] sm:text-3xl">{quote}</blockquote>
        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="font-semibold">{attribution}</p>
          <p className="mt-1 text-sm text-white/55">{role}</p>
        </div>
      </div>
    </aside>
  );
}
