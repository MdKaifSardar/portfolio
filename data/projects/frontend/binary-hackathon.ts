import { ProjectCaseStudy } from "../types";
import { binaryHackathonImages } from "./binary-hackathon-images";

export const binaryHackathonProject: ProjectCaseStudy = {
  id: 4,
  slug: "binary-hackathon-website",
  title: "Binary Hackathon Frontend",
  client: "Dev Community KGEC",
  excerpt:
    "Lead the Dev Community KGEC frontend pod to ship Binary Hackathon's retro site with cinematic motion, crisp performance, and college pride.",
  description:
    "Binary is KGEC's flagship hackathon, and as frontend lead for Dev Community KGEC I directed a 10-person pod through design, build, and launch. I owned the retro art direction, codified the component library, and kept every animation performant on low-end student devices so registration never felt slow.",
  category: "Frontend Experience",
  card: {
    coverImage: binaryHackathonImages.cover.src,
    iconList: ["/next.svg", "/tail.svg", "/fm.svg", "/re.svg"],
  },
  hero: {
    tagline: "Retro pixels, Dev Community precision",
    summary:
      "React Server Components, Tailwind tokens, and tightly profiled Framer Motion sequences kept the arcade aesthetic intact while guaranteeing Binary's site loaded instantly for every student.",
    heroImage: binaryHackathonImages.hero.src,
    badges: ["Next.js", "TailwindCSS", "Framer Motion", "Design systems"],
    stats: [
      {
        label: "Design sprint",
        value: "Dec 1–10",
        helper: "Moodboards, motion prototypes, content IA",
      },
      {
        label: "Implementation",
        value: "Dec 11–30",
        helper: "Next.js app, CMS, mini-games",
      },
      {
        label: "Launch window",
        value: "Jan 16",
        helper: "Zero-downtime release",
      },
    ],
    links: [
      {
        label: "View live site",
        href: "https://binary-web-2k26.vercel.app/",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Design mood board",
        href: "https://binary-web-2k26.vercel.app/",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Arcade theming system",
      description:
        "Outlined typography, CRT textures, and pixel iconography packaged as tokens so the team could ship new sections quickly.",
      icon: "🕹️",
      tags: ["Design", "System"],
    },
    {
      title: "Animated hero stack",
      description:
        "Space-Invader inspired hero built with Framer Motion timelines, parallax layers, and reduced-motion fallbacks.",
      icon: "✨",
      tags: ["Motion", "Accessibility"],
    },
    {
      title: "Mobile-first grids",
      description:
        "Content grids collapse elegantly with CSS clamp + container queries so participants can browse on-site.",
      icon: "📱",
      tags: ["Responsive", "CSS"],
    },
  ],
  services: [
    {
      title: "Design direction",
      description:
        "Created mood boards, component spec sheets, and animation storyboards that drove the retro aesthetic.",
      deliverables: ["Figma kit", "Animation scripts", "Color system"],
    },
    {
      title: "Frontend engineering",
      description:
        "Implemented the full site in Next.js with shared layout primitives, MDX-powered content, and SSR-friendly motion.",
      deliverables: ["Component library", "Layout engine", "Motion presets"],
    },
    {
      title: "Performance & accessibility",
      description:
        "Instrumented Lighthouse budgets, prefers-reduced-motion support, and semantic navigation for screen readers.",
      deliverables: ["Perf budget", "Accessibility report", "Testing matrix"],
    },
  ],
  achievements: [
    {
      title: "Launch traffic",
      value: "500+ visits",
      description:
        "Peak day traffic held steady without throttling thanks to edge caching and optimized media.",
    },
    {
      title: "Performance budget",
      value: "LCP < 1.9s",
      description:
        "Strict bundle budgets, image compression, and motion fallbacks kept metrics green even on 3G.",
    },
    {
      title: "Team leadership",
      value: "Led 10 devs",
      description:
        "Directed Dev Community KGEC's frontend squad across design, build, QA, and launch sprints.",
    },
  ],
  milestones: [
    {
      title: "Design phase",
      period: "Dec 1–10",
      description:
        "Paired with the design guild to lock art direction, motion language, and content architecture.",
      highlight: true,
    },
    {
      title: "Implementation sprint",
      period: "Dec 11–30",
      description:
        "Shipped the Next.js experience, MDX-driven agenda, and interactive retro mini-games.",
    },
    {
      title: "Deployment runway",
      period: "Jan 1–5",
      description:
        "Containerized the app, configured analytics, and rehearsed blue/green cuts.",
    },
    {
      title: "Stabilization",
      period: "Jan 6–15",
      description:
        "Squashed accessibility bugs, hardened content tooling, and rehearsed the launch script.",
    },
    {
      title: "Launch",
      period: "Jan 16",
      description:
        "Opened registrations with the full retro experience and instant load times.",
    },
  ],
  documentation: [],
  gallery: (binaryHackathonImages.gallery ?? []).map(
    ({ src, alt, caption }) => ({
      src,
      alt,
      caption: caption ?? "",
    }),
  ),
};
