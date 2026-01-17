import type { ExperienceFocusArea } from "@/data/experience/types";

const FocusAreaGrid = ({
  focusAreas,
}: {
  focusAreas: ExperienceFocusArea[];
}) => {
  if (!focusAreas.length) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {focusAreas.map((area) => (
        <div
          key={area.title}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-6"
        >
          <div className="text-3xl">{area.icon}</div>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            {area.title}
          </h3>
          <p className="mt-3 text-white/70">{area.description}</p>
          {area.tags && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FocusAreaGrid;
