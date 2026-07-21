import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function IntelligencePageHero({ eyebrow, title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: Props) {
  return (
    <section className="ie-hero relative overflow-hidden py-20 text-white sm:py-28">
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="ie-orb ie-orb-one" />
      <div className="section-shell relative">
        <p className="eyebrow text-emerald-300">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-9 text-white/68 sm:text-xl">{description}</p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryHref && primaryLabel ? <Link href={primaryHref} className="button-primary">{primaryLabel} <span>→</span></Link> : null}
            {secondaryHref && secondaryLabel ? <Link href={secondaryHref} className="button-secondary">{secondaryLabel}</Link> : null}
          </div>
        )}
      </div>
    </section>
  );
}
