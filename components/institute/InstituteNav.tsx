import Link from "next/link";

const items = [
  ["Overview", "/institute"],
  ["Journal", "/institute/journal"],
  ["Research Centre", "/intelligence-economy/research"],
  ["Framework Library", "/intelligence-economy/frameworks"],
  ["Executive Insights", "/intelligence-economy/executive-insights"],
  ["Resources", "/intelligence-economy/resources"],
  ["TIEN", "/intelligence-economy/tien"],
];

export default function InstituteNav() {
  return (
    <nav aria-label="Chumcred Intelligence Institute" className="border-y border-slate-200 bg-white">
      <div className="section-shell flex gap-2 overflow-x-auto py-3">
        {items.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
