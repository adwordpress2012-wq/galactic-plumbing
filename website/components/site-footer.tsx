import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold text-brand-navy">{site.name}</h2>
            <p className="mt-3 text-slate-600">
              Fast, reliable plumbing across {site.location}.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>
                <a
                  href={site.phoneHref}
                  className="font-semibold text-brand-navy hover:text-brand-blue"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-brand-blue"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.serviceArea}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Emergency
            </h3>
            <p className="mt-4 text-slate-600">
              Need urgent help? Call Luke directly — or use Micah to lodge a
              booking request while Luke is on-site.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex rounded-xl bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-light"
            >
              24/7 Emergency — Call Luke Now
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">Powered by QuoteOS</p>
        </div>
      </div>
    </footer>
  );
}
