const items = [
  "Ship PRs, not promises",
  "AI writes. Humans ship.",
  "No SOWs. No scoping decks.",
  "Senior engineers in your Slack",
  "Your repo. Your rules.",
  "One click to production",
];

export function KineticMarquee() {
  const loop = [...items, ...items];
  return (
    <div
      aria-hidden
      className="relative border-y border-hairline bg-canvas-2 py-5 overflow-hidden"
    >
      <div
        className="flex gap-10 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.2em] text-ink-400"
        style={{ animation: "marquee 40s linear infinite", width: "max-content" }}
      >
        {loop.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span>{it}</span>
            <span className="h-1 w-1 rounded-full bg-accent-500/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
