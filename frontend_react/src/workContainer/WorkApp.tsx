import React from "react";
import { WorkItem } from "../container/Work/WorkItem";

import AabergeBrudesalong from "./AabergeBrudesalong";
import BlackOilCalculator from "./BlackOilCalculator";
import DocMerge from "./DocMerge";
import MyPlaygroupApp from "./MyPlaygroupApp";
import PortfolioWebsite from "./PortfolioWebsite";
import UniziteApp from "./UniziteApp";
import UniziteCRM from "./UniziteCRM";

interface Props {
  work: WorkItem;
}

const WorkApp: React.FC<Props> = ({ work }) => {
  switch (work.projectLink) {
    case "aaberge_brudesalong":
      return <AabergeBrudesalong />;
    case "black_oil_calculator":
      return <BlackOilCalculator />;
    case "docmerge":
      return <DocMerge work={work} />;
    case "my_playgroup_app":
      return <MyPlaygroupApp work={work} />;
    case "portfolio_website":
      return <PortfolioWebsite work={work} />;
    case "unizite":
      return <UniziteApp work={work} />;
    case "unizite_crm":
      return <UniziteCRM work={work} />;
    default:
      return <div>Page for Project Link is missing</div>;
  }
};

export default WorkApp;
