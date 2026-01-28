import { motion } from "framer-motion";
import { Layers, Server, BrainCircuit } from "lucide-react";

interface HeroServicesProps {
  delay?: number;
}

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8, // Slower fade for smoothness
      ease: "easeOut",
    },
  },
};

const services = [
  {
    icon: Layers,
    title: "Full Stack Engineering",
    desc: "Building scalable, secure, and production-ready applications with modern frameworks.",
  },
  {
    icon: Server,
    title: "System Architecture",
    desc: "Designing clean APIs and robust, high-performance systems for real-world problems.",
  },
  {
    icon: BrainCircuit,
    title: "Applied AI & Cloud",
    desc: "Integrating emerging tech solutions and managing end-to-end intelligent features.",
  },
];

const HeroServices = ({ delay = 2.4 }: HeroServicesProps) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex h-full flex-col justify-center gap-4 lg:col-span-3 lg:gap-10 lg:pl-6"
    >
      {services.map(({ icon: Icon, title, desc }, index) => {
        // Arc Logic: Outward curve (Concave relative to screen edge, Convex relative to image?)
        // Previous working state: Middle pushed right.
        // Mobile: We want a similar subtle arc?
        // We'll use a smaller translation for mobile (translate-x-4) and larger for desktop (lg:translate-x-12).
        const arcClass =
          index === 1
            ? "translate-x-4 lg:translate-x-12"
            : "translate-x-0 lg:translate-x-0";

        return (
          <motion.div
            key={title}
            variants={itemVariants}
            className={`group flex flex-row items-center gap-3 transition-transform duration-500 ${arcClass}`}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-900/20 text-xl text-blue-400 transition group-hover:border-blue-500/60 group-hover:bg-blue-900/40 group-hover:text-amber-300 lg:h-12 lg:w-12 lg:rounded-2xl lg:text-2xl">
              <Icon />
            </div>

            <div className="text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple lg:text-sm">
                {title}
              </h3>
              {/* Reduced text for mobile, full for desktop */}
              {/* Hidden on mobile, visible on desktop */}
              <p className="hidden lg:block mt-2 text-sm leading-relaxed text-white/80">
                {desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default HeroServices;
