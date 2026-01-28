import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageProps {
  delay?: number;
}

const HeroImage = ({ delay = 1.9 }: HeroImageProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:col-span-4 lg:min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
        className="relative z-20 flex w-full justify-center lg:max-w-none"
      >
        {/* Gradient Aura */}
        <div className="absolute bottom-0 left-1/2 h-[70%] w-[120%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-purple-500/30 to-transparent blur-3xl" />

        {/* Image Container */}
        <div className="relative flex h-full w-full flex-col items-center justify-end">
          <div className="neon-glow relative h-[160px] w-[160px] overflow-hidden rounded-full  shadow-[0_0_80px_-20px_rgba(168,85,247,0.6)] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
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
  );
};

export default HeroImage;
