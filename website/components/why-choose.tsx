import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    title: "Fast Response",
    description:
      "When you need a plumber, you need someone who picks up and shows up without the runaround.",
  },
  {
    title: "Local & Reliable",
    description:
      "Western Sydney born and bred — we know the suburbs, the homes, and what locals expect.",
  },
  {
    title: "One Page Quote",
    description:
      "Luke keeps quoting simple and clear. No confusing multi-page estimates on the website.",
  },
  {
    title: "Luke Handles It",
    description:
      "Every quote and onsite job is handled personally by Luke — not passed around.",
  },
  {
    title: "Never Miss A Booking",
    description:
      "Micah captures your booking request so Luke never misses a job while he is on-site.",
  },
];

export function WhyChoose() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why locals choose us"
          title="Why Locals Choose"
          highlight="Galactic Plumbing"
          description="Fast local plumbing you can trust — built for Western Sydney homes and businesses."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-brand-navy">{reason.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
