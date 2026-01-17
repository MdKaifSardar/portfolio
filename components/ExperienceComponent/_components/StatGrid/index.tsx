import type { ExperienceStat } from "@/data/experience/types";

const StatCard = ({ stat }: { stat: ExperienceStat }) => (
  <div className="h-full rounded-xl bg-black/40 p-3">
    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/50">
      {stat.label}
    </p>
    <p className="mt-1.5 text-xl font-semibold text-white text-balance">
      {stat.value}
    </p>
    {stat.helper && (
      <p className="text-[0.65rem] text-white/60 text-pretty">{stat.helper}</p>
    )}
  </div>
);

const StatGrid = ({ stats }: { stats: ExperienceStat[] }) => {
  if (!stats.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
      <div className="md:hidden">
        <div
          className="grid snap-x snap-mandatory auto-cols-[minmax(150px,1fr)] grid-flow-col gap-2.5 overflow-x-auto pb-2 overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none]"
          role="list"
          aria-label="Experience stats"
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
      <div className="hidden gap-3 md:grid md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default StatGrid;
