"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { aboutSections } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const AUTO_SCROLL_INTERVAL = 7000;
const RESUME_DELAY = 4000;
const MOBILE_SLIDE_MIN_HEIGHT = 380;
const STACKED_CARD_MIN_HEIGHT = 180;
const combineClasses = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");
type AboutSection = (typeof aboutSections)[number];
type AboutItem = AboutSection["items"][number];
type MobileCard = AboutItem & {
  sectionId: string;
  sectionTitle: string;
};

type MobileSlide = {
  key: string;
  variant: "single" | "stacked";
  label: string;
  items: MobileCard[];
};

const rawMobileCards: MobileCard[] = aboutSections.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    sectionId: section.id,
    sectionTitle: section.title,
  })),
);

const mobileSlides: MobileSlide[] = (() => {
  const slides: MobileSlide[] = [];
  let pendingStack: MobileCard | null = null;

  rawMobileCards.forEach((card) => {
    if (card.id === 1 || card.id === 3 || card.id === 5) {
      pendingStack = card;
      return;
    }

    if (card.id === 2 && pendingStack?.id === 1) {
      slides.push({
        key: `stacked-${pendingStack.sectionId}-${pendingStack.id}-${card.sectionId}-${card.id}`,
        variant: "stacked",
        label: `${pendingStack.sectionTitle} • ${card.sectionTitle}`,
        items: [pendingStack, card],
      });
      pendingStack = null;
      return;
    }

    if (card.id === 4 && pendingStack?.id === 3) {
      slides.push({
        key: `stacked-${pendingStack.sectionId}-${pendingStack.id}-${card.sectionId}-${card.id}`,
        variant: "stacked",
        label: `${pendingStack.sectionTitle} • ${card.sectionTitle}`,
        items: [pendingStack, card],
      });
      pendingStack = null;
      return;
    }

    if (card.id === 6 && pendingStack?.id === 5) {
      slides.push({
        key: `stacked-${pendingStack.sectionId}-${pendingStack.id}-${card.sectionId}-${card.id}`,
        variant: "stacked",
        label: `${pendingStack.sectionTitle} • ${card.sectionTitle}`,
        items: [pendingStack, card],
      });
      pendingStack = null;
      return;
    }

    slides.push({
      key: `${card.sectionId}-${card.id}`,
      variant: "single",
      label: card.sectionTitle,
      items: [card],
    });
  });

  if (pendingStack) {
    const { sectionId, id, sectionTitle } = pendingStack;
    slides.push({
      key: `${sectionId}-${id}`,
      variant: "single",
      label: sectionTitle,
      items: [pendingStack],
    });
  }

  return slides;
})();
const SectionPanel = ({ section }: { section: AboutSection }) => (
  <div className="flex h-full w-full">
    <BentoGrid className="w-full h-full">
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
);

