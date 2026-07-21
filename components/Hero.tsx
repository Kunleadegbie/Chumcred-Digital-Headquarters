import Link from "next/link";

const intelligenceLayers = [
  { label: "Artificial Intelligence", value: "Technology" },
  { label: "Research & Knowledge", value: "Insight" },
  { label: "Workforce Intelligence", value: "Talent" },
  { label: "Enterprise Transformation", value: "Impact" },
];

export default function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden text-white">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="section-shell relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(56,217,150,0.9)]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/75">
              Building Africa&apos;s Intelligence Economy
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[4.45rem]">
            Transforming businesses.
            <span className="block bg-gradient-to-r from-emerald-300 via-white to-gold-300 bg-clip-text text-transparent">
              Empowering professionals.
            </span>
            <span className="block">Building intelligent futures.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            Chumcred Limited is an intelligence, AI, consulting, research, and capacity-development group helping organisations and professionals thrive through intelligent platforms, executive education, financial insight, and enterprise transformation.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/platforms" className="button-primary">
              Explore our platforms <span aria-hidden="true">→</span>
            </Link>
            <Link href="/intelligence-economy" className="button-secondary">
              Intelligence Economy
            </Link>
            <Link href="/partnerships" className="button-secondary">
              Partner with us
            </Link>
            <a
              href="https://www.linkedin.com/groups/26390107"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Join TIEN <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/55">
            <span>Trusted by professionals, organisations, and institutions.</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[590px]">
          <div className="intelligence-console">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Chumcred Intelligence Ecosystem
                </p>
                <p className="mt-1 text-sm text-white/45">From insight to measurable impact</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="h-2 w-2 rounded-full bg-gold-300" />
                <span className="h-2 w-2 rounded-full bg-white/25" />
              </div>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2">
              {intelligenceLayers.map((layer, index) => (
                <div key={layer.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38">{layer.label}</p>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <p className="text-lg font-semibold">{layer.value}</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 text-xs text-emerald-300">0{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-400/10 to-gold-300/10 p-5">
              <div className="flex items-center justify-between text-xs text-white/55">
                <span>Intelligence-to-impact pathway</span>
                <span className="font-semibold text-emerald-300">Integrated</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-gold-300" />
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2 text-center">
                {["Research", "Platforms", "Learning", "Advisory"].map((item) => (
                  <div key={item} className="rounded-xl bg-white/[0.05] px-2 py-3 text-[10px] text-white/55">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
