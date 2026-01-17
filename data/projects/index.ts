import type { ProjectCaseStudy } from "./types";
import { projectSummaries } from "./summaries";

type ProjectLoader = () => Promise<ProjectCaseStudy>;

const projectLoaders: Record<string, ProjectLoader> = {
  "hashtrust-identity-platform": async () =>
    (await import("./full-stack/hashtrust")).hashtrustProject,
  "jeonft-user-platform": async () =>
    (await import("./full-stack/jeonft")).jeonftProject,
  "resumebro-ai-resumes": async () =>
    (await import("./full-stack/resumebro")).resumeBroProject,
  "binary-hackathon-website": async () =>
    (await import("./frontend/binary-hackathon")).binaryHackathonProject,
  "bhor-magazine-site": async () =>
    (await import("./frontend/bhor")).bhorProject,
  "ecell-kgec-site": async () =>
    (await import("./frontend/ecell")).ecellProject,
};

export { projectSummaries };

export const getProjectBySlug = async (slug: string) => {
  const loader = projectLoaders[slug];
  return loader ? loader() : undefined;
};

export const getProjectPaths = () =>
  projectSummaries.map((project) => ({ slug: project.slug }));
