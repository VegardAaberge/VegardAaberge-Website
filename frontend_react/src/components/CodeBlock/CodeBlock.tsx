import { Paper, Grid } from "@mui/material";
import React from "react";

import styles from "./CodeBlock.module.scss";

interface Props {
  children: React.ReactNode;
}

const CodeBlock: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      className={styles.code_block}
      sx={{ backgroundColor: "#EFEFEF", p: 1 }}
      elevation={0}
    >
      <Grid
        sx={{
          backgroundColor: "#000044",
          color: "white",
          fontAttribute: "bold",
          paddingY: 0.7,
          paddingX: 2,
        }}
      >
        {children}
      </Grid>
    </Paper>
  );
};

export default CodeBlock;
