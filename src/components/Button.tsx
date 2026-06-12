import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "subtle" | "danger";
type Size = "sm" | "md" | "lg";

// Light-mode Aperture variants. Heritage green carries the primary action.
const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white border-b-2 border-brand-700 shadow-raised hover:bg-brand-600 active:bg-brand-600 active:border-b active:translate-y-px focus-visible:shadow-ring",
  secondary:
    "bg-white text-zinc-800 border border-zinc-200 border-b-2 border-b-zinc-300 shadow-raised hover:bg-zinc-50 hover:border-zinc-300 active:translate-y-px active:border-b focus-visible:shadow-ring",
  ghost:
    "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200/70",
  subtle:
    "bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100 active:bg-brand-200/70",
  danger:
    "bg-danger-600 text-white border-b-2 border-danger-800 shadow-raised hover:bg-danger-700 active:bg-danger-700 active:border-b active:translate-y-px focus-visible:shadow-ring",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px] gap-1.5 rounded-md",
  md: "h-10 px-4 text-sm gap-2 rounded-md",
  lg: "h-12 px-6 text-[15px] gap-2 rounded-lg",
};

const base =
  "inline-flex items-center justify-center font-medium select-none whitespace-nowrap transition-all duration-150 ease-out-expo outline-none";

export function Button({
  to,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const isExternal =
    to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("#");
  const classes = cn(base, variants[variant], sizes[size], className);
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
