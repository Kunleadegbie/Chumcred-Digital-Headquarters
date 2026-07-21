import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  ["About Chumcred", "/company"],
  ["Solutions", "/solutions"],
  ["Platforms", "/platforms"],
  ["Academy", "/academy"],
  ["Partnerships", "/partnerships"],
  ["Contact", "/contact"]
];

const instituteLinks = [
  ["Intelligence Economy", "/intelligence-economy"],
  ["Intelligence Capital", "/intelligence-economy/intelligence-capital"],
  ["Framework Library", "/intelligence-economy/frameworks"],
  ["Research & Publications", "/intelligence-economy/research"],
  ["TIEN Community", "/intelligence-economy/tien"]
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="section-shell relative grid gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.9fr]">
        <div>
          <Link
            href="/"
            aria-label="Chumcred Intelligence home"
            className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-white/10"
          >
            <Image
              src="/images/chumcred-logo.png"
              alt="Chumcred Intelligence"
              width={976}
              height={324}
              className="h-auto w-[220px] object-contain"
            />
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            African Innovation & Intelligence Group
          </p>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/62">
            Building intelligent platforms, stronger workforces, financial insight, executive capability, and transformation systems for Africa&apos;s future.
          </p>
          <p className="mt-6 text-sm font-semibold text-emerald-300">Built for African realities. Powered by intelligence. Driven by impact.</p>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Intelligence Institute" links={instituteLinks} />

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">Connect</h3>
          <div className="mt-6 grid gap-3 text-sm text-white/62">
            <a href="mailto:info@chumcred.com" className="transition hover:text-white">info@chumcred.com</a>
            <a href="mailto:partnerships@chumcred.com" className="transition hover:text-white">partnerships@chumcred.com</a>
            <Link href="/contact" className="mt-3 inline-flex w-fit rounded-xl border border-white/15 px-4 py-3 font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Chumcred Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">{title}</h3>
      <div className="mt-6 grid gap-3">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="text-sm text-white/62 transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
