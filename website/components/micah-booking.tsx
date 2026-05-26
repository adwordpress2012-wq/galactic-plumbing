import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const benefits = [
  "Micah answers enquiries instantly",
  "Takes booking requests in real time",
  "Luke gets notified immediately",
  "You get a fast response",
  "More jobs done. Happy customers.",
];

export function MicahBooking() {
  return (
    <section id="micah-booking" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Booking assistant"
            title="Micah Takes Your Booking So Luke Never Misses A Job"
            description="While Luke is on-site, Micah captures your booking request so nothing slips through the cracks."
            align="left"
          />

          <div className="rounded-3xl border border-brand-blue/15 bg-brand-sky/30 p-8">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-slate-700">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="text-base leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-slate-600">
              Booking requests are captured first — Luke confirms with you
              personally. No fixed pricing or arrival promises from Micah.
            </p>

            <div className="mt-8">
              <Button data-micah-open>Talk to Micah — Take Your Booking</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
