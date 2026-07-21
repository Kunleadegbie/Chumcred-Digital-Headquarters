import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";

export const metadata: Metadata = {
  title: "The Intelligence Economy | Chumcred Intelligence Institute",
  description:
    "Explore the Intelligence Economy, Intelligence Capital, original frameworks, executive research, education, and the TIEN community from Chumcred Intelligence Institute.",
  keywords: [
    "Intelligence Economy",
    "Intelligence Capital",
    "AI economy Africa",
    "organizational intelligence",
    "executive intelligence",
    "Chumcred Intelligence Institute",
    "TIEN"
  ],
  openGraph: {
    title: "The Intelligence Economy | Chumcred Intelligence Institute",
    description:
      "The global knowledge repository for research, frameworks, education, and community around the Intelligence Economy.",
    type: "website"
  }
};

const eras = [
  {
    number: "01",
    era: "Industrial Economy",
    period: "Mechanisation and scale",
    driver: "Machines and physical production",
    asset: "Capital equipment",
    capability: "Operational efficiency",
    description:
      "Economic value was created by transforming physical resources through mechanisation, factories, and scaled production."
  },
  {
    number: "02",
    era: "Information Economy",
    period: "Digitisation and connectivity",
    driver: "Information and software",
    asset: "Data and digital infrastructure",
    capability: "Information access",
    description:
      "Digital networks made information easier to create, distribute, store, and use across industries and borders."
  },
  {
    number: "03",
    era: "Intelligence Economy",
    period: "Augmentation and intelligent action",
    driver: "Human and machine intelligence",
    asset: "Intelligence Capital™",
    capability: "Decision and adaptive advantage",
    description:
      "Value increasingly comes from combining judgement, artificial intelligence, knowledge, data, and networks to make better decisions and create new possibilities."
  }
];

const drivers = [
  ["Artificial Intelligence", "Amplifies analysis, creativity, automation, and decision-making at unprecedented scale."],
  ["Human Intelligence", "Provides judgement, purpose, creativity, ethics, empathy, and leadership."],
  ["Knowledge", "Turns accumulated experience, research, and expertise into reusable institutional capability."],
  ["Decision Intelligence", "Connects evidence, context, judgement, and action to improve the quality of outcomes."],
  ["Automation", "Releases people from repetitive work and enables faster, more consistent execution."],
  ["Continuous Learning", "Allows people and organisations to adapt as technology, markets, and expectations change."]
];

const pillars = [
  {
    code: "H",
    title: "Human Intelligence",
    description: "Critical thinking, judgement, creativity, emotional intelligence, leadership, and problem-solving."
  },
  {
    code: "A",
    title: "Artificial Intelligence",
    description: "The technologies that augment human capability, automate work, and reveal deeper patterns."
  },
  {
    code: "K",
    title: "Knowledge Intelligence",
    description: "The ability to capture, organise, share, and apply knowledge where it creates the greatest value."
  },
  {
    code: "D",
    title: "Data Intelligence",
    description: "The capability to transform reliable data into insight, foresight, and effective action."
  },
  {
    code: "N",
    title: "Network Intelligence",
    description: "The value created through relationships, communities, partnerships, platforms, and connected ecosystems."
  }
];

const frameworks = [
  ["Intelligence Capital Framework™", "A strategic model for identifying and building the intelligence assets that create sustainable advantage."],
  ["Five Pillars of Intelligence Capital™", "A practical architecture connecting human, artificial, knowledge, data, and network intelligence."],
  ["Intelligence Value Chain™", "A model showing how information is transformed into insight, decisions, action, learning, and value."],
  ["Intelligence Maturity Model™", "A pathway for assessing how effectively an organisation develops and applies intelligence."],
  ["Intelligence Transformation Framework™", "A structured approach to redesigning organisations for the Intelligence Economy."],
  ["Professional Intelligence Operating System™", "A personal operating model for learning, judgement, productivity, leadership, and continuous development."]
];

