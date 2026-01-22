"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navSocialLinks, projectCategories } from "@/data";
import {
  FaGithub,
  FaLinkedin,
  FaChevronDown,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleAnchorClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) {
        return;
      }

      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  const SOCIAL_ICONS: Record<string, JSX.Element> = {
    github: <FaGithub className="h-4 w-4" />,
    linkedin: <FaLinkedin className="h-4 w-4" />,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-6 z-[5000] mx-auto w-[min(1400px,calc(100vw-2rem))] rounded-xl border border-white/15 px-6 py-4 shadow-[0_15px_40px_rgba(2,6,23,0.35)]",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="flex w-full items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
            aria-label="Go to homepage"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 p-1">
              <img
                src="/logo-kaif.png"
                alt="Kaif logo"
                className="h-full w-full rounded-full object-contain"
              />
            </span>
            <span className="sr-only">Kaif</span>
          </Link>

          <div className="hidden flex-1 flex-wrap items-center gap-4 md:flex">
            {navItems.map((navItem: any, idx: number) => {
              const isProjects = navItem.link === "#projects";

              if (!isProjects) {
                return (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className="text-sm font-semibold text-white/70 transition hover:text-white"
                    onClick={(event) => handleAnchorClick(event, navItem.link)}
                  >
                    {navItem.name}
                  </Link>
                );
              }

              return (
                <div
                  key={`link=${idx}`}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition hover:text-white"
                  >
                    {navItem.name}
                    <FaChevronDown
                      className={`h-3 w-3 transition ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-black/85 p-4 shadow-[0_10px_40px_rgba(2,6,23,0.45)]"
                      >
                        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                          Project scopes
                        </p>
                        <ul className="mt-4 space-y-3 text-sm">
                          {projectCategories.map((category) => (
                            <li key={category.id}>
                              <Link
                                href={`#projects-${category.id}`}
                                className="block rounded-xl border border-transparent px-3 py-2 text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                                onClick={(event) => {
                                  setDropdownOpen(false);
                                  handleAnchorClick(
                                    event,
                                    `#projects-${category.id}`,
                                  );
                                }}
                              >
                                <span className="font-semibold">
                                  {category.label}
                                </span>
                                <span className="mt-1 block text-xs text-white/60">
                                  {category.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 md:flex">
              {navSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  {SOCIAL_ICONS[social.id] ?? <FaGithub className="h-4 w-4" />}
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/60 hover:bg-white/10 md:hidden"
              aria-label="Open menu"
            >
              <FaBars className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[5001] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="absolute right-0 top-0 h-full w-[85vw] max-w-sm border-l border-white/10 bg-[#050814] px-6 pb-10 pt-8"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Navigation
                </p>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
                  aria-label="Close menu"
                >
                  <FaXmark className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-8 space-y-4">
                {navItems.map((item) => {
                  const isProjects = item.link === "#projects";

                  if (!isProjects) {
                    return (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
                        onClick={(event) => {
                          handleAnchorClick(event, item.link);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.link}
                      className="rounded-2xl border border-white/10 bg-white/5"
                    >
                      <button
                        type="button"
                        onClick={() => setMobileProjectsOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
                        aria-expanded={mobileProjectsOpen}
                        aria-controls="mobile-projects-list"
                      >
                        <span>{item.name}</span>
                        <FaChevronDown
                          className={`h-4 w-4 transition ${
                            mobileProjectsOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <div
                        id="mobile-projects-list"
                        className={`space-y-2 border-t border-white/10 px-3 pb-3 ${
                          mobileProjectsOpen ? "block" : "hidden"
                        }`}
                      >
                        {projectCategories.map((category) => (
                          <Link
                            key={category.id}
                            href={`#projects-${category.id}`}
                            className="block rounded-xl border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                            onClick={(event) => {
                              handleAnchorClick(
                                event,
                                `#projects-${category.id}`,
                              );
                              setMobileMenuOpen(false);
                              setMobileProjectsOpen(false);
                            }}
                          >
                            {category.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </nav>

              <div className="mt-10 flex items-center gap-3">
                {navSocialLinks.map((social) => (
                  <a
                    key={`mobile-${social.id}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/60 hover:bg-white/10"
                  >
                    {SOCIAL_ICONS[social.id] ?? (
                      <FaGithub className="h-4 w-4" />
                    )}
                  </a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
