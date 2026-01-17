import { ProjectCaseStudy } from "../types";
import { bhorImages } from "./bhor-images";

export const bhorProject: ProjectCaseStudy = {
  id: 5,
  slug: "bhor-magazine-site",
  title: "Bhor Magazine Website",
  client: "KGEC Literary Society",
  excerpt:
    "Immersive dawn-themed microsite for Bhor, KGEC's official magazine—parallax hero and animated archive carousel built for performance.",
  description:
    "Designed and engineered the two-section experience end-to-end: a parallax hero illustrating the campus sunrise and a firefly-lit carousel that showcases every past issue. Balanced expressive motion with strict performance budgets so readers on any device get a smooth, on-brand walkthrough.",
  category: "Frontend Experience",
  card: {
    coverImage: bhorImages.cover.src,
    iconList: ["/next.svg", "/tail.svg", "/fm.svg", "/re.svg"],
  },
  hero: {
    tagline: "Dawn over KGEC",
    summary:
      "Custom parallax hero animates clouds clearing, the KGEC building rising, and the sun emerging—crafted in Next.js, Tailwind, and Framer Motion with mobile-first performance tuning.",
    heroImage: bhorImages.hero.src,
    badges: ["Next.js 14", "TailwindCSS", "Framer Motion", "Parallax"],
    stats: [
      { label: "Timeline", value: "Nov 2024 – Jan 2025" },
      { label: "Key animations", value: "7 hero states" },
      { label: "Magazine issues", value: "18 showcased" },
    ],
    links: [
      {
        label: "Explore site",
        href: "https://example.com/bhor",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Design file",
        href: "https://figma.com/file/bhor",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Parallax dawn hero",
      description:
        "Layered illustrations of the KGEC building, clouds, and sunrise animate on scroll to match the Bhor theme without sacrificing FPS.",
      icon: "🌅",
      tags: ["Parallax", "Hero"],
    },
    {
      title: "Firefly issue carousel",
      description:
        "Custom-built carousel displays every magazine with floating fireflies, forest gradients, and keyboard/drag support.",
      icon: "🪄",
      tags: ["Carousel", "Accessibility"],
    },
    {
      title: "Performance-first motion",
      description:
        "Lazy-loaded assets, reduced-motion fallbacks, and GPU-friendly transforms keep the experience crisp on low-end devices.",
      icon: "⚙️",
      tags: ["Performance", "Motion"],
    },
  ],
  services: [
    {
      title: "Concept & visual design",
      description:
        "Sketched sunrise-themed storyboards, established the palette, and produced responsive comps for both sections.",
      deliverables: ["Storyboards", "UI kit", "Hi-fi mockups"],
    },
    {
      title: "Frontend engineering",
      description:
        "Implemented the hero and archive sections in Next.js with Tailwind primitives, parallax hooks, and intersection observers.",
      deliverables: ["Hero component", "Carousel system", "Testing"],
    },
    {
      title: "Motion & optimization",
      description:
        "Directed every animation, added firefly particle layers, and tuned for CLS/LCP + reduced-motion support.",
      deliverables: ["Motion tokens", "Perf budget", "QA checklist"],
    },
  ],
  achievements: [
    {
      title: "Stakeholder delight",
      value: "<2 review cycles",
      description:
        "Editorial board approved the experience after the second walkthrough thanks to accurate theming.",
    },
    {
      title: "Engagement",
      value: "+52% read time",
      description:
        "Analytics showed visitors spent longer exploring past issues once the carousel shipped.",
    },
    {
      title: "Performance",
      value: "Lighthouse 96",
      description:
        "Maintained 96+ Lighthouse despite parallax layers through lazy loading and compressed art.",
    },
  ],
  milestones: [
    {
      title: "Research & sketches",
      period: "Week 1 · Nov 2024",
      description:
        "Captured Bhor's dawn narrative and storyboarded the hero animation.",
      highlight: true,
    },
    {
      title: "Visual system",
      period: "Weeks 2-3 · Nov 2024",
      description:
        "Produced style frames, cloud/college illustrations, and responsive layouts.",
    },
    {
      title: "Hero engineering",
      period: "Dec 2024",
      description:
        "Implemented parallax scroll, performance budgets, and reduced-motion paths.",
    },
    {
      title: "Carousel build",
      period: "Late Dec 2024",
      description:
        "Developed firefly animations, issue cards, and keyboard/drag interactions.",
    },
    {
      title: "Polish & launch",
      period: "Jan 2025",
      description:
        "QA across devices, tuned imagery, and deployed final build.",
    },
  ],
  documentation: [],
  gallery: (bhorImages.gallery ?? []).map(({ src, alt, caption }) => ({
    src,
    alt,
    caption: caption ?? "",
  })),
};