const researchFormats = [
  ["Research Reports", "Original studies on intelligence-led growth, workforce transformation, enterprise AI, and Africa's digital future."],
  ["White Papers", "In-depth analysis of emerging concepts, frameworks, strategic issues, and practical applications."],
  ["Executive Briefs", "Concise, decision-oriented insight designed for leaders, boards, policymakers, and institutional partners."],
  ["Industry Studies", "Sector-focused intelligence covering financial services, telecoms, government, education, healthcare, and SMEs."],
  ["Books & Publications", "Long-form intellectual property that develops the theory and practice of the Intelligence Economy."],
  ["Global Intelligence Index", "A future benchmark for assessing intelligence capability across organisations, industries, and economies."]
];

const articles = [
  {
    category: "Intelligence Economy Series",
    title: "The Intelligence Economy: The Next Great Economic Era",
    summary: "Why intelligence is becoming the defining strategic asset for individuals, organisations, and nations.",
    meta: "Executive Insight · 8 min read"
  },
  {
    category: "Intelligence Capital",
    title: "The Five Pillars of Intelligence Capital™",
    summary: "A practical framework for building sustainable advantage through human and machine capability.",
    meta: "Framework Note · 10 min read"
  },
  {
    category: "Leadership",
    title: "Leading in an Intelligence-Driven Organisation",
    summary: "How leaders can strengthen judgement, learning, adaptability, and responsible AI adoption.",
    meta: "Leadership Brief · 7 min read"
  }
];

const education = [
  ["CAIPP™", "Certified AI Productivity Professional programme for developing practical and responsible AI capability."],
  ["Executive Masterclasses", "Focused learning experiences for senior leaders navigating AI, strategy, transformation, and intelligence."],
  ["Corporate Programmes", "Tailored capability-development programmes aligned with organisational priorities and performance goals."],
  ["Professional Certifications", "Structured pathways for professionals seeking recognised competence in emerging intelligence disciplines."]
];

