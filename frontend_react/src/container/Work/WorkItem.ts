import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface WorkItem {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: SanityImageSource;
  tags: string[];
}
