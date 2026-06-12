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
  title: "First 50 customers \u00b7 50% off for 3 months",
  sub: "Locked in at signup. Offer closes when we hit the cap.",
};

export const plans: Plan[] = [
  {
    name: "Beginner",
    price: "$2,400",
    priceSuffix: "/ month",
    bestFor: "Solo founders validating an idea",
    features: [
      "20 senior engineer hours / mo",
      "3 tasks in parallel",
      "Live preview - every task ships there",
      "Business-hours Slack support",
      "1-month minimum term",
    ],
    cta: { label: "Book a 30-min call", to: "/contact" },
    launchPrice: "$1,200",
    launchNote: "50% off, locked for 3 months",
  },
  {
    name: "Max",
    price: "$4,800",
    priceSuffix: "/ month",
    bestFor: "Funded startups shipping product",
    highlight: true,
    features: [
      "40 senior engineer hours / mo",
      "5 tasks in parallel",
      "Live preview - every task ships there",
      "Extended-hours Slack support",
      "3-month minimum term",
    ],
    cta: { label: "Book a 30-min call", to: "/contact" },
    launchPrice: "$2,400",
    launchNote: "50% off, locked for 3 months",
  },
  {
    name: "Pro",
    price: "Custom",
    priceSuffix: "everything negotiable",
    bestFor: "Teams running parallel initiatives",
    features: [
      "Senior hours scaled to your scope",
      "Tasks in parallel scaled to your team",
      "Live preview - every task ships there",
      "Dedicated channel, SLA, on-call",
      "Terms scoped to your engagement",
    ],
    cta: { label: "Book a 30-min call", to: "/contact" },
    launchFallbackNote: "Founding-partner terms - ask on the early-access call.",
  },
];

export const everyPlanIncludes = [
  "Dedicated senior engineer - same person, end to end",
  "AI that builds the tasks you write, in plain language",
  "The right project template to start from",
  "Live preview environment - every task ships there",
  "Senior response within 4 business hours when you message us",
  "Dedicated channel in your messenger of choice",
  "Zero onboarding fee, NDAs signed before kickoff",
];

export const pricingFaq = [
  {
    q: "How does the 50%-off early-access pricing work?",
    a: "Our first 50 customers get 50% off their plan for three months, locked in at signup. After the three months, pricing returns to the listed rate - with 30 days notice. No surprise price hikes. Pro follows founding-partner terms negotiated on the intake call.",
  },
  {
    q: "What does the senior engineer actually do?",
    a: "AI does the day-to-day building. The senior engineer is on-demand: when something looks off, when a plan needs pushing back on, when AI hits a wall. You message them in your channel, they jump in, fix it, and disappear until the next call. Their hours buy judgment - not constant babysitting.",
  },
  {
    q: "What if the AI makes a bad call - who's liable?",
    a: "The platform flags risky or load-bearing work for senior review before anything merges. For routine work, automated tests act as the first gate - and if anything slips, we fix it on our time. Nothing goes live without an explicit click from you.",
  },
  {
    q: "Do I have to write the tasks myself?",
    a: "You describe, in plain language, what needs to happen - AI does the building from there. No tickets, no technical spec required. Your senior engineer is one message away if you'd rather talk it through.",
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
