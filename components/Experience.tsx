"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);

  useEffect(() => {
    workExperience.forEach((experience) => {
      router.prefetch(`/experience/${experience.slug}`);
    });
  }, [router]);

  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {workExperience.map((experience, index) => (
          <Button
            key={experience.id}
            as={Link}
            href={`/experience/${experience.slug}`}
            prefetch
            onClick={() => setPendingSlug(experience.slug)}
            aria-label={`Read the ${experience.role} case study at ${experience.company}`}
            aria-busy={pendingSlug === experience.slug}
            duration={9000 + index * 800}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex h-full flex-col justify-between border-white/15 bg-[#050814]/80 p-6 text-left text-white transition hover:border-white/40"
          >
            {pendingSlug === experience.slug && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/70 text-sm font-semibold text-white">
                Loading story...
              </div>
            )}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="rounded-full border border-white/15 px-3 py-1 text-[0.55rem] tracking-[0.3em] text-white/60">
                  {experience.company}
                </span>
                <span className="text-[0.6rem] tracking-[0.2em] text-white/60">
                  {experience.timeframe}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/40 p-3">
                    <img
                      src={experience.thumbnail}
                      alt={`${experience.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Role
                    </p>
                    <h2 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70 line-clamp-3">
                  {experience.desc}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm font-semibold text-purple">
              <span>View case study</span>
              <FaLocationArrow className="h-4 w-4" />
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
