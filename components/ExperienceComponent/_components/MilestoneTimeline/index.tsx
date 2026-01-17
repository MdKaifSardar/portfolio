import type { ExperienceMilestone } from "@/data/experience/types";

const MilestoneTimeline = ({
  milestones,
}: {
  milestones: ExperienceMilestone[];
}) => {
  if (!milestones.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => (
        <div
          key={`${milestone.title}-${milestone.period}`}
          className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-5 md:flex-row md:items-center md:gap-6"
        >
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/50">
            <span className="text-white/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{milestone.period}</span>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white">
              {milestone.title}
            </h4>
            <p className="text-sm text-white/70">{milestone.description}</p>
          </div>
          {milestone.highlight && (
            <span className="w-fit rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Key moment
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MilestoneTimeline;
