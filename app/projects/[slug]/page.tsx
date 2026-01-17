import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { getProjectBySlug, getProjectPaths } from "@/data/projects";
import type {
  ProjectAchievement,
  ProjectCaseStudy,
  ProjectDocument,
  ProjectFeature,
  ProjectGalleryItem,
  ProjectMilestone,
  ProjectService,
  ProjectStat,
} from "@/data/projects/types";

const buttonVariants: Record<string, string> = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "border border-white/30 text-white hover:border-white/60",
  ghost: "bg-white/10 text-white hover:bg-white/20",
};

export function generateStaticParams() {
  return getProjectPaths();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.excerpt,
  };
}

const ProjectDetailPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

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
          <HeroSection project={project} />

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

          <SectionShell
            eyebrow="Documentation"
            title="Living documentation & guardrails"
            description="Every discipline shipped a corresponding doc so future squads can iterate without guesswork."
          >
            <DocumentationGrid documents={project.documentation} />
          </SectionShell>

          <SectionShell
            eyebrow="Project gallery"
            title="Visual highlights"
            description="A quick look at the states, flows, and artifacts that made this launch feel polished."
          >
            <GalleryGrid gallery={project.gallery} />
          </SectionShell>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

const HeroSection = ({ project }: { project: ProjectCaseStudy }) => {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-8 shadow-[0_40px_120px_rgba(2,6,23,0.45)] lg:p-12">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="space-y-6 lg:flex-1">
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-white/70">
              {project.category}
            </span>
            <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-white/70">
              {project.client}
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              {project.hero.tagline}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="text-lg text-white/80">{project.hero.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.hero.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.hero.links.map((link) => (
              <CTAButton key={link.label} link={link} />
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:w-1/3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <img
              src={project.hero.heroImage}
              alt={`${project.title} hero visual`}
              className="mx-auto h-64 w-full max-w-sm object-contain"
            />
          </div>
          <StatGrid stats={project.hero.stats} />
        </div>
      </div>
    </section>
  );
};

const StatGrid = ({ stats }: { stats: ProjectStat[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl bg-black/40 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {stat.label}
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          {stat.helper && (
            <p className="text-xs text-white/60">{stat.helper}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const FeatureGrid = ({ features }: { features: ProjectFeature[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
        >
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="text-xl">{feature.icon}</span>
            <span className="uppercase tracking-[0.3em] text-xs text-white/60">
              Feature
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            {feature.title}
          </h3>
          <p className="mt-3 text-white/70">{feature.description}</p>
          {feature.tags && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1"
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
};

const ServiceList = ({ services }: { services: ProjectService[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-3xl border border-white/10 bg-black/30 p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Service
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {service.title}
          </h3>
          <p className="mt-3 text-sm text-white/70">{service.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple"></span>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const AchievementPanel = ({
  achievements,
}: {
  achievements: ProjectAchievement[];
}) => {
  return (
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
          <p className="mt-2 text-sm text-white/70">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const MilestoneTimeline = ({
  milestones,
}: {
  milestones: ProjectMilestone[];
}) => {
  return (
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
};

const DocumentationGrid = ({ documents }: { documents: ProjectDocument[] }) => {
  return (
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
};

const GalleryGrid = ({ gallery }: { gallery: ProjectGalleryItem[] }) => {
  return (
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
};

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
}) => {
  return (
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
};

const CTAButton = ({
  link,
}: {
  link: { label: string; href: string; type?: string; isExternal?: boolean };
}) => {
  const variant = link.type ?? "ghost";
  const className = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition",
    buttonVariants[variant] ?? buttonVariants.ghost
  );

  const content = (
    <>
      <span>{link.label}</span>
      <FaArrowRight className="h-4 w-4" />
    </>
  );

  if (link.isExternal) {
    return (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
};
