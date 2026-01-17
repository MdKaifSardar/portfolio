"use client";

import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryCarouselProps {
  items: GalleryItem[];
  ariaLabel?: string;
  autoScrollSpeed?: number;
}

const GalleryCarousel = ({
  items,
  ariaLabel = "Gallery carousel",
  autoScrollSpeed = 0.6,
}: GalleryCarouselProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

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
    if (!node || !shouldLoop) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    let frame: number;

    const tick = () => {
      if (!isPaused && node) {
        node.scrollLeft += autoScrollSpeed;
        const maxScroll = node.scrollWidth / 2;
        if (node.scrollLeft >= maxScroll) {
          node.scrollLeft -= maxScroll;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [autoScrollSpeed, isPaused, shouldLoop]);

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

  const pause = () => setIsPaused(true);
  const resume = () => {
    if (!activeItem) {
      setIsPaused(false);
    }
  };

  const openItem = (item: GalleryItem) => {
    setActiveItem(item);
    setIsPaused(true);
  };

  const closeItem = () => {
    setActiveItem(null);
    setIsPaused(false);
  };

  if (!items.length) {
    return null;
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-hidden"
        aria-label={ariaLabel}
        role="list"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        onPointerDown={pause}
        onPointerUp={resume}
      >
        {carouselItems.map((item, index) => (
          <figure
            key={`${item.alt}-${index}`}
            role="listitem"
            tabIndex={0}
            className="w-[min(360px,80vw)] shrink-0 snap-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 text-left text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            onClick={() => openItem(item)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openItem(item);
              }
            }}
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full object-cover"
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
    </div>
  );
};

export default GalleryCarousel;
