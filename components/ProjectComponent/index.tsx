import type { ProjectCaseStudy } from "@/data/projects/types";

import AchievementPanel from "./_components/AchievementPanel";
import DocumentationGrid from "./_components/DocumentationGrid";
import FeatureGrid from "./_components/FeatureGrid";
import GalleryGrid from "./_components/GalleryGrid";
import HeroSection from "./_components/HeroSection";
import MilestoneTimeline from "./_components/MilestoneTimeline";
import SectionShell from "./_components/SectionShell";
import ServiceList from "./_components/ServiceList";

interface ProjectDetailProps {
  project: ProjectCaseStudy;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="space-y-16 lg:space-y-20">
      <HeroSection project={project} />

      <SectionShell
        eyebrow="Project gallery"
        title="Visual highlights"
        description="A quick look at the states, flows, and artifacts that made this launch feel polished."
      >
        <GalleryGrid gallery={project.gallery} />
      </SectionShell>

      <SectionShell
        eyebrow="Project features"
        title="Crafted to feel human, performant, and scalable"
        description={project.description}
      >
        <FeatureGrid features={project.features} />
      </SectionShell>

      <SectionShell
        eyebrow="Services & deliverables"
        title="End-to-end partnership"
        description="Strategy, engineering, and activation workstreams stayed tightly aligned so the launch felt intentional."
      >
        <ServiceList services={project.services} />
      </SectionShell>

      <SectionShell
        eyebrow="Accomplishments"
        title="Business impact & program achievements"
        description="We measure success with data, ceremonies, and the teams who keep the experience running."
      >
        <AchievementPanel achievements={project.achievements} />
      </SectionShell>

      <SectionShell
        eyebrow="Landmarks"
        title="Milestones that shaped the roadmap"
        description="From discovery to public launch we ran fixed-length pulses with clear artifacts at every turn."
      >
        <MilestoneTimeline milestones={project.milestones} />
      </SectionShell>

      {project.documentation.length > 0 && (
        <SectionShell
          eyebrow="Documentation"
          title="Living documentation & guardrails"
          description="Every discipline shipped a corresponding doc so future squads can iterate without guesswork."
        >
          <DocumentationGrid documents={project.documentation} />
        </SectionShell>
      )}
    </div>
  );
};

export default ProjectDetail;
