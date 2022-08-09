/* eslint-disable @next/next/no-img-element */
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

import workImg from "../constants/workImages";

import { DynamicImageList } from "../components";

import styles from "../styles/App.module.scss";
import { Container } from "@mui/system";

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
        <Card variant="outlined" sx={{ p: 3 }} className={styles.work_item}>
          <WorkHeader title={work.title} />
          <p>
            I initially created my portfolio in 2015 with CSS, Javascript,
            Bootstrap and PHP. The old portfolio can be found here
          </p>

          <p>
            I wanted to create a portfolio that show more info about me in
            general and is built on modern technologies. I had some experience
            with React and Angular, but decided to go for React/Typescript as it
            feel similar to Jetpack Compose and has many other uses such as
            React Native
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

          <DynamicImageList cols={1}>
            <ImageListItem key={workImg.portfolio_skills.src}>
              <img src={workImg.portfolio_skills.src} alt="image" />
              <ImageListItemBar position="below" title="Front Page Skills" />
            </ImageListItem>
          </DynamicImageList>

          <p>
            After creating the front page, I decided to go for a more simple
            approach when I created the information about portfolio projects. I
            initially imported the old bootstrap into the react project, but it
            was clearly not designed for it so I looked into Material UI.
            Material UI felt similar to Bootstrap and allowed me to add
            components that are well styled and easy to customize.
          </p>

          <DynamicImageList cols={1}>
            <ImageListItem key={workImg.portfolio_work.src}>
              <img src={workImg.portfolio_work.src} alt="image" />
              <ImageListItemBar position="below" title="Work portfolio" />
            </ImageListItem>
          </DynamicImageList>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Sanity
          </Typography>

          <p>
            The tutorial also introduced me to Sanity.io which is a content
            platform that provided an easy place to store and modify data. To
            initalize it, I needed to create a santiy backend directory which
            can be seen below. Inside the directory, there is a schemas
            directory that contains the models that describe the type and
            relationship between different sanity models
          </p>

          <DynamicImageList cols={2}>
            <ImageListItem key={workImg.portfolio_sanityDir.src}>
              <img src={workImg.portfolio_sanityDir.src} alt="image" />
              <ImageListItemBar position="below" title="Directory" />
            </ImageListItem>

            <ImageListItem key={workImg.portfolio_sanitySchemas.src}>
              <img src={workImg.portfolio_sanitySchemas.src} alt="image" />
              <ImageListItemBar position="below" title="Schemas" />
            </ImageListItem>
          </DynamicImageList>

          <p>
            The models create data structures that can be modified, deleted and
            added in the sanity editor.
          </p>

          <p>Models:</p>

          <Container sx={{ paddingInline: 3 }}>
            <ul>
              <li>Abouts: The 3 info fields in page 2</li>
              <li>Brands: The brands that I have worked with</li>
              <li>Contact: Contact request sent from the contact form</li>
              <li>Experiences: Different years with work experience</li>
              <li>Skills: The skills I know</li>
              <li>Testimonals: The Testimonals that I have receieved</li>
              <li>workExperience: The different places I have worked at</li>
              <li>works: The portfolio projects I have done</li>
            </ul>
          </Container>
          <br />

          <DynamicImageList cols={1}>
            <ImageListItem key={workImg.portfolio_sanityDir.src}>
              <img src={workImg.portfolio_sanityDir.src} alt="image" />
              <ImageListItemBar position="below" title="Sanity" />
            </ImageListItem>
          </DynamicImageList>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
