import type { ProjectFeature } from "@/data/projects/types";

const FeatureGrid = ({ features }: { features: ProjectFeature[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
        >
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="text-xl">{feature.icon}</span>
            <span className="uppercase tracking-[0.3em] text-xs text-white/60">
              Feature
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            {feature.title}
          </h3>
          <p className="mt-3 text-white/70">{feature.description}</p>
          {feature.tags && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1"
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

export default FeatureGrid;
