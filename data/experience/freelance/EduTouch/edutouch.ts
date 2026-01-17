import type { ExperienceCaseStudy } from "../../types";
import { eduTouchImages } from "./edutouch-images";

export const eduTouchExperience: ExperienceCaseStudy = {
  id: 3,
  slug: "edutouch-learning-platform",
  role: "Full Stack Developer - Freelancer",
  company: "EduTouch",
  location: "Remote • Kolkata, IN",
  timeframe: "Dec 2024 – Feb 2025",
  excerpt:
    "Scaled EduTouch's exam-readiness platform end-to-end—marketing funnel, learning console, secure admin suite, and download-ready study assets—so 18K learners stay guided without ops bottlenecks.",
  summary:
    "Partnered with academics, CX, and engineering to stand up the App Router stack, automate content workflows, and ship analytics surfaces that keep every cohort measurable and compliant.",
  card: {
    thumbnail: eduTouchImages.thumbnail,
  },
  hero: {
    headline:
      "Unified EduTouch's classroom, marketing, and admin layers on a single Next.js 15 platform",
    heroImage: eduTouchImages.hero,
    badges: ["Next.js 15 App Router", "MongoDB + Mongoose", "Cloudinary"],
    stats: [
      { label: "Active learners", value: "18K", helper: "3 regions" },
      { label: "Content assets automated", value: "1.4K+/mo" },
      { label: "Admin uptime", value: "99.96%" },
    ],
  },
  focusAreas: [
    {
      title: "Unified experience layers",
      description:
        "Connected the global shell, hero funnel, downloads CTA, notices, and standalone routes so home, marketing, and protected admin paths feel consistent and share copy decks.",
      icon: "📚",
      tags: ["LMS", "Experience"],
    },
    {
      title: "Workflow automation",
      description:
        "Reinforced teacher/admin flows with hooks for notices, courses, exams, GK/CA drops, and hero posters so publishing, grading, and downloads travel through audited server routes.",
      icon: "⚙️",
      tags: ["Server actions", "Automation"],
    },
    {
      title: "Data governance & insights",
      description:
        "Modeled Mongo collections, surfaced analytics dashboards, and backed them with CSV/API exports so academic ops can trust every compliance packet.",
      icon: "📊",
      tags: ["Analytics", "Data"],
    },
  ],
  responsibilities: [
    {
      title: "Product & delivery",
      description:
        "Ran discovery through launch for every module, keeping RFCs, feature flags, and adoption reviews tight with academic ops.",
      bullets: [
        "Facilitated roadmap reviews covering hero carousel, notices, exams, and admin flows",
        "Instrumented release health with request logging + UX telemetry",
        "Closed launches with postmortems and adoption scorecards",
      ],
    },
    {
      title: "Architecture & platform ops",
      description:
        "Owned the App Router architecture, Mongo schemas, JWT middleware, and Cloudinary lifecycle so auth, storage, and downloads stay reliable.",
      bullets: [
        "Hardened JWT middleware and Cloudinary upload/delete helpers",
        "Optimized Mongo queries + indexes for hooks powering courses/exams",
        "Maintained environment matrices + incident playbooks",
      ],
    },
    {
      title: "Stakeholder enablement",
      description:
        "Equipped instructors, CX, and support with self-serve tooling, structured documentation, and Loom walkthroughs across every launch.",
      bullets: [
        "Published update guides for hero posters, notices, and YouTube drops",
        "Maintained shared backlog + intake for CX + curriculum teams",
        "Hosted quarterly retros with partner schools and ops leads",
      ],
    },
  ],
  achievements: [
    {
      title: "Activation",
      value: "82% week-one",
      description:
        "Instructor enablement kits + notice automation kept most classrooms live within seven days.",
    },
    {
      title: "Support deflection",
      value: "-45% tickets",
      description:
        "Server-routed content updates plus WhatsApp-triggered FAQs cut duplicate CX requests.",
    },
    {
      title: "Reporting accuracy",
      value: "99.3%",
      description:
        "Centralized analytics and CSV/API exports replaced spreadsheet stitching for compliance.",
    },
  ],
  milestones: [
    {
      title: "Kickoff + architecture spike",
      period: "Dec 2024",
      description:
        "Audited the legacy stack, finalized App Router architecture, and migrated Mongo models + Cloudinary contracts.",
      highlight: true,
    },
    {
      title: "Marketing + downloads relaunch",
      period: "Jan 2025",
      description:
        "Rebuilt the hero carousel, notice wall, downloads CTA, and `/api/*/download` handlers with telemetry + automation hooks.",
    },
    {
      title: "Admin console + automation",
      period: "Jan 2025",
      description:
        "Shipped CRUD panels for courses, exams, GK/CA drops, and hero posters backed by EmailJS + server actions.",
    },
    {
      title: "Analytics + launch readiness",
      period: "Feb 2025",
      description:
        "Delivered insights dashboards, CSV/API exports, and playbooks for regional go-live + CX enablement.",
    },
  ],
  documentation: [
    {
      title: "Architecture & tech stack overview",
      description:
        "Summarizes App Router composition, Mongo models, and Cloudinary contracts for auditors.",
      href: "https://docs.example.com/edutouch-tech",
      format: "Notion",
    },
    {
      title: "Experience layers handbook",
      description:
        "Explains global shell, home funnel, standalone routes, and comms widgets for marketing + CX.",
      href: "https://docs.example.com/edutouch-experience",
      format: "PDF",
    },
    {
      title: "Operational runbook",
      description:
        "Environment matrices, `/api/*` dependencies, and downtime comms flows for ops + CX.",
      href: "https://docs.example.com/edutouch-ops",
      format: "Docs",
    },
  ],
  links: [
    {
      label: "EduTouch platform",
      href: "https://www.edutouchinstitute.com/",
      description: "Marketing funnel, LMS surfaces, and admin entry points.",
    },
  ],
  gallery: eduTouchImages.gallery,
};
