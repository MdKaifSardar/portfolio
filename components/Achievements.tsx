"use client";

import { achievements, certifications } from "@/data";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <h1 className="heading">
        Proof of <span className="text-purple">impact & credibility</span>
      </h1>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 shadow-[0_25px_80px_rgba(4,7,29,0.55)]">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -right-24 top-[-20%] h-64 w-64 rounded-full bg-purple/30 blur-3xl"
              aria-hidden
            />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Measurements
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Product achievements
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Signal captured from shipped platforms, looking at the mix of
            retention, revenue, and experiential performance.
          </p>

          <div className="mt-8 grid gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-4xl font-semibold text-purple">
                    {item.metric}
                  </span>
                  {item.proof && (
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                      {item.proof}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#050814]/80 p-8 shadow-[0_25px_80px_rgba(4,7,29,0.45)]">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Certifications
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Credible specializations
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Independent boards validating architecture, machine learning, and
            mobile build expertise.
          </p>

          <div className="mt-6 space-y-5">
            {certifications.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/15 bg-black/30 p-5 transition hover:border-white/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-white/60">
                  <span className="text-xs uppercase tracking-[0.4em]">
                    {item.year}
                  </span>
                  {item.credentialId && (
                    <span className="text-xs font-mono text-white/50">
                      {item.credentialId}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">{item.issuer}</p>
                <p className="mt-3 text-sm text-white/70">{item.focus}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Achievements;
