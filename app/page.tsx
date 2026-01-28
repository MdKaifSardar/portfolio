"use client";

import { navItems } from "@/data";

import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Achievements from "@/components/Achievements";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-black-100 mx-auto">
      {/* Hero handles its own full-width layout */}
      <HeroSection />

      {/* Constrained container for the rest of the content */}
      <div className="w-full max-w-7xl px-5 sm:px-10">
        <FloatingNav navItems={navItems} />
        <Grid />
        <Achievements />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
