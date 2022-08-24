import React, { ReactElement, ReactFragment } from "react";
import { Grid, ImageList, useMediaQuery, useTheme } from "@mui/material";

import workTheme from "../../styles/workTheme";

interface Props {
  children: ReactFragment | ReactElement;
  cols: number;
  maxWidth?: number;
}

const DynamicMediaList: React.FC<Props> = ({ children, cols, maxWidth }) => {
  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));

  if (maxWidth !== undefined) {
    return (
      <ImageList cols={isMobile ? 1 : cols} gap={8}>
        <Grid sx={{ maxWidth: maxWidth, margin: "auto" }}>{children}</Grid>
      </ImageList>
    );
  }

  return (
    <ImageList cols={isMobile ? 1 : cols} gap={8}>
      {children}
    </ImageList>
  );
};

export default DynamicMediaList;
