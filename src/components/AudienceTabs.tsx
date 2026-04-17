import { Link } from "react-router-dom";
import { audienceTabs } from "../content/home";

export function AudienceTabs() {
  return (
    <div className="border-t border-hairline">
      {audienceTabs.map((t, i) => (
        <Link
          key={t.id}
          to={t.cta.to}
          className="group block border-b border-hairline transition-colors hover:bg-canvas-2/60"
        >
          <div className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 font-mono text-[11px] tracking-[0.2em] text-accent-400">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="md:col-span-4">
              <div className="font-sans text-2xl md:text-3xl font-semibold tracking-[-0.025em] text-ink-100 leading-[1.1]">
                {t.label}
              </div>
            </div>
            <div className="md:col-span-5 text-ink-400 leading-relaxed">
              {t.body}
            </div>
            <div className="md:col-span-2 md:justify-self-end">
              <span className="inline-flex items-center gap-2 text-sm text-ink-300 group-hover:text-ink-100 transition-colors">
                <span
                  className="pb-0.5 border-b border-ink-600 group-hover:border-accent-400 transition-colors whitespace-nowrap"
                >
                  {t.cta.label}
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1 text-accent-400"
                >
                  &rarr;
                </span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
