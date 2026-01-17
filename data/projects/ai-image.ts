import { ProjectCaseStudy } from "./types";

export const aiImageProject: ProjectCaseStudy = {
  id: 3,
  slug: "ai-imaging-saas",
  title: "AI Image Studio",
  client: "PixelSmith",
  excerpt:
    "Subscription-based creative suite where marketers generate, edit, and export on-brand visuals with controllable AI workflows.",
  description:
    "We launched a production-ready SaaS with credit-based billing, multi-tenant workspaces, and guardrails so teams can safely co-create imagery with diffusion models.",
  category: "SaaS Platform",
  card: {
    coverImage: "/p3.svg",
    iconList: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  },
  hero: {
    tagline: "Creative velocity meets enterprise guardrails",
    summary:
      "Brand-safe AI templates, deterministic outputs, and a delightful editor helped growth teams ship 4x more campaigns.",
    heroImage: "/p3.svg",
    badges: ["AI workflows", "Canvas editor", "Stripe billing"],
    stats: [
      { label: "Campaign assets shipped", value: "2.4M" },
      { label: "Brand presets", value: "65" },
      { label: "Churn", value: "1.8%" },
    ],
    links: [
      {
        label: "Try interactive demo",
        href: "https://ai-image-demo.example.com",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Pricing breakdown",
        href: "https://pixelsmith.notion.site/pricing",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Template intelligence",
      description:
        "Inputs brand kit, generates diffusion prompts, and guards against off-brand palettes.",
      icon: "🎨",
      tags: ["Branding", "AI"],
    },
    {
      title: "Layer-aware editor",
      description:
        "Hybrid vector + raster canvas with timeline states, undo stack, and quick exports.",
      icon: "🖼️",
      tags: ["Canvas", "Collab"],
    },
    {
      title: "Credits & billing",
      description:
        "Stripe-powered subscriptions with seat-based controls and per-asset metering.",
      icon: "💳",
      tags: ["Stripe", "Metering"],
    },
  ],
  services: [
    {
      title: "Product ops",
      description:
        "Mapped governance requirements, abuse handling, and privacy review with legal + policy teams.",
      deliverables: ["Risk matrix", "Moderation workflow", "Audit plan"],
    },
    {
      title: "Full-stack build",
      description:
        "Monorepo, server actions, file storage strategy, and GPU queue management for inference.",
      deliverables: ["Infra diagrams", "DX tooling", "Stress tests"],
    },
    {
      title: "Growth enablement",
      description:
        "In-app onboarding, usage nudges, and event instrumentation tied to lifecycle messaging.",
      deliverables: ["Lifecycle flows", "Tooltip library", "Attribution map"],
    },
  ],
  achievements: [
    {
      title: "Activation rate",
      value: "71%",
      description: "New teams hit their first exported asset inside 24 hours.",
    },
    {
      title: "Support tickets",
      value: "-32%",
      description: "Self-serve docs + guardrails reduced escalations.",
    },
    {
      title: "ARR",
      value: "$4.8M",
      description: "Year-one run rate powered by hybrid credit plans.",
    },
  ],
  milestones: [
    {
      title: "Brand lab",
      period: "Aug 2023",
      description:
        "Co-creation sessions with 8 design leads to define guardrails.",
      highlight: true,
    },
    {
      title: "Closed beta",
      period: "Oct 2023",
      description:
        "Provisioned first 200 seats with live metering + moderation queue.",
    },
    {
      title: "Billing launch",
      period: "Dec 2023",
      description: "Stripe integration, credit packs, and finance dashboards.",
    },
    {
      title: "Partner templates",
      period: "Feb 2024",
      description: "Opened template marketplace with revenue share reporting.",
    },
  ],
  documentation: [
    {
      title: "Editor UX spec",
      description: "Interaction model, keyboard map, and animation tokens.",
      href: "https://pixelsmith.notion.site/editor-spec",
      format: "Notion",
    },
    {
      title: "Trust & safety SOP",
      description: "Moderation queue, escalation tree, and appeal process.",
      href: "https://pixelsmith.sharepoint.com/trust",
      format: "PDF",
    },
    {
      title: "Billing architecture",
      description: "Diagram + runbooks for Stripe webhooks and usage sync.",
      href: "https://engineers.pixelsmith.dev/billing",
      format: "Markdown",
    },
  ],
  gallery: [
    {
      src: "/p3.svg",
      alt: "Canvas editor",
      caption:
        "Hybrid vector/raster editor with brand presets surfaced inline.",
    },
    {
      src: "/grid.svg",
      alt: "Prompt assistant",
      caption:
        "Prompt suggestions evolve as users tweak typography and palettes.",
    },
    {
      src: "/bg.png",
      alt: "Billing controls",
      caption:
        "Finance teams can monitor seats, credits, and invoices in-context.",
    },
  ],
};
