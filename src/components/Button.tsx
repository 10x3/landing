import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink-100 text-ink-950 hover:bg-white active:translate-y-[1px] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_8px_24px_-12px_rgba(255,255,255,0.35)]",
  secondary:
    "bg-surface-2 text-ink-100 border border-hairline-strong hover:border-ink-300 active:translate-y-[1px]",
  ghost:
    "text-ink-300 hover:text-ink-100",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-150";

export function Button({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isExternal = to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("#");
  const classes = `${base} ${styles[variant]} ${className}`;
  if (isExternal) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
