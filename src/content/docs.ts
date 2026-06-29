export const docsIndex = {
  eyebrow: "Docs",
  title: "Guides for getting the most out of 10x3.",
  sub: "Short, practical reads - written for people who don't write code. Start here.",
};

export type DocLink = {
  title: string;
  blurb: string;
  to: string;
  badge: string;
};

export const docLinks: DocLink[] = [
  {
    title: "How to write an ideal feature",
    blurb:
      "The single most useful skill here: describing what you want clearly enough that AI builds the right thing the first time. No technical words required.",
    to: "/docs/how-to-write-an-ideal-feature",
    badge: "Guide",
  },
];

export type GuideSection = {
  heading: string;
  body?: string;
  dos?: string[];
  avoid?: string[];
};

export const featureGuide = {
  eyebrow: "Guide",
  title: "How to write an ideal feature.",
  sub: "You don't need technical words. You just need to be clear about what you want and why. Think of it like briefing a very fast, very literal new teammate - the clearer the note, the better the result.",
  intro:
    "Every task you write turns into working software. The quality of what comes back depends almost entirely on how clearly you describe it. Here's how to write a request that gets built right the first time - and what to leave out.",
  sections: [
    {
      heading: "1. Describe the outcome, not the code",
      body: "Say what a person should be able to do, and what they should see. Don't worry about how it's built - that's the part that gets built for you.",
      dos: [
        "“A visitor can sign up with their email and gets a welcome message.”",
        "“When someone clicks Save, their changes stay after they refresh the page.”",
      ],
      avoid: [
        "“Add a POST endpoint and a users table.”",
        "“Use a database to store the form.” (Let the build figure out the how.)",
      ],
    },
    {
      heading: "2. One feature per request",
      body: "Keep each task about a single thing. Big, mixed requests tend to come back half-built. If you're describing more than one outcome, split it into separate tasks.",
      dos: [
        "One task for “log in,” a separate task for “reset a forgotten password.”",
        "Small enough that you could explain it in a sentence or two.",
      ],
      avoid: [
        "“Build the whole account system.”",
        "“Add login, billing, and a dashboard.” (That's three tasks, not one.)",
      ],
    },
    {
      heading: "3. Give a real, concrete example",
      body: "One specific example removes almost all the guesswork. Show exactly what should happen in a real case - including what should happen when something goes wrong.",
      dos: [
        "“If someone enters an invalid email like ‘bob@’, show: ‘Please enter a valid email.’”",
        "“After a successful payment, send them to a page that says ‘Thanks, you're in.’”",
      ],
      avoid: [
        "“Handle errors nicely.” (Nice how? Show one.)",
        "Leaving edge cases unmentioned and hoping they're guessed correctly.",
      ],
    },
    {
      heading: "4. Say what “done” looks like",
      body: "List what should be true when it works. This becomes your checklist - the way you'll know it's finished without needing to test the code yourself.",
      dos: [
        "A short checklist: “The user sees X. Clicking Y does Z. Refreshing keeps their data.”",
        "Plain, checkable statements anyone could verify by clicking around.",
      ],
      avoid: [
        "“Make it work well.” (No way to check that.)",
        "Assuming “done” is obvious - write it down so you can both agree.",
      ],
    },
    {
      heading: "5. Name what to avoid or leave out",
      body: "Be explicit about anything off-limits or out of scope, so the work stays focused and doesn't wander into things you didn't ask for.",
      dos: [
        "“Don't change the homepage - only the signup form.”",
        "“For now, don't worry about mobile. Desktop only.”",
      ],
      avoid: [
        "“…and anything else you think we need.” (Open scope = surprises.)",
        "Silence about boundaries when something is clearly out of scope.",
      ],
    },
    {
      heading: "6. Use plain language and real words",
      body: "Describe screens and buttons the way a user sees them. You don't need internal names or jargon - the words on the screen are enough.",
      dos: [
        "“The blue Save button at the bottom of the form.”",
        "“The page someone lands on right after they check out.”",
      ],
      avoid: [
        "Inventing technical names you think sound right.",
        "Vague pointers like “that thing on the other screen.”",
      ],
    },
  ] as GuideSection[],
  closing:
    "Still unsure? Write it like a text to a friend who's never seen your product. If a person could follow it, so can the AI - and when something needs a real judgment call, a senior engineer who knows your project is one message away.",
};
