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
    <header className="sticky top-0 z-40 flex justify-center py-4 pointer-events-none">
      <div
        className={`pointer-events-auto mx-4 w-full max-w-6xl transition-[background-color,border-color,box-shadow] duration-300 ${radiusClass} px-3 ${
          showChrome
            ? "bg-white/80 backdrop-blur-xl border border-zinc-200/70 shadow-[0_10px_40px_-20px_rgba(24,24,27,0.25)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex h-12 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 pl-2" aria-label="10x3 home">
            <Logo />
            <span className="font-sans text-[15px] font-semibold tracking-tight text-zinc-900">10x3</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              "children" in link ? (
                <div key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `px-3 py-1.5 text-sm tracking-tight rounded-full transition-colors inline-flex items-center gap-1 ${
                        isActive
                          ? "text-zinc-900 bg-zinc-50"
                          : "text-zinc-600 hover:text-zinc-900"
                      }`
                    }
                  >
                    {link.label}
                    <Chevron />
                  </NavLink>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <div className="min-w-[240px] rounded-2xl border border-zinc-200/70 bg-white shadow-lg p-1.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-xl px-3 py-2.5 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-sm tracking-tight rounded-full transition-colors ${
                      isActive
                        ? "text-zinc-900 bg-zinc-50"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden md:flex items-center gap-1 pr-0.5">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 text-white px-4 py-1.5 text-sm font-medium tracking-tight hover:bg-brand-600 transition-colors active:translate-y-[1px]"
            >
              {ctaLabel}
              <ArrowRight />
            </Link>
          </div>

          <button
            className="md:hidden -mr-1 p-2.5 text-zinc-800"
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
              <div key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block text-zinc-900 text-[15px] py-3 px-3 rounded-xl hover:bg-zinc-50 transition-colors"
                >
                  {link.label}
                </Link>
                {"children" in link && (
                  <div className="ml-3 mb-1 flex flex-col border-l border-hairline pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="text-zinc-600 text-sm py-2 px-2 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to={ctaTo}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 text-white px-4 py-3 text-sm font-medium"
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
      <rect x="1" y="1" width="26" height="26" rx="8" fill="var(--color-brand-500)" />
      <text
        x="11"
        y="20"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="-0.04em"
      >
        10
      </text>
      <text
        x="21"
        y="12"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="var(--color-amber-500)"
      >
        3
      </text>
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

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="transition-transform duration-200 group-hover:rotate-180">
      <path d="M2.5 4l2.5 2.5L7.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
