import { ProjectCaseStudy } from "./types";

export const yoomProject: ProjectCaseStudy = {
  id: 2,
  slug: "yoom-video-platform",
  title: "Yoom — Video Collaboration Platform",
  client: "Yoom Labs",
  excerpt:
    "A resilient video conferencing suite with adaptive media pipelines, automated meeting notes, and enterprise governance controls.",
  description:
    "We rebuilt the Yoom experience from lobby to follow-up email, focusing on low-latency networking, inclusive interactions, and post-call automation that knowledge workers actually use.",
  category: "Product Rebuild",
  card: {
    coverImage: "/p2.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  },
  hero: {
    tagline: "Modern collaboration without the meeting fatigue",
    summary:
      "From branded lobbies to recording governance, every pixel and packet was tuned for hybrid teams that need reliability and warmth.",
    heroImage: "/p2.svg",
    badges: ["Next.js 14", "Stream SDK", "Design systems"],
    stats: [
      { label: "Packet loss tolerance", value: "3%", helper: "w/out jitter" },
      { label: "Meetings per day", value: "12K" },
      { label: "NPS", value: "+64" },
    ],
    links: [
      {
        label: "Schedule a demo",
        href: "https://meet.yoom.app/demo",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Enterprise whitepaper",
        href: "https://static.yoom.app/security.pdf",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Adaptive layouts",
      description:
        "Dynamic grid that prioritizes active speakers, sign-language interpreters, and shared canvases as context shifts.",
      icon: "🧩",
      tags: ["Accessibility", "Layout", "WebRTC"],
    },
    {
      title: "Co-notes",
      description:
        "Collaborative note-taking with AI-generated summaries and automations that push highlights into Slack and Notion.",
      icon: "📝",
      tags: ["AI", "Automation"],
    },
    {
      title: "Compliance vault",
      description:
        "Recording retention, watermarking, and export auditing for regulated teams.",
      icon: "🔐",
      tags: ["Security", "Governance"],
    },
  ],
  services: [
    {
      title: "Product discovery",
      description:
        "Shadowed sales calls, support tickets, and CSM playbacks to define the most critical meeting rituals.",
      deliverables: ["Opportunity map", "Persona boards", "Roadmap bets"],
    },
    {
      title: "Realtime engineering",
      description:
        "Implemented Stream + custom SFU fallback, connection diagnostics, and observability dashboards.",
      deliverables: ["Media pipeline", "Alerting runbooks", "Chaos drills"],
    },
    {
      title: "Change enablement",
      description:
        "Trained 14 customer success pods with narrative decks, guided tours, and mirroring scripts.",
      deliverables: ["Field guide", "Workshop series", "Telemetry loops"],
    },
  ],
  achievements: [
    {
      title: "Crash-free calls",
      value: "99.97%",
      description: "Measured across 90 days post GA.",
    },
    {
      title: "Note adoption",
      value: "82%",
      description: "Teams activating automated meeting notes weekly.",
    },
    {
      title: "Onboarding time",
      value: "-45%",
      description: "Reduced provisioning + training for enterprise accounts.",
    },
  ],
  milestones: [
    {
      title: "Voice of customer",
      period: "Nov 2023",
      description: "Insights program, usage telemetry, and UX scorecard.",
      highlight: true,
    },
    {
      title: "MVP network core",
      period: "Jan 2024",
      description: "Deployed the first adaptive bitrate release to 5% users.",
    },
    {
      title: "Beta enablement",
      period: "Mar 2024",
      description: "CSM academy, trust center refresh, and analytics handoff.",
    },
    {
      title: "GA + migration",
      period: "Apr 2024",
      description: "Rolled to entire customer base with day-two ops team.",
    },
  ],
  documentation: [
    {
      title: "Security & compliance brief",
      description: "SOC2 scope, data residency map, and escalation tree.",
      href: "https://static.yoom.app/security-brief",
      format: "PDF",
    },
    {
      title: "Meeting ritual playbook",
      description: "Templates + automation recipes for team leads.",
      href: "https://knowledge.yoom.app/rituals",
      format: "Notion",
    },
    {
      title: "SDK integration notes",
      description: "How we forked Stream components for custom theming.",
      href: "https://dev.yoom.app/sdk-notes",
      format: "MDX",
    },
  ],
  gallery: [
    {
      src: "/p2.svg",
      alt: "Adaptive video grid",
      caption:
        "Layout adapts to presenters, interpreters, and shared canvases.",
    },
    {
      src: "/grid.svg",
      alt: "Meeting notes UI",
      caption:
        "AI-assisted notes sync to CRMs and task managers automatically.",
    },
    {
      src: "/bg.png",
      alt: "Compliance view",
      caption:
        "Admins can audit every recording and export trail in one place.",
    },
  ],
};
