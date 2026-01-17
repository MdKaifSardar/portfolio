import { ProjectCaseStudy } from "./types";

export const hashtrustProject: ProjectCaseStudy = {
  id: 1,
  slug: "hashtrust-identity-platform",
  title: "HashTrust — Blockchain Identity",
  client: "HashTrust Labs",
  excerpt:
    "Blockchain-secured identity rails that pair FastAPI microservices with JWT auth and fraud telemetry to vet enterprise onboarding in minutes.",
  description:
    "HashTrust needed a verifiable identity fabric that auditors could trust and platform teams could extend. I led the architecture for a FastAPI backend that signs every credential to a consortium chain, coordinates multi-step verification workflows, and exposes clean APIs so risk teams can automate approvals without sacrificing control.",
  category: "Full-stack Web Platform",
  card: {
    coverImage: "/p2.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "Stop fraud at the identity layer",
    summary:
      "JWT-based gateway services orchestrate blockchain attestations, third-party signals, and device risk scoring in a single FastAPI graph that scales horizontally across Render and Azure preview regions.",
    heroImage: "/p2.svg",
    badges: ["FastAPI", "Postgres", "Blockchain", "JWT"],
    stats: [
      { label: "Verification stages", value: "5-layer" },
      { label: "JWT issuance latency", value: "< 250ms" },
      { label: "Active environments", value: "Render + Azure" },
    ],
    links: [
      {
        label: "Architecture deck",
        href: "https://docs.example.com/hashtrust-architecture",
        type: "primary",
        isExternal: true,
      },
      {
        label: "API reference",
        href: "https://docs.example.com/hashtrust-api",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Ledger-backed identities",
      description:
        "Credential claims are hashed to a lightweight consortium chain so auditors can prove issuance order and detect tampering instantly.",
      icon: "🔐",
      tags: ["Blockchain", "Audit trail"],
    },
    {
      title: "Multi-layer verification",
      description:
        "Biometric checks, KYC vendors, and device fingerprinting run in parallel with policy-driven fallbacks to cut false approvals.",
      icon: "🧬",
      tags: ["Risk", "KYC"],
    },
    {
      title: "Trust cockpit",
      description:
        "Fraud signals stream to a Grafana + Superset workspace so analysts can tune rules without redeploying code.",
      icon: "📊",
      tags: ["Observability", "Dashboards"],
    },
  ],
  services: [
    {
      title: "Protocol architecture",
      description:
        "Modeled credential schemas, smart-contract anchoring, and JWT scopes that downstream SaaS teams can consume safely.",
      deliverables: ["Data contracts", "Chain schema", "Security review"],
    },
    {
      title: "API & workflow engineering",
      description:
        "Built FastAPI services that orchestrate verification pipelines with async tasks, retries, and clear audit hooks.",
      deliverables: ["Async job queue", "Workflow templates", "Monitoring"],
    },
    {
      title: "Platform reliability",
      description:
        "Containerized deployments on Render plus Azure Web Apps pilots with blue/green cutovers and chaos drills.",
      deliverables: ["IaC modules", "Failover plan", "Runbooks"],
    },
  ],
  achievements: [
    {
      title: "Fraud detection accuracy",
      value: "Multi-layer boost",
      description:
        "Stacked verification flows dramatically reduced false positives on high-risk applicants.",
    },
    {
      title: "Onboarding SLA",
      value: "< 5 min",
      description:
        "Automated checks keep enterprise provisioning under the compliance threshold.",
    },
    {
      title: "Ops confidence",
      value: "Dual-cloud ready",
      description:
        "Render production plus Azure pilots ensure horizontal scalability when new tenants arrive.",
    },
  ],
  milestones: [
    {
      title: "Ledger blueprint",
      period: "Aug 2025",
      description:
        "Documented the identity schema and consortium contract strategy.",
      highlight: true,
    },
    {
      title: "Workflow engine",
      period: "Oct 2025",
      description: "Launched FastAPI orchestration service with async workers.",
    },
    {
      title: "Fraud telemetry",
      period: "Nov 2025",
      description: "Stood up dashboards + alerting for risk analysts.",
    },
    {
      title: "Azure pilot",
      period: "Dec 2025",
      description: "Tested geo-redundant deployments on Azure Web Apps.",
    },
  ],
  documentation: [
    {
      title: "Verification playbook",
      description:
        "End-to-end diagrams of every layer in the onboarding stack.",
      href: "https://docs.example.com/hashtrust-playbook",
      format: "Notion",
    },
    {
      title: "Runbook collection",
      description: "Incident and failover SOPs for SRE + fraud teams.",
      href: "https://docs.example.com/hashtrust-runbooks",
      format: "PDF",
    },
    {
      title: "API quick start",
      description:
        "Guided examples for partner engineering teams integrating HashTrust.",
      href: "https://docs.example.com/hashtrust-quickstart",
      format: "Docs",
    },
  ],
  gallery: [
    {
      src: "/p2.svg",
      alt: "Verification dashboard",
      caption: "Risk analysts tune trust scores with real-time ledger events.",
    },
    {
      src: "/grid.svg",
      alt: "Workflow builder",
      caption:
        "Policy designers compose verification stages via drag-and-drop.",
    },
    {
      src: "/bg.png",
      alt: "Deployment map",
      caption: "Active-active Render and Azure regions ensure redundancy.",
    },
  ],
};
