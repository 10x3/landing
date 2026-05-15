import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { howItWorksSteps } from "../content/home";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_QUERY = "(min-width: 768px)";

export function ScrollSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia(DESKTOP_QUERY).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const root = rootRef.current;
    if (!root) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-panel]", root);
    const rails = gsap.utils.toArray<HTMLElement>("[data-rail-item]", root);

    if (!panels.length) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        gsap.set(panel, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 });
      });
      rails.forEach((rail, i) => {
        rail.dataset.active = i === 0 ? "true" : "false";
      });

      stRef.current = ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: () => "+=" + window.innerHeight * (panels.length + 0.5),
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const raw = self.progress * panels.length;
          const idx = Math.min(panels.length - 1, Math.floor(raw));
          panels.forEach((panel, i) => {
            gsap.to(panel, {
              opacity: i === idx ? 1 : 0,
              y: i === idx ? 0 : i < idx ? -30 : 30,
              duration: 0.4,
              overwrite: "auto",
              ease: "power2.out",
            });
          });
          rails.forEach((rail, i) => {
            rail.dataset.active = i === idx ? "true" : "false";
          });
        },
      });
    }, root);

    return () => {
      stRef.current = null;
      ctx.revert();
    };
  }, [isDesktop]);

  const goToStep = (idx: number) => {
    const st = stRef.current;
    if (!st) return;
    const target = st.start + ((idx + 0.5) / howItWorksSteps.length) * (st.end - st.start);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  if (!isDesktop) {
    return (
      <section className="relative bg-canvas-2 border-y border-hairline overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 mb-10">
            <span className="inline-flex items-center gap-2.5">
              <span className="h-px w-5 bg-accent-500" /> How it works
            </span>
          </div>
          <ol className="relative border-l border-hairline pl-7 space-y-12">
            {howItWorksSteps.map((step) => (
              <li key={step.n} className="relative">
                <span className="absolute -left-[34px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent-500 ring-4 ring-canvas-2" />
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-400">
                  Step {step.n}
                </div>
                <h3 className="mt-3 font-sans text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-ink-100 leading-[1.05]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-ink-300 leading-relaxed max-w-xl">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-canvas-2 border-y border-hairline overflow-hidden">
      <div ref={rootRef} className="relative h-[100dvh] flex items-center">
        <div className="bg-grid absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative w-full mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          <aside className="md:col-span-4 space-y-1.5">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 mb-6">
              <span className="inline-flex items-center gap-2.5">
                <span className="h-px w-5 bg-accent-500" /> How it works
              </span>
            </div>
            {howItWorksSteps.map((step, i) => (
              <button
                key={step.n}
                type="button"
                onClick={() => goToStep(i)}
                aria-label={`Jump to step ${step.n}: ${step.title}`}
                data-rail-item
                data-active={i === 0 ? "true" : "false"}
                className="group block w-full text-left py-3 border-l-2 pl-5 cursor-pointer transition-all duration-300 data-[active=true]:border-accent-500 data-[active=false]:border-hairline hover:data-[active=false]:border-accent-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas-2"
              >
                <div className="font-mono text-xs text-ink-500 group-data-[active=true]:text-accent-400 group-hover:text-accent-400/80 transition-colors">
                  {step.n}
                </div>
                <div className="mt-1 text-[15px] font-medium tracking-tight text-ink-400 group-data-[active=true]:text-ink-100 group-hover:text-ink-200 transition-colors">
                  {step.title}
                </div>
              </button>
            ))}
          </aside>

          <div className="md:col-span-8 relative h-[70vh] md:h-[60vh]">
            {howItWorksSteps.map((step) => (
              <div
                key={step.n}
                data-panel
                className="absolute inset-0 flex flex-col justify-center"
              >
                <div className="max-w-3xl">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-400">
                    Step {step.n}
                  </div>
                  <h3 className="mt-5 font-sans text-4xl md:text-6xl font-semibold tracking-[-0.035em] text-ink-100 leading-[1.02]">
                    {step.title}
                  </h3>
                  <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed max-w-xl">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
