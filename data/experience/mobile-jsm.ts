import { ExperienceCaseStudy } from "./types";

export const mobileJsmExperience: ExperienceCaseStudy = {
  id: 2,
  slug: "mobile-app-dev-jsm-tech",
  role: "Mobile App Developer",
  company: "JSM Tech",
  location: "Hybrid • Toronto, ON",
  timeframe: "Sep 2021 – Dec 2022",
  excerpt:
    "Led the build of a cross-platform productivity app that now powers daily rituals for 40K+ subscribers.",
  summary:
    "Balanced experimentation with release discipline by running weekly design reviews, automated testing pipelines, and staged rollouts across iOS and Android stores.",
  card: {
    thumbnail: "/exp2.svg",
  },
  hero: {
    headline: "Scaled a nimble mobile team into a predictable shipping machine",
    heroImage: "/exp2.svg",
    badges: ["React Native", "GraphQL", "CI/CD"],
    stats: [
      { label: "Monthly active users", value: "40K" },
      { label: "Crash-free sessions", value: "99.2%" },
      { label: "Release cadence", value: "bi-weekly" },
    ],
  },
  focusAreas: [
    {
      title: "Offline-first architecture",
      description:
        "Implemented cache policies, background sync, and optimistic updates for teams working in the field.",
      icon: "📡",
      tags: ["Networking", "Reliability"],
    },
    {
      title: "Growth loops",
      description:
        "Instrumented onboarding, paywalls, and referral flows tied to lifecycle experiments.",
      icon: "📈",
      tags: ["Growth", "Experimentation"],
    },
    {
      title: "Release engineering",
      description:
        "Introduced automated E2E tests, feature flags, and phased rollouts to de-risk launches.",
      icon: "🚀",
      tags: ["QA", "CI/CD"],
    },
  ],
  responsibilities: [
    {
      title: "Product delivery",
      description: "Own features from RFC to telemetry review.",
      bullets: [
        "Ran spikes with design + data science",
        "Coordinated QA sign-off with ops team",
        "Monitored KPIs after launch and iterated",
      ],
    },
    {
      title: "Architecture stewardship",
      description: "Maintained modular navigation, state, and API layers.",
      bullets: [
        "Introduced feature folders and lazy loading",
        "Documented GraphQL conventions + caching",
        "Devised performance budgets per screen",
      ],
    },
    {
      title: "Team rituals",
      description: "Helped scale the squad from 3 to 8 engineers.",
      bullets: [
        "Led weekly pairing hours + office hours",
        "Built component cookbook for newcomers",
        "Organized synthetic monitoring + alerting",
      ],
    },
  ],
  achievements: [
    {
      title: "Retention uplift",
      value: "+18%",
      description: "Lifecycle experiments on onboarding + reminders.",
    },
    {
      title: "Support tickets",
      value: "-33%",
      description: "Better offline handling reduced sync issues.",
    },
    {
      title: "Store rating",
      value: "4.8★",
      description: "Consistent release quality improved app store sentiment.",
    },
  ],
  milestones: [
    {
      title: "Foundation rebuild",
      period: "Q4 2021",
      description: "Modularized navigation + data layers for velocity.",
      highlight: true,
    },
    {
      title: "Offline sync GA",
      period: "Q1 2022",
      description: "Rolled out sync engine to entire user base.",
    },
    {
      title: "Growth experiments",
      period: "Q2 2022",
      description: "Launched referrals, paywall tests, and CRM triggers.",
    },
    {
      title: "Team scaling",
      period: "Q4 2022",
      description: "Onboarded 5 engineers + defined guild rituals.",
    },
  ],
  documentation: [
    {
      title: "Mobile architecture RFC",
      description: "Explains module boundaries, caching, and testing strategy.",
      href: "https://docs.example.com/jsm-architecture",
      format: "Notion",
    },
    {
      title: "Release checklist",
      description:
        "Playbook for beta builds, store submissions, and monitoring.",
      href: "https://docs.example.com/jsm-release",
      format: "PDF",
    },
    {
      title: "Growth experimentation log",
      description: "ICE scoring, results, and next steps per experiment.",
      href: "https://docs.example.com/jsm-growth",
      format: "Sheets",
    },
  ],
  gallery: [
    {
      src: "/p2.svg",
      alt: "Offline sync UI",
      caption: "Surface progress + retry states for field teams.",
    },
    {
      src: "/grid.svg",
      alt: "Growth dashboard",
      caption: "Experiment tracker connected to analytics goals.",
    },
    {
      src: "/bg.png",
      alt: "Release pipeline",
      caption: "CI pipeline orchestrating builds, tests, and staged rollout.",
    },
  ],
};
