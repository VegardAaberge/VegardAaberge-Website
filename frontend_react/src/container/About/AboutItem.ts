import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface AboutItem {
  _id: string;
  title: string;
  description: string;
  imgUrl: SanityImageSource;
  priority: number;
}
