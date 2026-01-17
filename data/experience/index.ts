import type { ExperienceCaseStudy } from "./types";
import { experienceSummaries } from "./summaries";

type ExperienceLoader = () => Promise<ExperienceCaseStudy>;

const experienceLoaders: Record<string, ExperienceLoader> = {
  "frontend-engineer-intern": async () =>
    (await import("./frontend-intern")).frontendInternExperience,
  "mobile-app-dev-jsm-tech": async () =>
    (await import("./mobile-jsm")).mobileJsmExperience,
};

export { experienceSummaries };

export const getExperienceBySlug = async (slug: string) => {
  const loader = experienceLoaders[slug];
  return loader ? loader() : undefined;
};

export const getExperiencePaths = () =>
  experienceSummaries.map((experience) => ({ slug: experience.slug }));
