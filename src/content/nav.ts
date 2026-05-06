export const navLinks = [
  { label: "How it works", to: "/how-it-works" },
  { label: "Use cases", to: "/use-cases/new-product", children: [
    { label: "Build from scratch", to: "/use-cases/new-product" },
    { label: "Ship on existing codebase", to: "/use-cases/existing-codebase" },
  ] },
  { label: "Pricing", to: "/pricing" },
  { label: "Team", to: "/team" },
] as const;

export const ctaLabel = "Book a 30-min call";
export const ctaTo = "/contact";
