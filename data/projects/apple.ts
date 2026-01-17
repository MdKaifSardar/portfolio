import { ProjectCaseStudy } from "./types";

export const appleExperienceProject: ProjectCaseStudy = {
  id: 4,
  slug: "apple-3d-experience",
  title: "Animated iPhone 3D Experience",
  client: "Internal Concept",
  excerpt:
    "A cinematic marketing site that mirrors Apple’s iPhone 15 Pro reveal with scroll-driven storytelling and GSAP timelines.",
  description:
    "Crafted a high-polish microsite featuring ray-traced device renders, dynamic lighting, and magnet interactions that echo the official launch while remaining performant on mid-tier hardware.",
  category: "Marketing Experience",
  card: {
    coverImage: "/p4.svg",
    iconList: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
  hero: {
    tagline: "Cinematic storytelling for hardware launches",
    summary:
      "We rebuilt the full hero stack — hero film, accessories, and performance callouts — with bespoke GSAP timelines and progressive loading to keep the experience buttery smooth.",
    heroImage: "/p4.svg",
    badges: ["GSAP", "Three.js", "Motion art"],
    stats: [
      { label: "FPS on M2", value: "120" },
      { label: "Time to interaction", value: "1.1s" },
      { label: "Assets optimized", value: "78" },
    ],
    links: [
      {
        label: "Preview concept",
        href: "https://iphone-3d-demo.example.com",
        type: "primary",
        isExternal: true,
      },
      {
        label: "Motion breakdown",
        href: "https://motion.study/apple-concept",
        type: "secondary",
        isExternal: true,
      },
    ],
  },
  features: [
    {
      title: "Scroll orchestration",
      description:
        "Layered GSAP timelines respond to scroll depth, letting copy, renders, and UI chrome dance in sync.",
      icon: "🌀",
      tags: ["GSAP", "Scroll"],
    },
    {
      title: "Device configurator",
      description:
        "Live material and finish swapping with HDR environment lights.",
      icon: "📱",
      tags: ["Three.js", "Materials"],
    },
    {
      title: "Launch narrative",
      description:
        "Story chapters for durability, camera stack, and silicon tuned for bold typography + audio cues.",
      icon: "🎬",
      tags: ["Story", "Audio"],
    },
  ],
  services: [
    {
      title: "Creative direction",
      description:
        "Mood boards, type pairings, and lighting studies to capture the Apple polish without the constraints.",
      deliverables: ["Lookbook", "Motion refs", "Copy blocks"],
    },
    {
      title: "Motion engineering",
      description:
        "Custom GSAP controllers, scroll triggers, and GPU-friendly post-processing.",
      deliverables: ["Timeline map", "Interaction specs", "QA checklist"],
    },
    {
      title: "Performance tuning",
      description:
        "Asset baking, code-splitting, and runtime diagnostics to hit 60fps on mid-tier laptops.",
      deliverables: ["Budget", "Lighthouse reports", "Monitoring dashboards"],
    },
  ],
  achievements: [
    {
      title: "Scroll depth",
      value: "92%",
      description:
        "Visitors reach the final CTA thanks to progressive reveal cues.",
    },
    {
      title: "Render weight",
      value: "-41%",
      description: "Reduced bundle size despite richer motion.",
    },
    {
      title: "Press pickups",
      value: "18",
      description: "Concept featured across motion design blogs.",
    },
  ],
  milestones: [
    {
      title: "Mood film",
      period: "May 2024",
      description: "Motion exploration + soundtrack sync.",
      highlight: true,
    },
    {
      title: "Interactive prototype",
      period: "Jun 2024",
      description: "Scroll-driven hero + device configurator online.",
    },
    {
      title: "Polish sprint",
      period: "Jul 2024",
      description: "Micro-interactions, copy pass, and a11y overlays.",
    },
    {
      title: "Launch week",
      period: "Aug 2024",
      description: "Press kit, teaser clips, and final deployment.",
    },
  ],
  documentation: [
    {
      title: "Timeline blueprint",
      description: "All GSAP scenes, triggers, and playback dependencies.",
      href: "https://motion.study/apple-blueprint",
      format: "FigJam",
    },
    {
      title: "Device pipeline",
      description:
        "How we baked USDZ assets into performant web-ready glTF files.",
      href: "https://motion.study/apple-pipeline",
      format: "Notion",
    },
    {
      title: "QA & perf rituals",
      description:
        "Checklist covering browsers, devices, and frame budget alerts.",
      href: "https://motion.study/apple-qa",
      format: "Google Doc",
    },
  ],
  gallery: [
    {
      src: "/p4.svg",
      alt: "Hero render",
      caption: "Primary hero render with titanium finish + soft caustics.",
    },
    {
      src: "/grid.svg",
      alt: "Configurator UI",
      caption: "Configurator chips snap between finishes with tactile haptics.",
    },
    {
      src: "/bg.png",
      alt: "Camera storytelling",
      caption: "Camera stack chapter overlays exploded views with live stats.",
    },
  ],
};
