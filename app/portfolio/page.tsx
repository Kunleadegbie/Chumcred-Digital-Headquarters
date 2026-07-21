import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import DashboardVisual from "@/components/DashboardVisual";
import CTASection from "@/components/CTASection";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Chumcred Limited's portfolio of dashboards, AI platforms, financial intelligence tools, workforce projects, consulting engagements, training programs, and transformation initiatives."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold-300">Portfolio</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Transformation work expressed through platforms, dashboards, programs, and advisory systems.
            </h1>
          </div>
          <DashboardVisual label="Portfolio evidence placeholder" />
        </div>
      </section>
      <section className="py-20">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Showcase areas"
            title="A portfolio designed to communicate capability, credibility, and future commercial value."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <article key={item} className="premium-card rounded p-6">
                <span className="text-sm font-bold text-gold-500">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-navy-950">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Final case study details, client permissions, screenshots, metrics, and delivery
                  timelines can be inserted here as each initiative becomes public.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Explore how Chumcred can design a transformation portfolio for your institution." />
    </>
  );
}
