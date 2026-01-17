import type { ExperienceLink } from "@/data/experience/types";

interface LinkGridProps {
  links: ExperienceLink[];
}

const LinkGrid = ({ links }: LinkGridProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white transition hover:border-white/40 hover:bg-white/10"
        >
          <span className="text-sm uppercase tracking-wide text-white/60">
            {link.label}
          </span>
          {link.description && (
            <span className="mt-2 text-lg font-semibold">
              {link.description}
            </span>
          )}
          <span className="mt-3 text-xs text-white/50 group-hover:text-white/80">
            {link.href.replace(/^https?:\/\//, "")}
          </span>
        </a>
      ))}
    </div>
  );
};

export default LinkGrid;
