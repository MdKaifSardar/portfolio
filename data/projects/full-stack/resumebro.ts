import { ProjectCaseStudy } from "../types";
import { resumeBroImages } from "./resumebro-images";

export const resumeBroProject: ProjectCaseStudy = {
  id: 3,
  slug: "resumebro-ai-resumes",
  title: "ResumeBro — AI Resume Intelligence",
  client: "ResumeBro",
  excerpt:
    "LLM-powered resume intelligence suite that parses PDFs into typed JSON, syncs data to Firebase dashboards, and lets candidates edit drafts in real time.",
  description:
    "ResumeBro automates resume tailoring by combining an AI parsing engine, secure workspace, and advanced editors. I led the architecture spanning Next.js 14 App Router, React Server Actions, Firebase auth, Firestore persistence, and Redux-powered editors so users can ingest docs, refine every field, and ship recruiter-ready versions faster.",
  category: "Full-stack Web Platform",
  card: {
    coverImage: resumeBroImages.cover.src,
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "LLM workflows without the wait",
    summary:
      "Next.js 14 + Server Actions drive ingestion, parsing, and editing, while Firebase auth, Firestore, and Redux Toolkit keep every resume version synced under 100ms latency.",
    heroImage: resumeBroImages.hero.src,
    badges: ["Next.js 14", "Server Actions", "Firebase", "LLM"],
    stats: [
      { label: "Timeline", value: "Dec 2025 – Present" },
      { label: "Schema accuracy", value: "99% typed" },
      { label: "Latency savings", value: "-45% API calls" },
    ],
    links: [
      // {
      //   label: "Product walkthrough",
      //   href: "https://docs.example.com/resumebro-product",
      //   type: "primary",
      //   isExternal: true,
      // },
      // {
      //   label: "Schema reference",
      //   href: "https://docs.example.com/resumebro-schema",
      //   type: "secondary",
      //   isExternal: true,
      // },
    ],
  },
  features: [
    {
      title: "Intelligent parsing engine",
      description:
        "LLM pipelines turn PDF, DOCX, and JD text into structured JSON with raw, segmented, and block-level reviews plus Zod validation.",
      icon: "🧠",
      tags: ["Parsing", "LLM"],
    },
    {
      title: "Secure workspace dashboard",
      description:
        "Firebase Auth, server-side sessions, and paginated workspaces let users manage resumes + JDs with analytics and logs.",
      icon: "📊",
      tags: ["Dashboard", "Auth"],
    },
    {
      title: "Advanced editors",
      description:
        "Full-resume and JD editors surface nested fields, instant saves, and AI suggestions powered by Redux Toolkit + Firestore.",
      icon: "✏️",
      tags: ["Editor", "Realtime"],
    },
    {
      title: "Unit testing playground",
      description:
        "Built-in validation playground lets ops teams inspect parser output at every stage before exporting.",
      icon: "🧪",
      tags: ["QA", "Automation"],
    },
  ],
  services: [
    {
      title: "Platform architecture",
      description:
        "Mapped ingestion → LLM orchestration → validation → persistence while ensuring every stage streams progress to the UI.",
      deliverables: ["Sequence diagrams", "Schema registry", "Perf plan"],
    },
    {
      title: "AI pipeline engineering",
      description:
        "Designed prompts, guardrails, and evaluation harnesses for the parsing + JD engines with strict schema validation.",
      deliverables: ["Prompt library", "Eval suite", "Guardrails"],
    },
    {
      title: "Experience design",
      description:
        "Crafted the dashboard, resume editor, and JD editor with autosave, diffing, and Firestore-backed analytics.",
      deliverables: ["Component system", "Dashboard", "Onboarding"],
    },
  ],
  achievements: [
    {
      title: "API overhead",
      value: "-45%",
      description:
        "React Server Actions consolidate network chatter to a single round trip per mutation.",
    },
    {
      title: "Processing speed",
      value: "3× faster",
      description:
        "LLM orchestration + background workers finish drafts three times faster than prior tooling.",
    },
    {
      title: "User task completion",
      value: "+35%",
      description:
        "Realtime dashboard + editor flow keeps candidates in context until export.",
    },
  ],
  milestones: [
    {
      title: "Parsing engine MVP",
      period: "Dec 2025",
      description: "Shipped ingestion + LLM parsing with Zod validation.",
      highlight: true,
    },
    {
      title: "Workspace launch",
      period: "Jan 2026",
      description:
        "Released Firebase-authenticated dashboard with session persistence.",
    },
    {
      title: "Advanced editors",
      period: "Feb 2026",
      description:
        "Launched resume + JD editors with autosave and inline AI suggestions.",
    },
    {
      title: "Analytics & QA",
      period: "Apr 2026",
      description:
        "Added usage analytics, validation playground, and ops tooling (ongoing).",
    },
  ],
  documentation: [
    // {
    //   title: "Coming soon",
    //   description:
    //     "Developer docs + API references are being finalized during active development.",
    //   href: "#",
    //   format: "Work in progress",
    // },
  ],
  gallery: (resumeBroImages.gallery ?? []).map(({ src, alt, caption }) => ({
    src,
    alt,
    caption: caption ?? "",
  })),
};
