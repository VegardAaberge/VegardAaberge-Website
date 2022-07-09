import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface AboutItem {
  title: string;
  description: string;
  imgUrl: SanityImageSource;
}
