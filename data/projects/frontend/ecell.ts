import { ProjectCaseStudy } from "../types";
import { ecellImages } from "./ecell-images";

export const ecellProject: ProjectCaseStudy = {
  id: 6,
  slug: "ecell-kgec-site",
  title: "E-Cell KGEC Website",
  client: "Entrepreneurship Cell • KGEC",
  excerpt:
    "Brand homepage for KGEC's Entrepreneurship Cell, built under KGEC Dev Community with motion-rich UI, responsive layouts, and student-tested UX.",
  description:
    "As the frontend and UI/UX engineer for KGEC Dev Community, I owned the design system, motion language, and responsive frontend for the official E-Cell site— translating briefings into animated surfaces, accessible flows, and stakeholder-ready documentation.",
  category: "Frontend Experience",
  card: {
    coverImage: ecellImages.cover.src,
    iconList: ["/next.svg", "/tail.svg", "/fm.svg", "/re.svg"],
  },
  hero: {
    tagline: "Entrepreneurial energy online",
    summary:
      "Next.js 14, TailwindCSS, and Framer Motion power an animated preloader, custom navbar, and scroll-reactive gallery that mirror the KGEC E-Cell vibe while staying performant and accessible.",
    heroImage: ecellImages.hero.src,
    badges: ["Next.js 14", "TailwindCSS", "Framer Motion", "A11y"],
    stats: [
      { label: "Timeline", value: "Nov–Dec 2024" },
      { label: "Screens & states", value: "26" },
      { label: "Feedback loops", value: "4 review cycles" },
    ],
    links: [
      {
        label: "Live site",
        href: "https://e-cell-web.vercel.app/",
        type: "primary",
        isExternal: true,
      },
      // {
      //   label: "Prototype",
      //   href: "https://e-cell-web.vercel.app/",
      //   type: "secondary",
      //   isExternal: true,
      // },
    ],
  },
  features: [
    {
      title: "Animated surface system",
      description:
        "Crafted an animated preloader, custom navbar, and section reveals with Framer Motion + Lenis for smooth entry states that match the club's energy.",
      icon: "⚡",
      tags: ["Framer Motion", "Micro-interactions"],
    },
    {
      title: "Scroll-reactive gallery",
      description:
        "Built a gallery and event lineup that animate on scroll, staggering cards, badges, and CTA pins to keep the story immersive.",
      icon: "🌀",
      tags: ["Scroll", "Gallery"],
    },
    {
      title: "Feedback-led UX",
      description:
        "Ran weekly student reviews, refining hierarchy, color contrast, and copy until usability scores hit the target.",
      icon: "🧪",
      tags: ["UX", "Research"],
    },
    {
      title: "Event storytelling",
      description:
        "Designed modular event pages with animated headers, timeline slots, and sponsor callouts, ready for future CMS content.",
      icon: "📅",
      tags: ["Events", "Layout"],
    },
  ],
  services: [
    {
      title: "UI/UX design",
      description:
        "Led discovery with E-Cell leadership, translated goals into user journeys, wireframes, and final UI tied to the KGEC palette.",
      deliverables: ["Journey maps", "Hi-fi mockups", "Component spec"],
    },
    {
      title: "Frontend build",
      description:
        "Implemented the Next.js app with shared layout primitives, animated sections, and performance budgets.",
      deliverables: ["Responsive grid", "Animation utilities", "Perf checks"],
    },
    {
      title: "Iteration & QA",
      description:
        "Facilitated student testing, triaged issues, and documented the motion + content guidelines for future contributors.",
      deliverables: [
        "Usability reports",
        "Accessibility fixes",
        "Handoff docs",
      ],
    },
  ],
  achievements: [
    {
      title: "Stakeholder approval",
      value: "1st review",
      description:
        "Leadership signed off after the first design review thanks to aligned visuals and motion prototypes.",
    },
    {
      title: "Performance",
      value: "LCP 1.7s",
      description:
        "Optimized media, preloading, and code-splitting keep interactions smooth even on campus Wi-Fi.",
    },
    {
      title: "Launch impact",
      value: "+38% sign-ups",
      description:
        "Post-launch analytics showed a lift in event registrations across the first two weeks.",
    },
  ],
  milestones: [
    {
      title: "Kickoff & research",
      period: "Week 1 · Nov 2024",
      description:
        "Met KGEC E-Cell core + Dev Community mentors, gathered goals, and audited prior assets.",
      highlight: true,
    },
    {
      title: "Experience architecture",
      period: "Week 2 · Nov 2024",
      description:
        "Drafted IA, user journeys, and low-fi flows for hero, events, gallery, and partner sections.",
    },
    {
      title: "Motion prototyping",
      period: "Week 3 · Nov 2024",
      description:
        "Built Framer Motion prototypes covering preloader, navbar, and scroll-triggered cards.",
    },
    {
      title: "Build & QA",
      period: "Weeks 1-2 · Dec 2024",
      description:
        "Implemented Next.js pages, integrated animations, and ran accessibility + performance sweeps.",
    },
    {
      title: "Feedback & launch",
      period: "Week 3 · Dec 2024",
      description:
        "Incorporated student feedback, polished content, and deployed the production build.",
    },
  ],
  documentation: [],
  gallery: (ecellImages.gallery ?? []).map(({ src, alt, caption }) => ({
    src,
    alt,
    caption: caption ?? "",
  })),
};
