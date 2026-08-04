import { intelligenceArticles } from "@/data/publishedIntelligenceArticles";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const baseUrl = "https://company.chumcred.com";
  const items = intelligenceArticles
    .map((article) => {
      const url = `${baseUrl}/intelligence-economy/articles/${article.slug}`;
      return `
        <item>
          <title>${escapeXml(article.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(`${article.publishedAt}T12:00:00Z`).toUTCString()}</pubDate>
          <description>${escapeXml(article.excerpt)}</description>
          <category>${escapeXml(article.category)}</category>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Chumcred Intelligence Economy Articles</title>
        <link>${baseUrl}/intelligence-economy/articles</link>
        <description>Original articles and frameworks for the Intelligence Economy.</description>
        <language>en</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
