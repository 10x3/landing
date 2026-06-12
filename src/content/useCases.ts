export const newProduct = {
  hero: {
    eyebrow: "For founders starting from zero",
    headline: "From idea to something you'll like in 7 days - without hiring a single engineer.",
    sub: "Tell us what you're building. We come back with the right project template, and you start building - the first feature live before the week is out. (Bigger projects take a little longer.)",
  },
  timeline: [
    { day: "Kickoff call", event: "We scope the project, pick the right template, and align on what you're building." },
    { day: "Setup is ready", event: "Your environment and starting template are in place. Nothing for you to wire up." },
    { day: "You start building", event: "Write up what needs to happen in plain language. AI builds it; you watch it land." },
    { day: "Day 7-N", event: "Project is ready. You click a link and it works. Bigger scope, a little more time." },
  ],
  templates: [
    { name: "Web", stack: "Sites, dashboards, and full web apps." },
    { name: "Chat bots", stack: "Assistants and conversational flows." },
    { name: "Mobile apps", stack: "iOS and Android products." },
    { name: "Data processing tools", stack: "Pipelines, dashboards, and automations." },
    { name: "AI solutions", stack: "Agents, RAG, and AI-powered features." },
    { name: "Internal tools", stack: "Admin panels, CRUD, and reporting." },
  ],
  focus: {
    yours: [
      "Talking to customers",
      "Positioning and pricing",
      "Fundraising and hiring",
      "Product decisions",
    ],
    ours: [
      "Building what you write",
      "Picking the right template",
      "Senior judgment when it matters",
      "Shipping on schedule",
    ],
  },
  story: {
    label: "Example trajectory",
    title: "Non-technical founder, one week, working product",
    body: "A non-technical founder with a clear vision wanted a working product before the next investor call. They wrote what they needed in plain language; AI did the building. By Day 4 they had a clickable demo. By Day 7 they were sharing a live link with design partners and booking their first customers. Zero engineers hired.",
    footnote: "Composite trajectory - reach out for references to current clients.",
  },
};

export const existingCodebase = {
  hero: {
    eyebrow: "For teams with an existing product",
    headline: "Point us at your repo. We'll be shipping by Friday.",
    sub: "Connect any git provider. The worker ingests your conventions and architecture before writing a single line.",
  },
  path: [
    { step: "Connect", body: "OAuth into GitHub, GitLab, or Bitbucket - or install on a self-hosted host." },
    { step: "Ingest", body: "The worker indexes the codebase, docs, ADRs, and recent commits." },
    { step: "Detect conventions", body: "Naming, file layout, PR style, test.txt patterns - matched automatically." },
    { step: "Tune the worker", body: "We review detected patterns with you, override anything off." },
    { step: "Work your way", body: "We follow your repo's conventions and review rules. We add nothing you didn't ask for." },
    { step: "First PR", body: "Small, conventional, reviewable. Your team merges when happy." },
  ],
  stays: [
    "Your repo, your ownership. Disconnect anytime.",
    "Your branch protection and review rules - untouched.",
    "Your secrets stay in your secret manager.",
    "No lock-in: the worker writes plain code in your repo, nothing else.",
  ],
  useCases: [
    {
      title: "Accelerate a feature backlog",
      body: "Hand over the next 10 tickets. Your team reviews PRs; we keep the pipeline full.",
    },
    {
      title: "Automate internal tooling",
      body: "Dashboards, admin CRUD, ops scripts - the work that starves for engineering time.",
    },
    {
      title: "Modernize a legacy area",
      body: "Isolated refactors with full test.txt coverage - shipped in small, reviewable PRs.",
    },
    {
      title: "Backfill a sabbatical",
      body: "Senior engineer on parental leave? Keep shipping without burning the rest of the team.",
    },
  ],
  ctoNote: {
    headline: "For CTOs: how this fits your team",
    body: "Your engineers review our PRs. We follow your conventions. We don't go around your tech lead, and we don't push to main. If a decision is load-bearing, we escalate before we ship.",
  },
  faq: [
    { q: "Which git providers?", a: "GitHub, GitLab, Bitbucket - cloud or self-hosted." },
    { q: "Which languages and stacks?", a: "TypeScript, Python, Go, Rust, Ruby, Java, Kotlin, Swift. Major frameworks supported out of the box; others with a short ramp." },
    { q: "Can you work on a feature branch only?", a: "Yes. Scope the worker to a branch, a directory, or a CODEOWNERS path." },
    { q: "How do you handle secrets?", a: "Your secrets stay in your secret manager. The worker reads them at runtime with scoped credentials." },
    { q: "Do you change anything without approval?", a: "No. Every change goes through a PR like everything else, reviewed by your team before it merges." },
  ],
};