export default function IntelligenceEconomyPage() {
  return (
    <>
      <section className="ie-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="ie-orb ie-orb-one" />
        <div className="ie-orb ie-orb-two" />
        <div className="section-shell relative grid min-h-[720px] gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow text-emerald-300">Chumcred Intelligence Institute</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Welcome to the <span className="text-gradient-gold">Intelligence Economy.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/68 sm:text-xl sm:leading-9">
              The next stage of economic evolution—where intelligence, rather than physical assets or information alone, becomes a primary source of value creation, competitive advantage, and sustainable prosperity.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/intelligence-economy/intelligence-capital" className="button-primary">Explore Intelligence Capital™ <span>→</span></Link>
              <Link href="/intelligence-economy/research" className="button-secondary">Read Latest Research</Link>
              <a href="https://www.linkedin.com/groups/26390107" target="_blank" rel="noopener noreferrer" className="button-secondary">Join TIEN</a>
            </div>
          </div>

          <div className="ie-network-panel relative mx-auto w-full max-w-[570px] rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_50px_140px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-300">Intelligence system</p>
                <p className="mt-2 text-sm text-white/55">Five connected sources of advantage</p>
              </div>
              <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
            </div>
            <div className="relative mt-7 grid min-h-[420px] place-items-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-navy-950/45">
              <div className="absolute inset-0 intelligence-radial-grid opacity-60" />
              <div className="ie-core relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-gold-300/40 bg-navy-950 text-center shadow-[0_0_80px_rgba(217,164,65,0.18)]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">Core asset</span>
                  <strong className="mt-2 block text-xl leading-tight">Intelligence<br />Capital™</strong>
                </div>
              </div>
              {[
                ["Human", "left-[8%] top-[14%]"],
                ["Artificial", "right-[7%] top-[15%]"],
                ["Knowledge", "left-[4%] bottom-[17%]"],
                ["Data", "right-[9%] bottom-[15%]"],
                ["Network", "left-1/2 top-[5%] -translate-x-1/2"]
              ].map(([label, position]) => (
                <div key={label} className={`absolute ${position} z-10 rounded-full border border-white/15 bg-white/[0.075] px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur`}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IntelligenceSubnav />

      <section id="overview" className="scroll-mt-36 py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow">A new economic era</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-navy-950 sm:text-5xl">
              Intelligence is becoming the new infrastructure of value.
            </h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            <p>
              The Intelligence Economy is not simply an economy powered by artificial intelligence. It is an economic system in which people, organisations, institutions, and nations create value by combining human capability, technology, knowledge, data, judgement, and connected networks.
            </p>
            <p>
              In this era, access to information is no longer enough. Advantage increasingly depends on the ability to interpret complexity, make better decisions, learn continuously, coordinate intelligence, and convert insight into meaningful action.
            </p>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/65 p-7 text-navy-900">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">The defining transition</p>
              <p className="mt-4 text-xl font-semibold leading-8">From owning information to developing the intelligence required to use it exceptionally well.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="eras" className="scroll-mt-36 bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Economic evolution</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-5xl">The Three Great Economic Eras</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Each economic era is shaped by the asset and capability that most strongly determine how value is created.</p>
          </div>
          <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-slate-200 via-emerald-300 to-gold-300 lg:block" />
            {eras.map((item, index) => (
              <article key={item.era} className={`relative rounded-[2rem] border p-7 sm:p-8 ${index === 2 ? "border-emerald-300 bg-navy-950 text-white shadow-premium" : "border-slate-200 bg-white"}`}>
                <span className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold ${index === 2 ? "bg-emerald-400 text-navy-950" : "bg-slate-100 text-slate-500"}`}>{item.number}</span>
                <p className={`mt-8 text-xs font-bold uppercase tracking-[0.18em] ${index === 2 ? "text-emerald-300" : "text-emerald-700"}`}>{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">{item.era}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 2 ? "text-white/62" : "text-slate-600"}`}>{item.description}</p>
                <dl className={`mt-7 grid gap-3 border-t pt-6 text-sm ${index === 2 ? "border-white/10" : "border-slate-100"}`}>
                  <div><dt className="font-bold">Primary driver</dt><dd className={index === 2 ? "mt-1 text-white/55" : "mt-1 text-slate-500"}>{item.driver}</dd></div>
                  <div><dt className="font-bold">Strategic asset</dt><dd className={index === 2 ? "mt-1 text-white/55" : "mt-1 text-slate-500"}>{item.asset}</dd></div>
                  <div><dt className="font-bold">Core capability</dt><dd className={index === 2 ? "mt-1 text-white/55" : "mt-1 text-slate-500"}>{item.capability}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="eyebrow">Why it matters</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-navy-950 sm:text-5xl">Six forces reshaping work, enterprise, and society.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">The Intelligence Economy is emerging through the convergence of technologies and human capabilities rather than through one innovation alone.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {drivers.map(([title, description], index) => (
                <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.16em] text-emerald-600">0{index + 1}</span>
                    <span className="h-2 w-2 rounded-full bg-gold-400" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-navy-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="intelligence-capital" className="scroll-mt-36 relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div className="section-shell relative">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow text-gold-300">The defining strategic asset</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Intelligence Capital™</h2>
            </div>
            <p className="text-lg leading-9 text-white/66">
              Intelligence Capital is the collective capacity of an individual, organisation, institution, or society to generate, combine, apply, and continuously improve intelligence in order to create value and achieve meaningful outcomes.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.075]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-300/35 bg-gold-300/10 text-lg font-bold text-gold-300">{pillar.code}</span>
                <h3 className="mt-7 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/intelligence-economy/intelligence-capital" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-gold-300">Explore Intelligence Capital <span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="frameworks" className="scroll-mt-36 bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Framework Library™</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-5xl">Original thinking translated into practical models.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Each framework is designed to help leaders, professionals, organisations, and institutions understand and act within the Intelligence Economy.</p>
            </div>
            <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Growing library</span>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map(([title, description], index) => (
              <article key={title} className="group flex min-h-[290px] flex-col rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-premium">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-emerald-600">FRAMEWORK {String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">↗</span>
                </div>
                <h3 className="mt-9 text-2xl font-semibold leading-tight tracking-[-0.035em] text-navy-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
                <Link href="/intelligence-economy/frameworks" className="mt-auto pt-7 text-sm font-bold text-emerald-700">Explore Framework Library →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="scroll-mt-36 py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="eyebrow">Research Centre</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-navy-950 sm:text-5xl">Evidence, foresight, and executive intelligence.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">The Research Centre will provide a permanent home for rigorous analysis and practical intelligence on the forces shaping Africa and the wider global economy.</p>
              <Link href="/intelligence-economy/research" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">Visit Research Centre <span>→</span></Link>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {researchFormats.map(([title, description], index) => (
                <article key={title} className="group bg-white p-7 transition hover:bg-navy-950 hover:text-white">
                  <span className="text-xs font-bold tracking-[0.18em] text-emerald-600">0{index + 1}</span>
                  <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 transition group-hover:text-white/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="scroll-mt-36 bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Latest thinking</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-5xl">Articles and Executive Insights</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">A growing collection of ideas, frameworks, and perspectives for navigating the Intelligence Economy.</p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article key={article.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-premium">
                <div className={`h-48 p-7 text-white ${index === 0 ? "bg-navy-950" : index === 1 ? "bg-emerald-800" : "bg-slate-800"}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">{article.category}</p>
                  <div className="mt-14 h-px w-12 bg-gold-300" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold text-slate-400">{article.meta}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-navy-950">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{article.summary}</p>
                  <Link href="/intelligence-economy/articles" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">Explore articles <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="academy" className="scroll-mt-36 py-20 sm:py-28">
        <div className="section-shell">
          <div className="rounded-[2.5rem] bg-navy-950 p-7 text-white shadow-premium sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="eyebrow text-gold-300">Executive education</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Develop the capabilities required for the next economy.</h2>
                <p className="mt-6 text-lg leading-8 text-white/62">Chumcred Academy translates emerging intelligence concepts into practical professional and organisational capability.</p>
                <Link href="/academy" className="button-primary mt-8">Explore the Academy <span>→</span></Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {education.map(([title, description]) => (
                  <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tien" className="scroll-mt-36 bg-white py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-emerald-900 via-navy-950 to-navy-950 p-8 text-white sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <p className="eyebrow text-emerald-300">The Intelligence Economy Network</p>
            <p className="mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">A global community for the people shaping intelligence-driven organisations and economies.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Professionals", "Executives", "Researchers", "Entrepreneurs", "Institutions"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white/70">{item}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Community arm</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-5xl">Join TIEN</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">TIEN connects people committed to understanding and advancing the Intelligence Economy through dialogue, shared learning, collaboration, and practical leadership.</p>
            <ul className="mt-8 grid gap-3 text-sm font-semibold text-navy-900 sm:grid-cols-2">
              {["Engage with original ideas", "Connect across sectors", "Access emerging frameworks", "Contribute to the movement"].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-500" />{benefit}</li>
              ))}
            </ul>
            <a href="https://www.linkedin.com/groups/26390107" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700">Join the TIEN LinkedIn community <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="eyebrow">Our vision</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-navy-950 sm:text-5xl">Building Africa&apos;s Intelligence Economy</h2>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <blockquote className="text-xl font-medium leading-9 text-slate-700 sm:text-2xl">
              “The Intelligence Economy is not simply about artificial intelligence. It is about empowering people, organisations, and nations to create greater value through the intelligent application of human capability, technology, knowledge, data, and innovation.”
            </blockquote>
            <p className="mt-7 text-base leading-8 text-slate-600">At Chumcred, we are committed to developing the research, platforms, frameworks, education, and partnerships that will help shape this future.</p>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="font-bold text-navy-950">Adekunle Adegbie, PhD</p>
              <p className="mt-1 text-sm text-slate-500">Founder & Chief Executive, Chumcred Limited</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Become part of the Intelligence Economy movement."
        description="Explore the research, develop new capabilities, join the community, or partner with Chumcred to build intelligence-led solutions and institutions."
      />
    </>
  );
}
