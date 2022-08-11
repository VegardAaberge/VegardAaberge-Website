import {
  SanityImageSource,
  SanityReference,
} from "@sanity/image-url/lib/types/types";

export interface WorkItem {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  company: string;
  period: string;
  imgUrl: SanityImageSource;
  skillsUsed: Array<SanityReference>;
  skillsUsedStrings: Array<string>;
  tags: string[];
}
