import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutivePresence from "@/components/ExecutivePresence";
import {
  ButtonLink,
  Container,
  ExecutiveCTA,
  FeatureCard,
  PageHero,
  QuotePanel,
  SectionHeading,
  Timeline,
} from "@/components/design-system";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet Adekunle Adegbie, PhD, Founder and Chief Executive of Chumcred Limited, and explore the leadership vision behind Africa's Intelligence Economy.",
};

const journey = [
  { period: "2018", title: "Chumcred Academy", description: "A commitment to capability development and accessible professional learning." },
  { period: "Enterprise transformation", title: "Consulting and intelligence", description: "Business analysis, financial intelligence, operational improvement, and strategic advisory." },
  { period: "Platform era", title: "AI and digital products", description: "TalentIQ, StratIQ, TradeIQ, HealthIQ, TaxIQ, ProfitIQ, and other intelligence-led solutions." },
  { period: "Thought leadership", title: "The Intelligence Economy", description: "Original frameworks, articles, research, executive education, and the TIEN professional community." },
  { period: "The future", title: "An African institution with global relevance", description: "A research, technology, education, advisory, and community ecosystem advancing intelligent prosperity." },
];

const impact = [
  ["300+", "Professionals empowered"],
  ["3+", "Intelligence platforms"],
  ["8", "Industries served"],
  ["3", "Strategic transformation projects"],
  ["Growing", "Proprietary framework library"],
  ["Expanding", "Research publications"],
];

const drivers = [
  ["Research", "Creating original ideas, frameworks, and publications that clarify the emerging Intelligence Economy."],
  ["Innovation", "Building practical AI and intelligence platforms around real African business and workforce needs."],
  ["Transformation", "Helping organisations improve how they decide, operate, serve customers, manage risk, and grow."],
  ["Education", "Developing professionals and leaders who can work confidently and responsibly in an AI-enabled world."],
];

const principles = [
  ["Purpose before prominence", "Leadership begins with the problem being solved and the people whose future can be improved."],
  ["Ideas must become action", "Research and strategy matter most when they translate into practical systems, decisions, and measurable outcomes."],
  ["Technology must remain human", "Artificial intelligence should strengthen judgement, capability, inclusion, and responsible progress."],
  ["Institutions outlive individuals", "The long-term ambition is to build enduring platforms, knowledge systems, and professional communities."],
  ["Africa can shape the next era", "The continent should not only adopt the Intelligence Economy; it should contribute ideas, products, and models to it."],
  ["Learning never stops", "Sustained leadership requires curiosity, reflection, experimentation, and continuous professional development."],
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Purpose-led leadership for Africa's intelligence-driven future."
        description="Chumcred's leadership philosophy connects ideas with implementation, technology with human capability, and enterprise growth with lasting institutional impact."
        primary={{ href: "/company", label: "Discover Chumcred" }}
        secondary={{ href: "/partnerships", label: "Partner with us" }}
      >
        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
          <Image src="/images/founder-adegbie.jpg" alt="Adekunle Adegbie, PhD" fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-[center_16%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
            <p className="text-xl font-semibold">Adekunle Adegbie, PhD</p>
            <p className="mt-1 text-sm text-white/65">Founder &amp; Chief Executive, Chumcred Limited</p>
          </div>
        </div>
      </PageHero>

      <ExecutivePresence />

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionHeading eyebrow="Leadership philosophy" title="Building intelligence that serves people, organisations, and society." description="Chumcred's leadership approach is grounded in the conviction that the next generation of successful institutions will combine human judgement, artificial intelligence, knowledge systems, and disciplined execution." />
            <QuotePanel quote="Technology may power the Intelligence Economy, but Intelligence Capital is what determines who succeeds in it." attribution="Adekunle Adegbie, PhD" role="Founder & Chief Executive, Chumcred Limited" />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="The journey" title="From professional capability to an integrated intelligence institution." description="The Chumcred journey reflects a progressive expansion from learning and consulting into digital platforms, original research, executive education, and community building." align="center" />
          <div className="mt-14"><Timeline items={journey} /></div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container>
          <SectionHeading eyebrow="Leadership impact" title="An expanding platform for knowledge, capability, and transformation." description="These indicators represent the foundation already established and the scale of opportunity still ahead." dark align="center" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {impact.map(([value, label]) => (
              <div key={label} className="bg-navy-950 p-8 text-center transition hover:bg-white/[0.035]">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white">{value}</p>
                <p className="mt-3 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What drives the work" title="Four commitments shaping the Chumcred mission." description="Each commitment strengthens a different part of the Chumcred ecosystem while contributing to one shared goal: intelligent, sustainable progress." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {drivers.map(([title, description], index) => <FeatureCard key={title} index={`0${index + 1}`} title={title} description={description} />)}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Leadership principles" title="The standards guiding decisions, relationships, and institutional growth." description="These principles shape how Chumcred develops ideas, builds products, serves clients, educates professionals, and contributes to the Intelligence Economy." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([title, description], index) => <FeatureCard key={title} index={`0${index + 1}`} title={title} description={description} />)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-5xl text-center">
          <p className="eyebrow">Join the movement</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-navy-950 sm:text-5xl">Help build the next era of intelligent prosperity.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Explore the knowledge hub, collaborate with Chumcred, or join the global TIEN community connecting professionals around the Intelligence Economy.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/intelligence-economy" variant="dark">Explore the Intelligence Economy <span>→</span></ButtonLink>
            <ButtonLink href="/partnerships" variant="outline">Partner with Chumcred</ButtonLink>
            <a href="https://www.linkedin.com/groups/26390107" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-800">Join TIEN</a>
          </div>
        </Container>
      </section>

      <ExecutiveCTA title="Build an intelligence-led future with Chumcred." description="Work with a leadership team committed to converting ideas, technology, knowledge, and human capability into meaningful organisational and societal outcomes." />
    </>
  );
}
