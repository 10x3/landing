import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  tone = "canvas",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "canvas" | "surface" | "inverted";
  id?: string;
}) {
  const toneClass =
    tone === "inverted"
      ? "bg-ink-100 text-ink-900"
      : tone === "surface"
      ? "bg-canvas-2"
      : "";
  return (
    <section id={id} className={`py-16 md:py-20 relative ${toneClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode; tone?: "default" | "inverted" }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
      <span className="h-px w-5 bg-accent-500" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
  inverted?: boolean;
}) {
  const titleColor = inverted ? "text-ink-900" : "text-ink-100";
  const subColor = inverted ? "text-ink-600" : "text-ink-300";
  return (
    <div className={`${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-5 font-sans text-4xl md:text-[3.25rem] font-semibold tracking-[-0.03em] ${titleColor} leading-[1.02]`}>
        {title}
      </h2>
      {sub && <p className={`mt-5 text-lg ${subColor} leading-relaxed max-w-2xl`}>{sub}</p>}
    </div>
  );
}
