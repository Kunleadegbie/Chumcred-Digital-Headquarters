import type { Metadata } from "next";
import Link from "next/link";
import PlatformCard from "@/components/PlatformCard";
import {
  Container,
  ExecutiveCTA,
  PageHero,
  SectionHeading,
  StatStrip
} from "@/components/design-system";
import { platforms } from "@/data/platforms";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "Explore Chumcred Limited's portfolio of AI-powered and intelligence-led platforms for workforce development, strategy, finance, healthcare, tax, learning, investment, and enterprise transformation."
};

const portfolioLayers = [
  {
    number: "01",
    title: "Human potential",
    description:
      "Platforms that strengthen employability, professional capability, education, and future readiness.",
    examples: "TalentIQ · Chumcred Academy LMS · Teens"
  },
  {
    number: "02",
    title: "Enterprise performance",
    description:
      "Intelligence products that help organisations diagnose performance, improve profitability, and execute strategy.",
    examples: "StratIQ · ProfitIQ · Chumcred Nexus"
  },
  {
    number: "03",
    title: "Decision intelligence",
    description:
      "Specialised systems that translate complex financial, compliance, health, and investment data into action.",
    examples: "Credit & Intelligence Engine · TaxIQ · HealthIQ · TradeIQ"
  },
  {
    number: "04",
    title: "Knowledge productivity",
    description:
      "AI-enabled tools that capture, organise, analyse, and activate organisational knowledge.",
    examples: "Voicescribe AI · Chumcred Nexus"
  }
];

const buildPrinciples = [
  {
    title: "Problem-led",
    description:
      "Every platform begins with a clearly defined business, professional, institutional, or societal problem."
  },
  {
    title: "Intelligence-first",
    description:
      "Data, human judgement, domain expertise, and artificial intelligence are combined to improve decision quality."
  },
  {
    title: "Designed for adoption",
    description:
      "Products are structured around practical workflows, understandable outputs, and measurable user value."
  },
  {
    title: "Built to scale",
    description:
      "The portfolio is designed for modular expansion across organisations, industries, markets, and partnerships."
  }
];

const engagementOptions = [
  {
    title: "Use a live platform",
    description:
      "Access an available Chumcred platform and apply its intelligence capabilities to your work or organisation.",
    action: "Explore live products",
    href: "#platform-portfolio"
  },
  {
    title: "Pilot with your organisation",
    description:
      "Test a platform within a defined team, programme, institution, or business process before wider deployment.",
    action: "Discuss a pilot",
    href: "/contact"
  },
  {
    title: "Co-develop a solution",
    description:
      "Partner with Chumcred to adapt an existing platform or build a new intelligence product around a strategic need.",
    action: "Start a conversation",
    href: "/partnerships"
  }
];

function PlatformArchitecture() {
  const steps = ["Data", "Knowledge", "AI", "Insight", "Decision", "Action", "Impact"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur sm:p-8">
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Intelligence product architecture
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
              Chumcred platforms convert information into outcomes through a connected intelligence cycle.
            </p>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-200">
            Portfolio 2.0
          </span>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-950/45 p-4 ${
                index === steps.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white">{step}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-gold-300"
                    style={{ width: `${42 + index * 8}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PlatformsPage() {
  const livePlatforms = platforms.filter((platform) => platform.status === "Live").length;
  const developmentPlatforms = platforms.filter(
    (platform) => platform.status === "In development"
  ).length;
  const categories = new Set(platforms.map((platform) => platform.category)).size;

  return (
    <>
      <PageHero
        eyebrow="Chumcred platform portfolio"
        title="Intelligent products built to turn complexity into confident action."
        description="Chumcred develops AI-powered and intelligence-led platforms that help professionals, businesses, institutions, and communities improve decisions, strengthen capability, and create measurable value."
        primary={{ href: "#platform-portfolio", label: "Explore our platforms" }}
        secondary={{ href: "/contact", label: "Discuss a pilot" }}
      >
        <PlatformArchitecture />
      </PageHero>

      <section className="relative z-10 -mt-7 pb-10 sm:-mt-10">
        <Container>
          <StatStrip
            items={[
              { value: `${platforms.length}`, label: "Platforms in the portfolio" },
              { value: `${livePlatforms}`, label: "Live digital products" },
              { value: `${developmentPlatforms}`, label: "Products in development" },
              { value: `${categories}`, label: "Intelligence domains" }
            ]}
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow="The portfolio logic"
              title="One intelligence ecosystem. Multiple pathways to value."
              description="The portfolio is not a collection of unrelated applications. Each product supports one or more layers of the Chumcred ecosystem—from developing people to improving enterprise performance and enabling better decisions."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {portfolioLayers.map((layer) => (
                <article
                  key={layer.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
                >
                  <span className="text-sm font-bold tracking-[0.16em] text-emerald-700">
                    {layer.number}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-navy-950">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{layer.description}</p>
                  <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold leading-6 text-slate-500">
                    {layer.examples}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="platform-portfolio" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Platform showcase"
              title="A growing portfolio spanning workforce, finance, strategy, healthcare, learning, investment, and enterprise intelligence."
              description="Explore the current Chumcred platform portfolio. Live platforms open in a new tab, while products in development are clearly identified."
            />
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-emerald-500 hover:text-emerald-700"
            >
              Request a platform briefing <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.name} platform={platform} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we build"
            title="Platform innovation grounded in real problems and practical adoption."
            description="Our product philosophy balances technological ambition with usability, domain relevance, responsible intelligence, and measurable outcomes."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {buildPrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{principle.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Ways to engage"
            title="Adopt, pilot, or co-create the next intelligence solution."
            description="Chumcred works with individuals, organisations, institutions, investors, and ecosystem partners at different stages of product adoption and development."
            dark
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {engagementOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">{option.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{option.description}</p>
                <Link
                  href={option.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-gold-300"
                >
                  {option.action} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-premium lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-emerald-50 p-8 sm:p-10 lg:p-12">
              <p className="eyebrow">Beyond software</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy-950 sm:text-4xl">
                Technology becomes valuable when people and organisations can use it well.
              </h2>
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-base leading-8 text-slate-600">
                Chumcred combines platform deployment with advisory services, implementation support,
                executive education, user capability development, and continuous improvement. This
                integrated model helps move clients from access to adoption—and from adoption to impact.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Platform deployment",
                  "Implementation support",
                  "Executive education",
                  "User adoption",
                  "Performance review"
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ExecutiveCTA
        title="Ready to pilot, adopt, fund, or co-develop a Chumcred platform?"
        description="Tell us the problem you are trying to solve. We will help you identify the right platform, define a practical pilot, or explore a strategic product partnership."
      />
    </>
  );
}
