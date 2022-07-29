import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface WorkItem {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: SanityImageSource;
  tags: string[];
}
