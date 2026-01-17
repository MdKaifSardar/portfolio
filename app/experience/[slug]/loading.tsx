const ExperienceCaseStudyLoading = () => {
  return (
    <div className="bg-black-100 text-white">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 lg:py-24">
        <div
          className="mb-10 flex items-center gap-3"
          role="status"
          aria-live="polite"
        >
          <span className="relative inline-flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-purple" />
          </span>
          <p className="text-sm text-white/70">
            Loading experience highlights&hellip;
          </p>
        </div>

        <div className="space-y-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_rgba(4,7,29,0.55)]">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="space-y-5 lg:flex-1">
                <div className="h-4 w-32 rounded-full bg-white/10 animate-pulse" />
                <div className="h-16 w-full rounded-2xl bg-white/10 animate-pulse" />
                <div className="h-20 w-full rounded-2xl bg-white/10 animate-pulse" />
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={`badge-${index}`}
                      className="h-6 w-24 rounded-full bg-white/10 animate-pulse"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-4 lg:w-1/3">
                <div className="h-64 w-full rounded-2xl bg-white/10 animate-pulse" />
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((_, statIndex) => (
                    <div
                      key={`stat-${statIndex}`}
                      className="h-16 rounded-2xl bg-white/10 animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, cardIndex) => (
              <div
                key={`focus-card-${cardIndex}`}
                className="h-40 rounded-3xl border border-white/10 bg-white/5 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCaseStudyLoading;
