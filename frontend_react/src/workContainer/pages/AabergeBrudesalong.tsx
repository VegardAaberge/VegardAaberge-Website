/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import {
  Card,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { WorkItem } from "../../container/Work/WorkItem";
import WorkSummary from "../Components/WorkSummary";
import WorkHeader from "../Components/WorkHeader";
import { workImages } from "../../constants";
import workTheme from "../../styles/workTheme";

import { DynamicImageList } from "../../components";

import styles from "../WorkApp.module.scss";

interface Props {
  work: WorkItem;
}

const AabergeBrudesalong: React.FC<Props> = ({ work }) => {
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
            Min kone har startet en brudesalong og trengte en nettside og et
            databasesystem. Jeg startet å jobbe på nettsiden i september, da jeg
            ventet på at Lundin skulle gi meg noen bilder til faktakartet. Jeg
            startet med å lære MySQL, og så brukte dette til å lage et
            databasesystem. Da Lundins prosjekt var ferdig i starten av
            November, så fortsatte jeg å lage databasen og begynte å lage
            nettsiden.
          </p>
          <p>
            Når en bruker laster seg inn på siden, så ser de hovedsiden som vist
            under. Her kan kunden sende en melding, finne informasjon, og
            navigere seg til andre sider med topmenyen og bildene.
          </p>
          <DynamicImageList cols={1}>
            <ImageListItem key={workImages.brudesalong_startside.src}>
              <img src={workImages.brudesalong_startside.src} alt="image" />
              <ImageListItemBar position="below" title="Hovedmeny" />
            </ImageListItem>
          </DynamicImageList>

          <p>
            Bestillingskjemaet er koblet til Aaberge Brudesalong AS sin
            database. Når en kunde skriver inn sin informasjon og trykker på
            Bestill Time, så blir informasjonen sendt til Aaberge Brudesalong
            MySQL database. Hvis dette fungerer, så vil den sende en epost ut
            til kunden som bekrefter at hun har bestilt en time. Hvis kunden er
            på den engelske versjonen av siden, så vil den sende ut en melding
            på engelsk istedenfor.
          </p>

          <DynamicImageList cols={1}>
            <ImageListItem key={workImages.brudesalong_bestill.src}>
              <img src={workImages.brudesalong_bestill.src} alt="image" />
              <ImageListItemBar position="below" title="Bestille time" />
            </ImageListItem>
          </DynamicImageList>

          <Typography variant="h5" align="center" sx={{ p: 2 }}>
            Databasen
          </Typography>
          <p>
            Databasen ble laget fordi Aaberge Brudesalong AS trengte en database
            hvor de kan lagre informasjon. Grunnen til at jeg ikke brukte google
            docs, er fordi den skal kunne kommunisere med hovedsiden, og
            tabellene trenger å kommunisere med hverandre.
          </p>

          <p>
            Denne databasen bruker mye PHP kode, som kommuniserer med MySQL. Det
            er mulig å redigere alle dataene, sortere dataene, slette dataene,
            og legge til nye data. Det er 6 faner med forskjellige tabeller. Når
            man velger å redusere eller legge til tilbehør og kjoler, så lager
            den en dropdownmeny basert på hva som er lagret under kjoler og
            tilbehør. For å logge inn, så trenger man å vite brukernavnet og
            passordet til MySQL databasen. For å øke sikkerheten så er
            loginformasjonen ikke lagret på serveren.
          </p>

          <DynamicImageList cols={1}>
            <ImageListItem key={workImages.brudesalong_database.src}>
              <img src={workImages.brudesalong_database.src} alt="image" />
              <ImageListItemBar position="below" title="Database login" />
            </ImageListItem>

            <ImageListItem key={workImages.brudesalong_database2.src}>
              <img src={workImages.brudesalong_database2.src} alt="image" />
              <ImageListItemBar position="below" title="Database kunder" />
            </ImageListItem>
          </DynamicImageList>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AabergeBrudesalong;
