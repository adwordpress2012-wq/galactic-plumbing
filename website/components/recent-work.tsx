import { SectionHeading } from "@/components/ui/section-heading";

const jobs = [
  {
    title: "Blocked Drain",
    location: "Penrith",
    description: "Cleared a stubborn kitchen drain — back flowing same day.",
  },
  {
    title: "Hot Water Repair",
    location: "St Marys",
    description: "Diagnosed and repaired a failing hot water unit for a local family.",
  },
  {
    title: "Leaky Tap Fixed",
    location: "Mount Druitt",
    description: "Stopped a persistent bathroom leak before it caused more damage.",
  },
  {
    title: "Bathroom Upgrade",
    location: "Blacktown",
    description: "Fixture upgrades and plumbing fit-off for a refreshed bathroom.",
  },
];

export function RecentWork() {
  return (
    <section id="recent-work" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recent local work"
          title="Recent Work Around Western Sydney"
          description="Recent local work examples — real job photos coming soon."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <article
              key={`${job.title}-${job.location}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-brand-sky/50 to-brand-blue/10">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                  Job photo soon
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  {job.location}
                </p>
                <h3 className="mt-1 text-lg font-bold text-brand-navy">
                  {job.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{job.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
