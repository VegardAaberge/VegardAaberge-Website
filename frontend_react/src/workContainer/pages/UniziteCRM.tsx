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
            After I started working with unizite, they asked me to create a new
            CRM system that the sales could use to add customer information.
            Earlier, they were using excel sheets, which resulted in multiple
            sets of data and duplicate information.
          </p>
          <p>
            I created the front-end of the CRM system with CSS, javascript and
            Bootstrap. It communicates with the backend by using Ajax to
            communicate with PHP scripts. The PHP script will then connect to
            the database and provide the requested data back to the client.
          </p>
          <p>
            A login system was required to ensure that outsiders can&apos;t
            access the CRM system. After the user has written the correct
            username and password, a PHP script will convert with salt and
            verify the password. If it is correct, then it will store the
            authentication in session storage.
          </p>

          <DynamicImageList cols={1} maxWidth={400}>
            <ImageListItem key={workImages.crm_login.src}>
              <img src={workImages.crm_login.src} alt="CRM Login Screen" />
              <ImageListItemBar position="below" title="Login Screen" />
            </ImageListItem>
          </DynamicImageList>

          <p>
            After login, the user will be redirected to the main screen. It
            displays info about the companies, contacts, orders, tickets and
            products.
          </p>
          <p>
            New records can be created with the plus sign. Existing records can
            be found manually or searched through Free Search. Inside the info
            screen, it is possible to edit every single record. All records have
            a comment section where the author can leave a message indicating
            what change they did.
          </p>
          <p>
            The CRM system was used from 2016 to 2020, but got replaced when
            Unizite got bought up by Tribia, which replaced it with their
            internal system
          </p>

          <DynamicImageList cols={1} maxWidth={400}>
            <ImageListItem key={workImages.crm_main.src}>
              <img src={workImages.crm_main.src} alt="CRM Main Screen" />
              <ImageListItemBar position="below" title="Main Screen" />
            </ImageListItem>
          </DynamicImageList>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
