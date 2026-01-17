import { ProjectCaseStudy } from "./types";

export const shoeManiaProject: ProjectCaseStudy = {
  id: 2,
  slug: "shoemania-commerce-suite",
  title: "ShoeMania — Commerce OS",
  client: "ShoeMania Collective",
  excerpt:
    "A resilient ecommerce stack where Next.js storefronts, FastAPI order services, and MongoDB ops fuel 99.9% transaction reliability.",
  description:
    "ShoeMania needed a modern commerce foundation that could launch seasonal drops quickly while keeping payments airtight. I architected a split frontend/backend system that keeps merchandising agile, payment providers abstracted, and the ops team informed through a modular admin workspace.",
  category: "Full-stack Web Platform",
  card: {
    coverImage: "/p3.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "Drop-ready commerce with zero friction",
    summary:
      "Edge-rendered product pages, FastAPI order orchestration, and multi-gateway payment funnels keep shoppers confident and the business nimble across launches.",
    heroImage: "/p3.svg",
    badges: ["Next.js", "FastAPI", "MongoDB", "Payments"],
    stats: [
      { label: "Payment reliability", value: "99.9%" },
      { label: "Order flow latency", value: "< 1.5s" },
      { label: "Admin modules", value: "12 reusable" },
    ],
    links: [
      {
        label: "Storefront tour",
        href: "https://docs.example.com/shoemania-storefront",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Ops handbook",
        href: "https://docs.example.com/shoemania-ops",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Secure checkout flows",
      description:
        "Dual payment gateways with tokenized cards and 3DS verification keep chargebacks low even during high-traffic drops.",
      icon: "💳",
      tags: ["Stripe", "PCI"],
    },
    {
      title: "Headless merchandising",
      description:
        "Next.js routes read from a schema-driven catalog service so marketing can stage launches without code pushes.",
      icon: "🛍️",
      tags: ["CMS", "Edge"],
    },
    {
      title: "Modular admin",
      description:
        "Role-based dashboards for inventory, fulfillment, and CX run on a component kit shared with the storefront.",
      icon: "📦",
      tags: ["RBAC", "Design system"],
    },
  ],
  services: [
    {
      title: "Storefront engineering",
      description:
        "Built a Next.js 14 app router experience with streaming product data, wishlists, and search facets.",
      deliverables: ["Component kit", "Search integration", "Analytics hooks"],
    },
    {
      title: "Order & payment services",
      description:
        "FastAPI microservices coordinate orders, payment intents, refunds, and webhook reconciliation.",
      deliverables: ["Service graph", "Retry policies", "Audit logs"],
    },
    {
      title: "Admin UX",
      description:
        "Designed and implemented a modular dashboard so ops teams can configure catalogs, discounts, and fulfillment rules.",
      deliverables: ["Dashboard IA", "Permission matrix", "UI library"],
    },
  ],
  achievements: [
    {
      title: "Transaction reliability",
      value: "99.9%",
      description:
        "Redundant payment rails and observability guardrails kept checkout green, even on launch days.",
    },
    {
      title: "Ops efficiency",
      value: "+30%",
      description:
        "Modular admin UI cut product management toil nearly a third quarter-over-quarter.",
    },
    {
      title: "Order accuracy",
      value: "Automated",
      description:
        "Workflow automations reduced manual order edits to near-zero.",
    },
  ],
  milestones: [
    {
      title: "Platform kickoff",
      period: "Dec 2024",
      description: "Scoped catalog, payments, and fulfillment domains.",
      highlight: true,
    },
    {
      title: "Checkout beta",
      period: "Feb 2025",
      description: "Ran closed pilots with alternate payment providers.",
    },
    {
      title: "Admin rollout",
      period: "Mar 2025",
      description: "Released modular dashboard to merchandising + ops.",
    },
    {
      title: "Public launch",
      period: "Apr 2025",
      description: "Shipped the full experience with live inventory sync.",
    },
  ],
  documentation: [
    {
      title: "Commerce data dictionary",
      description: "Shared schema for catalog, carts, payments, and shipments.",
      href: "https://docs.example.com/shoemania-data",
      format: "Notion",
    },
    {
      title: "Checkout runbook",
      description:
        "Incident playbooks for payment failures and partner outages.",
      href: "https://docs.example.com/shoemania-checkout",
      format: "PDF",
    },
    {
      title: "Admin onboarding guide",
      description: "Training materials for merchandising and CX teams.",
      href: "https://docs.example.com/shoemania-admin",
      format: "Docs",
    },
  ],
  gallery: [
    {
      src: "/p3.svg",
      alt: "Product grid",
      caption: "Streaming catalog makes colorways and sizes feel instant.",
    },
    {
      src: "/grid.svg",
      alt: "Checkout UI",
      caption: "Trust badges and payment options adapt per shopper profile.",
    },
    {
      src: "/bg.png",
      alt: "Admin dashboard",
      caption:
        "Ops teams orchestrate inventory, promos, and logistics in one view.",
    },
  ],
};
