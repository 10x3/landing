export const intro = {
  headline: "AI writes the code. Senior engineers make sure it ships.",
  sub: "Here's how the worker, the platform, and the humans fit together - and what happens when any one of them hits a wall.",
};

export const components = [
  {
    title: "The Worker",
    sub: "Your isolated dev environment",
    bullets: [
      "Claude, our skill library, and your full project context - pre-loaded.",
      "Installed from our battle-tested templates, or onto your existing repo via any git provider.",
      "Runs on our infrastructure or yours - your code never leaves a repo you control.",
      "Hardened environment: secrets isolated, dependencies pinned, deploys gated.",
    ],
  },
  {
    title: "The Platform",
    sub: "Where you plan and ship",
    bullets: [
      "Start a cycle - the worker returns a dependency-aware task plan from full project context.",
      "Refine the plan in plain English. The worker updates dependencies and risks automatically.",
      "Every finished task auto-ships to your live dev environment. See it working before you decide.",
      "One click promotes to production. On Pro and above, every deploy path is configurable.",
    ],
  },
  {
    title: "The Humans",
    sub: "Your senior team in Slack",
    bullets: [
      "A dedicated team matched from our vetted network - same engineers through your whole engagement.",
      "Senior review where it matters: the platform flags risky, complex, or load-bearing work for human eyes. Routine tasks ship without blocking.",
      "Request human review on any task with one click - no negotiation, no waiting.",
      "In Slack for product, tech, architecture, and business calls - not just code.",
    ],
  },
];

export const fullCycle = [
  { step: "Kick off a cycle", body: "Describe the outcome you want. Feature, bug, refactor - natural language." },
  { step: "Plan returned", body: "Dependency-aware task list with risks, scope notes, and open questions." },
  { step: "Edit the plan", body: "Dialog with the worker in plain English. It re-plans as you go." },
  { step: "Approve & execute", body: "One click. The worker starts in your isolated environment." },
  { step: "Execution in progress", body: "Real-time feed of diffs, tests, and decisions. Pause anytime." },
  { step: "PR opened", body: "Small, reviewable PRs - not 4,000-line megabranches." },
  { step: "Review routing", body: "Platform flags risky or load-bearing work for a senior. Routine work merges without blocking. You can request review on any task with one click." },
  { step: "Live in dev", body: "Every merged task auto-ships to your dev environment. Click around, check it, catch regressions before prod." },
  { step: "Promote to prod", body: "One click deploys to production. On Pro and above, every deployment path is configurable." },
];

export const workerKnows = [
  "Your stack and framework versions",
  "Your naming and file conventions",
  "Your commit and PR style",
  "Your CI rules and check gates",
  "Your test patterns and coverage norms",
  "Your design system tokens",
  "Open issues and recent architectural decisions",
  "Your security and secrets policy",
];

export const failureModes = [
  {
    when: "The worker suggests a wrong architecture.",
    what: "A senior engineer flags it before execution starts. The plan is revised; nothing ships.",
  },
  {
    when: "Scope expands mid-task.",
    what: "The worker pauses and asks. You approve expansion or reshape the task - no runaway work.",
  },
  {
    when: "A test fails in an area we don't have context for.",
    what: "The worker surfaces the gap. A human fills in the context or calls you before patching.",
  },
  {
    when: "You're stuck on a product or tech call.",
    what: "Ping Slack. A senior engineer responds within business hours - faster on Pro and Enterprise.",
  },
];

export const security = {
  headline: "Your code stays yours",
  bullets: [
    "Code lives in your repository - we work against it, we don't copy it out.",
    "One isolated worker per client. No shared environments, no cross-project leakage.",
    "NDAs signed before the first call. Access logs on request.",
    "SOC 2 Type II posture on the roadmap - contact us for the current status.",
  ],
};
