import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Eyebrow } from "../components/Section";
import { CTABand } from "../components/CTABand";
import { featureGuide } from "../content/docs";

export function DocFeatureGuide() {
  return (
    <>
      <Intro />
      <Body />
      <CTABand
        title="Got a feature in mind?"
        sub="Book a 30-minute call. Bring a rough idea - we'll help you shape it into something we can start building, and lock you in at 50% off for 3 months."
        primary={{ label: "Book a 30-min call", to: "/contact" }}
      />
    </>
  );
}

function Intro() {
  return (
    <section className="relative pt-28 md:pt-40 pb-14 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[140px] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-3xl">
          <Link
            to="/docs"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <span aria-hidden>&larr;</span> Back to Docs
          </Link>
          <div className="mt-8">
            <Eyebrow>{featureGuide.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-zinc-900 tracking-[-0.04em] leading-[1.02]">
            {featureGuide.title}
          </h1>
          <p className="mt-7 text-xl text-zinc-600 leading-relaxed">{featureGuide.sub}</p>
        </div>
      </Container>
    </section>
  );
}

function Body() {
  return (
    <section className="relative bg-white border-y border-hairline py-16 md:py-24">
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="text-lg text-zinc-800 leading-relaxed">{featureGuide.intro}</p>

          <div className="mt-14 space-y-14">
            {featureGuide.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-sans text-2xl md:text-3xl font-semibold text-zinc-900 tracking-[-0.025em] leading-[1.1]">
                  {s.heading}
                </h2>
                {s.body && <p className="mt-4 text-zinc-700 leading-relaxed">{s.body}</p>}

                {(s.dos || s.avoid) && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-0 border-t border-l border-hairline">
                    {s.dos && (
                      <div className="p-6 border-r border-b border-hairline">
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-600">
                          Do this
                        </div>
                        <ul className="mt-4 space-y-3">
                          {s.dos.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm text-zinc-800 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {s.avoid && (
                      <div className="p-6 border-r border-b border-hairline">
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-danger-500">
                          Avoid
                        </div>
                        <ul className="mt-4 space-y-3">
                          {s.avoid.map((a) => (
                            <li key={a} className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
                              <span className="mt-1.5 text-danger-500 flex-shrink-0" aria-hidden>&times;</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-hairline">
            <p className="font-sans text-xl md:text-2xl font-medium text-zinc-900 tracking-[-0.02em] leading-snug">
              {featureGuide.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
