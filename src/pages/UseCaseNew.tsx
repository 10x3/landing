import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { Button } from "../components/Button";
import { CTABand } from "../components/CTABand";
import { newProduct as c } from "../content/useCases";

export function UseCaseNew() {
  return (
    <>
      <Hero />
      <Timeline />
      <Templates />
      <Focus />
      <Story />
      <CTABand
        title="Thirty days from now."
        sub="We can be shipping your MVP by then. Request early access - founding customers lock in 50% off for 6 months."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-40 pb-12 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-[140px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-ink-100 tracking-[-0.04em] leading-[1.02]">
            From idea to shipped MVP in{" "}
            <span className="text-accent-400">30 days</span>
            {"\u00a0"}<span className="text-ink-500">{"-"} without hiring a single engineer.</span>
          </h1>
          <p className="mt-7 text-lg text-ink-300 leading-relaxed max-w-2xl">{c.hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">Request early access</Button>
            <Button to="/pricing" variant="secondary">See pricing</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Timeline() {
  return (
    <Section>
      <SectionHeading eyebrow="The 30-day path" title="Week by week, milestone by milestone." />
      <ol className="mt-16 relative border-l border-hairline pl-8 md:pl-12 space-y-12">
        {c.timeline.map((t) => (
          <li key={t.day} className="relative">
            <span className="absolute -left-[10px] md:-left-[14px] top-1 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-canvas" />
            <div className="font-mono text-xs text-accent-400 uppercase tracking-[0.18em]">{t.day}</div>
            <div className="mt-3 font-sans text-xl md:text-2xl text-ink-100 leading-snug max-w-2xl tracking-[-0.015em]">
              {t.event}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Templates() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="Starting points" title="Battle-tested templates. Or bring your own spec." />
      <div className="mt-14 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {c.templates.map((t) => (
          <div key={t.name} className="p-8 border-r border-b border-hairline bg-canvas">
            <div className="font-sans text-2xl text-ink-100 font-semibold tracking-[-0.015em]">{t.name}</div>
            <div className="mt-2 text-sm text-ink-400 font-mono">{t.stack}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Focus() {
  return (
    <Section>
      <SectionHeading eyebrow="Division of labor" title="You focus on the business. We focus on the code." />
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <Column title="You focus on" items={c.focus.yours} tone="dim" />
        <Column title="We focus on" items={c.focus.ours} tone="bright" />
      </div>
    </Section>
  );
}

function Column({ title, items, tone }: { title: string; items: string[]; tone: "bright" | "dim" }) {
  const dot = tone === "bright" ? "bg-accent-500" : "bg-ink-500";
  return (
    <div className="border border-hairline rounded-[1.75rem] bg-surface p-8">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">{title}</div>
      <ul className="mt-6 space-y-4">
        {items.map((i) => (
          <li key={i} className="flex gap-3 items-center">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            <span className="text-xl text-ink-100 tracking-[-0.01em]">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Story() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl">
        <Eyebrow>{c.story.label}</Eyebrow>
        <h2 className="mt-6 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em] leading-[1.1]">
          {c.story.title}
        </h2>
        <p className="mt-8 text-lg text-ink-300 leading-relaxed">{c.story.body}</p>
        <p className="mt-6 font-mono text-xs text-ink-500 uppercase tracking-[0.12em]">{c.story.footnote}</p>
      </div>
    </Section>
  );
}
