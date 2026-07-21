import type { Metadata } from "next";
import Link from "next/link";
import DivisionCard from "@/components/DivisionCard";
import { ButtonLink, Container, ExecutiveCTA, FeatureCard, PageHero, SectionHeading, StatStrip } from "@/components/design-system";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Chumcred Limited's intelligence-led solutions across AI and technology, workforce development, financial intelligence, consulting, capacity development, and investments."
};

const outcomes = [
  ["01", "Sharper decisions", "Turn fragmented information into structured insight, executive clarity and practical priorities."],
  ["02", "Stronger capability", "Equip leaders, professionals and teams with the skills, systems and confidence to execute."],
  ["03", "Intelligent systems", "Design platforms, automation and workflows that improve speed, visibility and service delivery."],
  ["04", "Measurable transformation", "Translate strategy into phased implementation, accountable execution and sustainable value."],
] as const;

const engagementModels = [
  ["Advisory engagements", "Focused strategic support for defined business, institutional or market challenges."],
  ["Transformation programmes", "Multi-phase interventions combining diagnosis, solution design, implementation and capability transfer."],
  ["Platform solutions", "Intelligence products and digital tools that support recurring decisions, workflows and service delivery."],
  ["Executive education", "Custom learning programmes that strengthen leadership, digital competence, analytics and execution culture."],
] as const;

const deliveryPath = [
  ["Discover", "Clarify the challenge, context, stakeholders, available evidence and desired outcomes."],
  ["Diagnose", "Analyse root causes, constraints, capability gaps, risks and high-value opportunities."],
  ["Design", "Develop the roadmap, operating model, solution architecture or learning intervention."],
  ["Deliver", "Support implementation through advisory, technology, facilitation and programme management."],
  ["Develop", "Transfer knowledge, strengthen internal capability and embed repeatable ways of working."],
  ["Demonstrate", "Track outcomes, document value created and identify the next stage of improvement."],
] as const;

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Chumcred solutions"
        title="Intelligence-led solutions for organisations ready to move from ambition to measurable transformation."
        description="Chumcred brings together strategy, Artificial Intelligence, technology platforms, financial intelligence, workforce development, executive education and practical implementation support. Each solution can stand alone or combine into an integrated transformation programme."
        primary={{ href: "/contact", label: "Discuss your priorities" }}
        secondary={{ href: "/platforms", label: "Explore our platforms" }}
      >
        <div className="intelligence-console p-6 sm:p-8">
          <p className="eyebrow text-emerald-300">Integrated solution architecture</p>
          <div className="mt-6 space-y-3">
            {["Insight & diagnosis", "Strategy & solution design", "Technology & capability building", "Implementation & measurable impact"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-xs font-black text-emerald-300">0{index + 1}</span>
                <p className="text-sm font-semibold text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <StatStrip items={[
            { value: "6", label: "Connected solution divisions" },
            { value: "8", label: "Industries served" },
            { value: "3+", label: "Intelligence platforms" },
            { value: "300+", label: "Professionals empowered" }
          ]} />
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Our approach"
            title="The challenge determines the combination—not a fixed consulting template."
            description="Organisations rarely need one isolated service. They need the right combination of insight, people, process, technology and execution support. Chumcred assembles those capabilities around the outcome that matters."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map(([index, title, description]) => (
              <FeatureCard key={title} index={index} title={title} description={description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Solution portfolio"
            title="Six coordinated capability areas, connected by one intelligence-led growth agenda."
            description="Explore the divisions through which Chumcred builds platforms, develops people, strengthens institutions and supports market transformation."
            dark
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {divisions.map((division, index) => (
              <Link
                key={division.slug}
                href={`#${division.slug}`}
                className="rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-xs font-bold text-white/75 transition hover:border-emerald-300/50 hover:text-emerald-300"
              >
                {String(index + 1).padStart(2, "0")} · {division.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <DivisionCard key={division.title} division={division} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Ways to engage"
            title="Flexible delivery models for different levels of need and ambition."
            description="From a focused executive assignment to a multi-phase transformation programme, engagements are structured around scope, urgency, internal capability and the value to be created."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map(([title, description], index) => (
              <FeatureCard key={title} index={`0${index + 1}`} title={title} description={description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="From challenge to impact"
            title="A disciplined delivery pathway that keeps insight connected to execution."
            description="Our work is designed to create clarity early, reduce implementation risk and leave organisations with stronger internal capability."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliveryPath.map(([title, description], index) => (
              <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7">
                <span className="text-xs font-black text-emerald-700">STEP {index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-navy-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-50 py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">Integrated intelligence ecosystem</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy-950 sm:text-5xl">Solutions are strengthened by Chumcred's platforms, research, frameworks and executive education.</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">Clients can draw on more than advisory expertise. Chumcred connects original intellectual property, technology products, learning programmes and the Intelligence Economy knowledge platform to support long-term value creation.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/company" variant="dark">Explore Chumcred</ButtonLink>
            <ButtonLink href="/intelligence-economy" variant="outline">View our research</ButtonLink>
          </div>
        </Container>
      </section>

      <ExecutiveCTA
        title="Bring us the challenge. We will help structure the path from insight to impact."
        description="Engage Chumcred for intelligent platforms, strategic advisory, workforce development, executive education, financial intelligence and transformation programmes designed around real organisational priorities."
      />
    </>
  );
}
