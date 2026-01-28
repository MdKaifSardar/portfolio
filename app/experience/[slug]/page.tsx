import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
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
        <FloatingNav navItems={navItems} />
        <div className="mt-8 space-y-16 lg:space-y-20">
          <ExperienceDetail experience={caseStudy} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetailPage;
