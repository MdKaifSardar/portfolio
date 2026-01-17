import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
        <ProjectDetail project={project} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
