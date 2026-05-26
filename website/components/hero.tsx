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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#dbeafe_0%,_transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-sky/40 px-4 py-1.5 text-sm font-medium text-brand-navy">
            Serving Western Sydney locals
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem]">
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
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-sky/60 to-white shadow-xl shadow-brand-navy/10">
            <Image
              src="/images/hero-luke-placeholder.svg"
              alt="Luke from Galactic Plumbing — local plumber"
              width={640}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:left-6">
            <Image
              src="/images/logo-mark.svg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12"
              aria-hidden
            />
            <div>
              <p className="text-sm font-bold text-brand-navy">
                Galactic Plumbing Van
              </p>
              <p className="text-xs text-slate-500">On the road across the West</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
