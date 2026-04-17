export const hero = {
  eyebrow: "AI-accelerated dev team - as a service",
  headline: "Ship your product 10\u00d7 faster - with AI that doesn't quit at feature\u00a0#3.",
  sub: "Senior engineers and AI agents, paired in one dev workflow. You plan the cycle in chat; we deliver PRs, stage deploys, or production rollouts.",
  primary: { label: "Request early access", to: "/contact" },
  secondary: { label: "See how it works", to: "/how-it-works" },
  trustStrip: "Senior engineers from top-tier product teams - fintech, AI infra, developer tools, marketplaces, and YC-backed startups.",
};

export const launchBadge = {
  dot: true,
  label: "Private beta \u00b7 Early-access cohort open",
};

export const problems = [
  {
    title: "AI alone forgets context",
    body: "Hallucinated libraries. Silent auth refactors at 2 a.m. The demo works - your codebase doesn't.",
  },
  {
    title: "Agencies need a month to scope",
    body: "You wanted to ship by the time the SOW comes back. Change orders kill the timeline.",
  },
  {
    title: "Hiring takes 6 months",
    body: "You don't have 6 months. You have a runway, a waitlist, or a board meeting.",
  },
];

export const howItWorksSteps = [
  {
    n: "01",
    title: "Install the worker",
    body: "We set up your isolated dev environment, templates, CI/CD, and Slack channel in 48 hours. Claude, skills, and full project context loaded.",
  },
  {
    n: "02",
    title: "Plan the cycle",
    body: "Tell the worker what you want. It returns a dependency-aware task plan. Refine it in chat - plain English, no ticket syntax.",
  },
  {
    n: "03",
    title: "See it live",
    body: "Every finished task ships to your dev environment automatically. Click around, poke at it, promote to production with one button when you're ready.",
  },
];

export const pillars = [
  {
    title: "Human review where it matters",
    body: "The platform evaluates every task and flags risk - complexity, security, architectural drift. Seniors step in there. Routine work ships without blocking.",
  },
  {
    title: "Your project context, loaded",
    body: "Stack, conventions, history - from our templates or your existing repo. No generic boilerplate.",
  },
  {
    title: "Live dev env, one-click prod",
    body: "Every finished task auto-ships to your dev environment. Click one button to promote to production - fully configurable on Pro and above.",
  },
  {
    title: "A Slack channel, not a queue",
    body: "Real people on your team in a real channel. Product, tech, or business question - a senior answers.",
  },
  {
    title: "Subscription, not projects",
    body: "Predictable monthly cost. Scale up in a click. No SOWs, no change orders, no scoping decks.",
  },
];

export const audienceTabs = [
  {
    id: "founders",
    label: "Technical founders",
    body: "You've got the idea and the stack picked. You need shipping velocity without hiring.",
    cta: { label: "See the zero-to-one path", to: "/use-cases/new-product" },
  },
  {
    id: "teams",
    label: "Product teams",
    body: "You've got a codebase. You want to automate dev cycles and reclaim senior engineering time.",
    cta: { label: "See the integration path", to: "/use-cases/existing-codebase" },
  },
  {
    id: "nontech",
    label: "Non-technical founders",
    body: "You have a clear product vision. We handle every line of code, every deploy, every dev decision.",
    cta: { label: "See the 30-day path", to: "/use-cases/new-product" },
  },
];

export const promise = {
  quote: "Ship like a team of ten. Reclaim your weekends. Your code stays yours.",
  attribution: "Our promise to every client",
};

export const homeFaq = [
  {
    q: "Can I use my existing repo?",
    a: "Yes - connect any GitHub, GitLab, or Bitbucket repo. The worker ingests your codebase, conventions, and history before writing a line.",
  },
  {
    q: "Who are the engineers?",
    a: "A vetted network of senior engineers - decade-plus shipping across fintech, AI infrastructure, developer tools, marketplaces, and YC-backed startups. When you start a project, we assemble a dedicated team from that network matched to your stack, domain, and time zone - and they stay on your project end-to-end.",
  },
  {
    q: "Does a senior engineer review every PR?",
    a: "No - and that's the point. The platform flags work that needs human eyes (complexity, security, architectural drift, failing tests) and routes it to a senior. Routine tasks ship without blocking. You can also request review on any task with one click. Your engineer hours buy real judgment, not babysitting.",
  },
  {
    q: "What happens if the AI gets stuck?",
    a: "A human takes over. That's the whole point of the model - AI for speed, senior engineers for the hard calls.",
  },
  {
    q: "Is my code private?",
    a: "Your code stays in your repo. Workers are isolated per client. NDAs signed before the first call.",
  },
  {
    q: "Can I downgrade my plan mid-term?",
    a: "No - and we'll tell you why upfront. Senior engineers need committed time to do real work, not triage. You can scale up anytime; down-scope happens only at the end of a minimum term.",
  },
];
