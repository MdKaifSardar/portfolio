import { ProjectImageAsset, ProjectImageManifest } from "../types";

const buildUserImage = (number: number): ProjectImageAsset => ({
  src: `/projects/web-dev/jeonft/image ${number}.PNG`,
  alt: `JEONFT user platform image ${number}`,
  usage: "User platform capture",
  caption: "User platform image",
});

const buildAdminImage = (number: number): ProjectImageAsset => ({
  src: `/projects/web-dev/jeonft/image 1-${number}.PNG`,
  alt: `JEONFT admin platform image ${number}`,
  usage: "Admin platform capture",
  caption: "Admin platform image",
});

const userPlatformImages: ProjectImageAsset[] = Array.from(
  { length: 15 },
  (_, idx) => buildUserImage(idx + 1),
);

const adminPlatformImages: ProjectImageAsset[] = Array.from(
  { length: 7 },
  (_, idx) => buildAdminImage(idx + 1),
);

const jeonftGallery: ProjectImageAsset[] = [
  ...userPlatformImages,
  ...adminPlatformImages,
];

export const jeonftImages: ProjectImageManifest = {
  cover: {
    src: userPlatformImages[0].src,
    alt: userPlatformImages[0].alt,
    usage: "Portfolio card and hero preview art.",
  },
  hero: {
    src: userPlatformImages[0].src,
    alt: userPlatformImages[0].alt,
    usage: "Primary hero illustration on the project detail page.",
  },
  sections: {
    heroLanding: userPlatformImages[0],
    walletConsole: userPlatformImages[1],
    rewardsView: userPlatformImages[2],
    adminOverview: adminPlatformImages[0],
    adminWallets: adminPlatformImages[1],
  },
  gallery: jeonftGallery,
};
