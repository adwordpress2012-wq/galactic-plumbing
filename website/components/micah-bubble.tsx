"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const greeting =
  "Hi, I'm Micah. I can take your booking while Luke is on-site. How can I help today?";

export function MicahBubble() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      event.preventDefault();
      setOpen(true);
    };
    document.querySelectorAll("[data-micah-open]").forEach((el) => {
      el.addEventListener("click", handleOpen);
    });
    return () => {
      document.querySelectorAll("[data-micah-open]").forEach((el) => {
        el.removeEventListener("click", handleOpen);
      });
    };
  }, []);

  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/20 sm:bg-transparent"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
        {open ? (
          <div
            role="dialog"
            aria-label="Micah booking assistant"
            className="flex max-h-[calc(100vh-6rem)] w-[min(100vw-2rem,24rem)] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-brand-navy/25"
          >
            <div className="flex shrink-0 items-center justify-between bg-brand-deep-navy px-4 py-3 text-white">
              <div>
                <p className="font-black">Micah</p>
                <p className="text-xs font-semibold text-blue-100">Booking assistant</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 text-sm hover:bg-white/10"
                aria-label="Close Micah chat"
              >
                x
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto p-4">
              <p className="rounded-xl rounded-tl-sm bg-brand-sky p-3 text-sm font-medium text-slate-700">
                {greeting}
              </p>

              <form
                className="space-y-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
                  required
                />
                <input
                  type="text"
                  placeholder="Suburb"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
                  required
                />
                <textarea
                  placeholder="Plumbing issue"
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
                  required
                />
                <select
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Urgency
                  </option>
                  <option value="emergency">Emergency</option>
                  <option value="urgent">Urgent - today if possible</option>
                  <option value="standard">Standard - this week</option>
                </select>
                <input
                  type="text"
                  placeholder="Preferred day / time"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
                />
                <Button type="submit" className="w-full">
                  Send Booking Request
                </Button>
              </form>

              <p className="text-center text-xs text-slate-500">
                UI framework only. Luke will confirm your booking personally.
              </p>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-2xl shadow-brand-blue/35 transition-transform hover:scale-[1.02] hover:bg-brand-highlight"
          aria-expanded={open}
          aria-label={open ? "Close Micah" : "Open Micah booking assistant"}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-deep-navy text-xs font-black">
            M
          </span>
          <span className="hidden sm:inline">Micah - Take Your Booking</span>
          <span className="sm:hidden">Micah</span>
        </button>
      </div>
    </>
  );
}
