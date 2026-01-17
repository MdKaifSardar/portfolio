import type { ReactNode } from "react";

interface SectionShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

const SectionShell = ({
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <p className="text-white/70">{description}</p>
      </div>
      {children}
    </section>
  );
};

export default SectionShell;
