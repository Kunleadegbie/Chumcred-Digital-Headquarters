import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import StatsSection from "@/components/StatsSection";
import PlatformCard from "@/components/PlatformCard";
import CTASection from "@/components/CTASection";
import ExecutivePresence from "@/components/ExecutivePresence";
import { platforms } from "@/data/platforms";
import { divisions } from "@/data/divisions";
import { intelligenceArticles } from "@/data/intelligenceArticles";
import { frameworkPublications, researchPublications } from "@/data/intelligencePublications";

export const metadata: Metadata = {
  title: "Building Africa's Intelligence Economy",
  description:
    "Chumcred Limited combines intelligent technology, workforce development, financial insight, executive education, research, and strategic advisory to help African institutions achieve measurable transformation.",
};

const whyChumcred = [
  {
    number: "01",
    title: "Intelligence",
    description: "We help leaders turn information, data, knowledge, and experience into better decisions and measurable outcomes.",
  },
  {
    number: "02",
    title: "Innovation",
    description: "We build AI-powered products, practical digital tools, and new operating models around real African opportunities.",
  },
  {
    number: "03",
    title: "Impact",
    description: "We connect strategy, people, technology, and execution to create transformation that can be seen and measured.",
  },
];

const valuePillars = [
  {
    number: "01",
    title: "Intelligent Platforms",
    description: "Practical digital products that convert data, workflows, and business challenges into better decisions.",
  },
  {
    number: "02",
    title: "Empowered People",
    description: "Workforce, employability, leadership, and executive education solutions that strengthen human capability.",
  },
  {
    number: "03",
    title: "Stronger Enterprises",
    description: "Advisory, financial intelligence, and transformation systems that improve performance and resilience.",
  },
  {
    number: "04",
    title: "African Intelligence",
    description: "Research, frameworks, and market understanding built around Africa's realities and opportunities.",
  },
];

const industries = [
  "Banking & Financial Services",
  "Telecommunications",
  "Government & Public Sector",
  "Education & Workforce",
  "Healthcare",
  "SMEs & Enterprise",
  "Investment & Real Estate",
  "Technology & Innovation",
];

const successStories = [
  {
    sector: "Government & Public Sector",
    title: "From concept to bankable implementation",
    description: "Strategic project structuring, stakeholder alignment, investor readiness, and implementation roadmaps for complex public-interest initiatives.",
  },
  {
    sector: "Corporate Transformation",
    title: "Improving performance through intelligence",
    description: "Revenue optimisation, operational diagnostics, executive dashboards, and transformation support for organisations seeking measurable growth.",
  },
  {
    sector: "Education & Workforce",
    title: "Building future-ready professional capability",
    description: "AI, analytics, leadership, employability, and digital-transformation programmes designed for professionals, institutions, and emerging talent.",
  },
];

const partnerGroups = [
  "Government institutions",
  "Banks & financial institutions",
  "Universities & learning organisations",
  "Technology companies",
  "Development partners",
  "Corporate enterprises",
];

const featuredPlatforms = [
  "TalentIQ",
  "Credit & Intelligence Engine",
  "Chumcred Academy LMS",
  "StratIQ",
  "HealthIQ",
]
  .map((name) => platforms.find((platform) => platform.name === name))
  .filter((platform): platform is (typeof platforms)[number] => Boolean(platform));

