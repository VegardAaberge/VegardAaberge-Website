import React from "react";
import { WorkItem } from "../container/Work/WorkItem";

import AabergeBrudesalong from "./AabergeBrudesalong";
import BlackOilCalculator from "./BlackOilCalculator";
import PortfolioWebsite from "./PortfolioWebsite";

interface Props {
  work: WorkItem;
}

const WorkApp: React.FC<Props> = ({ work }) => {
  switch (work.projectLink) {
    case "aaberge_brudesalong":
      return <AabergeBrudesalong />;
    case "black_oil_calculator":
      return <BlackOilCalculator />;
    case "portfolio_website":
      return <PortfolioWebsite work={work} />;
    default:
      return <div>Page for Project Link is missing</div>;
  }
};

export default WorkApp;
