import React from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import {
  Box,
  Card,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

import { WorkItem } from "../container/Work/WorkItem";
import WorkSummary from "./Components/WorkSummary";
import WorkHeader from "./Components/WorkHeader";
import portfolioImg from "../constants/portfolioImages";

interface Props {
  work: WorkItem;
}

const PortfolioWebsite: React.FC<Props> = ({ work }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card variant="outlined">
          <WorkSummary work={work} />
        </Card>
      </Grid>
      <Grid item md={8}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <WorkHeader title={work.title} />
          <p>
            I initially created my portfolio in 2015 with CSS, Javascript,
            Bootstrap and PHP. The old portfolio can be found here
          </p>
          <br />
          <p>
            I wanted to create a portfolio that show more info about me in
            general and is built on modern technologies. I had some experience
            with React and Angular, but decided to go for React/Typescript as it
            feel similar to Jetpack Compose and can be used in React Native.
          </p>
          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Front Page
          </Typography>
          <p>
            For the front page, I followed a tutorial
            https://youtu.be/3HNyXCPDQ7Q to create the initial look, but wrote
            it in Typescript as I wanted type safety and then made significant
            modifications. I believe in following tutorials to learn initial
            concepts instead of creating everything from sratch.
          </p>
          <br />
          <p>
            The tutorial also introduced me to Sanity.io which is a content
            platform that provided an easy place to store and modify data. To
            initalize it, I needed to create a santiy backend directory which
            can be seen below. Inside the directory, there is a schemas
            directory that contains the models that describe the type and
            relationship between different sanity models
          </p>
          <br />
          <ImageList cols={2}>
            <ImageListItem key={portfolioImg.sanityDir.src}>
              <img src={portfolioImg.sanityDir.src} alt="image" />
              <ImageListItemBar position="below" title="Directory" />
            </ImageListItem>

            <ImageListItem key={portfolioImg.sanitySchemas.src}>
              <img src={portfolioImg.sanitySchemas.src} alt="image" />
              <ImageListItemBar position="below" title="Schemas" />
            </ImageListItem>
          </ImageList>
          <br />
          <p></p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
