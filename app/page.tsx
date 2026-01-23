"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Achievements from "@/components/Achievements";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import StickyStack from "@/components/StickyStack";
import StickyStackSection from "@/components/StickyStackSection";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />

        <StickyStack>
          <StickyStackSection>
            <Hero />
          </StickyStackSection>

          <StickyStackSection>
            <Grid />
          </StickyStackSection>

          <StickyStackSection>
            <Achievements />
          </StickyStackSection>

          <StickyStackSection>
            <RecentProjects />
          </StickyStackSection>

          <StickyStackSection>
            <Experience />
          </StickyStackSection>

          <StickyStackSection>
            <Footer />
          </StickyStackSection>
        </StickyStack>
      </div>
    </main>
  );
};

export default Home;
