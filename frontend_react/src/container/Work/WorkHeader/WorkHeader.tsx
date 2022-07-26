import React from "react";

import mainStyles from "./../../../styles/App.module.scss";

const WorkHeader: React.FC = () => {
  return (
    <h2 className={mainStyles.head_text}>
      My <span>Portfolio</span>
    </h2>
  );
};

export default WorkHeader;
