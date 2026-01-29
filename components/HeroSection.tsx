"use client";

import { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import HeroText from "./hero/HeroText";
import HeroImage from "./hero/HeroImage";
import HeroServices from "./hero/HeroServices";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile(); // Check immediately on mount/hydrate
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation Sequence Configuration
  const desktopDelays = {
    text: 0,
    image: 1.9,
    services: 2.4,
  };

  const mobileDelays = {
    image: 0,
    services: 0.5,
    text: 1.6, // Strictly after services (0.5 start + 0.8 duration + 0.2 stagger ~ 1.5s finish)
  };

  const delays = isMobile ? mobileDelays : desktopDelays;

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black-100 lg:h-[110vh]">
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

      <div
        key={isMobile ? "mobile-layout" : "desktop-layout"}
        className="relative z-10 grid w-full max-w-[1400px] grid-cols-2 gap-4 px-4 pt-14 md:px-10 md:pt-32 lg:grid-cols-12 lg:gap-0 lg:pt-0"
      >
        <div className="col-span-2 order-3 lg:col-span-5 lg:order-1">
          <HeroText delay={delays.text} />
        </div>
        <div className="col-span-1 order-1 lg:col-span-4 lg:order-2">
          <HeroImage delay={delays.image} />
        </div>
        <div className="col-span-1 order-2 lg:col-span-3 lg:order-3">
          <HeroServices delay={delays.services} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
