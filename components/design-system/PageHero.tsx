import type { ReactNode } from "react";
import Container from "./Container";
import ButtonLink from "./ButtonLink";

export default function PageHero({ eyebrow, title, description, primary, secondary, children }: { eyebrow: string; title: string; description: string; primary?: { href: string; label: string }; secondary?: { href: string; label: string }; children?: ReactNode }) {
  return (
    <section className="hero-surface relative overflow-hidden py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="eyebrow text-gold-300">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{description}</p>
          {(primary || secondary) && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{primary && <ButtonLink href={primary.href}>{primary.label}<span>→</span></ButtonLink>}{secondary && <ButtonLink href={secondary.href} variant="secondary">{secondary.label}</ButtonLink>}</div>}
        </div>
        {children ? <div>{children}</div> : null}
      </Container>
    </section>
  );
}
