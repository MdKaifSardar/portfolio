import { ProjectCaseStudy } from "../types";
import { hashtrustImages } from "./hashtrust-images";

export const hashtrustProject: ProjectCaseStudy = {
  id: 1,
  slug: "hashtrust-identity-platform",
  title: "HashTrust — Decentralized Identity & Fraud Platform",
  client: "HashTrust Labs",
  excerpt:
    "Enterprise identity protection platform that hashes credentials on-chain, runs GenAI-powered fraud detection, and ships a secure API workspace built with Next.js 14 and FastAPI.",
  description:
    "HashTrust reimagines onboarding for banks and fintechs by pairing blockchain-backed data storage with GenAI fraud analysis. I architected the end-to-end stack—from the Next.js 14 control surface to FastAPI services, smart-contract anchoring, and observability—so compliance teams can verify users in minutes without sacrificing privacy or control.",
  category: "Full-stack Web Platform",
  card: {
    coverImage: hashtrustImages.cover.src,
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "Stop fraud at the identity layer",
    summary:
      "Next.js 14 UI + FastAPI microservices orchestrate blockchain attestations, GenAI fraud checks, and session-based auth while keeping latency under 250ms across Render and Azure regions.",
    heroImage: hashtrustImages.hero.src,
    badges: ["Next.js 14", "FastAPI", "Blockchain", "GenAI"],
    stats: [
      { label: "Timeline", value: "Aug – Dec 2025" },
      { label: "API endpoints", value: "18 secure routes" },
      { label: "Fraud signals", value: "GenAI + liveness" },
    ],
    links: [
      {
        label: "Visit platform",
        href: "https://hash-trust.vercel.app/",
        type: "primary",
        isExternal: true,
      },
      {
        label: "API reference",
        href: "https://hash-trust.vercel.app/",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Decentralized storage",
      description:
        "Identity artifacts are hashed to a consortium chain so auditors can verify issuance order and tamper attempts instantly.",
      icon: "🔐",
      tags: ["Blockchain", "Audit"],
    },
    {
      title: "GenAI fraud detection",
      description:
        "Face liveness, similarity scoring, and behavioral checks run through GenAI models to flag suspicious activity in real time.",
      icon: "🧠",
      tags: ["GenAI", "Risk"],
    },
    {
      title: "API & key governance",
      description:
        "Single-use API keys, request logs, and analytics dashboards give organizations granular control over integrations.",
      icon: "🗝️",
      tags: ["Security", "APIs"],
    },
    {
      title: "Session-based auth",
      description:
        "Secure session cookies replace brittle access tokens so users stay logged in across the workspace without token drift.",
      icon: "🛡️",
      tags: ["Auth", "Sessions"],
    },
  ],
  services: [
    {
      title: "Protocol architecture",
      description:
        "Modeled credential schemas, blockchain anchoring, and GenAI evaluation flows that legal + security teams could audit.",
      deliverables: ["Identity schemas", "Contract design", "Threat model"],
    },
    {
      title: "API & workflow engineering",
      description:
        "Built FastAPI services with async queues, retriable verification steps, and Grafana/Superset telemetry for fraud teams.",
      deliverables: ["Async pipelines", "API gateway", "Observability"],
    },
    {
      title: "Dashboard & UX",
      description:
        "Shipped the Next.js 14 control center with Framer Motion touches, usage analytics, and responsive admin views.",
      deliverables: ["Component system", "Usage analytics", "Access controls"],
    },
  ],
  achievements: [
    {
      title: "Identity assurance",
      value: "99% schema match",
      description:
        "Strict hashing + validation pipelines keep credential payloads compliant with regulator audits.",
    },
    {
      title: "Onboarding SLA",
      value: "< 5 min",
      description:
        "Automated GenAI checks and blockchain anchoring keep enterprise provisioning under compliance thresholds.",
    },
    {
      title: "Operational readiness",
      value: "Dual-cloud",
      description:
        "Render production plus Azure pilots ensure geo-redundancy before public launch.",
    },
  ],
  milestones: [
    {
      title: "Architecture & threat model",
      period: "Aug 2025",
      description:
        "Captured requirements, modeled blockchain + GenAI pipeline, and aligned on compliance needs.",
      highlight: true,
    },
    {
      title: "Decentralized storage MVP",
      period: "Sep 2025",
      description:
        "Implemented credential hashing + verification smart contracts.",
    },
    {
      title: "Fraud engine & APIs",
      period: "Oct 2025",
      description:
        "Launched FastAPI services with GenAI checks, session auth, and key governance.",
    },
    {
      title: "Dashboard + analytics",
      period: "Nov 2025",
      description:
        "Shipped admin workspace with usage logs, charts, and request tracing.",
    },
    {
      title: "Dual-cloud pilot",
      period: "Dec 2025",
      description: "Ran blue/green cutovers across Render + Azure ahead of GA.",
    },
  ],
  documentation: [
    {
      title: "Coming soon",
      description:
        "Detailed architecture and integration docs will be published closer to GA.",
      href: "#",
      format: "Work in progress",
    },
  ],
  gallery: (hashtrustImages.gallery ?? []).map(({ src, alt, caption }) => ({
    src,
    alt,
    caption: caption ?? "",
  })),
};
