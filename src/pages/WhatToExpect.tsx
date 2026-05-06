import { Container } from "../components/Container";
import { Section, Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import { intro, journey, parallels } from "../content/whatToExpect";

export function WhatToExpect() {
  return (
    <>
      <Intro />
      <Journey />
      <Parallels />
      <CTABand
        title="Ready to take the first step?"
        sub="Tell us about your project. We respond fast and we don't gatekeep."
        primary={{ label: "Get in touch", to: "/contact" }}
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

function Journey() {
  return (
    <Section tone="surface">
      <div className="divide-y divide-hairline border-y border-hairline">
        {journey.map((s) => (
          <div key={s.n} className="py-12 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="font-mono text-xs text-accent-400 tracking-[0.18em] uppercase">
                Step {s.n}
              </div>
              <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold text-ink-100 tracking-[-0.025em] leading-[1.1]">
                {s.title}
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-2">
              <p className="text-lg text-ink-300 leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Parallels() {
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>{parallels.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-sans text-4xl md:text-5xl font-semibold text-ink-100 tracking-[-0.035em] leading-[1.05]">
          {parallels.title}
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {parallels.items.map((item) => (
          <div key={item.title} className="p-7 border-r border-b border-hairline">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
              <div>
                <div className="font-sans text-xl font-medium text-ink-100 tracking-[-0.01em]">
                  {item.title}
                </div>
                <p className="mt-3 text-ink-400 leading-relaxed">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
