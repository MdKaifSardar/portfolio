import { ProjectCaseStudy } from "./types";

export const logisticsOpsProject: ProjectCaseStudy = {
  id: 6,
  slug: "logistics-control-tower",
  title: "Atlas Logistics Control Tower",
  client: "Atlas Freight",
  excerpt:
    "Mission-control interface for a 3PL network that coordinates shipments, drivers, and warehouse capacity in real time.",
  description:
    "Designed and shipped a resilient control tower with predictive ETAs, carrier health scoring, and exception automation so ops leads can run the network from any screen.",
  category: "Operations Platform",
  card: {
    coverImage: "/p4.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  hero: {
    tagline: "Every lane, asset, and exception on a single canvas",
    summary:
      "We balanced telemetry density with calm UI moments, making it easier for coordinators to prioritize, collaborate, and keep freight moving during peak seasons.",
    heroImage: "/p4.svg",
    badges: ["Maps", "Realtime", "Alerting"],
    stats: [
      { label: "Loads monitored daily", value: "18.5K" },
      { label: "Exception resolution", value: "+63%" },
      { label: "Carrier scorecards", value: "450+" },
    ],
    links: [
      {
        label: "See product tour",
        href: "https://atlas-control.example.com",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Ops readiness guide",
        href: "https://atlas-control.example.com/ops-guide",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Predictive map",
      description:
        "WebGL map layers blend live telematics, weather, and facility capacity into one situational picture.",
      icon: "🗺️",
      tags: ["Maps", "Telemetry"],
    },
    {
      title: "Exception desk",
      description:
        "Tiered triage queues with automations, playbooks, and escalations for critical loads.",
      icon: "⚙️",
      tags: ["Automation", "Ops"],
    },
    {
      title: "Carrier health",
      description:
        "Scorecards track on-time %, tender acceptance, and compliance signals per lane.",
      icon: "📦",
      tags: ["Analytics", "Quality"],
    },
  ],
  services: [
    {
      title: "Journey orchestration",
      description:
        "Facilitated war-room simulations with dispatch, customer service, and warehouse teams.",
      deliverables: ["Service blueprint", "Playbook matrix", "Alert taxonomy"],
    },
    {
      title: "Systems integration",
      description:
        "Unified TMS, WMS, and telematics feeds behind a normalized graph API.",
      deliverables: ["Integration hub", "Data contracts", "Monitoring"],
    },
    {
      title: "Operational excellence",
      description:
        "Defined KPIs, rituals, and command-center staffing models for rollout.",
      deliverables: ["Ops handbook", "Training loops", "Live dashboards"],
    },
  ],
  achievements: [
    {
      title: "On-time delivery",
      value: "+11%",
      description: "Coordinators close the loop faster with predictive alerts.",
    },
    {
      title: "Driver dwell time",
      value: "-27%",
      description:
        "Yard teams receive upstream alerts with actionable context.",
    },
    {
      title: "Ops escalations",
      value: "-36%",
      description:
        "Automated playbooks resolved repetitive issues without paging leadership.",
    },
  ],
  milestones: [
    {
      title: "Control-room research",
      period: "Feb 2024",
      description: "Studied legacy boards, radio logs, and Excel trackers.",
      highlight: true,
    },
    {
      title: "Unified map alpha",
      period: "Apr 2024",
      description: "Launched internal pilot with 50 coordinators.",
    },
    {
      title: "Exception automation",
      period: "Jun 2024",
      description: "Rolled workflow builder + alert routing.",
    },
    {
      title: "Peak season go-live",
      period: "Sep 2024",
      description: "Handled holiday surge with 0 critical outages.",
    },
  ],
  documentation: [
    {
      title: "Command center rituals",
      description:
        "Runbooks for stand-ups, alert reviews, and escalation ladders.",
      href: "https://docs.example.com/control-rituals",
      format: "Notion",
    },
    {
      title: "Integration architecture",
      description: "Source-of-truth diagram plus observability checklist.",
      href: "https://docs.example.com/control-architecture",
      format: "PDF",
    },
    {
      title: "Carrier success kit",
      description: "Training content for partner carriers adopting scorecards.",
      href: "https://docs.example.com/control-carrier-kit",
      format: "Slides",
    },
  ],
  gallery: [
    {
      src: "/p4.svg",
      alt: "Control tower dashboard",
      caption: "Dispatchers monitor all active shipments on a cinematic map.",
    },
    {
      src: "/grid.svg",
      alt: "Exception queue",
      caption: "Workflow builder pairs alerts with recommended playbooks.",
    },
    {
      src: "/bg.png",
      alt: "Carrier scorecard",
      caption: "Ops leads compare carrier health and compliance trends.",
    },
  ],
};
