"use client";

import { useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <div className="relative flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-deep-navy text-white shadow-lg shadow-brand-navy/20 ring-1 ring-white/10 transition-colors hover:bg-brand-navy-light lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              {mobileMenuOpen ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              )}
            </svg>
          </button>

          {mobileMenuOpen ? (
            <nav
              id="mobile-navigation"
              className="absolute right-0 top-full z-50 mt-3 w-[min(calc(100vw-2rem),22rem)] rounded-2xl border border-brand-highlight/25 bg-brand-deep-navy p-3 text-white shadow-2xl shadow-brand-navy/35 ring-1 ring-white/10 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="rounded-xl bg-brand-navy-light/80 p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-brand-highlight hover:text-white focus:bg-brand-highlight focus:outline-none"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}

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
      </div>
    </header>
  );
}
