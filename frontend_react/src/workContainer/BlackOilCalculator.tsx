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

const BlackOilCalculator: React.FC<Props> = ({ work }) => {
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
            Da jeg startet med dette programmet, hadde jeg mye kunnskap om
            hvordan man programmerer i C/C++, men visste lite om hvordan man
            lager nettsider. Jeg brukte ca 1 måned på å lære de forskjellige
            språkene og hvordan man bruker dem. Først så laget jeg kalkulatoren
            og lastefunksjonene, og så brukte jeg en del tid på kartet og
            strategrafi bildeserien. Til slutt la jeg til flere funksjoner på
            kartet og la til Norlex databasen.
          </p>
          <Typography variant="h6" align="center" sx={{ p: 2 }}>
            Kalkulatoren
          </Typography>
          <p>
            Kalkulatoren ble laget med sliders for å gjøre det enkelt å gjøre
            kalkulasjoner. Resultatet blir da oppdatert i real time, slik at det
            er mulig å se hvordan hver faktor påvirker resultatet. Den husker
            også dataene slik at det er mulig å komme tilbake til de samme
            kalkulasjonene. Under other options er det mulig å laste inn data
            som er lagret på serveren. Dette var den første siden jeg laget, men
            fikk så en del oppdateringer iløpet av perioden.
          </p>
          <ImageList cols={2} sx={{ p: "0.5rem" }}>
            <ImageListItem key={portfolioImg.sanityDir.src}>
              <img src={workImages.calculateOil.src} alt="Oljekalkulator" />
              <ImageListItemBar position="below" title="Oljekalkulator" />
            </ImageListItem>

            <ImageListItem key={portfolioImg.sanitySchemas.src}>
              <img src={workImages.calculateGas.src} alt="Gaskalkulator" />

              <ImageListItemBar position="below" title="Gaskalkulator" />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" align="center" sx={{ p: 2 }}>
            Kartet
          </Typography>
          <p>
            Jeg startet med å lage kartet med polygoner, men etter å ha vist
            lisensene og oljefeltene, fant jeg ut at det var altfor tregt og
            fungerte ikke i det hele tatt på apple produkter. Jeg bestemte meg
            da for å bruke google fusion data istedenfor. Dataene er hentet fra
            <a href="http://factpages.npd.no/ReportServer?/FactPages/geography/geography_all&rs:Command=Render&rc:Toolbar=false&rc:Parameters=f&IpAddress=1&CultureCode=nb-no">
              factpages
            </a>
            og så modifisert til mine formål og deretter lastet opp med
            <a href="http://shpescape.com/">shpescape</a>
          </p>
          <p>
            Etter å ha laget kart med google fusion data, så hentet jeg dataene
            med javascript, og brukte where filtre til å vise dataene som
            brukeren etterspurte. Brukeren kan styre hvilke filter han ønsker
            ved å bruke knappene. Bildekartene (gravitasjon, bathemetri,
            magnetisme) er laget med maptiler og så lagt til programmet.
          </p>
          <ImageList cols={3} sx={{ p: "0.5rem" }}>
            <ImageListItem key={workImages.mapNormal.src}>
              <img src={workImages.mapNormal.src} alt="Oljekalkulator" />
              <ImageListItemBar position="below" title="Normal Kart" />
            </ImageListItem>

            <ImageListItem key={workImages.mapGeology.src}>
              <img src={workImages.mapGeology.src} alt="Gaskalkulator" />

              <ImageListItemBar position="below" title="Geologi Kart" />
            </ImageListItem>
            <ImageListItem key={workImages.mapBathemetry.src}>
              <img src={workImages.mapBathemetry.src} alt="Gaskalkulator" />

              <ImageListItemBar position="below" title="Bathemetri Kart" />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" align="center" sx={{ p: 2 }}>
            Norlex
          </Typography>
          <p>
            Lundin Norge samarbeider med professoren Fredrik Gradstein. Han
            nevnte at det kunne være veldig praktisk å ha en mobilversjon av
            Norlex databasen. For øyeblikket så er Norlex databasen vanskelig å
            bruke på mobil. Utenom formasjonsdata tok jeg alle hans lister og
            underlister og gjorde dem om til Jquery Mobile datalister. Jeg
            linket til hans interaktive grafer, fordi de fungerte greit på
            mobilen.
          </p>
          <p>
            Formasjonsdata kan vi se i bildet til høyre, og den var en viktig
            komponent som ikke fungerte spesielt godt på mobil. Jeg fikk dataene
            fra Øyvind Hammer og laget min egen MySQL database. Så bruke jeg sql
            queries til å hente de dataene som brukeren etterspurte. Lenkene er
            mulig å trykke på, og da vil den finne formasjonstopper for brønnen
            som er etterspurt.
          </p>
          <ImageList cols={2} sx={{ p: "0.5rem" }}>
            <ImageListItem key={workImages.norlex.src}>
              <img src={workImages.norlex.src} alt="Norlex Hovedindeks" />
              <ImageListItemBar position="below" title="Norlex Hovedindeks" />
            </ImageListItem>

            <ImageListItem key={workImages.norlexFormations.src}>
              <img
                src={workImages.norlexFormations.src}
                alt="Norlex Formasjoner"
              />
              <ImageListItemBar position="below" title="Norlex Formasjoner" />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" align="center" sx={{ p: 2 }}>
            Andre Funksjoner
          </Typography>
          <p>
            Det ble også laget en del enklere funksjoner som Lundin mente det
            var nyttig å ha. Jeg designet en strategrafi og datatabell
            bildeserie. Piltastene brukes til å gå frem og tilbake, og bruker
            Jquery mobile animasjoner. Sidene er kategorisert etter hashtag, og
            på den måten kan den vite hvilke side den skal gå til.
          </p>
          <p>
            Jeg laget også muligheten til å gjøre forskjellige typer
            omregninger, laste inn data til kalkulatoren og jeg hadde en side
            hvor man kan finne nyttige kilder
          </p>
          <ImageList cols={2} sx={{ p: "0.5rem" }}>
            <ImageListItem key={workImages.strategrafi.src}>
              <img src={workImages.strategrafi.src} alt="Norlex Hovedindeks" />
              <ImageListItemBar position="below" title="Strategrafi" />
            </ImageListItem>

            <ImageListItem key={workImages.datatables.src}>
              <img src={workImages.datatables.src} alt="calculateGas" />

              <ImageListItemBar position="below" title="Datatabeller" />
            </ImageListItem>

            <ImageListItem key={workImages.conversions.src}>
              <img src={workImages.conversions.src} alt="calculateGas" />

              <ImageListItemBar position="below" title="Konversjoner" />
            </ImageListItem>

            <ImageListItem key={workImages.loadData.src}>
              <img src={workImages.loadData.src} alt="calculateGas" />

              <ImageListItemBar position="below" title="Laste inn data" />
            </ImageListItem>
          </ImageList>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BlackOilCalculator;
