import type { ExperienceCaseStudy } from "./types";
import { experienceSummaries } from "./summaries";

type ExperienceLoader = () => Promise<ExperienceCaseStudy>;

const experienceLoaders: Record<string, ExperienceLoader> = {
  "edutouch-learning-platform": async () =>
    (await import("./freelance/EduTouch/edutouch")).eduTouchExperience,
  "stitch-my-clothes-platform": async () =>
    (await import("./freelance/stitch-my-clothes/stitch"))
      .stitchMyClothesExperience,
};

export { experienceSummaries };

export const getExperienceBySlug = async (slug: string) => {
  const loader = experienceLoaders[slug];
  return loader ? loader() : undefined;
};

export const getExperiencePaths = () =>
  experienceSummaries.map((experience) => ({ slug: experience.slug }));
