import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ProjectDetail from "../../../components/ProjectComponent";
import { getProjectBySlug, getProjectPaths } from "@/data/projects";

export function generateStaticParams() {
  return getProjectPaths();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} case study`,
    description: project.description,
  };
}

const ProjectDetailPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black-100 text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-24">
        <FloatingNav navItems={navItems} />

        <div className="mt-8">
          <ProjectDetail project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
