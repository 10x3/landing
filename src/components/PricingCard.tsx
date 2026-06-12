import { Link } from "react-router-dom";
import type { Plan } from "../content/pricing";

export function PricingCard({ plan }: { plan: Plan }) {
  const highlight = plan.highlight;
  const hasLaunchPrice = Boolean(plan.launchPrice);
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-200 ${
        highlight
          ? "bg-white border border-brand-300 shadow-xl"
          : "bg-white border border-zinc-200/70 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded bg-brand-500 text-white text-[10px] font-semibold uppercase tracking-[0.16em] px-3 py-1 font-mono">
          Most popular
        </span>
      )}
      <div className="flex items-baseline justify-between">
        <h3 className="font-sans text-[22px] font-semibold tracking-tight text-zinc-900">{plan.name}</h3>
      </div>
      <div className="mt-1.5 text-sm text-zinc-500">{plan.bestFor}</div>

      <div className="mt-8">
        {hasLaunchPrice ? (
          <>
            <div className="flex items-baseline gap-3">
              <span className="font-sans text-5xl font-semibold tracking-[-0.03em] text-zinc-900">
                {plan.launchPrice}
              </span>
              <span className="text-sm text-zinc-500 font-mono">{plan.priceSuffix}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs font-mono">
              <span className="text-zinc-400 line-through decoration-zinc-400/70">{plan.price}{plan.priceSuffix}</span>
              <span className="inline-flex items-center gap-1.5 text-brand-600">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                {plan.launchNote}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-5xl font-semibold tracking-[-0.03em] text-zinc-900">
                {plan.price}
              </span>
              <span className="text-sm text-zinc-500 font-mono">{plan.priceSuffix}</span>
            </div>
            {plan.launchFallbackNote && (
              <div className="mt-2 text-xs text-[#d99a2b] font-mono">{plan.launchFallbackNote}</div>
            )}
          </>
        )}
      </div>

      <ul className="mt-8 space-y-3 text-sm text-zinc-700">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0 mt-0.5 text-brand-500"
              aria-hidden
            >
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 pt-6 border-t border-hairline">
        <Link
          to={plan.cta.to}
          className={`w-full inline-flex items-center justify-between gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-tight transition-all active:translate-y-px ${
            highlight
              ? "bg-brand-500 text-white border-b-2 border-brand-700 shadow-raised hover:bg-brand-600 active:border-b"
              : "bg-white text-zinc-800 border border-zinc-200 border-b-2 border-b-zinc-300 shadow-raised hover:bg-zinc-50 hover:border-zinc-300 active:border-b"
          }`}
        >
          {plan.cta.label}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
