import { ProjectCaseStudy } from "./types";

export const commercePulseProject: ProjectCaseStudy = {
  id: 5,
  slug: "commerce-intelligence-suite",
  title: "Commerce Pulse Intelligence",
  client: "Flux Retail",
  excerpt:
    "Unified retail analytics workspace that stitches POS, ecommerce, and supply data into one responsive control room.",
  description:
    "Reimagined the merchandising team's daily cockpit with live inventory twins, promo testing sandboxes, and automated anomaly alerts so decisions happen in minutes, not days.",
  category: "Retail Platform",
  card: {
    coverImage: "/p2.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "Retail operators deserve astronaut-grade telemetry",
    summary:
      "We blended real-time dashboards, storytelling widgets, and natural language insights so teams can jump from macro KPIs to SKU-level fixes instantly.",
    heroImage: "/p2.svg",
    badges: ["Next.js", "Edge analytics", "Storytelling"],
    stats: [
      { label: "Decisions accelerated", value: "3x" },
      { label: "Promo lift", value: "+22%" },
      { label: "Data sources", value: "14" },
    ],
    links: [
      {
        label: "View live preview",
        href: "https://commerce-pulse.example.com",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Measurement framework",
        href: "https://notion.example.com/commerce-measurement",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Narrated dashboards",
      description:
        "Composable widgets that pair trend lines with human-readable summaries for exec briefings.",
      icon: "📊",
      tags: ["Data", "Narration"],
    },
    {
      title: "Scenario lab",
      description:
        "Promotion sandbox that replays historical demand and predicts margin impact in seconds.",
      icon: "🧪",
      tags: ["Forecasting", "Planning"],
    },
    {
      title: "Inventory twin",
      description:
        "Digital twin of stores and warehouses highlighting low stock, aging inventory, and transfer ops.",
      icon: "🏬",
      tags: ["Ops", "Realtime"],
    },
  ],
  services: [
    {
      title: "Product research",
      description:
        "Ran live-along sessions with planners, allocators, and store leads to map daily workflows.",
      deliverables: ["Journey atlas", "Persona stack", "Decision matrix"],
    },
    {
      title: "Systems design",
      description:
        "Established the domain model, permissions, and observability contract between data + app teams.",
      deliverables: ["Context map", "Schema kit", "Runbook"],
    },
    {
      title: "Interaction engineering",
      description:
        "Built high-frequency charts, skeleton loading, and offline-friendly mutations for field reps.",
      deliverables: ["Component kit", "Motion specs", "Perf budget"],
    },
  ],
  achievements: [
    {
      title: "Manual reports replaced",
      value: "64",
      description: "Weekly spreadsheets automated across merchandising + ops.",
    },
    {
      title: "Alert response time",
      value: "-58%",
      description:
        "Store teams remediate stockouts faster with anomaly routing.",
    },
    {
      title: "Rollout satisfaction",
      value: "4.7/5",
      description: "CSAT from 300+ field testers.",
    },
  ],
  milestones: [
    {
      title: "Insight safari",
      period: "Jan 2024",
      description: "Shadowed 12 retailers and catalogued tooling gaps.",
      highlight: true,
    },
    {
      title: "Alpha telemetry",
      period: "Mar 2024",
      description: "Hooked live POS + ecommerce feeds into the workspace.",
    },
    {
      title: "Promo lab beta",
      period: "May 2024",
      description: "Rolled scenario engine to category managers.",
    },
    {
      title: "Nationwide launch",
      period: "Jul 2024",
      description: "Scaled to 400 stores with training roadshow.",
    },
  ],
  documentation: [
    {
      title: "Insight architecture",
      description: "Data contracts, freshness targets, and lineage diagrams.",
      href: "https://docs.example.com/commerce-architecture",
      format: "Notion",
    },
    {
      title: "Promo simulation spec",
      description: "Models, guardrails, and QA checklist for the scenario lab.",
      href: "https://docs.example.com/commerce-sim",
      format: "PDF",
    },
    {
      title: "Field enablement kit",
      description: "Training decks, quick reference cards, and support SOPs.",
      href: "https://docs.example.com/commerce-enable",
      format: "Slides",
    },
  ],
  gallery: [
    {
      src: "/p2.svg",
      alt: "Executive dashboard",
      caption: "Narrated dashboard pairs KPIs with context windows.",
    },
    {
      src: "/grid.svg",
      alt: "Scenario builder",
      caption: "Promo lab lets teams compare uplift versus margin instantly.",
    },
    {
      src: "/bg.png",
      alt: "Inventory heatmap",
      caption: "Digital twin surfaces low-stock clusters per region.",
    },
  ],
};
