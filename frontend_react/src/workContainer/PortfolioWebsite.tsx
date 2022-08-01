import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AlignItemsList from "./AlignItemsList";
import { Card } from "@mui/material";

const PortfolioWebsite: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <p>Made with React, Next.js, scss, javascript</p>
          <p>Hosted on ubuntu server</p>
          <p>Github: https://github.com/</p>
          <p>Website: https://vegardaaberge.no</p>
        </Card>
      </Grid>
      <Grid item md={8}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
