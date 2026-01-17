export interface ExperienceStat {
  label: string;
  value: string;
  helper?: string;
}

export interface ExperienceFocusArea {
  title: string;
  description: string;
  icon: string;
  tags?: string[];
}

export interface ExperienceResponsibility {
  title: string;
  description: string;
  bullets: string[];
}

export interface ExperienceAchievement {
  title: string;
  value: string;
  description: string;
}

export interface ExperienceMilestone {
  title: string;
  period: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceDocument {
  title: string;
  description: string;
  href: string;
  format: string;
}

export interface ExperienceGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface ExperienceCaseStudy {
  id: number;
  slug: string;
  role: string;
  company: string;
  location: string;
  timeframe: string;
  excerpt: string;
  summary: string;
  card: {
    thumbnail: string;
  };
  hero: {
    headline: string;
    heroImage: string;
    badges: string[];
    stats: ExperienceStat[];
  };
  focusAreas: ExperienceFocusArea[];
  responsibilities: ExperienceResponsibility[];
  achievements: ExperienceAchievement[];
  milestones: ExperienceMilestone[];
  documentation: ExperienceDocument[];
  gallery: ExperienceGalleryItem[];
}

export interface ExperienceSummary {
  id: number;
  slug: string;
  role: string;
  company: string;
  timeframe: string;
  desc: string;
  thumbnail: string;
}
