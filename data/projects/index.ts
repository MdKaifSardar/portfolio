import type { ProjectCaseStudy } from "./types";
import { projectSummaries } from "./summaries";

type ProjectLoader = () => Promise<ProjectCaseStudy>;

const projectLoaders: Record<string, ProjectLoader> = {
  "hashtrust-identity-platform": async () =>
    (await import("./hashtrust")).hashtrustProject,
  "shoemania-commerce-suite": async () =>
    (await import("./shoemania")).shoeManiaProject,
  "resumebro-ai-resumes": async () =>
    (await import("./resumebro")).resumeBroProject,
};

export { projectSummaries };

export const getProjectBySlug = async (slug: string) => {
  const loader = projectLoaders[slug];
  return loader ? loader() : undefined;
};

export const getProjectPaths = () =>
  projectSummaries.map((project) => ({ slug: project.slug }));
