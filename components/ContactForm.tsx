"use client";

const inquiryTypes = [
  "Partnership inquiry",
  "Training inquiry",
  "Investor engagement",
  "General contact"
];

export default function ContactForm() {
  return (
    <form className="premium-card grid gap-5 rounded p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Full name
          <input className="rounded border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Work email
          <input type="email" className="rounded border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" placeholder="name@organization.com" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Organization
          <input className="rounded border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" placeholder="Company or institution" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy-900">
          Inquiry type
          <select className="rounded border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500">
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy-900">
        Message
        <textarea className="min-h-36 rounded border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-emerald-500" placeholder="Tell us about the opportunity, program, investment interest, or transformation need." />
      </label>
      <button type="submit" className="rounded bg-navy-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-navy-800">
        Submit Inquiry
      </button>
    </form>
  );
}
