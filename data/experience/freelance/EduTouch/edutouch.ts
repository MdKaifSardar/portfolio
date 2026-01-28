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
    "Built and scaled EduTouch’s exam-prep platform, serving 3K+ learners on a unified system.",
  summary:
    "Built and scaled EduTouch’s exam-prep platform, serving 3K+ learners on a unified system.",
  card: {
    thumbnail: eduTouchImages.thumbnail,
  },
  hero: {
    headline: "LMS platfrom for EduTouch coaching institution.",
    heroImage: eduTouchImages.hero,
    badges: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "API Routes",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
    ],
    stats: [
      { label: "Active learners", value: "3K", helper: "2 regions" },
      { label: "Content assets automated", value: "1.4K+/mo" },
      { label: "Admin uptime", value: "99.96%" },
    ],
  },
  focusAreas: [
    {
      title: "Scalable LMS Architecture",
      description:
        "Engineered a comprehensive learning platform handling exams, enrollments, and media-rich modules for General Knowledge/Current Affairs, supporting high-concurrency usage.",
      icon: "🏗️",
      tags: ["System Design", "Scalability"],
    },
    {
      title: "Secure Admin Suite",
      description:
        "Developed a role-based dashboard with robust authentication, giving faculty and admins granular control over content, user management, and operational CRUD workflows.",
      icon: "🛡️",
      tags: ["Auth", "Dashboard"],
    },
    {
      title: "Cloud Native Asset Management",
      description:
        "Migrated media storage to Cloudinary, implementing optimized fetch patterns that reduced page load latency by ~40% and cut API overhead by ~25%.",
      icon: "☁️",
      tags: ["Performance", "Cloudinary"],
    },
  ],
  responsibilities: [
    {
      title: "Full-Stack Development",
      description:
        "Led the end-to-end build of the platform using Next.js, managing both the student-facing LMS and the internal admin console.",
      bullets: [
        "Architected the database schema for courses, exams, and user progress",
        "Implemented secure exam taking interfaces with anti-cheat measures",
        "Built responsive, accessible UI components for diverse learner demographics",
      ],
    },
    {
      title: "Platform Security & Ops",
      description:
        "Ensured data integrity and restricted access through custom middleware and secure API routes.",
      bullets: [
        "Implemented role-based access control (RBAC) for admins and sub-admins",
        "Secured API endpoints against unauthorized access and payload injection",
        "Automated backups and health checks for critical exam services",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Refined the data layer and asset delivery network to ensure smooth performance even on low-bandwidth connections.",
      bullets: [
        "Optimized database queries and implemented server-side caching",
        "Integrated Cloudinary for auto-format and auto-quality image delivery",
        "Reduced bundle size through dynamic imports and code splitting",
      ],
    },
  ],
  achievements: [
    {
      title: "Performance gain",
      value: "40% faster",
      description:
        "Migration to Cloudinary and optimized fetch patterns significantly improved load times.",
    },
    {
      title: "API efficiency",
      value: "-25% overhead",
      description:
        "Refactored data fetching and caching strategies reduced server load and API calls.",
    },
    {
      title: "User stability",
      value: "3K+ learners",
      description:
        "Platform successfully supports a growing active user base with consistent uptime.",
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
    // {
    //   title: "Architecture & tech stack overview",
    //   description:
    //     "Summarizes App Router composition, Mongo models, and Cloudinary contracts for auditors.",
    //   href: "https://docs.example.com/edutouch-tech",
    //   format: "Notion",
    // },
    // {
    //   title: "Experience layers handbook",
    //   description:
    //     "Explains global shell, home funnel, standalone routes, and comms widgets for marketing + CX.",
    //   href: "https://docs.example.com/edutouch-experience",
    //   format: "PDF",
    // },
    // {
    //   title: "Operational runbook",
    //   description:
    //     "Environment matrices, `/api/*` dependencies, and downtime comms flows for ops + CX.",
    //   href: "https://docs.example.com/edutouch-ops",
    //   format: "Docs",
    // },
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
