import type { ExperienceAchievement } from "@/data/experience/types";

const AchievementGrid = ({
  achievements,
}: {
  achievements: ExperienceAchievement[];
}) => {
  if (!achievements.length) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {achievements.map((achievement) => (
        <div
          key={achievement.title}
          className="rounded-3xl border border-purple/30 bg-gradient-to-br from-purple/20 via-purple/5 to-transparent p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            {achievement.title}
          </p>
          <p className="mt-3 text-4xl font-semibold text-white">
            {achievement.value}
          </p>
          <p className="mt-2 text-sm text-white/70">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AchievementGrid;
