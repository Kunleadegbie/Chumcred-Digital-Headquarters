import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Chumcred Academy",
  description:
    "Executive education, professional certification, corporate learning, and future-ready capability development from Chumcred."
};

const academyTracks = [
  {
    number: "01",
    title: "Executive Education",
    description:
      "Leadership and strategy programmes designed for executives navigating AI, transformation, and the Intelligence Economy.",
    outcomes: ["Strategic intelligence", "AI leadership", "Transformation capability"]
  },
  {
    number: "02",
    title: "Professional Certifications",
    description:
      "Structured certification pathways that build practical, measurable, and future-ready professional capability.",
    outcomes: ["Applied competence", "Portfolio evidence", "Recognised progression"]
  },
  {
    number: "03",
    title: "Corporate Learning",
    description:
      "Custom learning programmes aligned to organisational priorities, workforce transformation, and performance improvement.",
    outcomes: ["Custom curriculum", "Team capability", "Business outcomes"]
  },
  {
    number: "04",
    title: "Digital Academy",
    description:
      "Accessible technology-enabled learning experiences delivered through Chumcred's expanding digital education ecosystem.",
    outcomes: ["Flexible learning", "Digital resources", "Scalable delivery"]
  }
];

const learningModel = [
  {
    title: "Understand",
    description: "Build a clear foundation around the concepts, context, language, and strategic relevance of each subject."
  },
  {
    title: "Apply",
    description: "Translate knowledge into practical tools, exercises, simulations, and workplace-ready methods."
  },
  {
    title: "Demonstrate",
    description: "Produce evidence of capability through assessments, projects, presentations, and portfolio artefacts."
  },
  {
    title: "Transform",
    description: "Use new capability to improve decisions, performance, leadership, innovation, and organisational outcomes."
  }
];

const audiences = [
  "Executives and senior leaders",
  "Managers and emerging leaders",
  "Professionals and consultants",
  "Government and public institutions",
  "Corporate teams and business units",
  "Graduates and future-ready talent"
];

const deliveryFormats = [
  {
    title: "Instructor-led programmes",
    description: "Facilitated learning delivered physically, virtually, or through a blended structure."
  },
  {
    title: "Corporate academies",
    description: "Structured learning journeys designed around an organisation's strategy, roles, and capability gaps."
  },
  {
    title: "Digital learning",
    description: "Self-paced and supported programmes delivered through the Chumcred learning platform."
  },
  {
    title: "Executive workshops",
    description: "Focused sessions for leadership alignment, strategy, decision-making, and transformation priorities."
  }
];

const differentiators = [
  {
    title: "Practice before theory",
    description: "Learning is designed around decisions, work outputs, business problems, and measurable application."
  },
  {
    title: "Intelligence-led curriculum",
    description: "Programmes connect human intelligence, artificial intelligence, knowledge, data, and strategic execution."
  },
  {
    title: "Built for African realities",
    description: "Content reflects the opportunities, constraints, institutions, markets, and transformation needs of Africa."
  },
  {
    title: "Designed for transfer",
    description: "Participants leave with tools, templates, frameworks, and capabilities they can use immediately."
  },
  {
    title: "Executive relevance",
    description: "Learning connects directly to leadership priorities, organisational performance, and future readiness."
  },
  {
    title: "Institutional impact",
    description: "Corporate programmes are designed to strengthen teams, systems, culture, and long-term capability."
  }
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Chumcred Academy"
        title="Building intelligent professionals and future-ready organisations."
        description="Practical executive education, AI capability development, professional certification, and corporate learning designed around Africa's evolving economic realities and the demands of the Intelligence Economy."
        primary={{ href: "https://lms.chumcred.com", label: "Visit the Learning Platform" }}
        secondary={{ href: "/contact", label: "Discuss Corporate Learning" }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            The capability journey
          </p>
          <div className="mt-6 space-y-3">
            {["Knowledge", "Application", "Evidence", "Performance", "Transformation"].map(
              (stage, index) => (
                <div
                  key={stage}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-sm font-black text-navy-950">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-white">{stage}</span>
                </div>
              )
            )}
          </div>
        </div>
      </PageHero>

      <section className="relative -mt-8 z-10 pb-8">
        <Container>
          <StatStrip
            items={[
              { value: "4", label: "Learning pathways" },
              { value: "300+", label: "Professionals empowered" },
              { value: "Flexible", label: "Physical, virtual and digital" },
              { value: "Applied", label: "Outcome-focused learning" }
            ]}
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The academy mandate"
            title="Education that builds capability—not just awareness."
            description="Chumcred Academy connects knowledge to application. Our programmes are structured to help individuals and organisations understand emerging realities, build practical competence, demonstrate capability, and translate learning into stronger performance."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningModel.map((item, index) => (
              <FeatureCard
                key={item.title}
                index={`0${index + 1}`}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Learning pathways"
            title="Four connected routes to professional and organisational growth."
            description="The original Chumcred Academy tracks remain at the centre of the learning portfolio, now presented as an integrated capability-development system."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {academyTracks.map((track) => (
              <article
                key={track.title}
                className="premium-card rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-sm font-black text-white">
                    {track.number}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                    Academy track
                  </span>
                </div>
                <h2 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-navy-950">
                  {track.title}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">{track.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {track.outcomes.map((outcome) => (
                    <span
                      key={outcome}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://lms.chumcred.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center justify-center gap-2"
            >
              Visit the Learning Platform <span>↗</span>
            </a>
            <ButtonLink href="/contact" variant="outline">
              Request a Corporate Programme
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Who we serve"
              title="Learning designed for every level of the capability pipeline."
              description="From executive decision-makers to emerging professionals, Chumcred Academy creates relevant learning experiences for people who must lead, adapt, innovate, and perform in a rapidly changing economy."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience, index) => (
                <div
                  key={audience}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold leading-6 text-navy-950">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16 text-white sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Delivery architecture"
            title="Flexible formats. Consistent standards. Practical outcomes."
            description="Programmes can be delivered as standalone interventions or connected into longer capability journeys, depending on the needs of the learner or organisation."
            dark
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliveryFormats.map((format, index) => (
              <article
                key={format.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6"
              >
                <span className="text-sm font-black text-emerald-300">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{format.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{format.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Chumcred difference"
            title="A learning institution designed around real transformation."
            description="Our programmes combine intellectual depth, practical tools, executive relevance, and implementation discipline."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
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

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
            <div>
              <p className="eyebrow">Connected to the Chumcred ecosystem</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy-950 sm:text-4xl">
                Learning strengthened by research, frameworks, platforms, and consulting practice.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                Chumcred Academy does not operate in isolation. Its programmes draw from Chumcred&apos;s
                Intelligence Economy research, proprietary frameworks, digital platforms, executive
                advisory work, and real transformation engagements.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/intelligence-economy" variant="dark">
                  Explore the Intelligence Economy
                </ButtonLink>
                <ButtonLink href="/solutions" variant="outline">
                  View Our Solutions
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {["Research", "Frameworks", "Platforms", "Advisory", "Education", "Transformation"].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === "Platforms" ? "/platforms" : item === "Education" ? "/academy" : "/intelligence-economy"}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-navy-950 transition hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    {item} <span className="float-right text-emerald-700">→</span>
                  </Link>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      <ExecutiveCTA
        title="Build the capability your organisation needs for what comes next."
        description="Partner with Chumcred Academy to design executive education, workforce development, professional certification, or enterprise learning programmes aligned to your strategic priorities."
      />
    </>
  );
}
