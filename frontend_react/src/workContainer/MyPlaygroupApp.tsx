/* eslint-disable @next/next/no-img-element */
import React from "react";

import Grid from "@mui/material/Grid";
import {
  Card,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

import { WorkItem } from "../container/Work/WorkItem";
import WorkSummary from "./Components/WorkSummary";
import WorkHeader from "./Components/WorkHeader";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";

import { workImages } from "../constants";

import styles from "../styles/App.module.scss";

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
            MyPlaygroup App is an app created for the business MyPlaygroup. The
            purpose of the app is mainly to manage customers classes, payments
            and plans. It also provided the users some information about their
            classes and how much they have paid.
          </p>

          <p>
            As iOS is not big in China and we have Kotlin Multiplatform, then I
            decided to built it natively for Android. I had experience with
            Android on Xamarin, but it was written in C#. To understand Android
            platform better I followed some tutorials from philipp lackner.
            After going through the Android Fundemandels playlist I discovered
            Jetpack Compose.
          </p>

          <p>
            Jetpack compose do not use xml/xaml as in Xamarin and Android
            Native. This means that no adapters is required and it doesn't use
            view bindings and instead rely on a state defined in the viewmodel.
            This created a better connection with the data and the view and
            reduced the amount of files required to show a view.
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            App
          </Typography>

          <p>
            After logging into the app, then admin will be navigated to the
            admin panel and users will be navigated into the user panel.
          </p>

          <p>
            After logging into the app, then admin will be navigated to the
            admin panel. The admin panel allows the admin to create and edit
            daily classes, user's monthly plans, user's payments and the users
            themselves. Admin can also edit its own information and send
            messages to users.
          </p>

          <p>Here is a video recording showing the admin panel</p>

          <YoutubeEmbed embedId="Zm_Pas6ss3s" />

          <p>
            Non-admin users get logged into the user panel. They will first need
            to fill in some information about themselves and take a profile
            photo. Then they can login with their new password and get logged
            into the users panel. Here they can see which classes they have,
            chat with admin and change their info
          </p>

          <p>
            The chat screen uses websockets to get new messages in real time.
            Each time a user open the chat screen, it will create a secure chat
            session with admin.
          </p>

          <ImageList cols={2}>
            <ImageListItem key={workImages.myplaygroup_camera.src}>
              <img src={workImages.myplaygroup_camera.src} alt="image" />
              <ImageListItemBar position="below" title="Profile Photo" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_profile.src}>
              <img src={workImages.myplaygroup_profile.src} alt="image" />
              <ImageListItemBar position="below" title="Create Profile" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_classes.src}>
              <img src={workImages.myplaygroup_classes.src} alt="image" />
              <ImageListItemBar position="below" title="User's classes" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_settings.src}>
              <img src={workImages.myplaygroup_settings.src} alt="image" />
              <ImageListItemBar position="below" title="User's settings" />
            </ImageListItem>
          </ImageList>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Backend
          </Typography>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Ubuntu Server
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
