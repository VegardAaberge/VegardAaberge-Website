import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface TestimonialItem {
  _id: string;
  name: string;
  company: string;
  imgurl: SanityImageSource;
  feedback: string;
}
