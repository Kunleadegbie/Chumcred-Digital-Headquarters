import Image from "next/image";
import Link from "next/link";

const credentials = [
  "Intelligence Economy Researcher",
  "AI Strategist",
  "Business Transformation Consultant",
  "Executive Educator",
  "Founder, TIEN",
];

export default function ExecutivePresence({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-20 sm:py-24" : "bg-white py-20 sm:py-28"}>
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[540px] overflow-hidden bg-navy-950 sm:min-h-[620px]">
              <Image
                src="/images/founder-adegbie.jpg"
                alt="Adekunle Adegbie, PhD, Founder and Chief Executive of Chumcred Limited"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-[center_16%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Founder & Chief Executive</p>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Adekunle Adegbie, PhD</h3>
                <p className="mt-1 text-sm text-white/65">Chumcred Limited</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {credentials.map((credential) => (
                    <span key={credential} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
                      {credential}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="absolute right-8 top-8 text-7xl font-serif leading-none text-emerald-100">“</div>
              <p className="eyebrow">Executive presence</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-navy-950 sm:text-5xl">
                Building Africa&apos;s Intelligence Economy
              </h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  The Intelligence Economy is redefining how nations, organisations, and individuals create value. At Chumcred, we are building the platforms, research, frameworks, executive education, and partnerships that will help shape this new economic era.
                </p>
                <p>
                  Our ambition is not simply to deploy technology. It is to help people and organisations become more intelligent in the way they think, work, decide, innovate, and grow.
                </p>
              </div>
              <blockquote className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-lg font-semibold leading-8 text-navy-950">
                “Our mission is to build Africa&apos;s foremost institution for Intelligence Economy research, education, innovation, and enterprise transformation.”
              </blockquote>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/leadership" className="button-primary">Read the full leadership story <span>→</span></Link>
                <Link href="/partnerships" className="button-secondary">Explore partnerships</Link>
                <a
                  href="https://www.linkedin.com/groups/26390107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Join TIEN on LinkedIn <span>↗</span>
                </a>
              </div>
              <div className="mt-9 border-t border-slate-200 pt-6">
                <p className="font-serif text-2xl italic text-navy-900">Adekunle Adegbie</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.17em] text-slate-500">Founder & Chief Executive · Chumcred Limited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
