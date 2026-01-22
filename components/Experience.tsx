"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";

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

      <div className="hidden w-full mt-12 gap-8 md:grid md:grid-cols-2 xl:grid-cols-4">
        {workExperience.map((experience: WorkExperience, index) => (
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
              <span>View more</span>
              <FaLocationArrow className="h-4 w-4" />
            </div>
          </Button>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            Swipe to explore
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const next =
                  (activeIndex - 1 + workExperience.length) %
                  workExperience.length;
                setActiveIndex(next);
                scrollToCard(next);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
              aria-label="Previous experience"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => {
                const next = (activeIndex + 1) % workExperience.length;
                setActiveIndex(next);
                scrollToCard(next);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
              aria-label="Next experience"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={() => {
            if (scrollLock.current) return;
            const container = scrollRef.current;
            if (!container) return;
            const centers = cardRefs.current.map(
              (card) => (card?.offsetLeft ?? 0) + (card?.clientWidth ?? 0) / 2,
            );
            const current = container.scrollLeft + container.clientWidth / 2;
            let closestIndex = activeIndex;
            let minDistance = Number.POSITIVE_INFINITY;
            centers.forEach((center, index) => {
              const distance = Math.abs(current - center);
              if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
              }
            });
            if (closestIndex !== activeIndex) {
              setActiveIndex(closestIndex);
            }
          }}
          className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {workExperience.map((experience: WorkExperience, index) => (
            <div
              key={experience.id}
              ref={(node: HTMLDivElement | null) => {
                cardRefs.current[index] = node;
              }}
              className="w-full shrink-0 snap-center"
            >
              <Link
                href={`/experience/${experience.slug}`}
                prefetch
                onClick={() => setPendingSlug(experience.slug)}
                aria-label={`Read the ${experience.role} case study at ${experience.company}`}
                aria-busy={pendingSlug === experience.slug}
                className="relative block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <article className="relative flex w-full flex-col justify-between rounded-3xl border border-white/15 bg-[#050814]/80 p-6 text-left text-white shadow-[0_20px_60px_rgba(3,7,18,0.45)] transition hover:border-white/40">
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
                    <span>View more</span>
                    <FaLocationArrow className="h-4 w-4" />
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
