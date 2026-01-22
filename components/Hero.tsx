import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-14 pt-24 md:pb-20 md:pt-28 lg:pt-24">
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

      <div className="relative z-10 my-10 flex justify-center md:my-16">
        <div className="flex max-w-[92vw] flex-col items-center justify-center text-center sm:max-w-xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-[11px] uppercase tracking-[0.35em] text-blue-100 sm:text-xs">
            Systems engineering & applied ai
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Building resilient software for trading, learning, and AI tooling"
            className="text-center text-[32px] leading-tight sm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl"
          />

          <p className="mb-5 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            I&apos;m MD Kaif Sardar, a software engineer building scalable web
            platforms and intelligent systems.
          </p>

          <a href="#projects">
            <MagicButton
              title="View my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
