import type { Metadata } from "next";
import {
  ButtonLink,
  Container,
  ExecutiveCTA,
  FeatureCard,
  PageHero,
  SectionHeading,
  StatStrip
} from "@/components/design-system";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Chumcred on technology, research, workforce development, advisory, investment, and Intelligence Economy initiatives."
};

const partnershipAreas = [
  {
    index: "01",
    title: "Technology & Platform Partnerships",
    description:
      "Co-develop, pilot, integrate, or scale intelligent platforms that solve meaningful enterprise and societal challenges.",
    examples: ["Product pilots", "Technology integration", "Market deployment"]
  },
  {
    index: "02",
    title: "Research & Knowledge Partnerships",
    description:
      "Collaborate on research, frameworks, publications, indices, and thought leadership for the Intelligence Economy.",
    examples: ["Joint research", "Executive publications", "Institutional knowledge"]
  },
  {
    index: "03",
    title: "Training & Workforce Partnerships",
    description:
      "Build practical programmes that strengthen professional capability, employability, leadership, and organisational readiness.",
    examples: ["Corporate academies", "Professional programmes", "Workforce transformation"]
  },
  {
    index: "04",
    title: "Corporate Advisory",
    description:
      "Engage Chumcred on business transformation, operational intelligence, strategy, revenue optimisation, and execution.",
    examples: ["Strategy engagements", "Transformation delivery", "Performance improvement"]
  },
  {
    index: "05",
    title: "Investment & Market Expansion",
    description:
      "Explore investment, commercialisation, distribution, and market-entry opportunities across Chumcred's growing ecosystem.",
    examples: ["Venture collaboration", "Distribution alliances", "Market entry"]
  },
  {
    index: "06",
    title: "TIEN & Intelligence Economy",
    description:
      "Support the global community, events, research, and institutional partnerships advancing the Intelligence Economy movement.",
    examples: ["Community programmes", "Knowledge events", "Movement partnerships"]
  }
];

const partnerGroups = [
  {
    title: "Corporates & Financial Institutions",
    description:
      "Organisations seeking practical solutions, stronger capability, intelligent platforms, and measurable transformation."
  },
  {
    title: "Governments & Public Institutions",
    description:
      "Public-sector partners advancing digital transformation, workforce capability, policy intelligence, and service delivery."
  },
  {
    title: "Universities & Training Institutions",
    description:
      "Academic and learning partners developing future-ready curricula, research, certification, and employability initiatives."
  },
  {
    title: "Technology Companies",
    description:
      "Product, cloud, data, AI, and infrastructure partners helping intelligent solutions move from concept to scale."
  },
  {
    title: "Investors & Development Partners",
    description:
      "Capital and development organisations supporting commercially viable platforms and high-impact institutional programmes."
  },
  {
    title: "Professional & Industry Networks",
    description:
      "Associations and communities expanding knowledge, professional standards, collaboration, and market access."
  }
];

const partnershipPathway = [
  {
    step: "01",
    title: "Explore",
    description: "Clarify the shared opportunity, institutional need, and strategic fit."
  },
  {
    step: "02",
    title: "Align",
    description: "Agree objectives, roles, outcomes, governance, and success measures."
  },
  {
    step: "03",
    title: "Design",
    description: "Develop the partnership model, programme, platform, or joint initiative."
  },
  {
    step: "04",
    title: "Deliver",
    description: "Execute with clear ownership, professional coordination, and active stakeholder engagement."
  },
  {
    step: "05",
    title: "Measure",
    description: "Track adoption, capability, commercial, institutional, and impact outcomes."
  },
  {
    step: "06",
    title: "Scale",
    description: "Expand successful pilots, deepen collaboration, and create sustained value."
  }
];

