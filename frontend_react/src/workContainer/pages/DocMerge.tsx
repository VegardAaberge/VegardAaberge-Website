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
            DocMerge is a plugin created for unizite that generate docx
            documents. It was used to tailor custom reports for customers in
            unizite such as GK and Consto.
          </p>
          <p>
            Unizite had a lot of report generators before I arrived, but they
            could only be used to program a specific type of report as it was
            programmed for the specific report. DocMerge fixed that problem by
            allowing the user to create the template to generate data and use
            generic functions to customize the data.
          </p>
          <p>
            Initially _&#123;variableKey&#125;* was used as a generic parameter
            and, _&#123;data - key&#125;:&#123;variableKey&#125; was used to
            create table parameters. For additional info about table keys,
            :&#123;startIndex&#125;/&#123;interval&#125;/&#123;type&#125;*
            provide info about what data to select and how to display it. With
            this level of customization, it was possible to create all kinds of
            reports with tables.
          </p>
          <DynamicImageList cols={2}>
            <ImageListItem key={workImages.lundin_calculateGas.src}>
              <img
                src={workImages.docmerge_template.src}
                alt="DocMerge Template"
              />
              <ImageListItemBar position="below" title="Template" />
            </ImageListItem>

            <ImageListItem key={workImages.lundin_calculateOil.src}>
              <img
                src={workImages.docmerge_generated.src}
                alt="DocMerge Generated"
              />
              <ImageListItemBar position="below" title="Generated" />
            </ImageListItem>
          </DynamicImageList>
          <p>
            After a few years of use, I was asked to expand the scope of the
            report generator to handle nested data, such as seeing incidents
            connected to a specific checkpoint. The reort generator was not
            designed for that purpose, and needed a reformat. So I joined forced
            with a senior developer and we rewrote the replacement logic to use
            recurcive logic. We also created a new key that could create a docx
            block that can be repeated. This meant that it was no longer
            necessary to store the data
          </p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
