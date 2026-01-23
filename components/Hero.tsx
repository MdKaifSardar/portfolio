import Image from "next/image";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const highlightPills = [
  {
    title: "Full-stack polish",
    caption: "Next.js • TypeScript • Edge ready",
  },
  {
    title: "Human-centered UX",
    caption: "Micro-interactions that stay performant",
  },
  {
    title: "Systems thinking",
    caption: "Infra-aware builds for real users",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden pb-16 pt-24 md:pb-20 md:pt-28 lg:pt-24">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div className="absolute left-1/2 top-0 flex h-full w-screen -translate-x-1/2 items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 text-center lg:grid-cols-[1.05fr_0.95fr] lg:text-left">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] uppercase tracking-[0.35em] text-blue-100 backdrop-blur-sm sm:text-xs">
              Software engineer • Student
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Building clean, resilient software for real users"
              className="text-center text-[30px] leading-tight sm:text-[38px] md:text-5xl lg:text-6xl xl:text-7xl lg:text-left"
            />

            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              I&apos;m MD Kaif Sardar, focused on full‑stack web platforms and
              AI‑ready products.
            </p>

            <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
              {highlightPills.map((pill) => (
                <div
                  key={pill.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left shadow-[0_15px_50px_rgba(2,6,23,0.55)] backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">
                    {pill.title}
                  </p>
                  <p className="text-xs text-white/70">{pill.caption}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a href="#projects">
                <MagicButton
                  title="View my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>

              <p className="text-sm text-white/60">
                Ship-ready from discovery to deployment.
              </p>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-[420px] lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full"
            >
              <div className="relative aspect-square w-full">
                <div className="absolute inset-[4%] rounded-full border border-white/20 bg-gradient-to-br from-[#0ea5e9]/30 via-transparent to-transparent blur-3xl" />

                <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

                <div className="absolute inset-4 rounded-full border border-white/10">
                  <div className="absolute inset-0 rounded-full border border-cyan-300/80 animate-[spin_18s_linear_infinite]" />
                  <div className="absolute inset-3 rounded-full border border-amber-300/60 animate-[spin_24s_linear_infinite_reverse]" />
                </div>

                <div className="relative inset-0 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#111827] p-6">
                  <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-black/30 shadow-[0_40px_80px_rgba(1,9,25,0.65)]">
                    <Image
                      src="/logo-kaif.png"
                      alt="Kaif monogram"
                      fill
                      sizes="(max-width: 768px) 70vw, 360px"
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-6 rounded-full border border-white/5" />
                </div>
              </div>

              <motion.div
                className="absolute -left-2 top-6 max-w-[160px] rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-left text-sm text-white shadow-2xl backdrop-blur"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-teal-200/80">
                  Focus
                </p>
                <p className="font-semibold text-white">
                  AI-ready web platforms
                </p>
              </motion.div>

              <motion.div
                className="absolute -right-3 bottom-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-2 text-left text-sm text-white shadow-xl backdrop-blur"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-base font-bold text-black">
                  12+
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/70">
                    Products
                  </p>
                  <p className="font-semibold text-white">Shipped to prod</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
