import ButtonLink from "./ButtonLink";
import Container from "./Container";

export default function ExecutiveCTA({ title, description }: { title: string; description: string }) {
  return <section className="py-20 sm:py-24"><Container><div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-premium sm:p-12 lg:p-16"><div className="absolute inset-0 hero-grid opacity-25"/><div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl"/><div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div className="max-w-3xl"><p className="eyebrow text-gold-300">The next conversation</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{title}</h2><p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">{description}</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><ButtonLink href="/contact">Partner with us <span>→</span></ButtonLink><ButtonLink href="/intelligence-economy" variant="secondary">Explore the Intelligence Economy</ButtonLink></div></div></div></Container></section>;
}
