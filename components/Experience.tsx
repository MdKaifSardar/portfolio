"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaLocationArrow,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

interface WorkExperience {
  id: number | string;
  slug: string;
  role: string;
  company: string;
  timeframe: string;
  thumbnail: string;
  desc: string;
}

const Experience = () => {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollLock = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToCard = useCallback((index: number) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;
    scrollLock.current = true;
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
    scrollTimeout.current = setTimeout(() => {
      scrollLock.current = false;
    }, 450);
  }, []);

  useEffect(() => {
    workExperience.forEach((experience: WorkExperience) => {
      router.prefetch(`/experience/${experience.slug}`);
    });
  }, [router]);

  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="grid w-full mt-12 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {workExperience.map((experience: WorkExperience, index) => (
          <Link
            key={experience.id}
            href={`/experience/${experience.slug}`}
            prefetch
            onClick={() => setPendingSlug(experience.slug)}
            aria-label={`Read the ${experience.role} case study at ${experience.company}`}
            aria-busy={pendingSlug === experience.slug}
            className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <article className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#050814]/80 p-6 text-white shadow-[0_20px_80px_rgba(3,7,18,0.45)] transition hover:border-white/30">
              {pendingSlug === experience.slug && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/70 text-sm font-semibold text-white">
                  Loading story...
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-[#0b0f1c]">
                <div className="absolute inset-0 opacity-60">
                  <img
                    src="/bg.png"
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover"
                  />
                </div>
                <img
                  src={experience.thumbnail}
                  alt={`${experience.company} logo`}
                  className="relative h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {experience.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-purple">
                    {experience.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/50">
                  <span>{experience.timeframe}</span>
                </div>

                <p className="mt-1 text-sm text-white/70 line-clamp-3 leading-relaxed">
                  {experience.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-semibold text-purple text-sm">
                  View More
                  <FaLocationArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Experience;
