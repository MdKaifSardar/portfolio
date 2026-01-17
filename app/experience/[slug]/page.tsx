import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

import { getExperienceBySlug, getExperiencePaths } from "@/data/experience";
import type {
  ExperienceAchievement,
  ExperienceCaseStudy,
  ExperienceDocument,
  ExperienceFocusArea,
  ExperienceGalleryItem,
  ExperienceMilestone,
  ExperienceResponsibility,
  ExperienceStat,
} from "@/data/experience/types";

export function generateStaticParams() {
  return getExperiencePaths();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const experience = await getExperienceBySlug(params.slug);

  if (!experience) {
    return {
      title: "Experience not found",
    };
  }

  return {
    title: `${experience.role} at ${experience.company}`,
    description: experience.excerpt,
  };
}

const ExperienceDetailPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const experience = await getExperienceBySlug(params.slug);

  if (!experience) {
    notFound();
  }

  const caseStudy = experience;

  return (
    <div className="bg-black-100 text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          aria-label="Return to the landing page"
        >
          <span className="text-white/50">←</span> Back to home
        </Link>

        <div className="mt-8 space-y-16 lg:space-y-20">
          <HeroSection experience={caseStudy} />

          <SectionShell
            eyebrow="Focus areas"
            title="Where the work created leverage"
            description={caseStudy.summary}
          >
            <FocusAreaGrid focusAreas={caseStudy.focusAreas} />
          </SectionShell>

          <SectionShell
            eyebrow="Responsibilities"
            title="How the role showed up day-to-day"
            description="From collaboration rituals to hand-offs, every responsibility laddered up to reliable delivery."
          >
            <ResponsibilityGrid responsibilities={caseStudy.responsibilities} />
          </SectionShell>

          <SectionShell
            eyebrow="Outcomes"
            title="Results that mattered"
            description="Each release was paired with telemetry and story-driven reporting, so the team knew what to double down on."
          >
            <AchievementGrid achievements={caseStudy.achievements} />
          </SectionShell>

          <SectionShell
            eyebrow="Timeline"
            title="Moments that shaped the engagement"
            description="Every quarter left behind artifacts, rituals, and clearer ownership."
          >
            <MilestoneTimeline milestones={caseStudy.milestones} />
          </SectionShell>

          <SectionShell
            eyebrow="Documentation"
            title="Living playbooks and supporting material"
            description="Docs ensured new teammates could onboard in days, not weeks."
          >
            <DocumentationGrid documents={caseStudy.documentation} />
          </SectionShell>

          <SectionShell
            eyebrow="Gallery"
            title="Artifacts from the journey"
            description="A peek at the interfaces, dashboards, and flows that defined the work."
          >
            <GalleryGrid gallery={caseStudy.gallery} />
          </SectionShell>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;

const HeroSection = ({ experience }: { experience: ExperienceCaseStudy }) => {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-8 shadow-[0_40px_120px_rgba(2,6,23,0.45)] lg:p-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="space-y-6 lg:flex-1">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">
              {experience.company}
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">
              {experience.location}
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">
              {experience.timeframe}
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              {experience.role}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {experience.hero.headline}
            </h1>
            <p className="text-lg text-white/80">{experience.excerpt}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {experience.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:w-1/3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <img
              src={experience.hero.heroImage}
              alt={`${experience.company} hero visual`}
              className="mx-auto h-64 w-full max-w-sm object-contain"
            />
          </div>
          <StatGrid stats={experience.hero.stats} />
        </div>
      </div>
    </section>
  );
};

const StatGrid = ({ stats }: { stats: ExperienceStat[] }) => (
  <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 sm:grid-cols-3">
    {stats.map((stat) => (
      <div key={stat.label} className="rounded-xl bg-black/40 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {stat.label}
        </p>
        <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
        {stat.helper && <p className="text-xs text-white/60">{stat.helper}</p>}
      </div>
    ))}
  </div>
);

const FocusAreaGrid = ({
  focusAreas,
}: {
  focusAreas: ExperienceFocusArea[];
}) => (
  <div className="grid gap-6 md:grid-cols-3">
    {focusAreas.map((area) => (
      <div
        key={area.title}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-6"
      >
        <div className="text-3xl">{area.icon}</div>
        <h3 className="mt-4 text-2xl font-semibold text-white">{area.title}</h3>
        <p className="mt-3 text-white/70">{area.description}</p>
        {area.tags && (
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
            {area.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

const ResponsibilityGrid = ({
  responsibilities,
}: {
  responsibilities: ExperienceResponsibility[];
}) => (
  <div className="grid gap-6 lg:grid-cols-3">
    {responsibilities.map((responsibility) => (
      <div
        key={responsibility.title}
        className="rounded-3xl border border-white/10 bg-black/30 p-6"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Responsibility
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          {responsibility.title}
        </h3>
        <p className="mt-3 text-sm text-white/70">
          {responsibility.description}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {responsibility.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple"></span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const AchievementGrid = ({
  achievements,
}: {
  achievements: ExperienceAchievement[];
}) => (
  <div className="grid gap-6 md:grid-cols-3">
    {achievements.map((achievement) => (
      <div
        key={achievement.title}
        className="rounded-3xl border border-purple/30 bg-gradient-to-br from-purple/20 via-purple/5 to-transparent p-6"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
          {achievement.title}
        </p>
        <p className="mt-3 text-4xl font-semibold text-white">
          {achievement.value}
        </p>
        <p className="mt-2 text-sm text-white/70">{achievement.description}</p>
      </div>
    ))}
  </div>
);

const MilestoneTimeline = ({
  milestones,
}: {
  milestones: ExperienceMilestone[];
}) => (
  <div className="space-y-4">
    {milestones.map((milestone, index) => (
      <div
        key={`${milestone.title}-${milestone.period}`}
        className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-5 md:flex-row md:items-center md:gap-6"
      >
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/50">
          <span className="text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{milestone.period}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white">
            {milestone.title}
          </h4>
          <p className="text-sm text-white/70">{milestone.description}</p>
        </div>
        {milestone.highlight && (
          <span className="w-fit rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Key moment
          </span>
        )}
      </div>
    ))}
  </div>
);

const DocumentationGrid = ({
  documents,
}: {
  documents: ExperienceDocument[];
}) => (
  <div className="grid gap-6 md:grid-cols-3">
    {documents.map((doc) => (
      <Link
        key={doc.title}
        href={doc.href}
        target={doc.href.startsWith("http") ? "_blank" : undefined}
        rel={doc.href.startsWith("http") ? "noreferrer" : undefined}
        className="group rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-white/40"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {doc.format}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">{doc.title}</h3>
        <p className="mt-2 text-sm text-white/70">{doc.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple">
          Open document <FaArrowRight className="h-4 w-4" />
        </span>
      </Link>
    ))}
  </div>
);

const GalleryGrid = ({ gallery }: { gallery: ExperienceGalleryItem[] }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {gallery.map((item) => (
      <figure
        key={item.alt}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <img
            src={item.src}
            alt={item.alt}
            className="h-64 w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-sm text-white/70">
          {item.caption}
        </figcaption>
      </figure>
    ))}
  </div>
);

const SectionShell = ({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <section className="space-y-8">
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-white/50">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <p className="text-white/70">{description}</p>
    </div>
    {children}
  </section>
);
