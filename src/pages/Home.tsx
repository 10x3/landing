import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import { PricingCard } from "../components/PricingCard";
import { ScrollSequence } from "../components/ScrollSequence";
import {
  hero,
  heroStats,
  launchBadge,
  threeMovements,
  engineers,
  howItWorksFooter,
  useCaseCallout,
  pricingPreviewHeading,
  finalCta,
} from "../content/home";
import { plans } from "../content/pricing";

export function Home() {
  return (
    <>
      <Hero />
      <ThreeMovements />
      <Engineers />
      <ScrollSequence />
      <HowItWorksFooter />
      <UseCaseCallout />
      <PricingPreview />
      <CTABand
        title={finalCta.title}
        sub={finalCta.sub}
        primary={hero.primary}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-6 md:pt-10 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="bg-grid absolute inset-0 opacity-40"
          style={{
            maskImage: "radial-gradient(circle at 30% 30%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 30% 30%, black, transparent 70%)",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent-500/10 blur-[160px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-700/5 blur-[140px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <Container className="relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-start">
          <div className="md:col-span-8">
            <LaunchPill />
            <h1 className="mt-5 font-sans text-[40px] sm:text-5xl md:text-[68px] lg:text-[80px] font-semibold tracking-[-0.04em] text-ink-100 leading-[0.98]">
              {hero.headlineLeader}
              <br />
              <span className="text-ink-400">{hero.headlineFocus}</span>
            </h1>
            <p className="mt-6 md:mt-7 text-base md:text-lg text-ink-300 leading-relaxed max-w-2xl">
              {hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={hero.primary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-ink-100 text-ink-950 px-5 py-3 text-sm font-medium tracking-tight hover:bg-white transition-all active:translate-y-[1px]"
              >
                {hero.primary.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          <aside className="md:col-span-4 md:pt-2 md:pl-5 md:border-l md:border-hairline">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-7">
              {heroStats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} hint={s.hint} />
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function LaunchPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/[0.06] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-300">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-60 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-400" />
      </span>
      {launchBadge.label}
    </div>
  );
}

function Stat({ value, label, hint }: { value: string; label: string; hint: string }) {
  return (
    <div>
      <div className="font-sans text-4xl md:text-[40px] font-semibold tracking-[-0.04em] text-ink-100">
        {value}
      </div>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-400">
        {label}
      </div>
      <p className="mt-1.5 text-xs md:text-sm text-ink-400 leading-relaxed max-w-[220px]">{hint}</p>
    </div>
  );
}

function ThreeMovements() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={threeMovements.eyebrow}
        title={threeMovements.title}
        sub={threeMovements.sub}
      />
      <div className="mt-14 grid md:grid-cols-3 gap-0 border-t border-l border-hairline">
        {threeMovements.movements.map((m, i) => (
          <div key={m.title} className="p-7 md:p-9 border-r border-b border-hairline bg-canvas">
            <div className="font-mono text-xs text-accent-400 tracking-[0.18em] uppercase">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 font-sans text-2xl md:text-3xl font-semibold text-ink-100 tracking-[-0.02em] leading-[1.1]">
              {m.title}
            </h3>
            <p className="mt-5 text-sm font-mono text-ink-500 leading-relaxed">
              {m.problem}
            </p>
            <p className="mt-3 text-base text-ink-200 leading-relaxed">
              {m.answer}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Engineers() {
  return (
    <Section>
      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5">
          <Eyebrow>{engineers.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-sans text-4xl md:text-6xl font-semibold text-ink-100 tracking-[-0.035em] leading-[1.02]">
            {engineers.title}
          </h2>
          <p className="mt-7 text-ink-400 leading-relaxed max-w-md">{engineers.vetting}</p>
          <Link
            to={engineers.link.to}
            className="mt-8 inline-flex items-center gap-2 text-ink-100 font-medium text-sm group"
          >
            <span className="pb-0.5 border-b border-ink-500 group-hover:border-ink-100 transition-colors">
              {engineers.link.label}
            </span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
          </Link>
        </div>
        <div className="md:col-span-7 md:pt-2 space-y-7">
          {engineers.rules.map((r, i) => (
            <div key={r.title} className="flex gap-5">
              <div className="font-mono text-xs text-accent-400 pt-1.5 w-8 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="font-sans text-xl font-semibold text-ink-100 tracking-[-0.01em]">
                  {r.title}
                </div>
                <p className="mt-2 text-ink-300 leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function HowItWorksFooter() {
  return (
    <section className="border-t border-hairline">
      <Container>
        <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
            {howItWorksFooter.prompt}
          </div>
          <Link
            to={howItWorksFooter.link.to}
            className="inline-flex items-center gap-2 text-ink-100 font-medium text-sm group self-start md:self-auto"
          >
            <span className="pb-0.5 border-b border-ink-500 group-hover:border-ink-100 transition-colors">
              {howItWorksFooter.link.label}
            </span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function UseCaseCallout() {
  return (
    <Section tone="surface">
      <div className="max-w-2xl">
        <Eyebrow>{useCaseCallout.eyebrow}</Eyebrow>
        <h2 className="mt-5 font-sans text-3xl md:text-4xl font-semibold text-ink-100 tracking-[-0.025em] leading-[1.1]">
          {useCaseCallout.title}
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-0 border-t border-l border-hairline">
        {useCaseCallout.options.map((o) => (
          <Link
            key={o.title}
            to={o.to}
            className="group p-8 border-r border-b border-hairline bg-canvas hover:bg-surface transition-colors flex flex-col"
          >
            <div className="font-sans text-xl md:text-2xl font-semibold text-ink-100 tracking-[-0.015em]">
              {o.title}
            </div>
            <p className="mt-3 text-ink-400 leading-relaxed">{o.hint}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-ink-200 group-hover:text-ink-100">
              <span className="pb-0.5 border-b border-ink-600 group-hover:border-ink-200 transition-colors">
                {o.label}
              </span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          eyebrow={pricingPreviewHeading.eyebrow}
          title={pricingPreviewHeading.title}
        />
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 text-ink-100 font-medium text-sm group self-start md:self-auto"
        >
          <span className="pb-0.5 border-b border-ink-500 group-hover:border-ink-100 transition-colors">
            View full pricing
          </span>
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
        </Link>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </Section>
  );
}
