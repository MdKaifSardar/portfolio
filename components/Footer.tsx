import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden pt-20 pb-10"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
        <span className="select-none text-[28vw] font-black uppercase tracking-[0.1em] text-white/5 md:text-[18vw]">
          KAIF
        </span>
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Open to <span className="text-purple">full-time</span> roles and
          internships
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m a software developer and student looking for impactful teams
          building data, web, or platform experiences.
        </p>
        <a href="mailto:mkaifsard564773@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 MD Kaif Sardar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
