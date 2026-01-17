import { ProjectSummary } from "./types";

export const projectSummaries: ProjectSummary[] = [
  {
    id: 1,
    slug: "hashtrust-identity-platform",
    title: "HashTrust — Blockchain Identity",
    des: "FastAPI + blockchain rails that secure enterprise onboarding with multilayer verification, JWT auth, and fraud telemetry dashboards.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    displayCategory: "full-stack",
  },
  {
    id: 2,
    slug: "shoemania-commerce-suite",
    title: "ShoeMania — Commerce OS",
    des: "Full-stack ecommerce platform on Next.js, FastAPI, and MongoDB with secure payments, resilient order flows, and modular merch ops.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    displayCategory: "full-stack",
  },
  {
    id: 3,
    slug: "resumebro-ai-resumes",
    title: "ResumeBro — AI Resume Studio",
    des: "Next.js 14 + Firebase platform using React Server Actions and LLM pipelines to turn unstructured docs into validated, tailored resumes.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    displayCategory: "full-stack",
  },
];
