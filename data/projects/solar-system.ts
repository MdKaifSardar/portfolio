import { ProjectCaseStudy } from "./types";

export const solarSystemProject: ProjectCaseStudy = {
  id: 1,
  slug: "solar-system-explorer",
  title: "3D Solar System Explorer",
  client: "Orbit Dynamics Lab",
  excerpt:
    "An immersive WebGL experience that lets visitors inspect orbital paths, planetary facts, and mission visualizations in real time.",
  description:
    "Built an interactive 3D playground powered by Three.js and GPU-driven particles so space enthusiasts can glide between planets, inspect telemetry overlays, and bookmark mission discoveries without leaving the browser.",
  category: "Data Visualization",
  card: {
    coverImage: "/p1.svg",
    iconList: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  hero: {
    tagline: "Turning orbital mechanics into an explorable story",
    summary:
      "We combined physically based rendering, cinematic camera rails, and curated storytelling beats to keep visitors engaged for 6+ minutes per session while they learn about our solar system.",
    heroImage: "/p1.svg",
    badges: ["Three.js", "Framer Motion", "Data storytelling"],
    stats: [
      { label: "Avg. session time", value: "6m 12s" },
      { label: "Return visitors", value: "+38%" },
      { label: "Planets rendered", value: "13 bodies", helper: "incl. dwarf" },
    ],
    links: [
      {
        label: "Launch live demo",
        href: "https://solar-system-demo.example.com",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Download spec deck",
        href: "https://case-study.example.com/solar-system.pdf",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Orbital sandbox",
      description:
        "Physically-accurate orbital lines, gravitational assists, and planet hopping with smooth camera easing.",
      icon: "🪐",
      tags: ["GPU", "Physics", "Three.js"],
    },
    {
      title: "Mission timeline",
      description:
        "Layered NASA mission data, launch dates, and callouts anchored to each celestial body.",
      icon: "🚀",
      tags: ["Data viz", "Story beats"],
    },
    {
      title: "Guided tours",
      description:
        "Voice-over assisted tours with adaptive text highlights for accessibility-first storytelling.",
      icon: "🎧",
      tags: ["Narration", "a11y"],
    },
  ],
  services: [
    {
      title: "Experience strategy",
      description:
        "Co-created product pillars, engagement goals, and observability success criteria with the science team.",
      deliverables: [
        "North-star journey map",
        "KPI tree",
        "Prototyping backlog",
      ],
    },
    {
      title: "Realtime rendering",
      description:
        "Implemented custom shaders, atmospheric scattering, and dynamic level-of-detail switching.",
      deliverables: ["Modular shader kit", "Performance budget", "QA scripts"],
    },
    {
      title: "Content operations",
      description:
        "Built a portable YAML schema so editors can add facts, citations, and CTA moments safely.",
      deliverables: ["Schema", "Sanity checklists", "Authoring guide"],
    },
  ],
  achievements: [
    {
      title: "Engagement lift",
      value: "+48%",
      description: "Longer dwell time versus the previous static microsite.",
    },
    {
      title: "Curriculum adoption",
      value: "120 schools",
      description: "STEM classrooms now use the explorer every semester.",
    },
    {
      title: "Accessibility score",
      value: "AA 96%",
      description:
        "Keyboard support + captions verified via Axe & manual audits.",
    },
  ],
  milestones: [
    {
      title: "Discovery sprint",
      period: "Jan 2024",
      description:
        "Stakeholder interviews, instrumentation plan, and story arc definition.",
      highlight: true,
    },
    {
      title: "Prototype drop",
      period: "Mar 2024",
      description: "Playable prototype with 4 planets and analytics hooks.",
    },
    {
      title: "Beta tour",
      period: "May 2024",
      description: "Educator pilot, content QA, and performance hardening.",
    },
    {
      title: "Public launch",
      period: "Jun 2024",
      description: "Scaled infrastructure, press kit, and success workshops.",
    },
  ],
  documentation: [
    {
      title: "Design system addendum",
      description:
        "Token decisions, motion patterns, and screen-by-screen specs.",
      href: "https://case-study.example.com/solar-design-system",
      format: "FigJam",
    },
    {
      title: "Telemetry playbook",
      description: "What we log, how we alert, and success metric formulas.",
      href: "https://case-study.example.com/solar-telemetry",
      format: "Notion",
    },
    {
      title: "Content governance",
      description: "Editorial workflow, approval matrix, and publishing SLA.",
      href: "https://case-study.example.com/solar-content",
      format: "Google Doc",
    },
  ],
  gallery: [
    {
      src: "/p1.svg",
      alt: "Planet detail card",
      caption: "User can drill into planet vitals with layered telemetry.",
    },
    {
      src: "/grid.svg",
      alt: "Mission timeline",
      caption: "Mission timeline cards float within the orbit plane.",
    },
    {
      src: "/bg.png",
      alt: "Guided mode",
      caption: "Guided tours blend narration, subtitles, and path highlights.",
    },
  ],
};
