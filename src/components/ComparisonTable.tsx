type Row = {
  label: string;
  tenx3: string;
  agency: string;
  ai: string;
  hire: string;
};

const rows: Row[] = [
  { label: "Time to start", tenx3: "48 hours", agency: "2\u20136 weeks", ai: "Minutes", hire: "3\u20136 months" },
  { label: "Time to first PR", tenx3: "< 1 week", agency: "3\u20138 weeks", ai: "Same day", hire: "2\u20133 months" },
  { label: "Monthly cost", tenx3: "$2.5K\u2013$20K+", agency: "$15K\u2013$50K+", ai: "$20\u2013$200", hire: "$10K\u2013$20K fully loaded" },
  { label: "Senior judgement", tenx3: "Where it matters", agency: "Often outsourced", ai: "None", hire: "Depends on hire" },
  { label: "Who owns the code", tenx3: "You", agency: "You (via SOW)", ai: "You", hire: "You" },
  { label: "Who owns quality", tenx3: "We do - jointly", agency: "SOW-bound", ai: "Nobody", hire: "Your team" },
  { label: "Scaling up", tenx3: "One click", agency: "New SOW", ai: "Buy more seats", hire: "Another 6 months" },
  { label: "Scoping overhead", tenx3: "None", agency: "Weeks of decks", ai: "None", hire: "Hiring loop" },
];

const colHeaders = [
  { key: "tenx3", label: "10x3", highlight: true },
  { key: "agency", label: "Dev agency", highlight: false },
  { key: "ai", label: "Pure AI tool", highlight: false },
  { key: "hire", label: "In-house hire", highlight: false },
] as const;

export function ComparisonTable() {
  return (
    <>
      <div className="md:hidden space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-hairline bg-canvas-2 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              {r.label}
            </div>
            <dl className="mt-4 divide-y divide-hairline">
              {colHeaders.map((h) => (
                <div key={h.key} className="flex items-baseline justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                  <dt className={`font-sans text-[13px] tracking-tight ${h.highlight ? "text-ink-100 font-medium" : "text-ink-500"}`}>
                    <span className="inline-flex items-center gap-1.5">
                      {h.label}
                      {h.highlight && <span className="h-1 w-1 rounded-full bg-accent-500" />}
                    </span>
                  </dt>
                  <dd className={`text-right text-sm ${h.highlight ? "text-ink-100 font-medium" : "text-ink-300"}`}>
                    {r[h.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm min-w-[720px]">
          <thead>
            <tr>
              <th className="py-5 pr-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 font-medium border-b border-hairline">
                &nbsp;
              </th>
              {colHeaders.map((h) => (
                <th
                  key={h.key}
                  className={`py-5 px-4 font-sans text-base tracking-tight font-medium border-b ${
                    h.highlight ? "text-ink-100 border-accent-500" : "text-ink-400 border-hairline"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {h.label}
                    {h.highlight && <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i !== rows.length - 1 ? "border-b border-hairline" : ""}>
                <td className="py-4 pr-4 text-ink-400 whitespace-nowrap font-mono text-xs uppercase tracking-wider">
                  {r.label}
                </td>
                <td className="py-4 px-4 text-ink-100 font-medium">{r.tenx3}</td>
                <td className="py-4 px-4 text-ink-400">{r.agency}</td>
                <td className="py-4 px-4 text-ink-400">{r.ai}</td>
                <td className="py-4 px-4 text-ink-400">{r.hire}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
