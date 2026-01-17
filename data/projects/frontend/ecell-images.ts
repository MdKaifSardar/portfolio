import { ProjectImageAsset, ProjectImageManifest } from "../types";

const ecellSections: Record<string, ProjectImageAsset> = {
  hero: {
    src: "/projects/frontend/ecell/image 1.PNG",
    alt: "E-Cell hero",
    usage: "Hero gradient with animated typography and CTA cluster.",
    caption: "Gradient hero with animated typography and CTA cluster.",
  },
  eventsOverview: {
    src: "/projects/frontend/ecell/image 2.PNG",
    alt: "Events overview",
    usage: "Section highlighting events conducted under the E-Cell.",
    caption: "Cards animate upward revealing program details.",
  },
  summitPage: {
    src: "/projects/frontend/ecell/image 3.PNG",
    alt: "E-Summit page",
    usage: "Dedicated event page for the flagship E-Summit experience.",
    caption: "Summit agenda pairs testimonials with animated timelines.",
  },
  pastEvents: {
    src: "/projects/frontend/ecell/image 4.PNG",
    alt: "Past events timeline",
    usage: "Showcase of past events with scroll-linked timeline.",
    caption: "Scroll-linked timeline showcases sessions and mentors.",
  },
  gallery: {
    src: "/projects/frontend/ecell/image 5.PNG",
    alt: "Gallery section",
    usage: "Photo gallery capturing event energy.",
    caption: "Gallery tiles blend gradients with event photography.",
  },
  footer: {
    src: "/projects/frontend/ecell/image 6.PNG",
    alt: "Footer montage",
    usage: "Footer artwork reinforcing brand gradients and CTA.",
    caption: "Footer marries CTA, contact info, and brand gradients.",
  },
};

export const ecellImages: ProjectImageManifest = {
  cover: ecellSections.hero,
  hero: ecellSections.hero,
  sections: {
    eventsOverview: ecellSections.eventsOverview,
    summitPage: ecellSections.summitPage,
    pastEvents: ecellSections.pastEvents,
    gallery: ecellSections.gallery,
    footer: ecellSections.footer,
  },
  gallery: [
    ecellSections.eventsOverview,
    ecellSections.summitPage,
    ecellSections.pastEvents,
    ecellSections.gallery,
  ],
};
