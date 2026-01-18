"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { aboutSections } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const AUTO_SCROLL_INTERVAL = 7000;
const RESUME_DELAY = 4000;

const Grid = () => {
  const sectionCount = aboutSections.length;
  const [activeSection, setActiveSection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInFlight = useRef(false);
  const autoScrollReset = useRef<NodeJS.Timeout | null>(null);

  const scheduleResume = useCallback(() => {
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
    resumeTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  }, []);

  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);
    scheduleResume();
  }, [scheduleResume]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) {
        clearTimeout(resumeTimeout.current);
      }
      if (autoScrollReset.current) {
        clearTimeout(autoScrollReset.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused || sectionCount <= 1) return;

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sectionCount);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, sectionCount]);

  useEffect(() => {
    const container = scrollerRef.current;
    const targetSection = sectionRefs.current[activeSection];
    if (!container || !targetSection) return;

    autoScrollInFlight.current = true;
    container.scrollTo({
      left: targetSection.offsetLeft,
      behavior: "smooth",
    });

    if (autoScrollReset.current) {
      clearTimeout(autoScrollReset.current);
    }
    autoScrollReset.current = setTimeout(() => {
      autoScrollInFlight.current = false;
    }, 600);
  }, [activeSection]);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (autoScrollInFlight.current) {
        return;
      }

      handleUserInteraction();
      const offsets = sectionRefs.current.map(
        (section) => section?.offsetLeft ?? 0,
      );
      const currentScroll = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = activeSection;
      let minDistance = Number.POSITIVE_INFINITY;

      offsets.forEach((offset, index) => {
        const distance = Math.abs(
          currentScroll - (offset + container.clientWidth / 2),
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeSection) {
        setActiveSection(closestIndex);
      }
    };

    const handlePointer = () => handleUserInteraction();

    container.addEventListener("wheel", handlePointer, { passive: true });
    container.addEventListener("touchstart", handlePointer, { passive: true });
    container.addEventListener("pointerdown", handlePointer);
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("wheel", handlePointer);
      container.removeEventListener("touchstart", handlePointer);
      container.removeEventListener("pointerdown", handlePointer);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, handleUserInteraction]);

  return (
    <section id="about" className="py-20">
      <div className="flex items-center justify-between gap-6 pb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            About
          </p>
          <h2 className="text-3xl font-semibold text-white">
            A quick tour through the way I build
          </h2>
        </div>
        <div className="flex gap-2">
          {aboutSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              onClick={() => {
                setActiveSection(index);
                handleUserInteraction();
              }}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeSection
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Show ${section.title}`}
            />
          ))}
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-10 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {aboutSections.map((section, index) => (
          <div
            key={section.id}
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
            className="min-w-full shrink-0 snap-center"
          >
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {section.title}
              </p>
              <p className="mt-2 text-white/70">{section.description}</p>
            </div>
            <BentoGrid className="w-full">
              {section.items.map((item) => (
                <BentoGridItem
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  className={item.className}
                  img={item.img}
                  imgClassName={item.imgClassName}
                  titleClassName={item.titleClassName}
                  spareImg={item.spareImg}
                />
              ))}
            </BentoGrid>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Grid;
