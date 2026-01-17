import type { ExperienceResponsibility } from "@/data/experience/types";

const ResponsibilityGrid = ({
  responsibilities,
}: {
  responsibilities: ExperienceResponsibility[];
}) => {
  if (!responsibilities.length) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {responsibilities.map((responsibility) => (
        <div
          key={responsibility.title}
          className="rounded-3xl border border-white/10 bg-black/30 p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Responsibility
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {responsibility.title}
          </h3>
          <p className="mt-3 text-sm text-white/70">
            {responsibility.description}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {responsibility.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple"></span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResponsibilityGrid;
