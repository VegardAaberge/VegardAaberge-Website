import { WorkItem } from "../container/Work/WorkItem";

export interface WorkContextType {
  works: WorkItem[];
  work: WorkItem | undefined;
  projectLink: string;
}
