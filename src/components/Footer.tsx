import { Link } from "react-router-dom";
import { Container } from "./Container";

const columns = [
  {
    label: "Product",
    links: [
      { label: "How it works", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
      { label: "Team", to: "/team" },
    ],
  },
  {
    label: "Use cases",
    links: [
      { label: "Build from scratch", to: "/use-cases/new-product" },
      { label: "Ship on existing codebase", to: "/use-cases/existing-codebase" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Changelog", to: "#" },
      { label: "Status", to: "#" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Security", to: "#" },
      { label: "Privacy", to: "#" },
      { label: "Terms", to: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 relative border-t border-hairline">
      <div className="bg-grid opacity-40 absolute inset-0 pointer-events-none" />
      <Container className="relative py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                <rect x="1" y="1" width="26" height="26" rx="8" fill="var(--color-ink-100)" />
                <text
                  x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
                  fontFamily="Geist, sans-serif" fontSize="12" fontWeight="700"
                  fill="var(--color-ink-950)" letterSpacing="-0.02em"
                >
                  10
                </text>
                <circle cx="21" cy="8" r="2.5" fill="var(--color-accent-500)" />
              </svg>
              <span className="font-sans text-lg font-semibold tracking-tight text-ink-100">10x3</span>
            </div>
            <p className="mt-4 text-sm text-ink-400 leading-relaxed max-w-xs">
              An AI-accelerated dev team, as a service.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.label}>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                {col.label}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-200 hover:text-ink-100 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink-500 font-mono">
          <div>&copy; {new Date().getFullYear()} 10x3 &middot; All rights reserved</div>
          <div>Built on the stack we ship</div>
        </div>
      </Container>
    </footer>
  );
}
