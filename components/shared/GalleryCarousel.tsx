"use client";

import { createPortal } from "react-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryCarouselProps {
  items: GalleryItem[];
  ariaLabel?: string;
  autoScrollInterval?: number;
}

const ITEM_GAP_PX = 24;

const GalleryCarousel = ({
  items,
  ariaLabel = "Gallery carousel",
  autoScrollInterval = 4000,
}: GalleryCarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractingRef = useRef(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shouldLoop = items.length > 1;
  const carouselItems = useMemo(
    () => (shouldLoop ? [...items, ...items] : items),
    [items, shouldLoop],
  );

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) {
      return;
    }

    const measure = () => {
      const firstChild = node.querySelector<HTMLElement>(
        "[data-carousel-item]",
      );
      if (firstChild) {
        setCardWidth(firstChild.clientWidth + ITEM_GAP_PX);
      }
    };

    measure();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(node);
    }

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [carouselItems.length]);

  const scrollByItems = useCallback(
    (direction: 1 | -1) => {
      const node = scrollerRef.current;
      if (!node) {
        return;
      }

      const distance = cardWidth || node.clientWidth;
      const maxScroll = shouldLoop
        ? node.scrollWidth / 2
        : node.scrollWidth - node.clientWidth;

      let target = node.scrollLeft + direction * distance;

      if (shouldLoop) {
        if (target >= maxScroll) {
          target -= maxScroll;
        } else if (target < 0) {
          target += maxScroll;
        }
      } else {
        target = Math.max(0, Math.min(target, maxScroll));
      }

      node.scrollTo({ left: target, behavior: "smooth" });
    },
    [cardWidth, shouldLoop],
  );

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node || !shouldLoop || cardWidth === 0) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    autoPlayRef.current = setInterval(() => {
      if (isPaused || userInteractingRef.current || activeItem) {
        return;
      }
      scrollByItems(1);
    }, autoScrollInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [
    cardWidth,
    isPaused,
    shouldLoop,
    autoScrollInterval,
    activeItem,
    scrollByItems,
  ]);

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
        setIsPaused(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeItem]);

  const pause = () => {
    setIsPaused(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  const resume = (delay = 3000) => {
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      if (!activeItem && !userInteractingRef.current) {
        setIsPaused(false);
      }
    }, delay);
  };

  const beginInteraction = () => {
    userInteractingRef.current = true;
    pause();
  };

  const endInteraction = (delay = 1200) => {
    userInteractingRef.current = false;
    resume(delay);
  };

  const openItem = (item: GalleryItem) => {
    setActiveItem(item);
    setIsPaused(true);
  };

  const closeItem = () => {
    setActiveItem(null);
    setIsPaused(false);
  };

  const handleArrow = (direction: 1 | -1) => {
    beginInteraction();
    scrollByItems(direction);
    endInteraction(800);
  };

  if (!items.length) {
    return null;
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto px-1 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        aria-label={ariaLabel}
        role="list"
        onTouchStart={beginInteraction}
        onTouchEnd={() => endInteraction()}
        onPointerDown={beginInteraction}
        onPointerUp={() => endInteraction()}
        onPointerCancel={() => endInteraction()}
        onWheel={() => {
          beginInteraction();
          if (wheelTimeoutRef.current) {
            clearTimeout(wheelTimeoutRef.current);
          }
          wheelTimeoutRef.current = setTimeout(() => {
            endInteraction();
          }, 800);
        }}
      >
        {carouselItems.map((item, index) => (
          <figure
            key={`${item.alt}-${index}`}
            data-carousel-item
            role="listitem"
            tabIndex={0}
            className="group basis-full shrink-0 snap-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 text-left text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]"
            onClick={() => openItem(item)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openItem(item);
              }
            }}
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#050712]">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {item.caption && (
              <figcaption className="mt-3 text-sm text-white/70">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {isMounted &&
        activeItem &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-10"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded gallery image"
            onClick={closeItem}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                aria-label="Close gallery preview"
                className="absolute -right-3 -top-3 rounded-full border border-white/20 bg-black/70 p-2 text-white transition hover:border-white"
                onClick={closeItem}
              >
                ✕
              </button>
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/60">
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[80vh] w-full object-contain"
                />
              </div>
              {activeItem.caption && (
                <p className="mt-4 text-center text-sm text-white/80">
                  {activeItem.caption}
                </p>
              )}
            </div>
          </div>,
          document.body,
        )}

      {shouldLoop && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white shadow-[0_10px_40px_rgba(2,6,23,0.45)] transition hover:border-white/50 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:p-3"
            onClick={() => handleArrow(-1)}
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white shadow-[0_10px_40px_rgba(2,6,23,0.45)] transition hover:border-white/50 hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:p-3"
            onClick={() => handleArrow(1)}
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default GalleryCarousel;
