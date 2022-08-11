import React from "react";

import { Typography } from "@mui/material";
import { WorkItem } from "../../container/Work/WorkItem";

interface Props {
  title: string;
}

const WorkHeader: React.FC<Props> = ({ title }) => {
  return (
    <Typography variant="h4" align="center" sx={{ p: 1 }}>
      {title}
    </Typography>
  );
};

export default WorkHeader;
