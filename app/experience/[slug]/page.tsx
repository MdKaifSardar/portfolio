import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ExperienceDetail from "@/components/ExperienceComponent";
import { getExperienceBySlug, getExperiencePaths } from "@/data/experience";

export function generateStaticParams() {
  return getExperiencePaths();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const experience = await getExperienceBySlug(params.slug);

  if (!experience) {
    return {
      title: "Experience not found",
    };
  }

  return {
    title: `${experience.role} at ${experience.company}`,
    description: experience.excerpt,
  };
}

const ExperienceDetailPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const experience = await getExperienceBySlug(params.slug);

  if (!experience) {
    notFound();
  }

  const caseStudy = experience;

  return (
    <div className="bg-black-100 text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          aria-label="Return to the landing page"
        >
          <span className="text-white/50">←</span> Back to home
        </Link>

        <div className="mt-8 space-y-16 lg:space-y-20">
          <ExperienceDetail experience={caseStudy} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
