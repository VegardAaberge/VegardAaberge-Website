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
import { DynamicImageList, YoutubeEmbed } from "../../components";
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
            DocMerge is a plugin created for unizite that generates DOCX
            documents. The plugin was used to tailor custom reports for
            customers in unizite such as GK, PEAB and Consto.
          </p>
          <p>
            Unizite had a lot of report generators before I arrived, but they
            could only be used to generate a specific type of report as it was
            programmed for the specific type of report. DocMerge fixed that
            problem by allowing the user to create a template that receives data
            from a JSON file and generates data. The users can use functions to
            customize how the data will be displayed.
          </p>
          <p>
            Initially _&#123;variableKey&#125;* was used as a generic parameter
            and, _&#123;data_key&#125;:&#123;variableKey&#125; was used to
            create table parameters. For additional info about table keys,
            :&#123;startIndex&#125;/&#123;interval&#125;/&#123;type&#125;*
            provide info about what data to select and how to display it. With
            this level of customization, it was possible to create all kinds of
            reports with tables.
          </p>
          <DynamicImageList cols={2}>
            <ImageListItem key={workImages.docmerge_template.src}>
              <img
                src={workImages.docmerge_template.src}
                alt="DocMerge Template"
              />
              <ImageListItemBar position="below" title="Template" />
            </ImageListItem>

            <ImageListItem key={workImages.docmerge_template.src}>
              <img
                src={workImages.docmerge_generated.src}
                alt="DocMerge Generated"
              />
              <ImageListItemBar position="below" title="Generated" />
            </ImageListItem>
          </DynamicImageList>
          <p>
            After a few years of use, I was asked to expand the scope of the
            report generator to handle nested data, such as displaying a table
            of incidents connected to a specific checkpoint. The report
            generator was not designed for that purpose and needed a reformat.
            So I joined forces with a senior developer and we rewrote the
            replacement logic to use recursive logic.
          </p>
          <p>
            Clients also requested to be able to display data without a table
            and display each incident on its own page. To handle this request,
            we created a new key that started a block with
            _$repeatPerElement;&#123;data_key&#125;* and ends it with
            _$endRepeatPerElement;&#123;data_key&#125;*. Everything between the
            start and repeat tag will be repeated for each element, and any keys
            inside the block will be replaced by the replacement logic
          </p>
          <DynamicImageList cols={2}>
            <ImageListItem key={workImages.docmerge_repeatTemplate.src}>
              <img
                src={workImages.docmerge_repeatTemplate.src}
                alt="DocMerge Repeat Template"
              />
              <ImageListItemBar position="below" title="Repeat Template" />
            </ImageListItem>

            <ImageListItem key={workImages.docmerge_repeatGenerated.src}>
              <img
                src={workImages.docmerge_repeatGenerated.src}
                alt="DocMerge Repeat Generated"
              />
              <ImageListItemBar position="below" title="Repeat Generated" />
            </ImageListItem>
          </DynamicImageList>
          <p>
            DocMerge had many sample reports that were used as a reference to
            ensure that changes don't break existing reports. When we updated
            the replacement logic, we also created a verification program that
            could check if the new report was identical to the old report. To
            automate it, we added a makefile that would run the integration
            tests for all the directories in the test folder.
          </p>

          <YoutubeEmbed embedId="KFjtWjE1UWY?" />
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
