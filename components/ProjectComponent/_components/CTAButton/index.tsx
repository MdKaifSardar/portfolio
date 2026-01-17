import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import type { ProjectLink } from "@/data/projects/types";

const buttonVariants: Record<string, string> = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "border border-white/30 text-white hover:border-white/60",
  ghost: "bg-white/10 text-white hover:bg-white/20",
};

interface CTAButtonProps {
  link: ProjectLink;
}

const CTAButton = ({ link }: CTAButtonProps) => {
  const variant = link.type ?? "ghost";
  const className = cn(
    "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:w-auto lg:px-6",
    buttonVariants[variant] ?? buttonVariants.ghost
  );

  const content = (
    <>
      <span>{link.label}</span>
      <FaArrowRight className="h-4 w-4" />
    </>
  );

  if (link.isExternal) {
    return (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
};

export default CTAButton;
