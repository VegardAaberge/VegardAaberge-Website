import { SanityReference } from "@sanity/image-url/lib/types/types";

export interface ExperienceItem {
  year: string;
  works: SanityReference[];
}
