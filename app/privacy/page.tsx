import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Chumcred Execution Intelligence",
  description: "Privacy policy for the Chumcred Execution Intelligence Atlassian Forge Jira project-page app.",
  alternates: { canonical: "/privacy" },
};

const sections: Array<[string, string[]]> = [
  ["Provider and application", [
    "Chumcred Execution Intelligence is provided by Chumcred Limited. It operates as an Atlassian Forge Jira project-page app and provides an evidence-based management briefing."
  ]],
  ["Jira information accessed", [
    "During use, the app accesses Jira issue information required for its briefing, including project and issue keys, summaries, status information, assignee display names, due dates and issue-link or blocker information.",
    "The app uses the Atlassian read:jira-work scope. Accessing an assignee’s display name for analysis does not mean the app persistently stores that name."
  ]],
  ["Purpose and decision support", [
    "Jira information is used only to identify evidence-based execution signals, calculate advisory priority labels and display recommended follow-up actions.",
    "The app does not make management decisions or automatically update, assign, delete or otherwise change Jira issues."
  ]],
  ["Access during use and storage", [
    "Analysis is performed during use of the app. The app accesses Jira information needed for that analysis but does not copy or persist Jira issue data in an external database or Chumcred-controlled storage.",
    "Processing an assignee display name during a briefing is different from retaining a separate persistent record. The app does not retain that information in Chumcred-controlled storage."
  ]],
  ["Sharing and Atlassian infrastructure", [
    "The app does not sell Jira data, use it for advertising or share it with independent third parties.",
    "The app runs on Atlassian Forge infrastructure. Atlassian may process operational information according to Atlassian’s applicable policies."
  ]],
  ["Uninstalling the app", [
    "Jira administrators can uninstall the app to remove its access to Jira information."
  ]],
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow text-gold-300">Application privacy</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">Privacy Policy – Chumcred Execution Intelligence</h1>
          <p className="mt-6 text-base text-white/75">Effective date: 14 November 2026</p>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="section-shell max-w-4xl">
          <p className="leading-8 text-slate-700">
            This policy applies to Chumcred Execution Intelligence, not to every Chumcred Limited product or service.
            It explains the difference between accessing Jira information during analysis and persistently storing it.
          </p>
          <div className="mt-10 space-y-10">
            {sections.map(([title, paragraphs], index) => (
              <section key={title}>
                <h2 className="text-2xl font-semibold text-navy-950">{index + 1}. {title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-slate-700">{paragraph}</p>
                ))}
              </section>
            ))}
            <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
              <h2 className="text-2xl font-semibold text-navy-950">7. Privacy questions</h2>
              <p className="mt-4 leading-8 text-slate-700">
                Contact Chumcred Limited at <a href="mailto:info@chumcred.com" className="font-semibold text-emerald-800 underline underline-offset-4">info@chumcred.com</a>.
              </p>
              <p className="mt-4 text-sm text-slate-600">
                For technical assistance, visit <Link href="/support" className="font-semibold text-emerald-800 underline underline-offset-4">Chumcred Execution Intelligence Support</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
