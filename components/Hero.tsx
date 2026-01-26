import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { HiOutlineComputerDesktop, HiOutlineCpuChip } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black-100 lg:h-[110vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 h-full w-full">
        <Spotlight
          className="-top-40 -left-10 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

        <div className="absolute left-0 top-0 h-full w-full bg-white dark:bg-black-100">
          <div className="absolute inset-0 bg-grid-black-100/[0.12] dark:bg-grid-white/[0.04]" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div>
      </div>

      <div className="relative z-10 grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 pt-20 md:px-10 lg:grid-cols-12 lg:gap-0 lg:pt-0">
        {/* LEFT COLUMN: Main Text & CTAs (5 cols) */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-blue-100 backdrop-blur-sm">
            Systems Engineering & Applied AI
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            MD Kaif Sardar
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Full-Stack Engineer & B.Tech Candidate (KGEC &apos;27). Building
            scalable, secure applications with a focus on clean APIs and system
            design. Tech-curious and ready to tackle real-world challenges in
            AI/ML and Cloud.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#contact" className="w-full sm:w-auto">
              <MagicButton
                title="Chat with me"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="!bg-[#1a1a2e]"
              />
            </Link>
          </div>
        </div>

        {/* CENTER COLUMN: Hero Image (4 cols) */}
        <div className="relative flex min-h-[400px] flex-col items-center justify-center lg:col-span-4 lg:min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 flex w-full max-w-[400px] justify-center lg:max-w-none"
          >
            {/* Gradient Aura */}
            <div className="absolute bottom-0 left-1/2 h-[70%] w-[120%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-purple-500/30 to-transparent blur-3xl" />

            {/* Image Container with Simple Hover Nudge */}
            <div className="relative flex h-full w-full flex-col items-center justify-end">
              <div className="neon-glow relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_80px_-20px_rgba(168,85,247,0.6)] transition-transform duration-500 hover:translate-x-3 sm:h-[400px] sm:w-[400px]">
                <Image
                  src="/Hero/profile-image.png"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Services (3 cols) */}
        <div className="flex flex-col justify-center gap-6 pb-20 lg:col-span-3 lg:gap-10 lg:pb-0 lg:pl-6">
          {/* Service 1 - Top (Hug Left) */}
          <div className="group flex flex-row items-center gap-4 transition-all duration-500 lg:-translate-x-6 lg:flex-col lg:items-start lg:gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-900/20 text-2xl text-blue-400 transition group-hover:border-blue-500/60 group-hover:bg-blue-900/40 group-hover:text-amber-300">
              <HiOutlineComputerDesktop />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                Full Stack Engineering
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60 lg:mt-2">
                Building scalable, secure, and production-ready applications
                with modern frameworks.
              </p>
            </div>
          </div>

          {/* Service 2 - Middle (Push Right) */}
          <div className="group flex flex-row items-center gap-4 transition-all duration-500 lg:translate-x-10 lg:flex-col lg:items-start lg:gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-900/20 text-2xl text-blue-400 transition group-hover:border-blue-500/60 group-hover:bg-blue-900/40 group-hover:text-amber-300">
              <HiOutlineCpuChip />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                System Architecture
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60 lg:mt-2">
                Designing clean APIs and robust, high-performance systems for
                real-world problems.
              </p>
            </div>
          </div>

          {/* Service 3 - Bottom (Hug Left) */}
          <div className="group flex flex-row items-center gap-4 transition-all duration-500 lg:-translate-x-6 lg:flex-col lg:items-start lg:gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-900/20 text-2xl text-blue-400 transition group-hover:border-blue-500/60 group-hover:bg-blue-900/40 group-hover:text-amber-300">
              <MdOutlineDesignServices />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                Applied AI & Cloud
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60 lg:mt-2">
                Integrating emerging tech solutions and managing end-to-end
                intelligent features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
