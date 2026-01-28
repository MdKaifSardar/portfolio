import Link from "next/link";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../MagicButton";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

interface HeroTextProps {
  delay?: number;
}

const HeroText = ({ delay = 0 }: HeroTextProps) => {
  return (
    <div className="flex h-full flex-col justify-center lg:col-span-5">
      {/* Name - Text Slide Reveal */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          MD Kaif Sardar
        </motion.h1>
      </div>

      {/* Bio - Typewriter Effect (Starts at delay + 0.5s) */}
      <div className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
        {/* Note: TextGenerateEffect needs to be triggered. We can use a simple key change or just assume it starts on mount. 
            If we need it to wait, we might need a motion wrapper. 
            For now, let's wrap it in a motion div to control opacity/visibility if needed, 
            OR just let it run. The user wants sequence. 
            If TextGenerateEffect runs immediately on mount, it breaks sequence on Mobile (where Text is last).
            I will wrap the bio in a motion div that starts 'hidden'.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: delay + 0.5 }}
        >
          <TextGenerateEffect
            words="Full-Stack Engineer & B.Tech Candidate (KGEC '27). Building scalable, secure applications with a focus on clean APIs and system design. Tech-curious and ready to tackle real-world challenges in AI/ML and Cloud."
            className="text-base text-white/70 sm:text-lg font-normal"
            duration={1.0}
          />
        </motion.div>
      </div>

      {/* Button - Opacity Fade In Only (Starts at delay + 1.6s) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 1.6, ease: "linear" }}
        className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <Link href="#projects" className="w-full sm:w-auto">
          <MagicButton
            title="Checkout my work"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="!bg-[#1a1a2e]"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroText;