const Grid = () => {
  const sectionCount = aboutSections.length;
  const [activeSection, setActiveSection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInFlight = useRef(false);
  const autoScrollReset = useRef<NodeJS.Timeout | null>(null);
  const mobileSlideCount = mobileSlides.length;
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0);
  const [isMobilePaused, setIsMobilePaused] = useState(false);
  const mobileScrollerRef = useRef<HTMLDivElement | null>(null);
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileResumeTimeout = useRef<NodeJS.Timeout | null>(null);
  const mobileAutoScrollInFlight = useRef(false);
  const mobileAutoScrollReset = useRef<NodeJS.Timeout | null>(null);

  const scheduleResume = useCallback(() => {
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current);
    }
    resumeTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  }, []);

  const scheduleMobileResume = useCallback(() => {
    if (mobileResumeTimeout.current) {
      clearTimeout(mobileResumeTimeout.current);
    }
    mobileResumeTimeout.current = setTimeout(() => {
      setIsMobilePaused(false);
    }, RESUME_DELAY);
  }, []);

  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);
    scheduleResume();
  }, [scheduleResume]);

  const handleMobileInteraction = useCallback(() => {
    setIsMobilePaused(true);
    scheduleMobileResume();
  }, [scheduleMobileResume]);

  const handlePrevSection = useCallback(() => {
    handleUserInteraction();
    setActiveSection((prev) => (prev - 1 + sectionCount) % sectionCount);
  }, [handleUserInteraction, sectionCount]);

  const handleNextSection = useCallback(() => {
    handleUserInteraction();
    setActiveSection((prev) => (prev + 1) % sectionCount);
  }, [handleUserInteraction, sectionCount]);

  const handleMobilePrev = useCallback(() => {
    if (mobileSlideCount <= 1) return;
    handleMobileInteraction();
    setMobileActiveSlide(
      (prev) => (prev - 1 + mobileSlideCount) % mobileSlideCount,
    );
  }, [handleMobileInteraction, mobileSlideCount]);

  const handleMobileNext = useCallback(() => {
    if (mobileSlideCount <= 1) return;
    handleMobileInteraction();
    setMobileActiveSlide((prev) => (prev + 1) % mobileSlideCount);
  }, [handleMobileInteraction, mobileSlideCount]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) {
        clearTimeout(resumeTimeout.current);
      }
      if (autoScrollReset.current) {
        clearTimeout(autoScrollReset.current);
      }
      if (mobileResumeTimeout.current) {
        clearTimeout(mobileResumeTimeout.current);
      }
      if (mobileAutoScrollReset.current) {
        clearTimeout(mobileAutoScrollReset.current);
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
    if (isMobilePaused || mobileSlideCount <= 1) return;

    const interval = setInterval(() => {
      setMobileActiveSlide((prev) => (prev + 1) % mobileSlideCount);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [isMobilePaused, mobileSlideCount]);

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
    const container = mobileScrollerRef.current;
    const targetSlide = mobileSlideRefs.current[mobileActiveSlide];
    if (!container || !targetSlide) return;

    mobileAutoScrollInFlight.current = true;
    const offset = targetSlide.offsetLeft - container.offsetLeft;
    container.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    if (mobileAutoScrollReset.current) {
      clearTimeout(mobileAutoScrollReset.current);
    }
    mobileAutoScrollReset.current = setTimeout(() => {
      mobileAutoScrollInFlight.current = false;
    }, 600);
  }, [mobileActiveSlide]);

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

  useEffect(() => {
    const container = mobileScrollerRef.current;
    if (!container || mobileSlideCount <= 1) return;

    const handleScroll = () => {
      if (mobileAutoScrollInFlight.current) {
        return;
      }

      handleMobileInteraction();
      const offsets = mobileSlideRefs.current.map(
        (slide) => slide?.offsetLeft ?? 0,
      );
      const currentScroll = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = mobileActiveSlide;
      let minDistance = Number.POSITIVE_INFINITY;

      offsets.forEach((offset, index) => {
        const slideWidth = mobileSlideRefs.current[index]?.clientWidth ?? 0;
        const slideCenter = offset + slideWidth / 2;
        const distance = Math.abs(currentScroll - slideCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== mobileActiveSlide) {
        setMobileActiveSlide(closestIndex);
      }
    };

    const handlePointer = () => handleMobileInteraction();

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
  }, [mobileActiveSlide, handleMobileInteraction, mobileSlideCount]);

  return (
    <section id="about" className="py-20 px-4 md:px-0">
      <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            About
          </p>
          <h2 className="text-3xl font-semibold text-white">
            A quick tour through the way I build
          </h2>
        </div>
        <div className="hidden items-center justify-between gap-4 md:flex md:justify-end">
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
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevSection}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              aria-label="Show previous about section"
            >
              <FaArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNextSection}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              aria-label="Show next about section"
            >
              <FaArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="hidden snap-x snap-mandatory gap-10 overflow-x-auto scroll-smooth md:flex [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {aboutSections.map((section, index) => (
          <div
            key={section.id}
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
            className="min-w-full shrink-0 snap-center rounded-3xl border border-white/10 bg-white/5 p-5 lg:min-h-[60vh] flex"
          >
            <SectionPanel section={section} />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <div className="mb-6 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleMobilePrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              aria-label="Show previous about card"
            >
              <FaArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={handleMobileNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              aria-label="Show next about card"
            >
              <FaArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div
          ref={mobileScrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {mobileSlides.map((slide, index) => (
            <div
              key={slide.key}
              ref={(node) => {
                mobileSlideRefs.current[index] = node;
              }}
              className="w-full shrink-0 snap-center"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                {slide.variant === "stacked" ? (
                  <div
                    className="grid gap-4"
                    style={{
                      minHeight: MOBILE_SLIDE_MIN_HEIGHT,
                      gridTemplateRows: "repeat(2, minmax(0, 1fr))",
                    }}
                  >
                    {slide.items.map((item) => (
                      <div
                        key={`${slide.key}-${item.id}`}
                        className="flex"
                        style={{ minHeight: STACKED_CARD_MIN_HEIGHT }}
                      >
                        <BentoGridItem
                          id={item.id}
                          title={item.title}
                          description={item.description}
                          className={combineClasses(item.className, "flex-1")}
                          img={item.img}
                          imgClassName={item.imgClassName}
                          titleClassName={item.titleClassName}
                          spareImg={item.spareImg}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="flex"
                    style={{ minHeight: MOBILE_SLIDE_MIN_HEIGHT }}
                  >
                    <BentoGridItem
                      id={slide.items[0].id}
                      title={slide.items[0].title}
                      description={slide.items[0].description}
                      className={combineClasses(
                        slide.items[0].className,
                        "flex-1",
                      )}
                      img={slide.items[0].img}
                      imgClassName={slide.items[0].imgClassName}
                      titleClassName={slide.items[0].titleClassName}
                      spareImg={slide.items[0].spareImg}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
