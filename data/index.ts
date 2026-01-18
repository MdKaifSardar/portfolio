import { projectSummaries } from "./projects";
import { experienceSummaries } from "./experience";
import { achievementHighlights, certificationHighlights } from "./achievements";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const navSocialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/mkaifsard",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-kaif-sardar",
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/mkaifcodes",
  },
];

export const aboutSections = [
  {
    id: "impact",
    title: "Core strengths",
    description:
      "Next.js + TypeScript builds tuned for analytical dashboards, trading surfaces, and learning platforms.",
    items: [
      {
        id: 1,
        title: "High-performance product surfaces",
        description:
          "Design streaming UIs, optimistic states, and accessibility-first layouts so experiences stay fast on any device.",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
      },
      {
        id: 2,
        title: "Secure REST + data APIs",
        description:
          "OpenAPI-first services with RBAC, telemetry, and Azure-hosted secrets keep trading and ops data trustworthy.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
      },
      {
        id: 3,
        title: "Measured improvements",
        description:
          "Recent launches shipped with 30% faster load times and 25% lower API latency through profiling, caching, and edge rendering.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
      },
    ],
  },
  {
    id: "practice",
    title: "Systems & habits",
    description:
      "Playbooks, telemetry, and enablement assets that keep releases reliable long after hand-off.",
    items: [
      {
        id: 4,
        title: "Cloud-aware delivery",
        description:
          "Ship workloads on Azure, Vercel, and SWA with Sentry budgets, Grafana-style dashboards, and rollback scripts ready.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
      },
      {
        id: 5,
        title: "Collaboration rituals",
        description:
          "Async updates, concise RFCs, and Loom walkthroughs keep design, product, and trading ops aligned without waiting.",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
      },
      {
        id: 6,
        title: "Always-learning builder",
        description:
          "B.Tech CSE (KGEC, 2023-27) with a focus on secure API design, distributed systems, and real-time analytics research.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
      },
    ],
  },
];

export const gridItems = aboutSections.flatMap((section) =>
  section.items.map((item) => ({ ...item, sectionId: section.id })),
);

export const projectCategories = [
  {
    id: "full-stack",
    label: "Full-stack web builds",
    description:
      "Transactional platforms, dashboards, and enterprise-ready surfaces.",
  },
  {
    id: "frontend",
    label: "Frontend showcases",
    description:
      "Brand-forward experiences with motion systems, editorial polish, and device-perfect layouts.",
  },
  {
    id: "ai-ml",
    label: "AI / ML initiatives",
    description:
      "Applied intelligence workflows, copilots, and data storytelling.",
  },
  {
    id: "mobile",
    label: "Mobile app development",
    description: "Cross-platform product work with native-like motion.",
  },
  {
    id: "side",
    label: "Side explorations",
    description: "Experimental canvases and visual labs for new ideas.",
  },
];

export const projects = projectSummaries;

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = experienceSummaries;

export const achievements = achievementHighlights;
export const certifications = certificationHighlights;

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
