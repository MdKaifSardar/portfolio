import type { ExperienceGalleryItem } from "../../types";

interface ExperienceImageManifest {
  thumbnail: string;
  hero: string;
  sections: Record<string, ExperienceGalleryItem>;
  gallery: ExperienceGalleryItem[];
}

const makeUserImage = (number: number): ExperienceGalleryItem => ({
  src: `/experience/freelance/Stitch-my-clothes/image ${number}.PNG`,
  alt: `Clouth customer experience image ${number}`,
  caption: "Clouth customer experience",
});

const makeAdminImage = (number: number): ExperienceGalleryItem => ({
  src: `/experience/freelance/Stitch-my-clothes/image 1-${number}.PNG`,
  alt: `Clouth operations console image ${number}`,
  caption: "Clouth operations console",
});

const userImages: ExperienceGalleryItem[] = Array.from(
  { length: 11 },
  (_, idx) => makeUserImage(idx + 1),
);

const adminImages: ExperienceGalleryItem[] = Array.from(
  { length: 11 },
  (_, idx) => makeAdminImage(idx + 1),
);

const stitchGallery: ExperienceGalleryItem[] = [...userImages, ...adminImages];

export const stitchMyClothesImages: ExperienceImageManifest = {
  thumbnail: userImages[0].src,
  hero: userImages[0].src,
  sections: {
    onboarding: userImages[0],
    customizationFlow: userImages[2],
    orderTracking: userImages[5],
    adminFulfillment: adminImages[0],
    adminCatalog: adminImages[3],
  },
  gallery: stitchGallery,
};
