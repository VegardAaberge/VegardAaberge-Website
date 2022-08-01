import React from "react";

import AabergeBrudesalong from "./AabergeBrudesalong";
import BlackOilCalculator from "./BlackOilCalculator";
import PortfolioWebsite from "./PortfolioWebsite";

interface Props {
  projectLink: String;
}

const WorkApp: React.FC<Props> = ({ projectLink }) => {
  switch (projectLink) {
    case "aaberge_brudesalong":
      return <AabergeBrudesalong />;
    case "black_oil_calculator":
      return <BlackOilCalculator />;
    case "portfolio_website":
      return <PortfolioWebsite />;
    default:
      return <div>Page for Project Link is missing</div>;
  }
};

export default WorkApp;
