import { ProjectCaseStudy } from "./types";

export const mobileHabitsProject: ProjectCaseStudy = {
  id: 7,
  slug: "mobile-habit-coach",
  title: "Habit Coach Mobile Suite",
  client: "Momentum Wellness",
  excerpt:
    "A cross-platform ritual companion that nudges 40K+ members to build habits through accountability pods, coach messaging, and biometric insights.",
  description:
    "Led the end-to-end rebuild of Momentum's flagship mobile app with offline-first routines, realtime chat, and a modular experiment engine so the wellness team can launch new programs in days instead of weeks.",
  category: "Mobile Product",
  card: {
    coverImage: "/exp2.svg",
    iconList: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
  },
  hero: {
    tagline: "Healthy habits need delightful guardrails",
    summary:
      "We paired React Native, Expo Router, and a feature-flagged backend to keep iOS and Android launches in sync while lowering crash rates to 0.3% across 15+ device profiles.",
    heroImage: "/exp2.svg",
    badges: ["React Native", "Expo", "GraphQL", "Feature flags"],
    stats: [
      { label: "Weekly active users", value: "40K" },
      { label: "Crash-free sessions", value: "99.7%" },
      { label: "Feature experiments", value: "26" },
    ],
    links: [
      {
        label: "View product deck",
        href: "https://docs.example.com/momentum-deck",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Download ritual spec",
        href: "https://docs.example.com/momentum-rituals",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Offline ritual engine",
      description:
        "Background sync, streak logic, and local reminders so members can complete routines on the subway or during flights.",
      icon: "🧘",
      tags: ["Caching", "Notifications"],
    },
    {
      title: "Coach collaboration",
      description:
        "Threaded messaging with audio notes, progress snapshots, and task handoffs for certified coaches.",
      icon: "💬",
      tags: ["Messaging", "Realtime"],
    },
    {
      title: "Experiment lab",
      description:
        "Remote-configured rituals, pricing tests, and onboarding paths powered by feature flags and analytics hooks.",
      icon: "🧪",
      tags: ["Growth", "Feature flags"],
    },
  ],
  services: [
    {
      title: "Mobile platform audit",
      description:
        "Mapped tech debt, crash culprits, and DX gaps before planning the React Native migration.",
      deliverables: ["Audit report", "Migration roadmap", "Risk register"],
    },
    {
      title: "Engineering leadership",
      description:
        "Set up CI/CD, modular navigation, and shared UI primitives so squads could ship independently.",
      deliverables: ["Component kit", "Release playbook", "Testing harness"],
    },
    {
      title: "Lifecycle design",
      description:
        "Defined habit loops, accountability rituals, and push notification strategy with the coaching org.",
      deliverables: [
        "Journey maps",
        "Notification taxonomy",
        "Content templates",
      ],
    },
  ],
  achievements: [
    {
      title: "Daily ritual completion",
      value: "+34%",
      description:
        "New routine engine plus smarter reminders kept members engaged.",
    },
    {
      title: "Coach response time",
      value: "-41%",
      description:
        "Unified inbox and alerting reduced lag between coach replies.",
    },
    {
      title: "Release cadence",
      value: "2 weeks",
      description:
        "Automated QA + staged rollouts unlocked predictable shipping.",
    },
  ],
  milestones: [
    {
      title: "Foundation sprint",
      period: "Feb 2024",
      description:
        "Stabilized auth, analytics, and build tooling after the migration.",
      highlight: true,
    },
    {
      title: "Coach beta",
      period: "Apr 2024",
      description: "Rolled out collaboration hub to 200 certified coaches.",
    },
    {
      title: "Habit lab",
      period: "Jun 2024",
      description: "Launched feature flag dashboards + remote-config rituals.",
    },
    {
      title: "Global launch",
      period: "Aug 2024",
      description: "Scaled to 6 languages with observability guardrails.",
    },
  ],
  documentation: [
    {
      title: "Mobile system handbook",
      description:
        "Expo + React Native conventions, dependency graph, and tooling setup.",
      href: "https://docs.example.com/momentum-mobile-handbook",
      format: "Notion",
    },
    {
      title: "Experiment design kit",
      description: "Playbooks for running onboarding and ritual tests safely.",
      href: "https://docs.example.com/momentum-experiments",
      format: "FigJam",
    },
    {
      title: "Coach enablement guide",
      description: "Scripts and SOPs for coaches adopting the new workflows.",
      href: "https://docs.example.com/momentum-coach-guide",
      format: "PDF",
    },
  ],
  gallery: [
    {
      src: "/p2.svg",
      alt: "Routine dashboard",
      caption: "Members stack rituals, mood logs, and biometrics in one view.",
    },
    {
      src: "/grid.svg",
      alt: "Coach messaging",
      caption:
        "Threaded conversations pair progress snapshots with audio tips.",
    },
    {
      src: "/bg.png",
      alt: "Experiment control center",
      caption:
        "Team toggles onboarding flows and pricing tests without an app release.",
    },
  ],
};
