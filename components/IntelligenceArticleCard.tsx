import Link from "next/link";
import type { IntelligenceArticle } from "@/data/intelligenceArticles";

export default function IntelligenceArticleCard({
  article,
  featured = false,
}: {
  article: IntelligenceArticle;
  featured?: boolean;
}) {
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${article.publishedAt}T12:00:00Z`));

  return (
    <article
      className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium ${
        featured ? "lg:grid lg:grid-cols-[0.78fr_1.22fr]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-navy-950 p-7 text-white ${
          featured ? "min-h-[25rem] lg:p-10" : "min-h-52"
        }`}
      >
        <div className="absolute inset-0 intelligence-radial-grid opacity-60" />
        <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
              {article.series}
            </p>
            {article.articleNumber ? (
              <p className="mt-3 text-xs font-semibold text-white/55">
                Article {article.articleNumber}
              </p>
            ) : null}
          </div>
          <div>
            <div className="mb-5 h-px w-14 bg-gold-300" />
            <p className="max-w-sm text-sm leading-7 text-white/65">
              Original Chumcred thought leadership for the Intelligence Economy.
            </p>
          </div>
        </div>
      </div>

      <div className={featured ? "p-8 sm:p-10" : "p-7"}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-400">
          <span>{article.category}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={article.publishedAt}>{date}</time>
          <span aria-hidden="true">•</span>
          <span>{article.readingTime}</span>
        </div>
        <h2
          className={`mt-5 font-semibold leading-tight text-navy-950 ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {article.title}
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          {article.excerpt}
        </p>
        <Link
          href={`/intelligence-economy/articles/${article.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 transition group-hover:text-emerald-600"
        >
          Read full article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
