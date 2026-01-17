import { ExperienceCaseStudy } from "./types";

export const frontendInternExperience: ExperienceCaseStudy = {
  id: 1,
  slug: "frontend-engineer-intern",
  role: "Frontend Engineer Intern",
  company: "Aurora Analytics",
  location: "Remote • Austin, TX",
  timeframe: "May 2021 – Aug 2021",
  excerpt:
    "Scaled the design system and shipped high-impact data visualizations that helped analysts retire seven legacy dashboards.",
  summary:
    "Partnered with staff engineers to translate research concepts into performant React components while building observability habits early on.",
  card: {
    thumbnail: "/exp1.svg",
  },
  hero: {
    headline: "Brought consistency and polish to a fast-moving analytics team",
    heroImage: "/exp1.svg",
    badges: ["React", "Storybook", "D3"],
    stats: [
      { label: "Components shipped", value: "18" },
      { label: "Design QA bugs", value: "-42%" },
      { label: "Dashboards migrated", value: "7" },
    ],
  },
  focusAreas: [
    {
      title: "Design system uplift",
      description:
        "Extended the Aurora UI kit with chart primitives, codemods, and adoption docs to unblock product teams.",
      icon: "🧱",
      tags: ["UI kit", "Storybook"],
    },
    {
      title: "Data visualization",
      description:
        "Built reusable D3 wrappers with accessibility fallbacks and generous loading states.",
      icon: "📈",
      tags: ["D3", "a11y"],
    },
    {
      title: "Quality signals",
      description:
        "Instrumented component usage metrics and lint rules to catch breaking changes early.",
      icon: "🧪",
      tags: ["DX", "Testing"],
    },
  ],
  responsibilities: [
    {
      title: "Component delivery",
      description:
        "Built, documented, and released UI primitives every sprint.",
      bullets: [
        "Partnered with design to define tokens and props",
        "Added visual regression tests via Chromatic",
        "Published migration recipes for consuming teams",
      ],
    },
    {
      title: "Visualization spikes",
      description:
        "Explored new chart patterns and validated performance on realistic datasets.",
      bullets: [
        "Benchmarked D3 vs. visx implementations",
        "Added skeleton loaders + error states",
        "Packaged templates so PMs could self-serve demos",
      ],
    },
    {
      title: "Quality + observability",
      description: "Kept an intern log of quality issues and shipping rituals.",
      bullets: [
        "Implemented ESLint rules to ban deprecated tokens",
        "Added Storybook controls for testers",
        "Instrumented component usage via custom analytics ID",
      ],
    },
  ],
  achievements: [
    {
      title: "System adoption",
      value: "+35%",
      description:
        "More teams used Aurora UI after the chart primitives landed.",
    },
    {
      title: "Support load",
      value: "-28%",
      description:
        "Better docs + codemods reduced Slack questions from feature squads.",
    },
    {
      title: "Intern project award",
      value: "Top 3",
      description: "Recognized across the engineering org for impact + polish.",
    },
  ],
  milestones: [
    {
      title: "Ramp + audits",
      period: "May 2021",
      description:
        "Audited component inventory, QA bugs, and accessibility gaps.",
      highlight: true,
    },
    {
      title: "Chart primitives",
      period: "Jun 2021",
      description:
        "Delivered the first batch of reusable visualization blocks.",
    },
    {
      title: "Design system launch",
      period: "Jul 2021",
      description: "Shipped docs, Storybook examples, and migration scripts.",
    },
    {
      title: "Hand-off",
      period: "Aug 2021",
      description:
        "Hosted live training for engineers + designers before returning to school.",
    },
  ],
  documentation: [
    {
      title: "Chart tokens guide",
      description:
        "Explains spacing, typography, and state tokens for data viz.",
      href: "https://docs.example.com/aurora-chart-tokens",
      format: "Notion",
    },
    {
      title: "Component release checklist",
      description: "Steps required before shipping a new primitive.",
      href: "https://docs.example.com/aurora-release",
      format: "Google Doc",
    },
    {
      title: "Intern retro",
      description:
        "What worked, what didn't, and how to onboard faster next time.",
      href: "https://docs.example.com/aurora-intern-retro",
      format: "Slides",
    },
  ],
  gallery: [
    {
      src: "/grid.svg",
      alt: "Design system cards",
      caption: "Snapshot of the stateful chart components inside Storybook.",
    },
    {
      src: "/p1.svg",
      alt: "Dashboard mock",
      caption: "Intern project powering the new forecasting dashboard.",
    },
    {
      src: "/bg.png",
      alt: "QA workflow",
      caption: "Visual regression tooling and component telemetry pipeline.",
    },
  ],
};
