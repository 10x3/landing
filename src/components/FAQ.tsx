import { useState } from "react";

type Item = { q: string; a: string };

export function FAQ({ items }: { items: readonly Item[] | Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between py-5 text-left group"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-sans text-[17px] font-medium text-ink-100 tracking-tight pr-4 group-hover:text-white transition-colors">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 text-ink-400 transition-all duration-300 ${
                  isOpen ? "rotate-45 text-accent-400" : ""
                }`}
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-ink-300 leading-relaxed max-w-3xl">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
