"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

interface StickyStackProps {
  children: React.ReactNode;
  className?: string;
}

interface StickyStackItemProps {
  child: React.ReactNode;
  index: number;
  transitions: number;
  progress: MotionValue<number>;
}

const StickyStackItem = ({
  child,
  index,
  transitions,
  progress,
}: StickyStackItemProps) => {
  // Each section slides in during its own segment of the shared timeline.
  // Segment mapping: index 1 covers 0->1, index 2 covers 1->2, etc.
  const segment = 1 / transitions;
  const start = segment * (index - 1);
  const end = segment * index;

  const y =
    index === 0
      ? "0vh"
      : useTransform(progress, [start, end], ["100vh", "0vh"], {
          clamp: true,
        });

  return (
    <motion.section
      style={{ y, zIndex: index + 1 }}
      className="absolute inset-0 h-screen w-full will-change-transform"
    >
      {child}
    </motion.section>
  );
};

const StickyStack = ({ children, className }: StickyStackProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const items = React.Children.toArray(children).filter(Boolean);
  const total = items.length;
  const transitions = Math.max(total - 1, 1);

  // Single shared scroll timeline for all sections.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      // One viewport per transition so each section pins cleanly.
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {items.map((child, index) => (
          <StickyStackItem
            key={index}
            child={child}
            index={index}
            transitions={transitions}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyStack;
