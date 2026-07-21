import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact and Partnerships",
  description:
    "Contact Chumcred Limited for partnership inquiries, training programs, investor engagement, and general corporate inquiries."
};

const pathways = [
  "Partnership inquiry for institutions, public sector programs, employers, and ecosystem builders",
  "Training inquiry for leadership, analytics, employability, AI, and digital transformation programs",
  "Investor engagement for platform development, real estate, and structured opportunity discussions",
  "General contact for media, vendor, talent, advisory, and corporate communications"
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow text-gold-300">Contact and partnerships</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            Start a strategic conversation with Chumcred Limited.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Use this page for partnership inquiries, training programs, investor conversations, and
            general contact. Direct email placeholder:
            {" "}
            <a className="font-semibold text-gold-300" href="mailto:info@chumcred.com">
              info@chumcred.com
            </a>
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Engagement pathways"
              title="Choose the conversation that matches your strategic priority."
              description="The form is ready for integration with a CRM, email automation service, or secure backend endpoint when final infrastructure is selected."
            />
            <div className="mt-8 grid gap-4">
              {pathways.map((pathway) => (
                <div key={pathway} className="rounded border border-slate-200 bg-white p-5 text-sm font-semibold leading-7 text-navy-900">
                  {pathway}
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
