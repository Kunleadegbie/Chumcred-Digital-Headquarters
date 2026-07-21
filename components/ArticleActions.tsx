"use client";

import { useState } from "react";

export default function ArticleActions({
  title,
  pdfPath,
}: {
  title: string;
  pdfPath: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function shareArticle() {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
      return;
    }
    await copyLink();
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
      >
        Download PDF
      </a>
      <button
        type="button"
        onClick={shareArticle}
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-emerald-300 hover:text-emerald-700"
      >
        Share article
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-emerald-300 hover:text-emerald-700"
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-emerald-300 hover:text-emerald-700"
      >
        Print
      </button>
    </div>
  );
}
