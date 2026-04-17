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
    cta: { label: "Request early access", to: "/contact" },
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
    cta: { label: "Request early access", to: "/contact" },
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
    cta: { label: "Request early access", to: "/contact" },
    launchFallbackNote: "Founding-partner terms - ask on the early-access call.",
  },
];

export const everyPlanIncludes = [
  "1 isolated worker, on your infra or ours",
  "Live dev environment - every task ships there",
  "Production env with one-click deploy",
  "Platform access (plan, refine, execute)",
  "Dedicated Slack channel",
  "Senior review when risk is flagged or you request it",
  "CI/CD setup and tuning",
  "Battle-tested templates + zero onboarding fee",
];

export const pricingFaq = [
  {
    q: "How does the 50%-off early-access pricing work?",
    a: "Our first 50 customers get 50% off their plan for six months, locked in at signup. After the six months, pricing returns to the listed rate - with 30 days notice. No surprise price hikes; no auto-upgrades. Enterprise follows founding-partner terms negotiated on the intake call.",
  },
  {
    q: "Does a senior engineer review every PR?",
    a: "No - and that's the point. The platform evaluates every task and flags the work that needs human eyes: complexity, security-sensitive changes, architectural drift, failing tests. Flagged work blocks on a senior review before merge. Routine tasks ship without blocking - so easy wins stay easy. You can also request human review on any task with one click. Your engineer hours buy real judgment, not babysitting.",
  },
  {
    q: "How does deployment work?",
    a: "Every completed task automatically ships to your live dev environment so you can click around and see it working. When you're ready, a single button promotes the work to production. On Beginner that flow is fixed: dev auto, prod on demand. On Pro and Enterprise, every deployment path is configurable - custom environments, triggers, approvals, and gates.",
  },
  {
    q: "What's included in engineer hours?",
    a: "Everything a senior engineer would do on a team: architecture calls, flagged-PR reviews, pair-debugging when the worker hits an edge case, product/tech/business advice in Slack, and direct code contributions when the situation calls for a human.",
  },
  {
    q: "What counts as a concurrent task?",
    a: "One task is one planned unit of work from a cycle - typically one PR. Tasks run in parallel on your worker up to your plan's concurrency limit.",
  },
  {
    q: "Can I bring my own git provider and cloud?",
    a: "Yes. GitHub, GitLab, Bitbucket, and self-hosted options are all supported. The worker can run on our infrastructure or yours.",
  },
  {
    q: "Is my code private? Who can see it?",
    a: "Your code stays in your repository. Only the engineers allocated to your project have access. NDAs are standard and signed before any work begins.",
  },
  {
    q: "What if the AI makes a bad call - who's liable?",
    a: "The platform flags risky or load-bearing work for human review before anything merges. For routine work, tests and CI act as the first gate - and if anything slips, we fix it on our time. Nothing ships to production without an explicit click from you.",
  },
  {
    q: "Can I pause my subscription?",
    a: "You can pause at the end of any minimum term. During the term, you can scale up but not down - our engineers need committed time to do real work.",
  },
  {
    q: "Do you offer annual discounts?",
    a: "Yes - pay annually and get two months free on any plan. Your early-access 50%-off period applies to the annual total.",
  },
];
