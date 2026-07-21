import type { Metadata } from "next";
import IntelligenceArticleCard from "@/components/IntelligenceArticleCard";
import IntelligencePageHero from "@/components/IntelligencePageHero";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import { intelligenceArticles } from "@/data/intelligenceArticles";

export const metadata: Metadata = {
  title: "Articles | Intelligence Economy",
  description:
    "Original articles, frameworks, and executive perspectives from Chumcred on the Intelligence Economy, Intelligence Capital, leadership, and enterprise transformation.",
};

export default function ArticlesPage() {
  const featured = intelligenceArticles.find((article) => article.featured);
  const remaining = intelligenceArticles.filter(
    (article) => article.slug !== featured?.slug,
  );

  return (
    <>
      <IntelligencePageHero
        eyebrow="Ideas and intellectual property"
        title="Articles on the Intelligence Economy"
        description="A permanent collection of original Chumcred articles, framework notes, leadership perspectives, and practical intelligence—published on our own platform and preserved as institutional knowledge."
        primaryHref="/intelligence-economy/frameworks"
        primaryLabel="Explore Frameworks"
        secondaryHref="/intelligence-economy/executive-insights"
        secondaryLabel="Executive Insights"
      />
      <IntelligenceSubnav />

      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Featured publication</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
              Original thinking, permanently published
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              LinkedIn helps distribute ideas. This publication system gives those
              ideas a permanent home with full articles, author profiles, related
              frameworks, downloadable PDFs, and search-friendly URLs.
            </p>
          </div>

          {featured ? (
            <div className="mt-12">
              <IntelligenceArticleCard article={featured} featured />
            </div>
          ) : null}

          <div className="mt-16 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Publication library</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy-950">
                The Intelligence Economy Series
              </h2>
            </div>
            <p className="hidden max-w-lg text-right text-sm leading-7 text-slate-500 lg:block">
              Each publication is available online and as a branded PDF for
              executive distribution, teaching, and institutional reference.
            </p>
          </div>

          <div className="mt-9 grid gap-7 lg:grid-cols-3">
            {remaining.map((article) => (
              <IntelligenceArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Publishing system</p>
            <h2 className="mt-3 text-2xl font-semibold text-navy-950 sm:text-3xl">
              Built to protect and extend Chumcred’s intellectual property
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Future publications can include references, framework connections,
              downloadable resources, videos, related courses, and lead-generation
              calls to action without depending on a third-party social platform.
            </p>
          </div>
          <a
            href="/intelligence-economy/articles/feed.xml"
            className="inline-flex rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-emerald-300 hover:text-emerald-700"
          >
            Subscribe via RSS
          </a>
        </div>
      </section>
    </>
  );
}
