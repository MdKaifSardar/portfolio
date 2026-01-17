import type { ExperienceCaseStudy } from "@/data/experience/types";

import AchievementGrid from "./_components/AchievementGrid";
import DocumentationGrid from "./_components/DocumentationGrid";
import FocusAreaGrid from "./_components/FocusAreaGrid";
import GalleryGrid from "./_components/GalleryGrid";
import HeroSection from "./_components/HeroSection";
import MilestoneTimeline from "./_components/MilestoneTimeline";
import ResponsibilityGrid from "./_components/ResponsibilityGrid";
import SectionShell from "./_components/SectionShell";

interface ExperienceDetailProps {
  experience: ExperienceCaseStudy;
}

const ExperienceDetail = ({ experience }: ExperienceDetailProps) => {
  return (
    <div className="space-y-16 lg:space-y-20">
      <HeroSection experience={experience} />

      {experience.gallery.length > 0 && (
        <SectionShell
          eyebrow="Experience gallery"
          title="Visual highlights"
          description="Snapshots from the journeys, handoffs, and surfaces that defined the work."
        >
          <GalleryGrid gallery={experience.gallery} />
        </SectionShell>
      )}

      {experience.focusAreas.length > 0 && (
        <SectionShell
          eyebrow="Focus areas"
          title="Where the work created leverage"
          description={experience.summary}
        >
          <FocusAreaGrid focusAreas={experience.focusAreas} />
        </SectionShell>
      )}

      {experience.responsibilities.length > 0 && (
        <SectionShell
          eyebrow="Responsibilities"
          title="How the role showed up day-to-day"
          description="From collaboration rituals to hand-offs, every responsibility laddered up to reliable delivery."
        >
          <ResponsibilityGrid responsibilities={experience.responsibilities} />
        </SectionShell>
      )}

      {experience.achievements.length > 0 && (
        <SectionShell
          eyebrow="Outcomes"
          title="Results that mattered"
          description="Each release was paired with telemetry and story-driven reporting, so the team knew what to double down on."
        >
          <AchievementGrid achievements={experience.achievements} />
        </SectionShell>
      )}

      {experience.milestones.length > 0 && (
        <SectionShell
          eyebrow="Timeline"
          title="Moments that shaped the engagement"
          description="Every quarter left behind artifacts, rituals, and clearer ownership."
        >
          <MilestoneTimeline milestones={experience.milestones} />
        </SectionShell>
      )}

      {experience.documentation.length > 0 && (
        <SectionShell
          eyebrow="Documentation"
          title="Living playbooks and supporting material"
          description="Docs ensured new teammates could onboard in days, not weeks."
        >
          <DocumentationGrid documents={experience.documentation} />
        </SectionShell>
      )}
    </div>
  );
};

export default ExperienceDetail;
