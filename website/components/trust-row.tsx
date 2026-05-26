function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-amber-400" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
    </svg>
  );
}

export function TrustRow() {
  return (
    <section id="reviews" className="bg-white py-3" aria-label="Google reviews trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-xl shadow-brand-navy/8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-[#4285f4]" aria-hidden>G</span>
            <div className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <p className="text-lg font-black text-brand-deep-navy">5.0 Google Reviews</p>
          </div>
          <p className="text-center font-semibold text-slate-600 sm:text-right">
            Trusted across Penrith, St Marys, Mount Druitt, Blacktown and Western Sydney.
          </p>
        </div>
      </div>
    </section>
  );
}
