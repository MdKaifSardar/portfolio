import GalleryCarousel from "@/components/shared/GalleryCarousel";
import type { ProjectGalleryItem } from "@/data/projects/types";

const GalleryGrid = ({ gallery }: { gallery: ProjectGalleryItem[] }) => {
  if (!gallery.length) {
    return null;
  }

  return (
    <GalleryCarousel items={gallery} ariaLabel="Project gallery carousel" />
  );
};

export default GalleryGrid;
