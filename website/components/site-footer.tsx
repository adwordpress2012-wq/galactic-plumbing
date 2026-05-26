import Image from "next/image";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/images/logo-mark.svg"
              alt={site.name}
              width={220}
              height={44}
              className="h-11 w-auto"
            />
            <p className="mt-3 text-slate-600">Fast, reliable plumbing across {site.location}.</p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-brand-blue">Contact</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>
                <a href={site.phoneHref} className="font-black text-brand-navy hover:text-brand-blue">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.emailBooking}`} className="hover:text-brand-blue">
                  {site.emailBooking}
                </a>
                <span className="text-slate-400"> - bookings</span>
              </li>
              <li>
                <a href={`mailto:${site.emailLuke}`} className="hover:text-brand-blue">
                  {site.emailLuke}
                </a>
                <span className="text-slate-400"> - Luke</span>
              </li>
              <li>{site.serviceArea}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-brand-blue">Emergency</h3>
            <p className="mt-4 text-slate-600">
              Need urgent help? Call Luke directly, or use Micah to lodge a booking request while Luke is on-site.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-highlight"
            >
              24/7 Emergency - Call Luke Now
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 sm:flex-row">
          <p>
            (c) {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">Built for trades. Powered by QuoteOS.</p>
        </div>
      </div>
    </footer>
  );
}
