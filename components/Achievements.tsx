"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { achievements, certifications } from "@/data";

const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [activeCertification, setActiveCertification] = useState(0);
  const achievementsRef = useRef<HTMLDivElement | null>(null);
  const certificationsRef = useRef<HTMLDivElement | null>(null);
  const achievementCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const certificationCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const achievementScrollLock = useRef(false);
  const certificationScrollLock = useRef(false);
  const achievementScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const certificationScrollTimeout = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const achievementSnapTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const certificationSnapTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const scrollToCard = useCallback(
    (container: HTMLDivElement | null, card: HTMLDivElement | null) => {
      if (!container || !card) return;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    },
    [],
  );

  const moveAchievement = useCallback(
    (nextIndex: number) => {
      achievementScrollLock.current = true;
      if (achievementScrollTimeout.current) {
        clearTimeout(achievementScrollTimeout.current);
      }
      scrollToCard(
        achievementsRef.current,
        achievementCardsRef.current[nextIndex],
      );
      achievementScrollTimeout.current = setTimeout(() => {
        achievementScrollLock.current = false;
      }, 450);
      setActiveAchievement(nextIndex);
    },
    [scrollToCard],
  );

  const moveCertification = useCallback(
    (nextIndex: number) => {
      certificationScrollLock.current = true;
      if (certificationScrollTimeout.current) {
        clearTimeout(certificationScrollTimeout.current);
      }
      scrollToCard(
        certificationsRef.current,
        certificationCardsRef.current[nextIndex],
      );
      certificationScrollTimeout.current = setTimeout(() => {
        certificationScrollLock.current = false;
      }, 450);
      setActiveCertification(nextIndex);
    },
    [scrollToCard],
  );

  useEffect(() => {
    if (achievementScrollLock.current) return;
    scrollToCard(
      achievementsRef.current,
      achievementCardsRef.current[activeAchievement],
    );
  }, [activeAchievement, scrollToCard]);

  useEffect(() => {
    if (certificationScrollLock.current) return;
    scrollToCard(
      certificationsRef.current,
      certificationCardsRef.current[activeCertification],
    );
  }, [activeCertification, scrollToCard]);

  const handleAchievementScroll = useCallback(() => {
    if (achievementScrollLock.current) return;
    if (achievementSnapTimeout.current) {
      clearTimeout(achievementSnapTimeout.current);
    }
    achievementSnapTimeout.current = setTimeout(() => {
      const container = achievementsRef.current;
      if (!container) return;
      const centers = achievementCardsRef.current.map(
        (card) => (card?.offsetLeft ?? 0) + (card?.clientWidth ?? 0) / 2,
      );
      const current = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = activeAchievement;
      let minDistance = Number.POSITIVE_INFINITY;
      centers.forEach((center, index) => {
        const distance = Math.abs(current - center);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      if (closestIndex !== activeAchievement) {
        setActiveAchievement(closestIndex);
      }
    }, 120);
  }, [activeAchievement]);

  const handleCertificationScroll = useCallback(() => {
    if (certificationScrollLock.current) return;
    if (certificationSnapTimeout.current) {
      clearTimeout(certificationSnapTimeout.current);
    }
    certificationSnapTimeout.current = setTimeout(() => {
      const container = certificationsRef.current;
      if (!container) return;
      const centers = certificationCardsRef.current.map(
        (card) => (card?.offsetLeft ?? 0) + (card?.clientWidth ?? 0) / 2,
      );
      const current = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = activeCertification;
      let minDistance = Number.POSITIVE_INFINITY;
      centers.forEach((center, index) => {
        const distance = Math.abs(current - center);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      if (closestIndex !== activeCertification) {
        setActiveCertification(closestIndex);
      }
    }, 120);
  }, [activeCertification]);
  return (
    <div id="achievements" className="py-20 w-full">
      <h1 className="heading mb-12">
        <span className="text-purple">Achievements</span>
      </h1>

      {/* Measurements Section */}
      {/* Measurements Section */}
      <section className="mb-10 md:mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50 text-center md:text-left">
            Impact Measurements
          </h2>
          {/* Mobile Nav for Measurements */}
          <div className="flex gap-2 lg:hidden">
            <button
              type="button"
              onClick={() =>
                moveAchievement(
                  (activeAchievement - 1 + achievements.length) %
                    achievements.length,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
              aria-label="Previous achievement"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                moveAchievement((activeAchievement + 1) % achievements.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
              aria-label="Next achievement"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={achievementsRef}
          onScroll={handleAchievementScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 lg:grid lg:gap-6 lg:overflow-visible lg:pb-0 lg:grid-cols-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {achievements.map((item, index) => (
            <div
              key={item.id}
              ref={(node) => {
                achievementCardsRef.current[index] = node;
              }}
              className="relative w-full min-w-full shrink-0 snap-center lg:w-auto lg:min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-[#050814]/80 p-6 shadow-xl transition hover:border-white/30"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple/20 blur-2xl"
                aria-hidden
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-purple">
                    {item.metric}
                  </span>
                  {item.proof && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-widest text-white/50">
                      {item.proof}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Certifications
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                moveCertification(
                  (activeCertification - 1 + certifications.length) %
                    certifications.length,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
              aria-label="Previous certification"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                moveCertification(
                  (activeCertification + 1) % certifications.length,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
              aria-label="Next certification"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={certificationsRef}
          onScroll={handleCertificationScroll}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {certifications.map((item, index) => (
            <div
              key={item.id}
              ref={(node) => {
                certificationCardsRef.current[index] = node;
              }}
              className="w-full shrink-0 snap-start lg:w-[calc(33.333%-14px)] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition hover:border-white/30"
            >
              <div className="flex items-center justify-between text-white/50 mb-4">
                <span className="text-xs font-mono border border-white/10 px-2 py-1 rounded bg-black/20">
                  {item.year}
                </span>
                {item.credentialId && (
                  <span className="text-[10px] tracking-wider uppercase">
                    ID: {item.credentialId}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-purple mb-3">
                {item.issuer}
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievements;
