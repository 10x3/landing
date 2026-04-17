export const newProduct = {
  hero: {
    eyebrow: "For founders starting from zero",
    headline: "From idea to shipped MVP in 30 days - without hiring a single engineer.",
    sub: "Pick a template or bring a spec. We'll stand up the repo, CI/CD, environments, and the first feature before the week is out.",
  },
  timeline: [
    { day: "Day 1", event: "Kickoff call. We scope the MVP, pick a template, align on stack." },
    { day: "Day 2", event: "Worker installed. Repo, CI/CD, stage environment, Slack channel - all live." },
    { day: "Day 3", event: "First sprint plan returned and refined with you." },
    { day: "Day 7", event: "First feature live on staging. You click a link; it works." },
    { day: "Day 14", event: "Half the MVP shipped. Real users can click around on stage." },
    { day: "Day 30", event: "MVP launched. Production live. Monitoring wired. You start talking to customers." },
  ],
  templates: [
    { name: "SaaS starter", stack: "Next.js \u2022 Postgres \u2022 Stripe \u2022 Auth \u2022 Admin" },
    { name: "Marketplace starter", stack: "Next.js \u2022 Postgres \u2022 Payments \u2022 Two-sided onboarding" },
    { name: "AI product starter", stack: "Next.js \u2022 Claude/OpenAI \u2022 Vector DB \u2022 Streaming UI" },
    { name: "Internal tool starter", stack: "React \u2022 Django \u2022 RBAC \u2022 Reporting" },
  ],
  focus: {
    yours: [
      "Talking to customers",
      "Positioning and pricing",
      "Fundraising and hiring",
      "Product decisions",
    ],
    ours: [
      "Writing the code",
      "Setting up CI/CD and environments",
      "Architecture and security",
      "Shipping on schedule",
    ],
  },
  story: {
    label: "Example trajectory",
    title: "Two-person team, 30 days, full MVP",
    body: "A solo founder with a Figma-only prototype wanted a working SaaS before their next investor call. We stood up the worker on Day 2, shipped auth + dashboard + the first billable feature by Day 10, and handed over a stage link to their design partners by Day 14. On Day 28 they flipped the switch on production and started booking demos. Zero engineers hired.",
    footnote: "Composite trajectory based on our template patterns - reach out for references to current clients.",
  },
};

export const existingCodebase = {
  hero: {
    eyebrow: "For teams with an existing product",
    headline: "Point us at your repo. We'll be shipping by Friday.",
    sub: "Connect any git provider. The worker ingests your conventions, CI rules, and architecture before writing a single line.",
  },
  path: [
    { step: "Connect", body: "OAuth into GitHub, GitLab, or Bitbucket - or install on a self-hosted host." },
    { step: "Ingest", body: "The worker indexes the codebase, docs, ADRs, and recent commits." },
    { step: "Detect conventions", body: "Naming, file layout, PR style, test patterns - matched automatically." },
    { step: "Tune the worker", body: "We review detected patterns with you, override anything off." },
    { step: "Integrate CI/CD", body: "Your existing pipeline, respected. We add gates only if you ask." },
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
      body: "Isolated refactors with full test coverage - shipped in small, reviewable PRs.",
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
    { q: "Do you modify CI without approval?", a: "No. CI changes go through a PR like everything else, with explicit callouts." },
  ],
};
