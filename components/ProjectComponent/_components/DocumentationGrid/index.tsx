import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import type { ProjectDocument } from "@/data/projects/types";

const DocumentationGrid = ({ documents }: { documents: ProjectDocument[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {documents.map((doc) => (
        <Link
          key={doc.title}
          href={doc.href}
          target={doc.href.startsWith("http") ? "_blank" : undefined}
          rel={doc.href.startsWith("http") ? "noreferrer" : undefined}
          className="group rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-white/40"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {doc.format}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">{doc.title}</h3>
          <p className="mt-2 text-sm text-white/70">{doc.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple">
            Open document <FaArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default DocumentationGrid;
