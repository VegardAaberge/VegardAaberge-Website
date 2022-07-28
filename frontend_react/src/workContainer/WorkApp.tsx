import React from "react";

import AabergeBrudesalong from "./AabergeBrudesalong";
import BlackOilCalculator from "./BlackOilCalculator";

interface Props {
  projectLink: String;
}

const WorkApp: React.FC<Props> = ({ projectLink }) => {
  switch (projectLink) {
    case "aaberge_brudesalong":
      return <AabergeBrudesalong />;
    case "black_oil_calculator":
      return <BlackOilCalculator />;
    default:
      return <div>Page for Project Link is missing</div>;
  }
};

export default WorkApp;
