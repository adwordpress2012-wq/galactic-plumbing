import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

const trustBadges = [
  "Fast Response",
  "Licensed & Insured",
  "Local & Trusted",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,_#e8f3ff_0%,_transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-blue/25 bg-brand-sky/60 px-4 py-1.5 text-sm font-semibold text-brand-navy">
            Serving Western Sydney locals
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem]">
            The Fastest Plumbing Services Guy in the West.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Fast, reliable and professional plumbing services across Western
            Sydney.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button data-micah-open>Micah — Take Your Booking</Button>
            <Button variant="secondary" href={site.phoneHref}>
              Call Now
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-brand-navy"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-brand-blue/10">
            <Image
              src="/images/hero-luke-placeholder.svg"
              alt="Luke from Galactic Plumbing beside the Galactic Plumbing van"
              width={640}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
