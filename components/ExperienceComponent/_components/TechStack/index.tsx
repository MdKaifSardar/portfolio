interface TechStackProps {
  badges: string[];
}

const TechStack = ({ badges }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => (
        <span
          key={badge}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10"
        >
          {badge}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
