import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleActions from "@/components/ArticleActions";
import IntelligenceArticleCard from "@/components/IntelligenceArticleCard";
import IntelligenceSubnav from "@/components/IntelligenceSubnav";
import {
  getArticleBySlug,
  getRelatedArticles,
  intelligenceArticles,
} from "@/data/intelligenceArticles";

export function generateStaticParams() {
  return intelligenceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | Chumcred" };
  }

  return {
    title: `${article.title} | Chumcred Intelligence Economy`,
    description: article.excerpt,
    keywords: article.keywords,
    authors: [{ name: article.author.name }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.keywords,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const date = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${article.publishedAt}T12:00:00Z`));

  const related = getRelatedArticles(article);
  const articleUrl = `https://company.chumcred.com/intelligence-economy/articles/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Chumcred Limited",
      url: "https://company.chumcred.com",
    },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="ie-hero relative overflow-hidden py-20 text-white sm:py-28">
        <div className="ie-orb ie-orb-one" />
        <div className="ie-orb ie-orb-two" />
        <div className="absolute inset-0 hero-grid opacity-70" />
        <div className="section-shell relative">
          <Link
            href="/intelligence-economy/articles"
            className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 transition hover:text-white"
          >
            ← Back to Articles
          </Link>
          <div className="mt-10 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/55">
              <span>{article.series}</span>
              {article.articleNumber ? (
                <>
                  <span aria-hidden="true">•</span>
                  <span>Article {article.articleNumber}</span>
                </>
              ) : null}
              <span aria-hidden="true">•</span>
              <span>{article.category}</span>
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-white/70 sm:text-xl">
              {article.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/60">
              <span className="font-semibold text-white">{article.author.name}</span>
              <time dateTime={article.publishedAt}>{date}</time>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      <IntelligenceSubnav />

      <main className="py-16 sm:py-24">
        <div className="section-shell grid gap-12 xl:grid-cols-[minmax(0,1fr)_19rem]">
          <article className="article-prose max-w-4xl">
            <p className="article-lead">{article.excerpt}</p>

            {article.sections.map((section, index) => (
              <section key={`${article.slug}-${index}`} className="article-section">
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.quote ? <blockquote>{section.quote}</blockquote> : null}
              </section>
            ))}

            <div className="mt-14 rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-7 sm:p-9">
              <p className="eyebrow">Continue the conversation</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy-950">
                Explore, share, and apply the ideas
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Download the publication, share it with your network, or connect
                the article to Chumcred’s frameworks, executive education, and
                TIEN community.
              </p>
              <div className="mt-7">
                <ArticleActions title={article.title} pdfPath={article.pdfPath} />
              </div>
            </div>
          </article>

          <aside className="space-y-6 xl:sticky xl:top-32 xl:self-start">
            <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="eyebrow">Publication details</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-navy-950">Author</dt>
                  <dd className="mt-1 leading-6 text-slate-500">{article.author.name}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy-950">Role</dt>
                  <dd className="mt-1 leading-6 text-slate-500">{article.author.role}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy-950">Published</dt>
                  <dd className="mt-1 text-slate-500">{date}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy-950">Reading time</dt>
                  <dd className="mt-1 text-slate-500">{article.readingTime}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="eyebrow">Related frameworks</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {article.relatedFrameworks.map((framework) => (
                  <li key={framework} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    {framework}
                  </li>
                ))}
              </ul>
              <Link
                href="/intelligence-economy/frameworks"
                className="mt-6 inline-flex text-sm font-bold text-emerald-700"
              >
                Visit Framework Library →
              </Link>
            </div>

            <div className="rounded-[1.6rem] bg-navy-950 p-6 text-white shadow-premium">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                TIEN Community
              </p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Join professionals, executives, researchers, and builders shaping
                the Intelligence Economy.
              </p>
              <a
                href="https://www.linkedin.com/groups/26390107"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-gold-300"
              >
                Join TIEN →
              </a>
            </div>
          </aside>
        </div>
      </main>

      {related.length ? (
        <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
          <div className="section-shell">
            <p className="eyebrow">Continue reading</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy-950">
              Related articles
            </h2>
            <div className="mt-9 grid gap-7 lg:grid-cols-3">
              {related.map((item) => (
                <IntelligenceArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
