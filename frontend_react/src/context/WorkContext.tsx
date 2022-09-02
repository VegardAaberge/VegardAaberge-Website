import React, { createContext } from "react";
import { WorkItem } from "../container/Work/WorkItem";
import { WorkContextType } from "./WorkContextType";

interface Props {
  works: WorkItem[];
  projectLink: string;
  children: React.ReactNode;
}

export const WorkContext = createContext<WorkContextType>({
  works: [],
  work: undefined,
  projectLink: "",
});

const WorkContextProvider: React.FC<Props> = ({
  works,
  projectLink,
  children,
}) => {
  const work = works.find((work) => work.projectLink == projectLink);
  return (
    <WorkContext.Provider value={{ works, work, projectLink }}>
      {children}
    </WorkContext.Provider>
  );
};

export default WorkContextProvider;
