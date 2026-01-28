import type { ExperienceCaseStudy } from "@/data/experience/types";

import StatGrid from "../StatGrid";
import { FaArrowRight } from "react-icons/fa6";

interface HeroSectionProps {
  experience: ExperienceCaseStudy;
}

const HeroSection = ({ experience }: HeroSectionProps) => {
  const primaryLink = experience.links?.[0];

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-5 shadow-[0_40px_120px_rgba(2,6,23,0.45)] sm:p-7 lg:p-10">
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <div className="order-1 space-y-4 lg:order-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 sm:p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/40">
              <img
                src={experience.hero.heroImage}
                alt={`${experience.company} hero visual`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-2 space-y-5 lg:order-1">
          <div className="flex flex-wrap gap-2 text-[0.55rem] uppercase tracking-[0.3em] text-white/60 sm:text-xs">
            <span className="rounded-full border border-white/20 px-3 py-1 text-white/70">
              {experience.company}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-white/70">
              {experience.location}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-white/70">
              {experience.timeframe}
            </span>
          </div>

          <div className="space-y-3 text-balance">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">
              {experience.role}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {experience.hero.headline}
            </h1>
            <p className="text-sm text-white/80 sm:text-base">
              {experience.excerpt}
            </p>
            {primaryLink && (
              <a
                href={primaryLink.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto"
              >
                <span>Visit live experience</span>
                <FaArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="lg:max-w-xl">
            <StatGrid stats={experience.hero.stats} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
