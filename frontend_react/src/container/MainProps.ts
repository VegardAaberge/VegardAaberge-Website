import {
  ExperienceItem,
  SkillItem,
  WorkExperienceItem,
} from "../container/Skills/models";
import { BrandItem, TestimonialItem } from "../container/Testimonial/models";
import { WorkItem } from "../container/Work/WorkItem";

export interface MainProps {
  works: WorkItem[];
  brands: BrandItem[];
  testimonials: TestimonialItem[];
  workExperience: WorkExperienceItem[];
  experiences: ExperienceItem[];
  skills: SkillItem[];
}
