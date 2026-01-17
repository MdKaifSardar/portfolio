import { ProjectCaseStudy } from "./types";

export const resumeBroProject: ProjectCaseStudy = {
  id: 3,
  slug: "resumebro-ai-resumes",
  title: "ResumeBro — AI Resume Studio",
  client: "ResumeBro",
  excerpt:
    "AI-native resume generator built on Next.js 14, Firebase, and LLM pipelines that transform unstructured docs into validated JSON schemas with 99% accuracy.",
  description:
    "ResumeBro automates the bespoke resume process by pairing React Server Actions with a validation-first AI pipeline. I designed the ingestion, orchestration, and real-time editing surfaces so users see fast previews, recruiters trust the structure, and ops teams can monitor every parse.",
  category: "Full-stack Web Platform",
  card: {
    coverImage: "/p4.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
  },
  hero: {
    tagline: "LLM workflows without the wait",
    summary:
      "React Server Actions trim API chatter by 45% while Firebase event streams keep editors synced, letting candidates ship tailored drafts ~40% faster.",
    heroImage: "/p4.svg",
    badges: ["Next.js 14", "Firebase", "LLM", "Redux Toolkit"],
    stats: [
      { label: "Type accuracy", value: "99%" },
      { label: "Processing speed", value: "3× faster" },
      { label: "Latency savings", value: "-40%" },
    ],
    links: [
      {
        label: "Product walkthrough",
        href: "https://docs.example.com/resumebro-product",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Schema reference",
        href: "https://docs.example.com/resumebro-schema",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Document ingestion",
      description:
        "Uploads in PDF, DOCX, or LinkedIn JSON are normalized, chunked, and enriched before prompt orchestration.",
      icon: "📥",
      tags: ["Parsing", "LLM"],
    },
    {
      title: "Schema validator",
      description:
        "LLM output is validated against a JSON schema with auto-healing fallbacks to keep recruiters confident.",
      icon: "✅",
      tags: ["Validation", "Automation"],
    },
    {
      title: "Realtime editor",
      description:
        "Redux Toolkit + Firebase keep collaborative edits sub-100ms while surfacing AI suggestions inline.",
      icon: "⚡",
      tags: ["Realtime", "Collaboration"],
    },
  ],
  services: [
    {
      title: "Platform architecture",
      description:
        "Modeled the flow from ingestion through LLM orchestration, Server Actions, and persistence so each step streams progress back to the UI.",
      deliverables: [
        "Sequence diagrams",
        "Schema registry",
        "Performance plan",
      ],
    },
    {
      title: "AI pipeline engineering",
      description:
        "Designed prompts, guardrails, and evaluation harnesses that keep the JSON output trustworthy.",
      deliverables: ["Prompt library", "Eval suite", "Guardrails"],
    },
    {
      title: "Experience design",
      description:
        "Built the dashboard + editor UX with autosave, diffing, and metrics so users see the impact of each change.",
      deliverables: ["Component system", "Dashboard", "Onboarding"],
    },
  ],
  achievements: [
    {
      title: "API overhead",
      value: "-45%",
      description:
        "React Server Actions consolidated network calls to a single round trip per mutation.",
    },
    {
      title: "Processing speed",
      value: "3×",
      description:
        "Pipeline optimizations and background workers finish drafts three times faster than rule-based tools.",
    },
    {
      title: "User task completion",
      value: "+35%",
      description:
        "Realtime dashboard + editor flow keeps users in context until they export.",
    },
  ],
  milestones: [
    {
      title: "LLM pipeline MVP",
      period: "Dec 2025",
      description:
        "Stitched ingestion, prompt orchestration, and schema validation.",
      highlight: true,
    },
    {
      title: "Server Actions rollout",
      period: "Jan 2026",
      description: "Moved mutations to the server to slash API chatter.",
    },
    {
      title: "Realtime editor",
      period: "Feb 2026",
      description: "Launched collaborative editing with autosave + metrics.",
    },
    {
      title: "Growth dashboard",
      period: "Mar 2026",
      description: "Shipped insight hub so users track recruiter engagement.",
    },
  ],
  documentation: [
    {
      title: "Pipeline reference",
      description: "Explains every stage from ingestion to export with SLAs.",
      href: "https://docs.example.com/resumebro-pipeline",
      format: "Notion",
    },
    {
      title: "Schema validation guide",
      description: "Covers JSON schema rules plus fallback strategies.",
      href: "https://docs.example.com/resumebro-validation",
      format: "Docs",
    },
    {
      title: "Editor playbook",
      description:
        "UX + accessibility conventions for the collaborative editor.",
      href: "https://docs.example.com/resumebro-editor",
      format: "PDF",
    },
  ],
  gallery: [
    {
      src: "/p4.svg",
      alt: "Resume editor",
      caption:
        "Candidates tweak sections while AI suggestions surface beside the text.",
    },
    {
      src: "/grid.svg",
      alt: "Pipeline dashboard",
      caption:
        "Ops teams monitor ingestion health and LLM throughput in real time.",
    },
    {
      src: "/bg.png",
      alt: "Schema diff",
      caption: "Validation errors highlight mismatched fields before export.",
    },
  ],
};
