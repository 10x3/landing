import { useForm, ValidationError } from "@formspree/react";
import { Container } from "../components/Container";
import { Section, Eyebrow } from "../components/Section";
import { hero, expectations, directLine, panel, formCopy } from "../content/contact";

export function Contact() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 md:pt-28 pb-8 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[140px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-ink-100 tracking-[-0.04em] leading-[1.02]">
            {hero.headline}
            <br />
            <span className="text-ink-500">{hero.headlineSecondLine}</span>
          </h1>
          <p className="mt-7 text-lg text-ink-300 leading-relaxed max-w-2xl">{hero.sub}</p>
        </div>
      </Container>
    </section>
  );
}

function Body() {
  return (
    <Section>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <EarlyAccessPanel />
        </div>
        <div className="md:col-span-2 space-y-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              What to expect
            </div>
            <ul className="mt-6 space-y-5">
              {expectations.map((e, i) => (
                <li key={e} className="flex gap-4 items-baseline">
                  <span className="font-mono text-xs text-accent-400 tracking-[0.18em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-200 leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-hairline pt-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              {directLine.label}
            </div>
            <a
              href={`mailto:${directLine.email}`}
              className="mt-4 inline-block font-sans text-xl text-ink-100 hover:text-accent-400 transition-colors tracking-[-0.015em]"
            >
              {directLine.email}
            </a>
            {directLine.hint && (
              <p className="mt-2 text-sm text-ink-400 leading-relaxed max-w-xs">{directLine.hint}</p>
            )}
          </div>
        </div>
      </div>
      <FallbackForm />
    </Section>
  );
}

function EarlyAccessPanel() {
  return (
    <div className="relative rounded-[1.75rem] border border-hairline bg-surface p-7 sm:p-10 md:p-14 min-h-[420px] sm:min-h-[480px] flex flex-col items-start justify-between overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent-500/10 blur-[100px] pointer-events-none" />
      <div className="relative">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/[0.06] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-300">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-400" />
          </span>
          <span className="min-w-0 whitespace-normal leading-snug">{panel.eyebrow}</span>
        </div>
        <div className="mt-8 font-sans text-3xl text-ink-100 font-semibold tracking-[-0.025em] max-w-md">
          {panel.title}
        </div>
        <p className="mt-3 max-w-md text-ink-400 leading-relaxed">{panel.sub}</p>
      </div>
      <button
        type="button"
        onClick={() => openCalendly(panel.calendlyUrl)}
        className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-ink-100 text-ink-950 px-6 py-3 text-sm font-medium hover:bg-white transition-colors active:translate-y-[1px] cursor-pointer"
      >
        {panel.buttonLabel}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function FallbackForm() {
  const [state, handleSubmit] = useForm("meenkgkb");
  return (
    <div id="request" className="mt-20 pt-20 border-t border-hairline">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
        {formCopy.eyebrow}
      </div>
      <h2 className="mt-4 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em]">
        {formCopy.heading}
        <br />
        <span className="text-ink-500">{formCopy.sub}</span>
      </h2>
      {state.succeeded ? (
        <div className="mt-10 rounded-[1.75rem] border border-accent-500/40 bg-accent-500/5 p-8 text-ink-100">
          {formCopy.sent}
        </div>
      ) : (
        <form
          className="mt-10 grid md:grid-cols-2 gap-5 max-w-3xl"
          onSubmit={handleSubmit}
        >
          <Field label="Your name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="md:col-span-2 -mt-3 text-sm text-accent-400" />
          <Field label="Email" name="email" type="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="md:col-span-2 -mt-3 text-sm text-accent-400" />
          <Field label="Company (optional)" name="company" className="md:col-span-2" />
          <Field label="What are you building?" name="building" textarea className="md:col-span-2" />
          <ValidationError prefix="Building" field="building" errors={state.errors} className="md:col-span-2 -mt-3 text-sm text-accent-400" />
          <Field label="Biggest current blocker" name="blocker" textarea className="md:col-span-2" />
          <ValidationError prefix="Blocker" field="blocker" errors={state.errors} className="md:col-span-2 -mt-3 text-sm text-accent-400" />
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center gap-2 rounded-full bg-ink-100 text-ink-950 px-6 py-3 text-sm font-medium hover:bg-white transition-colors active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending…" : formCopy.submit}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  className?: string;
}) {
  const base =
    "w-full bg-canvas-2 border border-hairline rounded-2xl px-4 py-3 text-base text-ink-100 placeholder:text-ink-500 focus:border-accent-500 focus:outline-none transition-colors";
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={`mt-2 ${base}`} />
      ) : (
        <input name={name} type={type} required={required} className={`mt-2 ${base}`} />
      )}
    </label>
  );
}

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
let calendlyLoader: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (calendlyLoader) return calendlyLoader;

  calendlyLoader = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      calendlyLoader = null;
      reject(new Error("Failed to load Calendly"));
    };
    document.body.appendChild(script);
  });

  return calendlyLoader;
}

function openCalendly(url: string) {
  loadCalendly()
    .then(() => window.Calendly?.initPopupWidget({ url }))
    .catch(() => window.open(url, "_blank", "noopener,noreferrer"));
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
