import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { PricingCard } from "../components/PricingCard";
import { ComparisonTable } from "../components/ComparisonTable";
import { FAQ } from "../components/FAQ";
import { CTABand } from "../components/CTABand";
import { plans, everyPlanIncludes, pricingFaq, launchOffer } from "../content/pricing";

export function Pricing() {
  return (
    <>
      <Hero />
      <Plans />
      <Includes />
      <ScaleUpRule />
      <Comparison />
      <FaqSection />
      <CTABand
        title="Not sure which plan fits?"
        sub="Book a 30-min call. We'll recommend honestly - including telling you when Beginner is all you need."
        primary={{ label: "Book a 30-min call", to: "/contact" }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-40 pb-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[140px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-zinc-900 tracking-[-0.04em] leading-[1.02]">
            One subscription. <br /><span className="text-brand-600">Three sizes.</span>
          </h1>
          <p className="mt-7 text-lg text-zinc-600 leading-relaxed max-w-2xl">
            Every plan: AI that builds the tasks you write in plain language, a dedicated senior engineer one message away when something needs fixing, and the right project template to start from. No SOWs, no hourly billing games, no scoping decks.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Plans() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <LaunchBanner />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function LaunchBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/[0.10] via-amber-500/[0.04] to-transparent px-5 py-4 md:px-7 md:py-5">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <div className="inline-flex self-start max-w-full items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d99a2b]">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
          </span>
          <span className="min-w-0 whitespace-normal leading-snug">{launchOffer.label}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
          <div className="font-sans text-base md:text-lg text-zinc-900 font-medium tracking-tight">
            {launchOffer.title}
          </div>
          <div className="text-sm text-zinc-500">{launchOffer.sub}</div>
        </div>
      </div>
    </div>
  );
}

function Includes() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="Included in every plan" title="Same standards. Same engineers. Same Slack." />
      <ul className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-hairline">
        {everyPlanIncludes.map((item) => (
          <li
            key={item}
            className="p-6 border-r border-b border-hairline text-sm text-zinc-800 flex items-start gap-3"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 text-brand-600">
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ScaleUpRule() {
  return (
    <Section>
      <div className="max-w-5xl">
        <Eyebrow>The scale-up rule</Eyebrow>
        <p className="mt-6 font-sans text-4xl md:text-6xl font-semibold text-zinc-900 tracking-[-0.035em] leading-[1.05]">
          You can grow your team in a click.
          <br />
          <span className="text-zinc-400">You cannot shrink it below your plan&apos;s floor.</span>
        </p>
        <p className="mt-8 text-lg text-zinc-500 leading-relaxed max-w-2xl">
          Senior engineers need committed time to do real work {"-"} not triage. Our clients ship faster because we protect the floor. If that reads as restrictive: it is, and that&apos;s the point.
        </p>
      </div>
    </Section>
  );
}

function Comparison() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="How we compare"
        title="10x3 vs the alternatives you&apos;re already weighing."
        sub="Straightforward comparison. No marketing gymnastics. If an alternative is the right call, we&apos;ll tell you."
      />
      <div className="mt-14 md:rounded-2xl md:border md:border-hairline md:bg-zinc-50 md:p-10">
        <ComparisonTable />
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Pricing FAQ" title="The questions we get most." />
      <div className="mt-12">
        <FAQ items={pricingFaq} />
      </div>
    </Section>
  );
}
