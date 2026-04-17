const crests = [
  "Fintech at scale",
  "AI infrastructure",
  "Developer tools",
  "Marketplaces",
  "YC-backed startups",
  "Public SaaS",
];

export function TrustStrip({ label }: { label: string }) {
  return (
    <div className="mt-16 md:mt-24">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
        {label}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
        {crests.map((c) => (
          <span
            key={c}
            className="font-sans text-lg tracking-tight text-ink-300/70 font-medium"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
