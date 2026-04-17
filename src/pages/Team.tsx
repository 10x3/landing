import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import {
  hero,
  networkPrinciples,
  vettingBar,
  manifesto,
  standards,
  disqualifier,
} from "../content/team";

export function Team() {
  return (
    <>
      <Hero />
      <Network />
      <Vetting />
      <Manifesto />
      <Standards />
      <Disqualifier />
      <CTABand
        title="Meet your team on the early-access call."
        sub="We walk you through the network, tell you who we'd match to your project, and lock you in at 50% off for 6 months."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-40 pb-12 overflow-hidden">
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

function Network() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The model"
        title="How a project gets a team."
        sub="We run a curated network, not a fixed payroll. Three principles hold every engagement together."
      />
      <div className="mt-14 divide-y divide-hairline border-y border-hairline">
        {networkPrinciples.map((p, i) => (
          <div key={p.title} className="py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-1 font-mono text-xs text-accent-400 tracking-[0.18em]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="md:col-span-4 font-sans text-2xl md:text-3xl font-medium tracking-[-0.02em] text-ink-100 leading-snug">
              {p.title}
            </div>
            <div className="md:col-span-7 text-ink-400 leading-relaxed md:pt-1">{p.body}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Vetting() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="The bar"
        title="Who gets into the network."
        sub="Every engineer clears the same bar before they touch a client project. No juniors dressed as seniors, no resource-pool mystery meat."
      />
      <ul className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-hairline">
        {vettingBar.map((item) => (
          <li
            key={item}
            className="p-6 border-r border-b border-hairline text-sm text-ink-200 flex gap-3 items-start bg-canvas"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 text-accent-400">
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Manifesto() {
  return (
    <Section>
      <SectionHeading eyebrow="How the network works" title="Six rules every engineer signs before they start." />
      <ul className="mt-14 divide-y divide-hairline border-y border-hairline">
        {manifesto.map((m, i) => (
          <li key={m} className="py-6 flex gap-8 items-baseline">
            <span className="font-mono text-xs text-accent-400 tracking-[0.18em] uppercase w-10 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-xl md:text-2xl text-ink-100 tracking-[-0.015em] leading-snug">
              {m}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Standards() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="Engineering standards" title="The technical baseline on every project." />
      <ul className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-hairline">
        {standards.map((s) => (
          <li
            key={s}
            className="p-6 border-r border-b border-hairline text-sm text-ink-200 flex gap-3 items-start bg-canvas"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Disqualifier() {
  return (
    <Section>
      <div className="max-w-4xl">
        <Eyebrow>Not a fit</Eyebrow>
        <h2 className="mt-6 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em] leading-[1.1]">
          {disqualifier.headline}
        </h2>
        <ul className="mt-10 space-y-5">
          {disqualifier.points.map((p) => (
            <li key={p} className="flex gap-5 items-baseline">
              <span className="text-accent-500 font-mono">{"-"}</span>
              <span className="text-xl text-ink-200 leading-relaxed tracking-[-0.01em]">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
