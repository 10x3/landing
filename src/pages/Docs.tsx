import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Section, Eyebrow } from "../components/Section";
import { docsIndex, docLinks } from "../content/docs";

export function Docs() {
  return (
    <>
      <Intro />
      <DocList />
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
          <Eyebrow>{docsIndex.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-sans text-5xl md:text-7xl font-semibold text-zinc-900 tracking-[-0.04em] leading-[1.02]">
            {docsIndex.title}
          </h1>
          <p className="mt-7 text-xl text-zinc-600 leading-relaxed max-w-2xl">{docsIndex.sub}</p>
        </div>
      </Container>
    </section>
  );
}

function DocList() {
  return (
    <Section tone="surface">
      <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-hairline">
        {docLinks.map((doc) => (
          <Link
            key={doc.to}
            to={doc.to}
            className="group block p-7 md:p-8 border-r border-b border-hairline transition-colors hover:bg-zinc-50"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d99a2b]">
              {doc.badge}
            </div>
            <h2 className="mt-4 font-sans text-2xl font-semibold text-zinc-900 tracking-[-0.02em] flex items-center gap-2">
              {doc.title}
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
                className="text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-900"
              >
                <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{doc.blurb}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