const latestArticles = intelligenceArticles.slice(0, 2);
const latestFrameworks = frameworkPublications.slice(0, 2);
const latestResearch = researchPublications.slice(0, 2);

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Why Chumcred"
            title="Intelligence, innovation, and impact—working together."
            description="Chumcred exists to help people and organisations move beyond information access toward intelligent action, stronger capability, and measurable transformation."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyChumcred.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">{item.number}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-navy-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeader
              eyebrow="The Chumcred ecosystem"
              title="One group. Multiple capabilities. A single intelligence-led vision."
              description="Chumcred brings together technology, financial intelligence, workforce development, executive learning, advisory, research, and investment thinking within one integrated African innovation ecosystem."
            />

            <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {valuePillars.map((pillar) => (
                <article key={pillar.number} className="group bg-white p-7 transition hover:bg-navy-950 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 transition group-hover:text-emerald-300">{pillar.number}</span>
                    <span className="h-px w-10 bg-slate-200 transition group-hover:bg-white/20" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-navy-950 transition group-hover:text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 transition group-hover:text-white/60">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Business divisions"
            title="Integrated capabilities for complex growth and transformation challenges."
            description="Our divisions work independently and together, allowing Chumcred to address technology, talent, finance, strategy, learning, research, and investment needs through one coordinated relationship."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <Link
                key={division.slug}
                href={`/solutions#${division.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-slate-400">0{index + 1}</span>
                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">→</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-navy-950">{division.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{division.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {division.capabilities.map((capability) => (
                    <span key={capability} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{capability}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Featured platforms"
              title="Intelligence products built around real African business needs."
              description="Our platforms address employability, credit, strategy, profitability, taxation, healthcare, investment, productivity, and enterprise transformation."
            />
            <Link href="/platforms" className="inline-flex w-fit items-center gap-2 text-sm font-bold text-navy-950 transition hover:text-emerald-700">
              Explore all platforms <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredPlatforms.map((platform, index) => (
              <PlatformCard key={platform.name} platform={platform} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ExecutivePresence compact />

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur sm:p-9">
            <p className="eyebrow text-gold-300">The Intelligence Economy™</p>
            <p className="mt-6 text-2xl font-semibold leading-snug tracking-[-0.03em] sm:text-3xl">
              Changing the way Africa creates value through research, education, technology, and transformation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Research", "Education", "Transformation"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-sm font-semibold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="A new economic era"
              title="From information advantage to intelligence advantage."
              description="The Intelligence Economy is emerging as the next stage of economic and organisational development—where the ability to combine human judgement, artificial intelligence, knowledge, decisions, and innovation becomes a defining source of value."
              theme="dark"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/intelligence-economy/articles" className="button-primary">Read articles <span>→</span></Link>
              <Link href="/intelligence-economy/frameworks" className="button-secondary">Framework Library</Link>
              <Link href="/intelligence-economy/research" className="button-secondary">Research Centre</Link>
              <a href="https://www.linkedin.com/groups/26390107" target="_blank" rel="noopener noreferrer" className="button-secondary">Join TIEN</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Latest knowledge"
            title="Original ideas, frameworks, and publications for the Intelligence Economy."
            description="Explore Chumcred's growing body of articles, proprietary frameworks, executive briefs, and research publications."
            align="center"
          />
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Latest articles</p>
              <div className="mt-6 space-y-5">
                {latestArticles.map((article) => (
                  <Link key={article.slug} href={`/intelligence-economy/articles/${article.slug}`} className="block border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold leading-6 text-navy-950 hover:text-emerald-700">{article.title}</p>
                    <p className="mt-2 text-xs text-slate-500">{article.readingTime}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Featured frameworks</p>
              <div className="mt-6 space-y-5">
                {latestFrameworks.map((framework) => (
                  <Link key={framework.slug} href={`/intelligence-economy/frameworks/${framework.slug}`} className="block border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold leading-6 text-navy-950 hover:text-emerald-700">{framework.title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{framework.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Research publications</p>
              <div className="mt-6 space-y-5">
                {latestResearch.map((publication) => (
                  <Link key={publication.slug} href={`/intelligence-economy/research/${publication.slug}`} className="block border-b border-slate-200 pb-5 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold leading-6 text-navy-950 hover:text-emerald-700">{publication.title}</p>
                    <p className="mt-2 text-xs text-slate-500">{publication.type} · {publication.readingTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Success stories"
            title="Transformation across institutions, enterprises, and people."
            description="Our work connects strategic thinking with practical delivery across public-sector initiatives, corporate performance, and workforce development."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {successStories.map((story) => (
              <article key={story.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-emerald-700">{story.sector}</p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-navy-950">{story.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{story.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Industries and ecosystems"
            title="Experience shaped across the sectors driving African growth."
            description="Chumcred applies cross-sector insight while tailoring each engagement to the operating realities, stakeholders, and outcomes that matter most."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <div key={industry} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold text-navy-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Partnership ecosystem"
            title="Built for collaboration across sectors and institutions."
            description="We welcome partnerships that combine market access, technology, funding, research, learning, and implementation capability."
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnerGroups.map((partner) => (
              <div key={partner} className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-center text-sm font-semibold text-navy-900 shadow-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-gold-50 py-20 sm:py-24">
        <div className="section-shell text-center">
          <p className="eyebrow">Join the movement</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-navy-950 sm:text-6xl">
            Join Africa&apos;s Intelligence Movement.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Connect with the community, explore partnership opportunities, learn through the Academy, or begin a strategic conversation with Chumcred.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href="https://www.linkedin.com/groups/26390107" target="_blank" rel="noopener noreferrer" className="button-primary">Join TIEN <span>↗</span></a>
            <Link href="/academy" className="button-secondary">Explore Academy</Link>
            <Link href="/partnerships" className="button-secondary">Partner with Chumcred</Link>
            <Link href="/contact" className="button-secondary">Book a consultation</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
