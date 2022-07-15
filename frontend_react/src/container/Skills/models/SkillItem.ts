import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SkillItem {
  _id: string;
  name: string;
  icon: SanityImageSource;
}
