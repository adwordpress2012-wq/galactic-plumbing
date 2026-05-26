import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { label: "Fast Response", icon: "clock" },
  { label: "Licensed & Insured", icon: "shield" },
  { label: "Local & Trusted", icon: "pin" },
];

function HeroIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M12 3 19 6v5c0 4.7-2.7 8.1-7 10-4.3-1.9-7-5.3-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
        <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 fill-amber-400" aria-hidden>
      <path d="m10 1.6 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pb-10 pt-8 sm:pb-12 sm:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,_#ffffff_0%,_#ffffff_48%,_#eef7ff_100%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_55%_35%,_rgba(34,184,255,0.16)_0%,_transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
        <div className="z-10 pt-4 lg:pt-8">
          <div className="mb-5 h-1.5 w-16 rounded-full bg-brand-blue" />

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.98] tracking-tight text-brand-deep-navy sm:text-6xl lg:text-[4.75rem]">
            The Fastest <span className="block text-brand-blue">Plumbing Services</span>
            <span className="block">Guy In The West.</span>
          </h1>

          <p className="mt-6 max-w-xl text-xl font-bold leading-snug text-brand-navy sm:text-2xl">
            Fast, reliable and professional plumbing services across Western Sydney.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-3 border-r border-slate-200 pr-4 text-sm font-extrabold uppercase text-brand-deep-navy last:border-r-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-blue/20 bg-white text-brand-blue shadow-sm">
                  <HeroIcon type={badge.icon} />
                </span>
                {badge.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button data-micah-open className="min-h-16 gap-3 px-8 text-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M4 4.8C4 3.8 4.8 3 5.8 3h12.4c1 0 1.8.8 1.8 1.8v8.4c0 1-.8 1.8-1.8 1.8H9.7L5 19.2V15h.8c-1 0-1.8-.8-1.8-1.8V4.8Zm4 3.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xl leading-5">Micah</span>
                <span className="block text-xs text-blue-100">Take Your Booking</span>
              </span>
            </Button>
            <Button variant="secondary" href={site.phoneHref} className="min-h-16 gap-3 px-8 text-lg">
              <svg viewBox="0 0 20 20" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M2.7 3.7c.2-1 1.2-1.7 2.2-1.7h1.4c.8 0 1.5.5 1.8 1.2l.8 2.1c.3.8.1 1.7-.6 2.2l-.7.5a10.8 10.8 0 0 0 4.4 4.4l.5-.7c.5-.7 1.4-.9 2.2-.6l2.1.8c.7.3 1.2 1 1.2 1.8v1.4c0 1-.7 2-1.7 2.2-.9.2-1.8.3-2.7.3C7.3 17.6 2.4 12.7 2.4 6.4c0-.9.1-1.8.3-2.7Z" />
              </svg>
              <span>
                <span className="block text-xl leading-5">{site.phone}</span>
                <span className="block text-xs text-brand-navy">Call Now</span>
              </span>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-black tracking-tight text-[#4285f4]" aria-hidden>G</span>
            <div className="flex" aria-label="Five star Google rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <p className="text-lg font-black text-brand-deep-navy">5.0</p>
            <p className="w-full text-sm font-bold text-brand-navy sm:w-auto">
              From 100+ Google Reviews
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center lg:max-w-none lg:self-center lg:justify-end">
          <div className="relative aspect-[428/310] w-full max-w-[620px] overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-white via-white/70 to-transparent" />
            <Image
              src="/images/plumber-guy1.png"
              alt="Luke from Galactic Plumbing beside the Galactic Plumbing van"
              width={483}
              height={542}
              className="absolute -top-[5.5%] right-0 h-auto w-[113%] max-w-none object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
