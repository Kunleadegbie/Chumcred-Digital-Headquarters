import Link from "next/link";

const links = [
  ["Overview", "/intelligence-economy"],
  ["Intelligence Capital", "/intelligence-economy/intelligence-capital"],
  ["Five Pillars", "/intelligence-economy/five-pillars"],
  ["Frameworks", "/intelligence-economy/frameworks"],
  ["Research", "/intelligence-economy/research"],
  ["Articles", "/intelligence-economy/articles"],
  ["Resources", "/intelligence-economy/resources"],
  ["Executive Insights", "/intelligence-economy/executive-insights"],
  ["TIEN", "/intelligence-economy/tien"],
];

export default function IntelligenceSubnav() {
  return (
    <nav aria-label="Intelligence Economy sections" className="sticky top-[76px] z-30 hidden border-b border-slate-200 bg-white/95 backdrop-blur lg:block">
      <div className="section-shell flex items-center gap-6 overflow-x-auto py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
        {links.map(([label, href]) => <Link key={href} href={href} className="whitespace-nowrap transition hover:text-emerald-700">{label}</Link>)}
      </div>
    </nav>
  );
}
