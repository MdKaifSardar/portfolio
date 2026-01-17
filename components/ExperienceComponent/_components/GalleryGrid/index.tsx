import GalleryCarousel from "@/components/shared/GalleryCarousel";
import type { ExperienceGalleryItem } from "@/data/experience/types";

const GalleryGrid = ({ gallery }: { gallery: ExperienceGalleryItem[] }) => {
  if (!gallery.length) {
    return null;
  }

  return (
    <GalleryCarousel items={gallery} ariaLabel="Experience gallery carousel" />
  );
};

export default GalleryGrid;
