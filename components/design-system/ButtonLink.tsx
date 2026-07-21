import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "dark";

const styles: Record<Variant, string> = {
  primary: "bg-emerald-400 text-navy-950 shadow-[0_16px_40px_rgba(16,185,129,0.18)] hover:bg-emerald-300",
  secondary: "border border-white/15 bg-white/[0.04] text-white hover:border-gold-300/60 hover:text-gold-300",
  outline: "border border-slate-300 bg-white text-navy-950 hover:border-emerald-400 hover:text-emerald-800",
  ghost: "text-navy-950 hover:bg-slate-100",
  dark: "bg-navy-950 text-white shadow-sm hover:bg-navy-800"
};

export default function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: Variant; className?: string }) {
  return <Link href={href} className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${styles[variant]} ${className}`}>{children}</Link>;
}
