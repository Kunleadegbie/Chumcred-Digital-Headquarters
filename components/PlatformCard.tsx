import Image from "next/image";
import type { Platform } from "@/data/platforms";

const statusStyles: Record<NonNullable<Platform["status"]>, string> = {
  Live: "border-emerald-300/25 bg-emerald-300/15 text-emerald-200",
  "In development": "border-gold-300/25 bg-gold-300/15 text-gold-200",
  "Coming soon": "border-white/15 bg-white/10 text-white/70"
};

export default function PlatformCard({ platform }: { platform: Platform; index?: number }) {
  const isLiveLink = platform.link !== "#";
  const status = platform.status ?? "Coming soon";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="platform-visual relative min-h-48 overflow-hidden text-white">
        {platform.image ? (
          <>
            <Image
              src={platform.image}
              alt={`${platform.name} platform preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 hero-grid opacity-25" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="relative m-5 flex min-h-40 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg font-semibold text-white">
                  {platform.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Intelligence platform
                </span>
              </div>
              <p className="max-w-xs text-xs leading-5 text-white/45">
                Product interface preview will be added as the platform visual library expands.
              </p>
            </div>
          </>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <span className="max-w-[70%] rounded-full border border-white/15 bg-navy-950/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-200 backdrop-blur">
            {platform.category}
          </span>
          <span
            className={`rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] backdrop-blur ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-navy-950">
          {platform.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{platform.description}</p>

        <div className="mt-5 border-l-2 border-emerald-200 pl-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Designed for
          </p>
          <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">
            {platform.targetUsers}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {platform.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-700"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {isLiveLink ? (
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-950 transition group-hover:text-emerald-700"
            >
              View platform <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-400">
              Platform preview coming soon <span aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
