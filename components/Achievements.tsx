"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

  const scrollToCard = (
    container: HTMLDivElement | null,
    card: HTMLDivElement | null,
  ) => {
    if (!container || !card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

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
    <section id="achievements" className="py-20">
      <h1 className="heading">
        Proof of <span className="text-purple">impact & credibility</span>
      </h1>

      <div className="mt-12 hidden gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 shadow-[0_25px_80px_rgba(4,7,29,0.55)]">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -right-24 top-[-20%] h-64 w-64 rounded-full bg-purple/30 blur-3xl"
              aria-hidden
            />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Measurements
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Product achievements
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Signal captured from shipped platforms, looking at the mix of
            retention, revenue, and experiential performance.
          </p>

          <div className="mt-8 grid gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-4xl font-semibold text-purple">
                    {item.metric}
                  </span>
                  {item.proof && (
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                      {item.proof}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#050814]/80 p-8 shadow-[0_25px_80px_rgba(4,7,29,0.45)]">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Certifications
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Credible specializations
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Independent boards validating architecture, machine learning, and
            mobile build expertise.
          </p>

          <div className="mt-6 space-y-5">
            {certifications.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/15 bg-black/30 p-5 transition hover:border-white/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-white/60">
                  <span className="text-xs uppercase tracking-[0.4em]">
                    {item.year}
                  </span>
                  {item.credentialId && (
                    <span className="text-xs font-mono text-white/50">
                      {item.credentialId}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.issuer}</p>
                <p className="mt-3 text-sm text-white/70">{item.focus}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-10 space-y-10 lg:hidden">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5 shadow-[0_20px_60px_rgba(4,7,29,0.5)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                Achievements
              </p>
              <h2 className="mt-2 text-lg font-semibold text-white">
                Product wins
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  moveAchievement(
                    (activeAchievement - 1 + achievements.length) %
                      achievements.length,
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
                aria-label="Previous achievement"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() =>
                  moveAchievement((activeAchievement + 1) % achievements.length)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
                aria-label="Next achievement"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={achievementsRef}
            onScroll={handleAchievementScroll}
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {achievements.map((item, index) => (
              <div
                key={item.id}
                ref={(node) => {
                  achievementCardsRef.current[index] = node;
                }}
                className="w-full shrink-0 snap-center"
              >
                <div className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-3xl font-semibold text-purple">
                      {item.metric}
                    </span>
                    {item.proof && (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                        {item.proof}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#050814]/80 p-5 shadow-[0_20px_60px_rgba(4,7,29,0.45)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                Certifications
              </p>
              <h2 className="mt-2 text-lg font-semibold text-white">
                Specializations
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  moveCertification(
                    (activeCertification - 1 + certifications.length) %
                      certifications.length,
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
                aria-label="Previous certification"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() =>
                  moveCertification(
                    (activeCertification + 1) % certifications.length,
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/50 hover:bg-white/10"
                aria-label="Next certification"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={certificationsRef}
            onScroll={handleCertificationScroll}
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {certifications.map((item, index) => (
              <div
                key={item.id}
                ref={(node) => {
                  certificationCardsRef.current[index] = node;
                }}
                className="w-full shrink-0 snap-center"
              >
                <div className="rounded-2xl border border-white/15 bg-black/30 p-5 transition hover:border-white/40">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-white/60">
                    <span className="text-[11px] uppercase tracking-[0.4em]">
                      {item.year}
                    </span>
                    {item.credentialId && (
                      <span className="text-xs font-mono text-white/50">
                        {item.credentialId}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60">{item.issuer}</p>
                  <p className="mt-3 text-sm text-white/70">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
