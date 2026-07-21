"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const standardItems = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/leadership", label: "Leadership" },
  { href: "/solutions", label: "Solutions" },
  { href: "/platforms", label: "Platforms" },
];

const intelligenceItems = [
  ["Overview", "/intelligence-economy"],
  ["Intelligence Capital™", "/intelligence-economy/intelligence-capital"],
  ["Five Pillars™", "/intelligence-economy/five-pillars"],
  ["Framework Library™", "/intelligence-economy/frameworks"],
  ["Research Centre", "/intelligence-economy/research"],
  ["Articles", "/intelligence-economy/articles"],
  ["Resource Library", "/intelligence-economy/resources"],
  ["Executive Insights", "/intelligence-economy/executive-insights"],
  ["TIEN Community", "/intelligence-economy/tien"],
];

const trailingItems = [
  { href: "/academy", label: "Academy" },
  { href: "/insights", label: "Insights" },
  { href: "/partnerships", label: "Partnerships" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileIntelligenceOpen, setMobileIntelligenceOpen] = useState(false);
  const intelligenceActive = pathname.startsWith("/intelligence-economy");

  const navLink = (item: { href: string; label: string }) => {
    const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
    return (
      <Link key={item.href} href={item.href} className={`relative rounded-lg px-3 py-2 text-[13px] font-semibold transition ${active ? "text-navy-950" : "text-slate-600 hover:bg-slate-50 hover:text-navy-950"}`}>
        {item.label}
        {active ? <motion.span layoutId="nav-indicator" className="absolute inset-x-3 -bottom-[11px] h-0.5 bg-emerald-500" /> : null}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex min-h-[76px] items-center justify-between gap-6">
        <Link href="/" className="group flex shrink-0 items-center" onClick={() => setOpen(false)} aria-label="Chumcred Intelligence home">
          <Image src="/images/chumcred-logo.png" alt="Chumcred Intelligence" width={976} height={324} priority className="h-auto w-[152px] object-contain sm:w-[178px]" />
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {standardItems.map(navLink)}
          <div className="group relative">
            <Link href="/intelligence-economy" className={`relative flex items-center gap-1 rounded-lg bg-emerald-50 px-3 py-2 text-[13px] font-semibold text-emerald-800 transition hover:bg-emerald-100 ${intelligenceActive ? "ring-1 ring-emerald-200" : ""}`}>
              Intelligence Economy <span className="text-[10px]">▾</span>
              {intelligenceActive ? <motion.span layoutId="nav-indicator" className="absolute inset-x-3 -bottom-[11px] h-0.5 bg-emerald-500" /> : null}
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                {intelligenceItems.map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold text-navy-900 transition hover:bg-emerald-50 hover:text-emerald-800">{label}</Link>
                ))}
              </div>
            </div>
          </div>
          {trailingItems.map(navLink)}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/contact" className="text-sm font-semibold text-navy-900 transition hover:text-emerald-700">Contact</Link>
          <Link href="/contact" className="rounded-xl bg-navy-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-800">Partner With Us</Link>
        </div>

        <button type="button" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white xl:hidden">
          <span className={`h-0.5 w-5 bg-navy-950 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-navy-950 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-navy-950 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-100 bg-white xl:hidden">
            <div className="section-shell grid gap-2 py-5">
              {standardItems.map((item) => <Link key={`mobile-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-slate-100 px-4 py-3 text-sm font-semibold text-navy-900">{item.label}</Link>)}
              <button type="button" onClick={() => setMobileIntelligenceOpen((v) => !v)} className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-left text-sm font-semibold text-emerald-800">
                Intelligence Economy <span>{mobileIntelligenceOpen ? "−" : "+"}</span>
              </button>
              {mobileIntelligenceOpen ? <div className="grid gap-1 rounded-xl bg-slate-50 p-2">{intelligenceItems.map(([label, href]) => <Link key={`mobile-${href}`} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium text-navy-900 hover:bg-white">{label}</Link>)}</div> : null}
              {trailingItems.map((item) => <Link key={`mobile-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-slate-100 px-4 py-3 text-sm font-semibold text-navy-900">{item.label}</Link>)}
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-navy-950 px-4 py-3 text-center text-sm font-bold text-white">Partner With Us</Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
