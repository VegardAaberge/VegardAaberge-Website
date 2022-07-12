import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface BrandItem {
  _id: string;
  imgUrl: SanityImageSource;
  name: string;
}
