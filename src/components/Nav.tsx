import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, ctaLabel, ctaTo } from "../content/nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const showChrome = scrolled || open;
  const radiusClass = open ? "rounded-3xl" : "rounded-full";

  return (
    <header className="sticky top-0 z-40 flex justify-center pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto mx-4 w-full max-w-6xl transition-[background-color,border-color,box-shadow] duration-300 ${radiusClass} px-3 ${
          showChrome
            ? "bg-ink-900/85 backdrop-blur-xl border border-hairline shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex h-12 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 pl-2" aria-label="10x3 home">
            <Logo />
            <span className="font-sans text-[15px] font-semibold tracking-tight text-ink-100">10x3</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm tracking-tight rounded-full transition-colors ${
                    isActive
                      ? "text-ink-100 bg-surface-2"
                      : "text-ink-300 hover:text-ink-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-1 pr-0.5">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 text-ink-950 px-4 py-1.5 text-sm font-medium tracking-tight hover:bg-white transition-colors active:translate-y-[1px]"
            >
              {ctaLabel}
              <ArrowRight />
            </Link>
          </div>

          <button
            className="md:hidden -mr-1 p-2.5 text-ink-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M5 5l12 12M17 5L5 17" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 8h14" strokeLinecap="round" />
                  <path d="M4 14h14" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pt-2 pb-3 px-1 flex flex-col gap-1 border-t border-hairline mt-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-ink-100 text-[15px] py-3 px-3 rounded-xl hover:bg-surface-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={ctaTo}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink-100 text-ink-950 px-4 py-3 text-sm font-medium"
            >
              {ctaLabel}
              <ArrowRight />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="flex-shrink-0">
      <rect x="1" y="1" width="26" height="26" rx="8" fill="var(--color-ink-100)" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Geist, sans-serif"
        fontSize="12"
        fontWeight="700"
        fill="var(--color-ink-950)"
        letterSpacing="-0.02em"
      >
        10
      </text>
      <circle cx="21" cy="8" r="2.5" fill="var(--color-accent-500)" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
