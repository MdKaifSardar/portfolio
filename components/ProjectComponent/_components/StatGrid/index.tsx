import type { ProjectStat } from "@/data/projects/types";

const StatCard = ({ stat }: { stat: ProjectStat }) => (
  <div className="h-full rounded-xl bg-black/40 p-4">
    <p className="text-xs uppercase tracking-[0.3em] text-white/50 text-balance break-words">
      {stat.label}
    </p>
    <p className="mt-1 text-xl font-semibold leading-tight text-white">
      {stat.value}
    </p>
    {stat.helper && (
      <p className="text-xs text-white/60 text-pretty">{stat.helper}</p>
    )}
  </div>
);

const StatGrid = ({ stats }: { stats: ProjectStat[] }) => {
  if (!stats.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70 sm:p-4">
      <div className="md:hidden">
        <div
          className="grid snap-x snap-mandatory auto-cols-[minmax(180px,1fr)] grid-flow-col gap-3 overflow-x-auto pb-2 overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none]"
          role="list"
          aria-label="Project timeline stats"
        >
          {stats.map((stat) => (
            <div
              key={`${stat.label}-mobile`}
              role="listitem"
              className="snap-center"
            >
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden gap-4 md:grid md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default StatGrid;
