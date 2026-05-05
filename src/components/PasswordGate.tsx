import { useEffect, useState, type FormEvent, type ReactNode } from "react";

const STORAGE_KEY = "10x3_gate";
const PASSWORD = "10x3run";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(window.localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
  }, []);

  if (unlocked === null) {
    return <div className="min-h-screen bg-canvas" />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === PASSWORD) {
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
      setUnlocked(true);
      return;
    }
    setError(true);
    setShake(true);
    setTimeout(() => setShake(false), 450);
  };

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center bg-canvas text-ink-100 overflow-hidden px-6">
      <div className="bg-grid absolute inset-0 opacity-40 pointer-events-none" style={{ maskImage: "radial-gradient(circle at 50% 50%, black, transparent 70%)", WebkitMaskImage: "radial-gradient(circle at 50% 50%, black, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-accent-700/[0.06] blur-[120px] pointer-events-none" />

      <div
        className={`relative w-full max-w-md rounded-[1.75rem] border border-hairline bg-surface/90 backdrop-blur-md p-10 md:p-12 ${
          shake ? "animate-[shake_0.4s_cubic-bezier(.36,.07,.19,.97)]" : ""
        }`}
      >
        <div className="flex items-center gap-2 mb-10">
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

        <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-400" />
          </span>
          Private beta
        </div>

        <h1 className="mt-5 font-sans text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-ink-100 leading-[1.05]">
          This page is still under wraps.
        </h1>
        <p className="mt-3 text-ink-400 leading-relaxed">
          Enter your access password to continue.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              Access password
            </label>
            <input
              type="password"
              autoFocus
              autoComplete="off"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              className={`mt-2 w-full bg-canvas-2 border rounded-2xl px-4 py-3 text-ink-100 placeholder:text-ink-500 focus:outline-none transition-colors ${
                error
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-hairline focus:border-accent-500"
              }`}
              aria-invalid={error}
            />
            <div className="mt-2 font-mono text-xs text-red-400 min-h-[1rem]">
              {error ? "Incorrect password." : ""}
            </div>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink-100 text-ink-950 px-5 py-3 text-sm font-medium tracking-tight hover:bg-white transition-all active:translate-y-[1px]"
          >
            Unlock
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>

        <p className="mt-8 text-xs text-ink-500">
          Looking for early access?{" "}
          <span className="text-ink-300">Email founders@10x3.dev.</span>
        </p>
      </div>

      <style>{`
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
}
