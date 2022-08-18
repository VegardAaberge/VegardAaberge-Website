import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface TestimonialItem {
  _id: string;
  name: string;
  company: string;
  position: string;
  imgurl: SanityImageSource;
  feedback: string;
  documentPath: string;
  priority: number;
}
