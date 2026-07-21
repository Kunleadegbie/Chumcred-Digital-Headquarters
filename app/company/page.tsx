import type { Metadata } from "next";
import Link from "next/link";
import ExecutivePresence from "@/components/ExecutivePresence";
import { divisions } from "@/data/divisions";
import { ButtonLink, Container, ExecutiveCTA, FeatureCard, PageHero, SectionHeading, StatStrip } from "@/components/design-system";

export const metadata: Metadata = {
  title: "Company",
  description: "Discover Chumcred Limited—an African intelligence, AI, consulting, technology, research and executive education company building capability and measurable transformation."
};

const principles = [
  ["Intelligence", "We combine evidence, judgement, technology and context to support better decisions."],
  ["Integrity", "We build trust through responsible conduct, clarity, accountability and professional discipline."],
  ["Innovation", "We turn complex African challenges into practical products, systems and new opportunities."],
  ["Excellence", "We pursue high standards in research, advisory, learning, technology and execution."],
  ["Collaboration", "We work with institutions, leaders, specialists and communities to create shared value."],
  ["Impact", "We focus on solutions that improve capability, performance, resilience and long-term outcomes."]
] as const;

const differentiators = [
  ["01", "Intelligence-first approach", "Every engagement begins with structured insight, strategic clarity and a practical understanding of the operating environment."],
  ["02", "AI-powered innovation", "We design intelligent products and workflows that augment people, accelerate execution and improve decision quality."],
  ["03", "Proprietary intellectual property", "Our original frameworks translate emerging ideas into methods that executives, professionals and institutions can apply."],
  ["04", "Integrated delivery ecosystem", "Research, consulting, technology, executive education and community are connected rather than delivered in isolation."],
  ["05", "African context, global standards", "We build for local realities while applying internationally credible thinking, governance and professional standards."],
  ["06", "Measurable transformation", "We move beyond recommendations toward implementation pathways, capability transfer and tangible outcomes."]
] as const;

