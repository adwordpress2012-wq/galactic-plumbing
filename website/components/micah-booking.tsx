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
    <section id="micah-booking" className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-xl bg-white shadow-2xl shadow-brand-navy/12 ring-1 ring-slate-200 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-brand-deep-navy p-7 text-white sm:p-9">
            <p className="mb-3 text-sm font-black uppercase tracking-wider text-brand-cyan">Booking assistant</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Micah Takes Your Booking So Luke Never Misses A Job
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              While Luke is on-site, Micah captures your booking request so nothing slips through the cracks.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-blue-50">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-black text-white"
                    aria-hidden
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                      <path d="M8 13.6 3.9 9.5l-1.4 1.4L8 16.4 18 6.4 16.6 5 8 13.6Z" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 rotate-[-3deg] font-black text-brand-cyan">
              This is how we keep Western Sydney flowing.
            </p>
          </div>

          <div className="bg-[linear-gradient(135deg,_#ffffff_0%,_#f3f9ff_100%)] p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-4">
              {["You Chat", "Booked Instantly", "Luke Notified", "Luke Responds"].map((item, index) => (
                <div key={item} className="rounded-lg bg-white p-4 text-center shadow-lg shadow-brand-navy/8 ring-1 ring-slate-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky text-lg font-black text-brand-blue">
                    {index + 1}
                  </div>
                  <p className="mt-3 text-sm font-black uppercase text-brand-deep-navy">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-lg bg-brand-blue p-6 text-center text-white shadow-xl shadow-brand-blue/25">
              <p className="text-xl font-black uppercase">
                One page quotation. Luke handles every quote and every job onsite.
              </p>
              <p className="mt-2 text-blue-100">Simple. Transparent. No runaround.</p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Booking requests are captured first. Luke confirms with you personally. No fixed pricing or arrival promises from Micah.
            </p>

            <div className="mt-7">
              <Button data-micah-open className="w-full sm:w-auto">
                Talk To Micah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
