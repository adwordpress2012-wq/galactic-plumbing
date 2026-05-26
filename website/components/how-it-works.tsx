import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    step: "1",
    title: "You Chat",
    description: "Open Micah from the bottom-right bubble and tell us what you need.",
  },
  {
    step: "2",
    title: "Booking Requested",
    description:
      "Micah collects your details — name, phone, suburb, issue, urgency, and preferred time.",
  },
  {
    step: "3",
    title: "Luke Notified",
    description: "Luke gets your booking request straight away while he is on the job.",
  },
  {
    step: "4",
    title: "Luke Responds",
    description:
      "Luke personally follows up to confirm and handle your quote and onsite work.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Simple booking flow"
          title="How It Works"
          description="Fast booking requests — Luke handles the rest personally."
          align="center"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
