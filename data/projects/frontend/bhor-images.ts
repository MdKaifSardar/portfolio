import { ProjectImageAsset, ProjectImageManifest } from "../types";

const bhorSections: Record<string, ProjectImageAsset> = {
  hero: {
    src: "/projects/frontend/bhor/image 1.PNG",
    alt: "Bhor magazine hero",
    usage: "Hero spread combining typography, gradients, and featured issues.",
    caption: "Editorial hero features layered headlines and smooth reveals.",
  },
  currentAndPreviousMagazines: {
    src: "/projects/frontend/bhor/image 2.PNG",
    alt: "Current and previous magazine grid",
    usage: "Section showing the latest issue alongside archived editions.",
    caption:
      "Cards compare current and previous magazine issues with stacked layouts.",
  },
};

export const bhorImages: ProjectImageManifest = {
  cover: bhorSections.hero,
  hero: bhorSections.hero,
  sections: {
    currentAndPreviousMagazines: bhorSections.currentAndPreviousMagazines,
  },
  gallery: [bhorSections.hero, bhorSections.currentAndPreviousMagazines],
};
