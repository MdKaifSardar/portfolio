"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface StickyStackSectionProps {
  children: React.ReactNode;
  className?: string;
}

const StickyStackSection = ({
  children,
  className,
}: StickyStackSectionProps) => {
  return (
    <div className={cn("h-screen w-full bg-black-100", className)}>
      {children}
    </div>
  );
};

export default StickyStackSection;
