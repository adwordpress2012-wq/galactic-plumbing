import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Fast Response",
    description:
      "When you need a plumber, you need someone who picks up and shows up without the runaround.",
    icon: "clock",
  },
  {
    title: "Local & Reliable",
    description:
      "Western Sydney born and bred. We know the suburbs, the homes, and what locals expect.",
    icon: "pin",
  },
  {
    title: "One Page Quote",
    description:
      "Luke keeps quoting simple and clear. No confusing multi-page estimates on the website.",
    icon: "quote",
  },
  {
    title: "Luke Handles It",
    description:
      "Every quote and onsite job is handled personally by Luke, not passed around.",
    icon: "person",
  },
  {
    title: "Never Miss A Booking",
    description:
      "Micah captures your booking request so Luke never misses a job while he is on-site.",
    icon: "calendar",
  },
];

function ReasonIcon({ type }: { type: string }) {
  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden>
        <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "quote") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden>
        <path d="M7 3h8l4 4v14H7V3Z" />
        <path d="M14 3v5h5M10 12h6M10 16h6" />
      </svg>
    );
  }

  if (type === "person") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden>
        <path d="M6 4v3M18 4v3M4 9h16M5 6h14a1 1 0 0 1 1 1v13H4V7a1 1 0 0 1 1-1Z" />
        <path d="m8 15 2 2 5-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function WhyChoose() {
  return (
    <section id="services" className="bg-brand-sky/45 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-xl bg-white px-5 py-8 shadow-2xl shadow-brand-navy/10 ring-1 ring-slate-200 sm:px-8">
          <SectionHeading
            eyebrow="Why locals choose us"
            title="Why Locals Choose"
            highlight="Galactic Plumbing"
            description="Fast local plumbing you can trust, built for Western Sydney homes and businesses."
            align="center"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="relative rounded-lg border border-slate-200 bg-white p-5 text-center shadow-lg shadow-brand-navy/8 transition-all hover:-translate-y-1 hover:border-brand-blue/40"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-blue/20 bg-brand-sky text-brand-blue">
                  <ReasonIcon type={reason.icon} />
                </div>
                <h3 className="mt-4 text-base font-black uppercase text-brand-deep-navy">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
