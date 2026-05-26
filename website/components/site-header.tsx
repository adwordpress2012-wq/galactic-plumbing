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
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-sm shadow-brand-navy/5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="#home" className="flex items-center gap-3" aria-label="Galactic Plumbing Services home">
          <Image
            src="/images/logo-mark.svg"
            alt="Galactic Plumbing Services"
            width={300}
            height={60}
            className="h-14 w-auto max-w-[min(300px,58vw)]"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-7 text-xs font-extrabold uppercase tracking-wide text-brand-deep-navy lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="flex shrink-0 items-center gap-2 rounded-lg bg-brand-blue px-4 py-3 text-sm font-extrabold text-white shadow-xl shadow-brand-blue/25 transition-colors hover:bg-brand-highlight sm:px-5"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15" aria-hidden>
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
              <path d="M2.7 3.7c.2-1 1.2-1.7 2.2-1.7h1.4c.8 0 1.5.5 1.8 1.2l.8 2.1c.3.8.1 1.7-.6 2.2l-.7.5a10.8 10.8 0 0 0 4.4 4.4l.5-.7c.5-.7 1.4-.9 2.2-.6l2.1.8c.7.3 1.2 1 1.2 1.8v1.4c0 1-.7 2-1.7 2.2-.9.2-1.8.3-2.7.3C7.3 17.6 2.4 12.7 2.4 6.4c0-.9.1-1.8.3-2.7Z" />
            </svg>
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-base">{site.phone}</span>
            <span className="block text-[0.65rem] tracking-wider text-blue-100">24/7 Emergency Service</span>
          </span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
