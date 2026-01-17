import type { ExperienceGalleryItem } from "../../types";

interface ExperienceImageManifest {
  thumbnail: string;
  hero: string;
  sections: Record<string, ExperienceGalleryItem>;
  gallery: ExperienceGalleryItem[];
}

const makeUserImage = (number: number): ExperienceGalleryItem => ({
  src: `/experience/freelance/EduTouch/image ${number}.PNG`,
  alt: `EduTouch user platform image ${number}`,
  caption: "User platform image",
});

const makeAdminImage = (number: number): ExperienceGalleryItem => ({
  src: `/experience/freelance/EduTouch/image 1-${number}.PNG`,
  alt: `EduTouch admin platform image ${number}`,
  caption: "Admin platform image",
});

const userImages: ExperienceGalleryItem[] = Array.from(
  { length: 18 },
  (_, idx) => makeUserImage(idx + 1),
);

const adminImages: ExperienceGalleryItem[] = Array.from(
  { length: 8 },
  (_, idx) => makeAdminImage(idx + 1),
);

const eduTouchGallery: ExperienceGalleryItem[] = [
  ...userImages,
  ...adminImages,
];

export const eduTouchImages: ExperienceImageManifest = {
  thumbnail: userImages[0].src,
  hero: userImages[0].src,
  sections: {
    onboarding: userImages[0],
    classroomConsole: userImages[3],
    mobileLearner: userImages[6],
    adminInsights: adminImages[0],
  },
  gallery: eduTouchGallery,
};
