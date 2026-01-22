"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";

import { projectCategories, projects } from "@/data";

const RecentProjects = () => {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<
    Record<string, number>
  >({});
  const mobileScrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mobileCardRefs = useRef<Record<string, Array<HTMLElement | null>>>({});

  useEffect(() => {
    projects.forEach((project) => {
      router.prefetch(`/projects/${project.slug}`);
    });
  }, [router]);

  const categorizedProjects = useMemo(
    () =>
      projectCategories
        .map((category) => ({
          ...category,
          items: projects.filter(
            (project) => project.displayCategory === category.id,
          ),
        }))
        .filter((category) => category.items.length > 0),
    [projectCategories, projects],
  );

  const scrollToCard = useCallback((categoryId: string, index: number) => {
    const container = mobileScrollRefs.current[categoryId];
    const card = mobileCardRefs.current[categoryId]?.[index] ?? null;
    if (!container || !card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-12 space-y-16">
        {categorizedProjects.map((category) => (
          <div
            key={category.id}
            id={`projects-${category.id}`}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  {category.id.replace(/-/g, " ")}
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  {category.label}
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.slug}`}
                  prefetch
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label={`View more about ${item.title}`}
                  onClick={() => setPendingSlug(item.slug)}
                  aria-busy={pendingSlug === item.slug}
                >
                  <article className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#050814]/80 p-6 text-white shadow-[0_20px_80px_rgba(3,7,18,0.45)] transition hover:border-white/30">
                    {pendingSlug === item.slug && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/70 text-sm font-semibold">
                        Opening project...
                      </div>
                    )}

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
                        src={item.img}
                        alt={`${item.title} preview`}
                        className="relative h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/70 line-clamp-3">
                        {item.des}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
                      <div className="flex -space-x-3">
                        {item.iconLists.map((icon, index) => (
                          <span
                            key={`${icon}-${index}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur"
                          >
                            <img
                              src={icon}
                              alt="stack icon"
                              className="h-6 w-6 object-contain"
                            />
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 font-semibold text-purple">
                        View case
                        <FaLocationArrow className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Swipe to explore
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const current = mobileActiveIndex[category.id] ?? 0;
                      const next =
                        (current - 1 + category.items.length) %
                        category.items.length;
                      setMobileActiveIndex((prev) => ({
                        ...prev,
                        [category.id]: next,
                      }));
                      scrollToCard(category.id, next);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
                    aria-label="Previous project"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const current = mobileActiveIndex[category.id] ?? 0;
                      const next = (current + 1) % category.items.length;
                      setMobileActiveIndex((prev) => ({
                        ...prev,
                        [category.id]: next,
                      }));
                      scrollToCard(category.id, next);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
                    aria-label="Next project"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={(node) => {
                  mobileScrollRefs.current[category.id] = node;
                }}
                onScroll={() => {
                  const container = mobileScrollRefs.current[category.id];
                  const cards = mobileCardRefs.current[category.id] ?? [];
                  if (!container || cards.length === 0) return;
                  const centers = cards.map(
                    (card) =>
                      (card?.offsetLeft ?? 0) + (card?.clientWidth ?? 0) / 2,
                  );
                  const current =
                    container.scrollLeft + container.clientWidth / 2;
                  let closestIndex = mobileActiveIndex[category.id] ?? 0;
                  let minDistance = Number.POSITIVE_INFINITY;
                  centers.forEach((center, index) => {
                    const distance = Math.abs(current - center);
                    if (distance < minDistance) {
                      minDistance = distance;
                      closestIndex = index;
                    }
                  });
                  if (closestIndex !== (mobileActiveIndex[category.id] ?? 0)) {
                    setMobileActiveIndex((prev) => ({
                      ...prev,
                      [category.id]: closestIndex,
                    }));
                  }
                }}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {category.items.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/projects/${item.slug}`}
                    prefetch
                    className="block w-full shrink-0 snap-center"
                    onClick={() => setPendingSlug(item.slug)}
                    aria-label={`View more about ${item.title}`}
                    ref={(node) => {
                      if (!mobileCardRefs.current[category.id]) {
                        mobileCardRefs.current[category.id] = [];
                      }
                      mobileCardRefs.current[category.id][index] = node;
                    }}
                  >
                    <article className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#050814]/80 p-6 text-white shadow-[0_20px_80px_rgba(3,7,18,0.45)] transition hover:border-white/30">
                      {pendingSlug === item.slug && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-3xl bg-black/70 text-sm font-semibold">
                          Opening project...
                        </div>
                      )}

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
                          src={item.img}
                          alt={`${item.title} preview`}
                          className="relative h-48 w-full object-cover transition duration-500"
                        />
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-white/70 line-clamp-3">
                          {item.des}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
                        <div className="flex -space-x-3">
                          {item.iconLists.map((icon, iconIndex) => (
                            <span
                              key={`${icon}-${iconIndex}`}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur"
                            >
                              <img
                                src={icon}
                                alt="stack icon"
                                className="h-6 w-6 object-contain"
                              />
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 font-semibold text-purple">
                          View case
                          <FaLocationArrow className="h-4 w-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
