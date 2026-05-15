import { Link } from "react-router-dom";
import { Container } from "./Container";

export function CTABand({
  title = "Ready to ship?",
  sub = "Book a 30-min call. If you're a fit, you lock in 50% off for 6 months.",
  primary = { label: "Book a 30-min call", to: "/contact" },
  secondary,
}: {
  title?: string;
  sub?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-hairline bg-canvas-2 p-7 sm:p-10 md:p-20">
          <div className="bg-grid absolute inset-0 opacity-50 pointer-events-none" style={{ maskImage: "radial-gradient(circle at 70% 40%, black, transparent 70%)", WebkitMaskImage: "radial-gradient(circle at 70% 40%, black, transparent 70%)" }} />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-500/10 blur-[120px] pointer-events-none" />
          <div className="relative grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-400">
                Let&apos;s talk
              </div>
              <h2 className="mt-4 font-sans text-4xl md:text-6xl font-semibold tracking-[-0.035em] text-ink-100 leading-[1.02]">
                {title}
              </h2>
              <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-xl">{sub}</p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 md:items-stretch">
              <Link
                to={primary.to}
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-ink-100 text-ink-950 px-6 py-3.5 text-sm font-medium tracking-tight hover:bg-white transition-all active:translate-y-[1px]"
              >
                {primary.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex items-center justify-between gap-3 rounded-full border border-hairline-strong text-ink-200 px-6 py-3.5 text-sm font-medium tracking-tight hover:border-ink-400 hover:text-ink-100 transition-colors"
                >
                  {secondary.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
