import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Luke" },
  { href: "#recent-work", label: "Recent Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo-mark.svg"
            alt="Galactic Plumbing logo"
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-bold text-brand-navy sm:text-base">
              Galactic Plumbing
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Western Sydney
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-light"
        >
          Call {site.phone}
        </a>
      </div>
    </header>
  );
}
