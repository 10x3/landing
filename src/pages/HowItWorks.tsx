import { Container } from "../components/Container";
import { Section, Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import { intro, templatesPreface, expandedSteps, support } from "../content/howItWorks";

export function HowItWorks() {
  return (
    <>
      <Intro />
      <TemplatesPreface />
      <ExpandedSteps />
      <Support />
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
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-ink-100 tracking-[-0.04em] leading-[1.02]">
            {intro.headline}
          </h1>
          <p className="mt-7 text-xl text-ink-300 leading-relaxed max-w-2xl">{intro.sub}</p>
        </div>
      </Container>
    </section>
  );
}

function TemplatesPreface() {
  return (
    <Section>
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Eyebrow>{templatesPreface.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em] leading-[1.05]">
            {templatesPreface.title}
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <p className="text-lg text-ink-300 leading-relaxed">{templatesPreface.body}</p>
        </div>
      </div>
    </Section>
  );
}

function ExpandedSteps() {
  return (
    <Section tone="surface">
      <div className="divide-y divide-hairline border-y border-hairline">
        {expandedSteps.map((s) => (
          <div key={s.n} className="py-14 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="font-mono text-xs text-accent-400 tracking-[0.18em] uppercase">
                Step {s.n}
              </div>
              <h2 className="mt-4 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em] leading-[1.05]">
                {s.title}
              </h2>
              <p className="mt-3 text-ink-400 font-mono text-sm leading-relaxed">{s.short}</p>
            </div>
            <div className="md:col-span-7 md:pt-2">
              <p className="text-lg text-ink-200 leading-relaxed">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Support() {
  return (
    <section className="relative bg-canvas-2 border-y border-hairline py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-500/10 blur-[160px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow>{support.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-ink-100 tracking-[-0.04em] leading-[1.02]">
            {support.title}
          </h2>
          <p className="mt-7 text-xl text-ink-300 leading-relaxed max-w-3xl">{support.body}</p>
        </div>
        <ul className="mt-14 grid sm:grid-cols-2 gap-0 border-t border-l border-hairline">
          {support.bullets.map((b) => (
            <li
              key={b}
              className="p-7 border-r border-b border-hairline text-ink-200 flex items-start gap-3"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