const industries = ["Financial Services", "Telecommunications", "Government", "Education", "Manufacturing", "Healthcare", "SMEs", "Energy & Infrastructure"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Chumcred Limited"
        title="Building intelligence. Driving transformation. Creating lasting impact."
        description="Chumcred Limited is an African Intelligence, AI, Consulting and Capacity Development company helping organisations, governments and professionals thrive in the Intelligence Economy through technology platforms, strategic advisory, research, executive education and proprietary intellectual property."
        primary={{ href: "/solutions", label: "Explore our solutions" }}
        secondary={{ href: "/leadership", label: "Meet our leadership" }}
      >
        <div className="intelligence-console p-6 sm:p-8">
          <p className="eyebrow text-emerald-300">The Chumcred model</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Research & Insight", "Frameworks & Advisory", "Technology Platforms", "Executive Education", "Community & Partnerships", "Measurable Transformation"].map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <span className="text-xs font-black text-gold-300">0{index + 1}</span>
                <p className="mt-2 text-sm font-semibold text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <StatStrip items={[
            { value: "300+", label: "Professionals empowered" },
            { value: "8", label: "Industries served" },
            { value: "3+", label: "Intelligence platforms" },
            { value: "3", label: "Strategic transformation projects" }
          ]} />
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionHeading eyebrow="Our story" title="A platform-minded company for the next generation of African enterprise." description="Chumcred was shaped by the belief that Africa's next phase of growth will be led by organisations that combine local understanding, human capability and intelligent systems. What began as a commitment to solve practical business and professional challenges has evolved into an integrated ecosystem spanning AI products, financial intelligence, consulting, workforce development, research and executive education." />
          <div className="premium-card rounded-[1.75rem] p-8 sm:p-10">
            <p className="eyebrow">From capability to institution</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-navy-950">Built for African realities. Designed for global relevance.</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <p>Chumcred brings together practical consulting experience, technology development, original research, professional learning and an expanding portfolio of intelligence platforms.</p>
              <p>The company is now developing into a permanent home for the Intelligence Economy—an institution that helps leaders, organisations and professionals convert information, technology, knowledge and judgement into sustainable value.</p>
            </div>
            <Link href="/leadership" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy-950 transition hover:text-emerald-700">Explore the founder's vision <span>→</span></Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Vision, mission and purpose" title="A clear mandate for Africa's intelligent future." align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <FeatureCard index="V" title="Vision" description="To become Africa's leading Intelligence company, enabling organisations and professionals to thrive in the Intelligence Economy." />
            <FeatureCard index="M" title="Mission" description="To create measurable value through Intelligence, Artificial Intelligence, executive education, innovative technology platforms and strategic transformation." />
            <FeatureCard index="P" title="Purpose" description="To build intelligence that transforms people, businesses and nations." />
          </div>
        </Container>
      </section>

      <ExecutivePresence />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="The Chumcred difference" title="What makes our model distinctive." description="We combine strategic thinking, applied technology, original intellectual property and capability development within one coordinated system." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(([index, title, description]) => <FeatureCard key={title} index={index} title={title} description={description} />)}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container>
          <SectionHeading eyebrow="Core capabilities" title="Where Chumcred builds long-term value." description="Our operating divisions provide complementary capabilities that can stand alone or combine into integrated transformation programmes." dark />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, index) => (
              <article key={division.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-7 transition hover:-translate-y-1 hover:border-emerald-400/40">
                <span className="text-xs font-black text-gold-300">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{division.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{division.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">{division.capabilities.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70">{item}</span>)}</div>
                <Link href={`/solutions#${division.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">Explore capability <span>→</span></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Industries we serve" title="Cross-sector intelligence grounded in operating reality." description="Our experience and solutions span sectors where technology, people, risk, strategy and execution increasingly converge." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => <div key={industry} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="text-xs font-black text-emerald-700">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold text-navy-950">{industry}</h3></div>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="The Chumcred ecosystem" title="One connected system—from insight to impact." description="Each part of Chumcred strengthens the others, creating a pathway from new knowledge to implementation and measurable value." align="center" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {["Research", "Proprietary Frameworks", "Strategic Advisory", "Technology Platforms", "Executive Education", "Transformation & Impact"].map((item, index) => <div key={item} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"><span className="text-xs font-black text-emerald-700">STEP {index + 1}</span><h3 className="mt-3 text-lg font-semibold text-navy-950">{item}</h3>{index < 5 ? <span className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-navy-950 px-2 py-1 text-xs text-white md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0">→</span> : null}</div>)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our values" title="The principles that guide how we build, advise and lead." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{principles.map(([title, description], index) => <FeatureCard key={title} index={`0${index + 1}`} title={title} description={description} />)}</div>
        </Container>
      </section>

      <section className="bg-emerald-50 py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Why organisations choose Chumcred" title="Executive thinking with a practical implementation mindset." description="Clients and partners engage Chumcred when they need more than a generic report, isolated training or stand-alone technology product." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Executive-level expertise", "Practical implementation pathways", "Proprietary methodologies", "AI-enabled delivery", "Sustainable partnerships", "Measurable outcomes"].map((item) => <div key={item} className="rounded-2xl border border-emerald-100 bg-white p-5 text-sm font-bold text-navy-950 shadow-sm"><span className="mr-3 text-emerald-600">✓</span>{item}</div>)}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium sm:p-12 lg:p-16">
          <p className="eyebrow">Looking ahead</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl"><h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-navy-950 sm:text-5xl">We are building more than a consulting company.</h2><p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">Chumcred is creating an Intelligence institution that develops people, transforms organisations and contributes to the growth of the Intelligence Economy across Africa and beyond.</p></div>
            <ButtonLink href="/intelligence-economy" variant="dark">Discover the vision <span>→</span></ButtonLink>
          </div>
        </Container>
      </section>

      <ExecutiveCTA title="Build the next chapter of intelligent transformation with Chumcred." description="Partner with us to develop intelligence platforms, stronger organisations, executive capability, original research and practical transformation programmes designed for measurable impact." />
    </>
  );
}
