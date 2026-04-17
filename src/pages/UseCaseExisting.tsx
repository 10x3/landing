import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { Button } from "../components/Button";
import { CTABand } from "../components/CTABand";
import { FAQ } from "../components/FAQ";
import { existingCodebase as c } from "../content/useCases";

export function UseCaseExisting() {
  return (
    <>
      <Hero />
      <Path />
      <Stays />
      <UseCases />
      <CtoNote />
      <FaqSection />
      <CTABand
        title="Give us a repo. We&apos;ll give you a PR."
        sub="Request early access. Bring your stack; we'll show you how the worker picks it up - and lock you in at 50% off for 6 months."
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-40 pb-12 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-[140px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-ink-100 tracking-[-0.04em] leading-[1.02]">
            Point us at your repo.
            <br />
            <span className="text-ink-500">We&apos;ll be shipping by Friday.</span>
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

function Path() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The 48-hour integration path"
        title="From connect to first PR in two days."
      />
      <div className="mt-14 grid md:grid-cols-3 gap-0 border-t border-l border-hairline">
        {c.path.map((p, i) => (
          <div key={p.step} className="p-8 border-r border-b border-hairline bg-canvas">
            <div className="font-mono text-xs text-accent-400 uppercase tracking-[0.18em]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-3 font-sans text-xl text-ink-100 font-semibold tracking-[-0.015em]">{p.step}</div>
            <p className="mt-2.5 text-ink-400 leading-relaxed text-sm">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stays() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="What stays yours" title="We work against your repo. We don&apos;t move into it." />
      <ul className="mt-14 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {c.stays.map((s) => (
          <li
            key={s}
            className="p-7 border-r border-b border-hairline text-ink-200 flex gap-3 bg-canvas"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
            <span className="leading-relaxed">{s}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function UseCases() {
  return (
    <Section>
      <SectionHeading eyebrow="Where teams deploy us" title="The work that always gets stuck in the backlog." />
      <div className="mt-14 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {c.useCases.map((u) => (
          <div key={u.title} className="p-8 border-r border-b border-hairline">
            <div className="font-sans text-xl font-semibold text-ink-100 tracking-[-0.015em]">{u.title}</div>
            <p className="mt-3 text-ink-400 leading-relaxed">{u.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CtoNote() {
  return (
    <Section tone="surface">
      <div className="max-w-3xl">
        <Eyebrow>For CTOs</Eyebrow>
        <h2 className="mt-6 font-sans text-3xl md:text-5xl font-semibold text-ink-100 tracking-[-0.03em] leading-[1.1]">
          {c.ctoNote.headline}
        </h2>
        <p className="mt-8 text-lg text-ink-300 leading-relaxed">{c.ctoNote.body}</p>
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section>
      <SectionHeading eyebrow="For the skeptics" title="The questions your tech lead will ask." />
      <div className="mt-12">
        <FAQ items={c.faq} />
      </div>
    </Section>
  );
}
