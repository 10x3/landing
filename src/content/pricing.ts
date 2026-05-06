export type Plan = {
  name: string;
  price: string;
  priceSuffix: string;
  bestFor: string;
  highlight?: boolean;
  features: string[];
  cta: { label: string; to: string };
  launchPrice?: string;
  launchNote?: string;
  launchFallbackNote?: string;
};

export const launchOffer = {
  label: "Launch offer",
  title: "First 50 customers \u00b7 50% off for 6 months",
  sub: "Locked in at signup. Offer closes when we hit the cap.",
};

export const plans: Plan[] = [
  {
    name: "Beginner",
    price: "$2,500",
    priceSuffix: "/ month",
    bestFor: "Solo founders validating an idea",
    features: [
      "20 senior engineer hours / mo",
      "3 concurrent tasks",
      "Dev env (auto) + prod (one-click)",
      "Standard CI/CD templates",
      "Business-hours Slack support",
      "1-month minimum term",
    ],
    cta: { label: "Book a 30-min call", to: "/contact" },
    launchPrice: "$1,250",
    launchNote: "50% off, locked for 6 months",
  },
  {
    name: "Pro",
    price: "$7,500",
    priceSuffix: "/ month",
    bestFor: "Funded startups shipping product",
    highlight: true,
    features: [
      "80 senior engineer hours / mo",
      "10 concurrent tasks",
      "All deployments configurable",
      "Custom CI/CD pipeline",
      "Extended-hours Slack support",
      "3-month minimum term",
    ],
    cta: { label: "Book a 30-min call", to: "/contact" },
    launchPrice: "$3,750",
    launchNote: "50% off, locked for 6 months",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "from $20K / mo",
    bestFor: "Teams running parallel initiatives",
    features: [
      "Dedicated team, 200+ hrs / mo",
      "Unlimited concurrent tasks",
      "Configurable deploys + compliance review",
      "Custom pipeline + compliance review",
      "Dedicated channel, SLA, on-call",
      "6-month minimum term",
    ],
    cta: { label: "Book a 30-min call", to: "/contact" },
    launchFallbackNote: "Founding-partner terms - ask on the early-access call.",
  },
];

export const everyPlanIncludes = [
  "Dedicated senior engineer - same person, end to end",
  "AI worker that builds on your roadmap",
  "Battle-tested foundation: hosting, deploys, security, monitoring",
  "Live preview environment - every task ships there",
  "Production deploy with one click",
  "Senior response within 4 business hours when you message us",
  "Dedicated channel in your messenger of choice",
  "Zero onboarding fee, NDAs signed before kickoff",
];

export const pricingFaq = [
  {
    q: "How does the 50%-off early-access pricing work?",
    a: "Our first 50 customers get 50% off their plan for six months, locked in at signup. After the six months, pricing returns to the listed rate - with 30 days notice. No surprise price hikes. Enterprise follows founding-partner terms negotiated on the intake call.",
  },
  {
    q: "What does the senior engineer actually do?",
    a: "AI does the day-to-day building. The senior engineer is on-demand: when something looks off, when a plan needs pushing back on, when AI hits a wall. You message them in your channel, they jump in, fix it, and disappear until the next call. Their hours buy judgment - not constant babysitting.",
  },
  {
    q: "What if the AI makes a bad call - who's liable?",
    a: "The platform flags risky or load-bearing work for senior review before anything merges. For routine work, tests and CI act as the first gate - and if anything slips, we fix it on our time. Nothing ships to production without an explicit click from you.",
  },
  {
    q: "Can I bring my own git provider and cloud?",
    a: "Yes. GitHub, GitLab, Bitbucket, and self-hosted options are all supported. The work runs on our infrastructure or yours.",
  },
  {
    q: "Is my code private?",
    a: "Your code stays in your repository. Only the engineer matched to your project has access. NDAs are standard and signed before any work begins.",
  },
  {
    q: "Can I pause my subscription?",
    a: "You can pause at the end of any minimum term. During the term, you can scale up but not down - our engineers need committed time to do real work.",
  },
];
