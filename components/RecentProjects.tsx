"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";

import { projectCategories, projects } from "@/data";

const RecentProjects = () => {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);

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

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                        className="relative mx-auto h-48 w-auto object-contain transition duration-500 group-hover:scale-105"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
