import { SanityReference } from "@sanity/image-url/lib/types/types";

export interface ExperienceItem {
  _id: string;
  year: string;
  works: SanityReference[];
}
