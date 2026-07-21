type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light"
}: SectionHeaderProps) {
  const centered = align === "center";
  const dark = theme === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={dark ? "eyebrow text-emerald-300" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-white/68" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
