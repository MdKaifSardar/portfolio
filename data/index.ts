import { projectSummaries } from "./projects";
import { experienceSummaries } from "./experience";
import { achievementHighlights, certificationHighlights } from "./achievements";

export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/#projects" },
  { name: "Experience", link: "/#experience" },
  { name: "Contact", link: "/#contact" },
];

export const navSocialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/MdKaifSardar/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-kaif-sardar-12aab4290/",
  },
];

export const aboutSections = [
  {
    id: "impact",
    title: "Core strengths",
    description:
      "Performance-first Next.js builds for trading, learning, and analytics.",
    items: [
      {
        id: 1,
        title: "Fast product surfaces",
        description:
          "Dashboards and trading UIs stay sub-second, even with real-time data.",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
      },
      {
        id: 2,
        title: "Secure REST APIs",
        description:
          "OpenAPI specs, RBAC, and Azure secrets keep every endpoint auditable.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
      },
      {
        id: 3,
        title: "Eager to Learn and Adapt",
        // description: "Eager to Learn and Adapt",
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
    title: "Delivery rituals",
    description: "Guardrails that keep every release reliable.",
    items: [
      {
        id: 4,
        title: "Cloud-aware delivery",
        description:
          "Deploy on Vercel + Azure with telemetry, error budgets, and rollback playbooks.",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
      },
      {
        id: 5,
        title: "Production ready code",
        description: "Type-safe, tested, and peer-reviewed codebases",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
      },
      {
        id: 6,
        title: "Student builder",
        // description: "Focusing on learning and growth, one project at a time.",
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
