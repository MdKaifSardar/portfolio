import { ProjectImageAsset, ProjectImageManifest } from "../types";

const resumeBroGallery: ProjectImageAsset[] = [
  {
    src: "/projects/web-dev/resumebro/image 1.PNG",
    alt: "ResumeBro hero section",
    usage:
      "Hero section of the ResumeBro landing page showcasing branding, value prop, and CTAs.",
    caption:
      "Immersive hero that introduces the AI resume workspace at a glance.",
  },
  {
    src: "/projects/web-dev/resumebro/image 2.PNG",
    alt: "Feature highlight grid",
    usage:
      "Feature cards detailing the ResumeBro parsing, editing, and analytics capabilities.",
    caption:
      "Feature grid explains what each module of the platform unlocks for candidates.",
  },
  {
    src: "/projects/web-dev/resumebro/image 3.PNG",
    alt: "Resume generation process overview",
    usage:
      "End-to-end diagram describing the resume generation workflow and checkpoints.",
    caption:
      "Process visualization explains the five-step AI resume generation journey.",
  },
  {
    src: "/projects/web-dev/resumebro/image 4.PNG",
    alt: "Resume generation service overview",
    usage:
      "Service dashboard for launching a new AI-powered resume generation run.",
    caption:
      "Generation service view lists inputs, progress, and automation controls.",
  },
  {
    src: "/projects/web-dev/resumebro/image 5.PNG",
    alt: "Resume parser service",
    usage:
      "Dedicated resume parser interface that extracts fields from uploaded resumes.",
    caption: "Resume parser module shows extracted entities before validation.",
  },
  {
    src: "/projects/web-dev/resumebro/image 6.PNG",
    alt: "Job description parser service",
    usage:
      "JD parser workspace responsible for turning job postings into structured data.",
    caption:
      "JD parser screen highlights required skills, responsibilities, and constraints.",
  },
  {
    src: "/projects/web-dev/resumebro/image 7.PNG",
    alt: "Resume generation step 3 — JD parsing",
    usage:
      "Step three of the guided resume generation workflow focusing on JD parsing.",
    caption:
      "Generation wizard step that confirms parsed JD data before tailoring resumes.",
  },
  {
    src: "/projects/web-dev/resumebro/image 8.PNG",
    alt: "Resume generation step 2 — resume data review",
    usage: "Step two of the wizard where users review parsed resume data.",
    caption:
      "Review screen lets candidates edit parsed resume fields prior to alignment.",
  },
  {
    src: "/projects/web-dev/resumebro/image 9.PNG",
    alt: "Resume generation step 4 — parsed JD review",
    usage: "Step four of the workflow to confirm parsed job description data.",
    caption:
      "JD review step ensures requirements are captured before custom generation.",
  },
  {
    src: "/projects/web-dev/resumebro/image 10.PNG",
    alt: "Resume generation step 5 — custom resume output",
    usage:
      "Final step of the wizard where custom resumes are generated and previewed.",
    caption:
      "Custom resume generation screen shows tailored output with export controls.",
  },
  {
    src: "/projects/web-dev/resumebro/image 11.PNG",
    alt: "Parsed resumes list",
    usage: "Workspace view listing all stored parsed resumes for a user.",
    caption: "Table view of parsed resumes with timestamps and quick actions.",
  },
  {
    src: "/projects/web-dev/resumebro/image 12.PNG",
    alt: "Parsed job descriptions list",
    usage: "Workspace view listing parsed job descriptions.",
    caption:
      "Parsed JD inventory groups requirements, companies, and creation dates.",
  },
  {
    src: "/projects/web-dev/resumebro/image 13.PNG",
    alt: "Generated resumes archive",
    usage: "List of AI-generated resumes stored for future edits and exports.",
    caption:
      "Generated resumes table surfaces status, versioning, and sharing options.",
  },
  {
    src: "/projects/web-dev/resumebro/image 14.PNG",
    alt: "Generated resume editor",
    usage: "Rich editor for tweaking an already generated resume.",
    caption:
      "Generated resume editor supports inline edits, formatting, and AI rewrites.",
  },
  {
    src: "/projects/web-dev/resumebro/image 15.PNG",
    alt: "Parsed JD editor",
    usage: "Editor interface dedicated to adjusting parsed JD data.",
    caption:
      "JD editor lets teams refine responsibilities, requirements, and scoring.",
  },
  {
    src: "/projects/web-dev/resumebro/image 16.PNG",
    alt: "Parsed resume editor",
    usage: "Editor view for refining parsed resume entries before generation.",
    caption:
      "Parsed resume editor surfaces every extracted block for manual review.",
  },
  {
    src: "/projects/web-dev/resumebro/image 17.PNG",
    alt: "Sign-in with Google screen",
    usage:
      "Authentication screen displaying Google sign-in for the secure workspace.",
    caption:
      "Google Auth page keeps the workspace gated behind verified accounts.",
  },
];

export const resumeBroImages: ProjectImageManifest = {
  cover: resumeBroGallery[0],
  hero: resumeBroGallery[0],
  sections: {
    hero: resumeBroGallery[0],
    featureHighlights: resumeBroGallery[1],
    generationProcess: resumeBroGallery[2],
    generationService: resumeBroGallery[3],
    resumeParser: resumeBroGallery[4],
    jdParser: resumeBroGallery[5],
    generationStep3: resumeBroGallery[6],
    generationStep2: resumeBroGallery[7],
    generationStep4: resumeBroGallery[8],
    generationStep5: resumeBroGallery[9],
    parsedResumes: resumeBroGallery[10],
    parsedJds: resumeBroGallery[11],
    generatedResumes: resumeBroGallery[12],
    resumeEditor: resumeBroGallery[13],
    jdEditor: resumeBroGallery[14],
    resumeDataEditor: resumeBroGallery[15],
    auth: resumeBroGallery[16],
  },
  gallery: resumeBroGallery,
};
