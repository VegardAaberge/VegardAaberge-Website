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
import { workImages } from "../constants";

import styles from "../styles/App.module.scss";

interface Props {
  work: WorkItem;
}

const AabergeBrudesalong: React.FC<Props> = ({ work }) => {
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
          <ImageList cols={1}>
            <ImageListItem key={workImages.startside.src}>
              <img src={workImages.startside.src} alt="image" />
              <ImageListItemBar position="below" title="Hovedmeny" />
            </ImageListItem>
          </ImageList>

          <p>
            Bestillingskjemaet er koblet til Aaberge Brudesalong AS sin
            database. Når en kunde skriver inn sin informasjon og trykker på
            Bestill Time, så blir informasjonen sendt til Aaberge Brudesalong
            MySQL database. Hvis dette fungerer, så vil den sende en epost ut
            til kunden som bekrefter at hun har bestilt en time. Hvis kunden er
            på den engelske versjonen av siden, så vil den sende ut en melding
            på engelsk istedenfor.
          </p>

          <ImageList cols={1}>
            <ImageListItem key={workImages.bestill.src}>
              <img src={workImages.bestill.src} alt="image" />
              <ImageListItemBar position="below" title="Bestille time" />
            </ImageListItem>
          </ImageList>

          <Typography variant="h6" align="center" sx={{ p: 2 }}>
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

          <ImageList cols={1}>
            <ImageListItem key={portfolioImg.sanityDir.src}>
              <img src={workImages.database.src} alt="image" />
              <ImageListItemBar position="below" title="Database login" />
            </ImageListItem>

            <ImageListItem key={portfolioImg.sanitySchemas.src}>
              <img src={workImages.database2.src} alt="image" />
              <ImageListItemBar position="below" title="Database kunder" />
            </ImageListItem>
          </ImageList>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AabergeBrudesalong;
