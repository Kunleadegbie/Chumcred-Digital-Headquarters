export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; dark?: boolean }) {
  const center = align === "center";
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className={`eyebrow ${dark ? "text-emerald-300" : ""}`}>{eyebrow}</p><h2 className={`mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-navy-950"}`}>{title}</h2>{description ? <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-white/68" : "text-slate-600"}`}>{description}</p> : null}</div>;
}
