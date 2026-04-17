import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import { components, fullCycle, workerKnows, failureModes, security, intro } from "../content/howItWorks";

export function HowItWorks() {
  return (
    <>
      <Intro />
      <Components />
      <FullCycle />
      <WorkerKnows />
      <FailureModes />
      <Security />
      <CTABand
        title="See it on your own project."
        sub="Request early access. We'll show you one real cycle - plan, refine, ship - and lock you in at 50% off for 6 months."
      />
    </>
  );
}

function Intro() {
  return (
    <section className="relative pt-28 md:pt-40 pb-14 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-[140px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-ink-100 tracking-[-0.04em] leading-[1.02]">
            {intro.headline}
          </h1>
          <p className="mt-7 text-xl text-ink-300 leading-relaxed max-w-2xl">{intro.sub}</p>
        </div>
      </Container>
    </section>
  );
}

function Components() {
  return (
    <Section>
      <div className="divide-y divide-hairline border-y border-hairline">
        {components.map((c, i) => (
          <div key={c.title} className="py-14 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="font-mono text-xs text-accent-400 tracking-[0.18em] uppercase">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-4 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em]">
                {c.title}
              </h2>
              <p className="mt-3 text-ink-400 font-mono text-sm">{c.sub}</p>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-4 text-ink-200 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FullCycle() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="A full cycle"
        title="From &lsquo;new cycle&rsquo; to &lsquo;deployed&rsquo;."
      />
      <ol className="mt-14 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {fullCycle.map((s, i) => (
          <li
            key={s.step}
            className="p-7 border-r border-b border-hairline flex gap-5 bg-canvas"
          >
            <div className="font-mono text-xs text-accent-400 flex-shrink-0 w-10">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="font-medium text-ink-100 tracking-tight">{s.step}</div>
              <p className="mt-1.5 text-ink-400 leading-relaxed text-sm">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function WorkerKnows() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Project context"
        title="What the worker knows about your codebase."
        sub="The difference between generic AI and a teammate who&apos;s read your repo."
      />
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-hairline">
        {workerKnows.map((k) => (
          <div
            key={k}
            className="p-6 border-r border-b border-hairline text-sm text-ink-200 flex items-start gap-3"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
            {k}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FailureModes() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Honesty"
        title="Failure modes, and how we handle them."
      />
      <div className="mt-14 divide-y divide-hairline border-y border-hairline">
        {failureModes.map((f) => (
          <div key={f.when} className="py-7 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-5 font-sans text-xl md:text-2xl text-ink-100 tracking-[-0.015em] leading-snug">
              {f.when}
            </div>
            <div className="md:col-span-7 text-ink-400 leading-relaxed md:pt-1">{f.what}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Security() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Security & ownership"
        title={security.headline}
      />
      <ul className="mt-10 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {security.bullets.map((b) => (
          <li
            key={b}
            className="p-7 border-r border-b border-hairline text-ink-200 flex gap-3"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
