/* eslint-disable @next/next/no-img-element */
import React from "react";

import Grid from "@mui/material/Grid";
import {
  Card,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";

import { WorkItem } from "../../container/Work/WorkItem";
import WorkSummary from "../Components/WorkSummary";
import WorkHeader from "../Components/WorkHeader";
import { workImages } from "../../constants";
import { DynamicImageList } from "../../components";
import workTheme from "../../styles/workTheme";

import styles from "../WorkApp.module.scss";

interface Props {
  work: WorkItem;
}

const PortfolioWebsite: React.FC<Props> = ({ work }) => {
  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));

  return (
    <Grid container spacing={isMobile ? 1 : 3}>
      <Grid item xl={4}>
        <Card variant="outlined">
          <WorkSummary work={work} />
        </Card>
      </Grid>
      <Grid item xl={8}>
        <Card variant="outlined" sx={{ p: 3 }} className={styles.work_item}>
          <WorkHeader title={work.title} />
          <p>
            Unizite provides field construction software for construction
            projects. Unizite has a web portal and an app that can be used in
            the field. In 2016, I was tasked with developing a mobile app on iOS
            and Android. It is a large app that allows multiple construction
            users to collaborate using a graphical interface.
          </p>
          <p>
            The basic interface was coded in Xamarin Forms with Xaml. However,
            the drawing interface needed to be implement natively and was coded
            with C# Java on Android and C# Swift on iOS. That gave me experience
            with Android and iOS development.
          </p>
          <p>
            Some other developers had created a basic interface for the app, and
            I was tasked at adding new features, removing bugs, and improving
            the look of the app. After a few years of developing the app, I got
            two coworkers from Sweden, that worked along with me, and we created
            a totally new interface for the app to improve the workflow of the
            app.
          </p>
          <p>
            In 2020 Unizite was bought up by Tribia. They replaced the Swedish
            employees with two Indian contractors that I helped train and
            manage. We then added some functionality to replace the missing
            features from the old iOS app made by the founder of Unizite added
            UI tests to the app and started integrating the new 3D viewer from
            another department in Tribia.
          </p>
          <p>
            Here are some screenshots that show how a user will navigate to the
            drawing selection page and then open the PDF page
          </p>
          <DynamicImageList cols={3}>
            <ImageListItem key={workImages.unizite_frontPage.src}>
              <img
                src={workImages.unizite_frontPage.src}
                alt="Unizite Front Page"
              />
              <ImageListItemBar position="below" title="iOS Front Page" />
            </ImageListItem>

            <ImageListItem key={workImages.unizite_drawingPage.src}>
              <img
                src={workImages.unizite_drawingPage.src}
                alt="Unizite Drawing Page"
              />
              <ImageListItemBar position="below" title="iOS Select Drawing" />
            </ImageListItem>
            <ImageListItem key={workImages.unizite_pdfPage.src}>
              <img
                src={workImages.unizite_pdfPage.src}
                alt="Unizite PDF Page"
              />
              <ImageListItemBar position="below" title="iOS Show PDF" />
            </ImageListItem>
          </DynamicImageList>

          <p></p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
