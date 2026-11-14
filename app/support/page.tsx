import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chumcred Execution Intelligence Support",
  description: "Support and troubleshooting for the Chumcred Execution Intelligence Jira app.",
  alternates: { canonical: "/support" },
};

const help = [
  ["App not appearing in a Jira project", "Confirm that your Jira administrator installed the app on the correct Jira site. Check the project navigation and ask your administrator to review the installation and project access."],
  ["Permission or access errors", "Sign into the correct Jira site and confirm you can view the project and its issues. Ask your Jira administrator to check your access and the app permissions."],
  ["Outdated results", "Select “Refresh analysis” in the app to run a new briefing using the currently available Jira information."],
  ["No risks displayed", "The app may show no risks when it detects no overdue, unassigned or blocked open issues. This does not guarantee that the project has no other risks."],
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow text-gold-300">Application support</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">Chumcred Execution Intelligence Support</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">Support for the Chumcred Execution Intelligence Atlassian Forge app.</p>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <div className="section-shell max-w-5xl">
          <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">About the app</h2>
          <p className="mt-4 leading-8 text-slate-700">
            Chumcred Execution Intelligence scans open Jira issues to produce an evidence-based management briefing.
            It identifies overdue issues, unassigned issues and unresolved blockers, and provides advisory priority
            labels and recommended follow-up actions. It does not automatically alter Jira issues or make management decisions.
          </p>
          <h2 className="mt-12 text-2xl font-semibold text-navy-950 sm:text-3xl">Troubleshooting</h2>
          <div className="mt-6 grid gap-5">
            {help.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-navy-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-emerald-200 bg-emerald-50 p-7 sm:p-9">
            <h2 className="text-2xl font-semibold text-navy-950">Contact support</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Email <a href="mailto:info@chumcred.com" className="font-semibold text-emerald-800 underline underline-offset-4">info@chumcred.com</a>.
              Include your Jira project key, a description of the problem, the date and approximate time it occurred,
              and a screenshot where appropriate.
            </p>
            <p className="mt-4 font-medium leading-7 text-navy-950">
              Do not send passwords, API tokens, authentication codes or unnecessary confidential Jira content.
              Redact sensitive details from screenshots.
            </p>
          </div>
          <p className="mt-8 text-sm leading-7 text-slate-600">
            Read the <Link href="/privacy" className="font-semibold text-emerald-800 underline underline-offset-4">Chumcred Execution Intelligence Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
