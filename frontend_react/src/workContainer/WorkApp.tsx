import React from "react";
import { AabergeBrudesalong } from "./";

interface Props {
  projectLink: String;
}

const WorkApp: React.FC<Props> = ({ projectLink }) => {
  if (projectLink == "aaberge_brudesalong") {
    return <AabergeBrudesalong />;
  } else {
    return (
      <div>
        <div>Page for Project Link is missing</div>
      </div>
    );
  }
};

export default WorkApp;
