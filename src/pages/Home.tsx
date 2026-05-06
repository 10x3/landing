import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import { FAQ } from "../components/FAQ";
import { PricingCard } from "../components/PricingCard";
import { AudienceTabs } from "../components/AudienceTabs";
import { ScrollSequence } from "../components/ScrollSequence";
import { KineticMarquee } from "../components/KineticMarquee";
import { hero, problems, pillars, promise, homeFaq, launchBadge, supportPromise, workEnvironmentBrief } from "../content/home";
import { plans } from "../content/pricing";

export function Home() {
  return (
    <>
      <Hero />
      <KineticMarquee />
      <ProblemPanel />
      <ScrollSequence />
      <WhatToExpectPrompt />
      <WorkEnvironmentStrip />
      <SupportPromise />
      <Pillars />
      <Audience />
      <Promise />
      <PricingPreview />
      <FaqSection />
      <CTABand
        title="Ready to ship?"
        sub="Request early access. First 50 customers lock in 50% off for 6 months - and a senior team that actually knows your repo."
        primary={{ label: "Request early access", to: "/contact" }}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-6 md:pt-10 pb-10 md:pb-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-grid absolute inset-0 opacity-40" style={{ maskImage: "radial-gradient(circle at 30% 30%, black, transparent 70%)", WebkitMaskImage: "radial-gradient(circle at 30% 30%, black, transparent 70%)" }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent-500/10 blur-[160px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-700/5 blur-[140px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <Container className="relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6 items-start">
          <div className="md:col-span-8">
            <LaunchPill />
            <h1 className="mt-5 font-sans text-[38px] sm:text-5xl md:text-[68px] lg:text-[80px] font-semibold tracking-[-0.04em] text-ink-100 leading-[0.98]">
              Ship your product{" "}
              <span className="text-accent-400 font-medium italic">10{"\u00d7"}</span>
              {" "}faster.
              <br />
              <span className="text-ink-400">AI that doesn&apos;t quit at feature #3.</span>
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-300 leading-relaxed max-w-xl">
              {hero.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to={hero.primary.to}
                className="group inline-flex items-center gap-2 rounded-full bg-ink-100 text-ink-950 px-5 py-3 text-sm font-medium tracking-tight hover:bg-white transition-all active:translate-y-[1px]"
              >
                {hero.primary.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to={hero.secondary.to}
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong text-ink-200 px-5 py-3 text-sm font-medium tracking-tight hover:border-ink-400 hover:text-ink-100 transition-colors"
              >
                {hero.secondary.label}
              </Link>
            </div>
          </div>

          <aside className="md:col-span-4 md:pt-2 md:pl-5 md:border-l md:border-hairline">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-5">
              <Stat value="48h" label="Onboarding" hint="Worker live, CI/CD wired." />
              <Stat value="30d" label="MVP shipped" hint="On our zero-to-one templates." />
              <Stat value="1-click" label="Prod deploy" hint="Every task auto-ships to dev." />
            </div>
          </aside>
        </div>

        <TrustCrestInline />
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
      <p className="mt-1.5 text-xs md:text-sm text-ink-400 leading-relaxed max-w-[200px]">{hint}</p>
    </div>
  );
}

function TrustCrestInline() {
  const categories = [
    "Fintech at scale",
    "AI infrastructure",
    "Developer tools",
    "Marketplaces",
    "YC-backed startups",
    "Public SaaS",
  ];
  return (
    <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-start gap-3 md:gap-8 text-sm">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 whitespace-nowrap md:pt-1">
        Our team has shipped in
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {categories.map((c) => (
          <span key={c} className="text-ink-400 font-medium tracking-tight">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProblemPanel() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The problem"
        title="The AI-only promise breaks. The agency-only loop is slow."
        sub="You&apos;ve tried every shortcut. Here&apos;s why none of them ship a real product on a real timeline."
      />
      <div className="mt-16 divide-y divide-hairline border-y border-hairline">
        {problems.map((p, i) => (
          <div key={p.title} className="py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-1 font-mono text-xs text-ink-500">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="md:col-span-5 font-sans text-2xl md:text-3xl font-medium tracking-[-0.02em] text-ink-100 leading-snug">
              {p.title}
            </div>
            <div className="md:col-span-6 text-ink-400 leading-relaxed md:pt-1">{p.body}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhatToExpectPrompt() {
  return (
    <section className="border-t border-hairline">
      <Container>
        <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
            Not sure what to expect when working with us?
          </div>
          <Link
            to="/what-to-expect"
            className="inline-flex items-center gap-2 text-ink-100 font-medium text-sm group self-start md:self-auto"
          >
            <span className="pb-0.5 border-b border-ink-500 group-hover:border-ink-100 transition-colors">
              Explore the full collaboration flow
            </span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function WorkEnvironmentStrip() {
  return (
    <Section tone="surface">
      <div className="max-w-2xl">
        <Eyebrow>{workEnvironmentBrief.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-sans text-3xl md:text-4xl font-semibold text-ink-100 tracking-[-0.025em] leading-[1.1]">
          {workEnvironmentBrief.title}
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-hairline">
        {workEnvironmentBrief.pillars.map((p) => (
          <div key={p.title} className="p-5 border-r border-b border-hairline">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-400">
              {p.title}
            </div>
            <p className="mt-2 text-sm text-ink-300 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SupportPromise() {
  return (
    <Section>
      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5">
          <Eyebrow>{supportPromise.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-sans text-4xl md:text-6xl font-semibold text-ink-100 tracking-[-0.035em] leading-[1.02]">
            {supportPromise.title}
          </h2>
        </div>
        <div className="md:col-span-7 md:pl-8 md:border-l md:border-accent-500/30 md:pt-2">
          <p className="text-lg text-ink-300 leading-relaxed">{supportPromise.body}</p>
          <Link
            to={supportPromise.link.to}
            className="mt-7 inline-flex items-center gap-2 text-ink-100 font-medium text-sm group self-start"
          >
            <span className="pb-0.5 border-b border-ink-500 group-hover:border-ink-100 transition-colors">
              {supportPromise.link.label}
            </span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}

function Pillars() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why it works"
        title="Five things we refuse to compromise on."
      />
      <div className="mt-14 grid md:grid-cols-2 gap-0 border-t border-hairline">
        {pillars.map((p, i) => {
          const isLast = i === pillars.length - 1;
          const isLeft = i % 2 === 0;
          const cellClass = isLast
            ? "md:col-span-2"
            : isLeft
              ? "md:pr-8 md:border-r md:border-hairline"
              : "md:pl-8";
          return (
            <div
              key={p.title}
              className={`py-10 border-b border-hairline ${cellClass}`}
            >
              <div className="flex items-start gap-5">
                <div className="font-mono text-xs text-accent-400 pt-1.5 w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-sans text-xl font-semibold text-ink-100 tracking-[-0.01em]">
                    {p.title}
                  </div>
                  <p className="mt-2 text-ink-400 leading-relaxed max-w-lg">{p.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Audience() {
  return (
    <Section tone="surface">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-4">
          <SectionHeading
            eyebrow="Who it's for"
            title="One workflow. Three kinds of buyer."
          />
          <p className="mt-5 text-ink-400 leading-relaxed max-w-sm">
            Pick the door closest to where you are. The workflow doesn&apos;t change {"-"} the starting line does.
          </p>
        </div>
        <div className="md:col-span-8 md:pt-2">
          <AudienceTabs />
        </div>
      </div>
    </Section>
  );
}

function Promise() {
  return (
    <Section>
      <div className="max-w-5xl">
        <Eyebrow>Our promise</Eyebrow>
        <blockquote className="mt-6 font-sans text-4xl md:text-7xl font-medium tracking-[-0.035em] leading-[1.05]">
          <span className="text-ink-100">Ship like a team of ten.</span>{" "}
          <span className="text-ink-500">Reclaim your weekends.</span>{" "}
          <span className="text-ink-100">Your code stays yours.</span>
        </blockquote>
        <div className="mt-8 font-mono text-xs text-ink-500 uppercase tracking-[0.18em]">
          {promise.attribution}
        </div>
      </div>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section tone="surface">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Three plans. Senior engineers in every one."
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

function FaqSection() {
  return (
    <Section>
      <SectionHeading eyebrow="Frequently asked" title="Answers up front." />
      <div className="mt-12">
        <FAQ items={homeFaq} />
      </div>
    </Section>
  );
}