const principles = [
  {
    title: "Shared Value",
    description:
      "Every partnership should create meaningful value for the participating organisations and the people they serve."
  },
  {
    title: "Clear Accountability",
    description:
      "Roles, decisions, deliverables, governance, and measures of success should be understood from the beginning."
  },
  {
    title: "Practical Execution",
    description:
      "Strong ideas matter, but disciplined implementation determines whether a partnership produces results."
  },
  {
    title: "Long-Term Trust",
    description:
      "We approach collaboration as a relationship to be strengthened through integrity, responsiveness, and performance."
  }
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic partnerships"
        title="Let us build high-impact solutions together."
        description="Chumcred collaborates with businesses, governments, institutions, investors, educators, and ecosystem partners to create platforms, knowledge, capabilities, and transformation outcomes."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/platforms", label: "Explore our platforms" }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            Partnership architecture
          </p>
          <div className="mt-6 space-y-3">
            {["Shared opportunity", "Aligned capability", "Joint execution", "Measured impact", "Sustainable scale"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-xs font-black text-navy-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-white/85">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </PageHero>

      <section className="relative -mt-7 z-10 pb-10 sm:-mt-10">
        <Container>
          <StatStrip
            items={[
              { value: "6", label: "Partnership pathways" },
              { value: "8", label: "Industries served" },
              { value: "3+", label: "Intelligence platforms" },
              { value: "1", label: "Shared commitment to impact" }
            ]}
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why partner with Chumcred"
            title="An integrated partner across knowledge, technology, capability, and transformation."
            description="Our ecosystem enables partners to move beyond isolated projects. Research can shape strategy, strategy can inform platforms, platforms can strengthen delivery, and education can sustain adoption."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Strategic Intelligence",
                description:
                  "Research, insight, frameworks, and advisory that clarify opportunities and strengthen decisions."
              },
              {
                title: "Technology Platforms",
                description:
                  "Digital products and intelligent systems designed around real organisational and market needs."
              },
              {
                title: "Capability Development",
                description:
                  "Learning experiences that help executives, teams, and professionals apply new knowledge effectively."
              },
              {
                title: "Transformation Delivery",
                description:
                  "Practical implementation support that connects ideas, people, systems, and measurable outcomes."
              }
            ].map((item, index) => (
              <FeatureCard
                key={item.title}
                index={String(index + 1).padStart(2, "0")}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Partnership opportunities"
            title="Multiple pathways to create value together."
            description="Partnerships can begin with a focused pilot, a research collaboration, an executive programme, a platform opportunity, or a broader institutional transformation agenda."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnershipAreas.map((item) => (
              <article
                key={item.title}
                className="premium-card group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-black text-emerald-800">
                    {item.index}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-gold-400" />
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-[-0.025em] text-navy-950">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Who we partner with"
            title="Collaboration across sectors and institutional boundaries."
            description="We welcome partners with complementary strengths, aligned values, credible execution capability, and a genuine commitment to producing meaningful outcomes."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="h-1.5 w-14 rounded-full bg-emerald-400" />
                <h3 className="mt-5 text-lg font-semibold text-navy-950">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="From conversation to scale"
            title="A disciplined partnership pathway."
            description="We structure collaboration so that expectations are clear, decisions are timely, implementation is coordinated, and progress can be measured."
            dark
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {partnershipPathway.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="text-xs font-black tracking-[0.22em] text-emerald-300">
                  STEP {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="How we collaborate"
              title="Partnership principles that protect trust and performance."
              description="Successful partnerships require more than shared ambition. They need sound governance, transparent communication, practical execution, and mutual accountability."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-navy-950">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Begin with a focused opportunity</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-navy-950 sm:text-4xl">
                Bring us the challenge, opportunity, or idea you want to develop.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We will explore the strategic fit, clarify the most suitable partnership model,
                and identify a practical first step without forcing a one-size-fits-all approach.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact">
                Start a partnership conversation <span>→</span>
              </ButtonLink>
              <ButtonLink href="/solutions" variant="outline">
                Explore solutions
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <ExecutiveCTA
        title="The strongest partnerships combine complementary capability with a shared commitment to impact."
        description="Let us explore how Chumcred's research, platforms, advisory, education, and Intelligence Economy ecosystem can support your institution's next strategic initiative."
      />
    </>
  );
}
