import React, { ReactElement, ReactFragment } from "react";
import { ImageList, useMediaQuery, useTheme } from "@mui/material";

import workTheme from "../../styles/WorkTheme";

interface Props {
  children: ReactFragment | ReactElement;
  cols: number;
}

const DynamicMediaList: React.FC<Props> = ({ children, cols }) => {
  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));

  return <ImageList cols={isMobile ? 1 : cols}>{children}</ImageList>;
};

export default DynamicMediaList;
