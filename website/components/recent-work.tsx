import { SectionHeading } from "@/components/ui/section-heading";

const jobs = [
  {
    title: "Blocked Drain",
    location: "Penrith",
    description: "Cleared a stubborn kitchen drain and had it flowing same day.",
    imageClass: "from-slate-950 via-slate-800 to-brand-blue",
    icon: "drain",
  },
  {
    title: "Hot Water Repair",
    location: "St Marys",
    description: "Diagnosed and repaired a failing hot water unit for a local family.",
    imageClass: "from-stone-900 via-slate-700 to-sky-700",
    icon: "heater",
  },
  {
    title: "Leaky Tap Fixed",
    location: "Mount Druitt",
    description: "Stopped a persistent bathroom leak before it caused more damage.",
    imageClass: "from-slate-800 via-blue-900 to-cyan-600",
    icon: "tap",
  },
  {
    title: "Bathroom Upgrade",
    location: "Blacktown",
    description: "Fixture upgrades and plumbing fit-off for a refreshed bathroom.",
    imageClass: "from-slate-900 via-slate-700 to-brand-highlight",
    icon: "bath",
  },
];

function JobIcon({ type }: { type: string }) {
  if (type === "heater") {
    return (
      <svg viewBox="0 0 80 80" className="h-28 w-28" fill="none" aria-hidden>
        <rect x="24" y="8" width="32" height="58" rx="6" fill="#f8fafc" opacity=".92" />
        <rect x="29" y="18" width="22" height="14" rx="2" fill="#cbd5e1" />
        <circle cx="40" cy="47" r="8" fill="#1687ff" />
        <path d="M15 66h50" stroke="#eaf4ff" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tap") {
    return (
      <svg viewBox="0 0 80 80" className="h-28 w-28" fill="none" aria-hidden>
        <path d="M20 37h25c9 0 15 6 15 15" stroke="#f8fafc" strokeWidth="9" strokeLinecap="round" />
        <path d="M31 25h20M41 17v16" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" />
        <path d="M60 52c0 8-7 13-7 13s-7-5-7-13a7 7 0 0 1 14 0Z" fill="#22b8ff" />
      </svg>
    );
  }

  if (type === "bath") {
    return (
      <svg viewBox="0 0 80 80" className="h-28 w-28" fill="none" aria-hidden>
        <path d="M15 45h50v9a12 12 0 0 1-12 12H27a12 12 0 0 1-12-12v-9Z" fill="#f8fafc" opacity=".95" />
        <path d="M18 45V26c0-8 6-13 13-13 6 0 11 4 13 9" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
        <path d="M38 26h18" stroke="#22b8ff" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 80" className="h-28 w-28" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="28" fill="#031326" opacity=".6" />
      <circle cx="40" cy="40" r="18" stroke="#eaf4ff" strokeWidth="8" opacity=".95" />
      <path d="M21 31c12 4 24-4 38 1M22 49c14-5 25 5 38-2" stroke="#22b8ff" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function RecentWork() {
  return (
    <section id="recent-work" className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recent local work"
          title="Recent Work Around"
          highlight="Western Sydney"
          description="A snapshot of the kind of urgent repairs, hot water fixes, tap leaks, and bathroom work Luke handles locally."
          align="center"
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <article
              key={`${job.title}-${job.location}`}
              className="group overflow-hidden rounded-lg bg-white shadow-xl shadow-brand-navy/12 ring-1 ring-slate-200 transition-transform hover:-translate-y-1"
            >
              <div className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${job.imageClass}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,_rgba(255,255,255,0.35),_transparent_34%)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute right-2 top-0 opacity-80 transition-transform group-hover:scale-110">
                  <JobIcon type={job.icon} />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-black text-white">{job.title}</h3>
                  <p className="text-sm font-bold text-blue-100">{job.location}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-slate-600">{job.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
