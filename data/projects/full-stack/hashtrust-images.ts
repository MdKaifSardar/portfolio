import { ProjectImageAsset, ProjectImageManifest } from "../types";

const hashtrustGallery: ProjectImageAsset[] = [
  {
    src: "/projects/web-dev/hashtrust/image 1.PNG",
    alt: "Sign-up step 1 — face extraction",
    usage:
      "AI extracts the face region from the uploaded government ID as the first verification step.",
    caption:
      "Face cropping UI confirms that the document photo is ready for liveness comparisons.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 2.PNG",
    alt: "Sign-up step 2 — ID data extraction",
    usage:
      "Optical character recognition parses text fields from the submitted ID card.",
    caption:
      "Parsed metadata is surfaced for review before anchoring the credential on-chain.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 3.PNG",
    alt: "Sign-up step 3 — live capture & liveness",
    usage:
      "Live camera capture prompts users through liveness checks to prevent spoofing.",
    caption:
      "Animated prompts guide the user through blink and angle challenges in real time.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 4.PNG",
    alt: "Sign-up step 4 — face matching",
    usage:
      "Face similarity service compares the live capture with the ID photo.",
    caption:
      "Confidence scores verify that the applicant and document truly match.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 5.PNG",
    alt: "Sign-up step 5 — final form",
    usage:
      "Final sign-up form collects email/password once biometric checks pass.",
    caption:
      "Applicants confirm credentials, agree to policies, and complete onboarding.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 6.PNG",
    alt: "User login page",
    usage: "Session-based login screen for the HashTrust user workspace.",
    caption:
      "Supports email + API key based authentication with secure cookies.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 7.PNG",
    alt: "User dashboard",
    usage:
      "End-user dashboard summarizing verification status and fraud alerts.",
    caption:
      "Compact cards highlight pending actions, trust scores, and recent devices.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 8.PNG",
    alt: "Org API key usage over time",
    usage:
      "Time-series chart tracking API key usage volume for an organization.",
    caption: "Helps platform teams monitor throughput spikes or anomalies.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 9.PNG",
    alt: "Org API key traffic distribution",
    usage:
      "Traffic breakdown visualizing request types handled by each API key.",
    caption:
      "Shows GET vs POST mix and geographic concentration for compliance.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 10.PNG",
    alt: "Org API key performance metrics",
    usage:
      "Detailed usage log with latency, status, and fraud signal outcomes per request.",
    caption:
      "Granular metrics empower security teams to audit suspicious calls quickly.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 11.PNG",
    alt: "Org API key creation panel",
    usage: "Interface for generating, labeling, and scoping new API keys.",
    caption: "Admins mint single-use keys with expiry, roles, and usage caps.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 12.PNG",
    alt: "Organization sign-up",
    usage: "Registration flow for new organizations onboarding onto HashTrust.",
    caption:
      "Captures org metadata, compliance contacts, and billing preferences.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 13.PNG",
    alt: "Marketing hero section",
    usage:
      "Public marketing hero introducing HashTrust's identity protection story.",
    caption: "Sets the tone with positioning copy, CTAs, and product imagery.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 14.PNG",
    alt: "Services section",
    usage:
      "Landing page services grid detailing protocol, fraud, and analytics offerings.",
    caption:
      "Each service block aligns user pains with the appropriate module.",
  },
  {
    src: "/projects/web-dev/hashtrust/image 15.PNG",
    alt: "Unique features section",
    usage:
      "Feature highlight strip calling out blockchain storage, GenAI, and zero trust controls.",
    caption: "Contrasting backgrounds emphasize what differentiates HashTrust.",
  },
];

export const hashtrustImages: ProjectImageManifest = {
  cover: hashtrustGallery[12],
  hero: hashtrustGallery[12],
  sections: {
    signupStep1: hashtrustGallery[0],
    signupStep2: hashtrustGallery[1],
    signupStep3: hashtrustGallery[2],
    signupStep4: hashtrustGallery[3],
    signupStep5: hashtrustGallery[4],
    login: hashtrustGallery[5],
    dashboard: hashtrustGallery[6],
    apiUsageTime: hashtrustGallery[7],
    apiTraffic: hashtrustGallery[8],
    apiPerformance: hashtrustGallery[9],
    apiCreation: hashtrustGallery[10],
    orgSignup: hashtrustGallery[11],
    marketingHero: hashtrustGallery[12],
    services: hashtrustGallery[13],
    uniqueFeatures: hashtrustGallery[14],
  },
  gallery: hashtrustGallery,
};
