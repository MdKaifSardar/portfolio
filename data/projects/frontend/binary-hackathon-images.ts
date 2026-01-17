import { ProjectImageAsset, ProjectImageManifest } from "../types";

const galleryItems: ProjectImageAsset[] = [
  {
    src: "/projects/frontend/binary-hackathon/image 3.PNG",
    alt: "Secondary hero sequence",
    usage: "Secondary hero stack that extends the landing storyline.",
    caption:
      "Additional hero panels spotlight the retro grid, giving the landing flow a second cinematic beat.",
  },
  {
    src: "/projects/frontend/binary-hackathon/image 2.PNG",
    alt: "Mini-game showcase 01",
    usage:
      "First interactive mini-game preview showcased in the games section.",
    caption:
      "First arcade mini-game invites visitors to interact with the theme before scrolling further.",
  },
  {
    src: "/projects/frontend/binary-hackathon/image 6.PNG",
    alt: "Mini-game showcase 02",
    usage: "Second interactive mini-game card.",
    caption:
      "Second retro game panel reinforces the playful brand language with animated sprites.",
  },
  {
    src: "/projects/frontend/binary-hackathon/image 5.PNG",
    alt: "Event timeline",
    usage: "Timeline walkthrough inside the agenda section.",
    caption:
      "Timeline section lays out key milestones with neon connectors and hover states.",
  },
  {
    src: "/projects/frontend/binary-hackathon/image 4.PNG",
    alt: "About Binary Hackathon",
    usage: "About section artwork describing the mission.",
    caption:
      "About section pairs bold typography with CRT textures to describe the event's mission.",
  },
];

export const binaryHackathonImages: ProjectImageManifest = {
  cover: {
    src: "/projects/frontend/binary-hackathon/image 1.PNG",
    alt: "Binary Hackathon hero",
    usage: "Card cover + main hero background.",
  },
  hero: {
    src: "/projects/frontend/binary-hackathon/image 1.PNG",
    alt: "Binary Hackathon landing hero",
    usage: "Primary hero block with marquee typography.",
  },
  sections: {
    secondaryHero: galleryItems[0],
    miniGameOne: galleryItems[1],
    miniGameTwo: galleryItems[2],
    timeline: galleryItems[3],
    about: galleryItems[4],
  },
  gallery: galleryItems,
};
