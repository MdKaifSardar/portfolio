import { ProjectCaseStudy } from "../types";
import { jeonftImages } from "./jeonft-images";

export const jeonftProject: ProjectCaseStudy = {
  id: 2,
  slug: "jeonft-user-platform",
  title: "JEONFT — Web3 User Platform",
  client: "JEONFT Labs",
  excerpt:
    "Enterprise-grade Web3 marketplace, referral engine, and banking console built with Next.js 15, server actions, and MongoDB to onboard collectors, track rewards, and govern capital flows.",
  description:
    "JEONFT combines a marketing-grade marketplace, referral-aware onboarding, and a banking console where users connect wallets, move capital, and unlock AI-driven rewards. I owned the architecture across the App Router UI, server actions, MongoDB data models, and blockchain utilities so the business could launch on-chain and fiat rails with confidence.",
  category: "Full-stack Web Platform",
  card: {
    coverImage: jeonftImages.cover.src,
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "Wallets, rewards, and referrals in one control center",
    summary:
      "Next.js 15 client/server components, JWT auth, and MongoDB-backed server actions orchestrate wallet linking, deposits locked for 180 days, real-time ROI tracking, and recursive MLM insights while keeping latency low across geos.",
    heroImage: jeonftImages.hero.src,
    badges: ["Next.js 15", "Server Actions", "MongoDB", "Web3"],
    stats: [
      { label: "Timeline", value: "Jan – May 2025" },
      { label: "Active wallets", value: "12K+", helper: "ETH + INR rails" },
      { label: "Referral tiers", value: "5 levels" },
    ],
    links: [
      {
        label: "Product walkthrough",
        href: "https://jeonftuser.vercel.app/",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Architecture memo",
        href: "https://jeonftuser.vercel.app/",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Referral-first onboarding",
      description:
        "JWT auth, referral-aware signup flows, and middleware guards keep collectors in the right funnels while surfacing context-specific CTAs.",
      icon: "🪪",
      tags: ["Auth", "Referrals"],
    },
    {
      title: "Wallet & blockchain console",
      description:
        "MetaMask checks, ETH balance reads, and INR↔ETH conversions gated by live CoinGecko prices ensure only compliant transactions execute.",
      icon: "🪙",
      tags: ["Web3", "Finance"],
    },
    {
      title: "Deposits, withdrawals, and locks",
      description:
        "Server actions track deposits, enforce 180-day locks, and reconcile withdrawals once the admin wallet clears payouts.",
      icon: "🏦",
      tags: ["Compliance", "Ops"],
    },
    {
      title: "Rewards & MLM analytics",
      description:
        "Recursive MLM trees, ROI panels, and reward claim workflows link directly to balance mutations so teams see live performance.",
      icon: "🌲",
      tags: ["Analytics", "Growth"],
    },
  ],
  services: [
    {
      title: "Platform & data architecture",
      description:
        "Modeled the multi-tenant data layer, referral graph, and wallet governance patterns so compliance, support, and finance had shared truths.",
      deliverables: ["Data schemas", "Threat model", "Infrastructure plan"],
    },
    {
      title: "Application engineering",
      description:
        "Built the Next.js 15 experience, modular component system, and server actions that power onboarding, search, dashboards, and payments.",
      deliverables: ["Component kit", "Server actions", "Testing matrix"],
    },
    {
      title: "Operations & enablement",
      description:
        "Documented deposit/withdrawal runbooks, referral compensation policies, and legal/support surfaces for long-term stewardship.",
      deliverables: ["Ops handbook", "Policy pages", "Support workflows"],
    },
  ],
  achievements: [
    {
      title: "User activation",
      value: "87% week-one",
      description:
        "Contextual onboarding and referral prompts kept newly-invited wallets active through their first deposit.",
    },
    {
      title: "Reward transparency",
      value: "24/7 ledger",
      description:
        "Server actions and dashboards expose every ROI, level, and referral payout without manual reconciliation.",
    },
    {
      title: "Support efficiency",
      value: "-35% tickets",
      description:
        "Auto-generated static policy pages and EmailJS hooks deflected repetitive compliance questions.",
    },
  ],
  milestones: [
    {
      title: "Architecture kickoff",
      period: "Jan 2025",
      description:
        "Captured onboarding, wallet, and referral requirements; locked the App Router + MongoDB + Cloudinary stack.",
      highlight: true,
    },
    {
      title: "Auth & referral beta",
      period: "Feb 2025",
      description:
        "Shipped JWT auth, referral links, and middleware gating for `/auth` and dashboard routes.",
    },
    {
      title: "Wallet console & deposits",
      period: "Mar 2025",
      description:
        "Released wallet linking, INR↔ETH conversion helpers, admin wallet enforcement, and deposit history views.",
    },
    {
      title: "Rewards & MLM analytics",
      period: "Apr 2025",
      description:
        "Launched recursive MLM visualization, reward claim flows, and ROI tiles powered by server actions.",
    },
    {
      title: "Compliance surfaces & launch",
      period: "May 2025",
      description:
        "Finalized policy routes, troubleshooting docs, and go-live runbooks ahead of public rollout.",
    },
  ],
  documentation: [
    {
      title: "JEONFT platform playbook",
      description:
        "Architecture, routing model, and environment contracts for engineering handoffs.",
      href: "https://docs.example.com/jeonft-playbook",
      format: "Notion",
    },
    {
      title: "Wallet & deposit runbook",
      description:
        "Operational guide covering admin wallet setup, 180-day locks, and payout approvals.",
      href: "https://docs.example.com/jeonft-wallets",
      format: "PDF",
    },
    {
      title: "Support & compliance kit",
      description:
        "Templates for legal pages, contact flows, and user comms managed by CX leads.",
      href: "https://docs.example.com/jeonft-compliance",
      format: "Docs",
    },
  ],
  gallery: (jeonftImages.gallery ?? []).map(({ src, alt, caption }) => ({
    src,
    alt,
    caption: caption ?? "",
  })),
};
