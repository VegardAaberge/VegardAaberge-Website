import { SanityReference } from "@sanity/image-url/lib/types/types";

export interface WorkExperienceItem {
  _id: string;
  name: string;
  company: string;
  desc: string;
  skillsUsed: Array<SanityReference>;
}
