export interface ProjectStat {
  label: string;
  value: string;
  helper?: string;
}

export type ProjectLinkStyle = "primary" | "secondary" | "ghost";

export interface ProjectLink {
  label: string;
  href: string;
  type?: ProjectLinkStyle;
  isExternal?: boolean;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
  tags?: string[];
}

export interface ProjectService {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProjectAchievement {
  title: string;
  value: string;
  description: string;
}

export interface ProjectMilestone {
  title: string;
  period: string;
  description: string;
  highlight?: boolean;
}

export interface ProjectDocument {
  title: string;
  description: string;
  href: string;
  format: string;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectImageAsset {
  src: string;
  alt: string;
  usage: string;
  caption?: string;
}

export interface ProjectImageManifest {
  cover: ProjectImageAsset;
  hero: ProjectImageAsset;
  sections?: Record<string, ProjectImageAsset>;
  gallery?: ProjectImageAsset[];
}

export interface ProjectCaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  excerpt: string;
  description: string;
  category: string;
  card: {
    coverImage: string;
    iconList: string[];
  };
  hero: {
    tagline: string;
    summary: string;
    heroImage: string;
    badges: string[];
    stats: ProjectStat[];
    links: ProjectLink[];
  };
  features: ProjectFeature[];
  services: ProjectService[];
  achievements: ProjectAchievement[];
  milestones: ProjectMilestone[];
  documentation: ProjectDocument[];
  gallery: ProjectGalleryItem[];
}

export interface ProjectSummary {
  id: number;
  slug: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  displayCategory: "full-stack" | "ai-ml" | "mobile" | "side" | "frontend";
}
