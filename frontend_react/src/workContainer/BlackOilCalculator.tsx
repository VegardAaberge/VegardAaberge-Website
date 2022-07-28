/* eslint-disable @next/next/no-img-element */
import React from "react";

import { workImages } from "../constants";

const BlackOilCalculator: React.FC = () => {
  return (
    <div className="panel-body">
      <div className="page-header">
        <h2>
          Black Oil Calculator <small>Laget for Lundin Norge</small>
        </h2>
        <div className="articleTopText">
          <p>
            <strong>Periode:</strong> jun 2015 - okt 2015
          </p>
          <p>
            <strong>Språk brukt:</strong> HTML, Javascript, CSS, Jquery, Jquery
            Mobile, PHP, MySQL
          </p>
        </div>
      </div>
      <div className="articleText">
        <p>
          Da jeg startet med dette programmet, hadde jeg mye kunnskap om hvordan
          man programmerer i C/C++, men visste lite om hvordan man lager
          nettsider. Jeg brukte ca 1 måned på å lære de forskjellige språkene og
          hvordan man bruker dem. Først så laget jeg kalkulatoren og
          lastefunksjonene, og så brukte jeg en del tid på kartet og strategrafi
          bildeserien. Til slutt la jeg til flere funksjoner på kartet og la til
          Norlex databasen.{" "}
        </p>
        <br />
        <h4>Kalkulatoren</h4>
        Kalkulatoren ble laget med sliders for å gjøre det enkelt å gjøre
        kalkulasjoner. Resultatet blir da oppdatert i real time, slik at det er
        mulig å se hvordan hver faktor påvirker resultatet. Den husker også
        dataene slik at det er mulig å komme tilbake til de samme
        kalkulasjonene. Under other options er det mulig å laste inn data som er
        lagret på serveren. Dette var den første siden jeg laget, men fikk så en
        del oppdateringer iløpet av perioden.
        <div className="imageGroup imageGroup-2">
          <div className="row">
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.calculateOil.src} alt="Oljekalkulator" />
                <label>Oljekalkulator</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.calculateGas.src} alt="Gaskalkulator" />
                <label>Gaskalkulator</label>
              </div>
            </div>
          </div>
        </div>
        <h4>Kartet</h4>
        <p>
          Jeg startet med å lage kartet med polygoner, men etter å ha vist
          lisensene og oljefeltene, fant jeg ut at det var altfor tregt og
          fungerte ikke i det hele tatt på apple produkter. Jeg bestemte meg da
          for å bruke google fusion data istedenfor. Dataene er hentet fra{" "}
          <a href="http://factpages.npd.no/ReportServer?/FactPages/geography/geography_all&rs:Command=Render&rc:Toolbar=false&rc:Parameters=f&IpAddress=1&CultureCode=nb-no">
            factpages
          </a>{" "}
          og så modifisert til mine formål og deretter lastet opp med{" "}
          <a href="http://shpescape.com/">shpescape</a>
        </p>
        <p>
          Etter å ha laget kart med google fusion data, så hentet jeg dataene
          med javascript, og brukte where filtre til å vise dataene som brukeren
          etterspurte. Brukeren kan styre hvilke filter han ønsker ved å bruke
          knappene. Bildekartene (gravitasjon, bathemetri, magnetisme) er laget
          med maptiler og så lagt til programmet.{" "}
        </p>
        <div className="imageGroup imageGroup-3">
          <div className="row">
            <div className="col-sm-4">
              <div className="imageArea">
                <img src={workImages.mapNormal.src} alt="Normal Kart" />
                <label>Normal Kart</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="imageArea">
                <img src={workImages.mapGeology.src} alt="Geologi Kart" />
                <label>Geologi Kart</label>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="imageArea">
                <img src={workImages.mapBathemetry.src} alt="Bathemetri Kart" />
                <label>Bathemetri Kart</label>
              </div>
            </div>
          </div>
        </div>
        <h4>Norlex</h4>
        <p>
          Lundin Norge samarbeider med professoren Fredrik Gradstein. Han nevnte
          at det kunne være veldig praktisk å ha en mobilversjon av Norlex
          databasen. For øyeblikket så er Norlex databasen vanskelig å bruke på
          mobil. Utenom formasjonsdata tok jeg alle hans lister og underlister
          og gjorde dem om til Jquery Mobile datalister. Jeg linket til hans
          interaktive grafer, fordi de fungerte greit på mobilen.{" "}
        </p>
        <p>
          Formasjonsdata kan vi se i bildet til høyre, og den var en viktig
          komponent som ikke fungerte spesielt godt på mobil. Jeg fikk dataene
          fra Øyvind Hammer og laget min egen MySQL database. Så bruke jeg sql
          queries til å hente de dataene som brukeren etterspurte. Lenkene er
          mulig å trykke på, og da vil den finne formasjonstopper for brønnen
          som er etterspurt.
        </p>
        <div className="imageGroup imageGroup-2">
          <div className="row">
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.norlex.src} alt="Norlex Hovedindeks" />
                <label>Norlex Hovedindeks</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="imageArea">
                <img
                  src={workImages.norlexFormations.src}
                  alt="Norlex Formasjoner"
                />
                <label>Norlex Formasjoner</label>
              </div>
            </div>
          </div>
        </div>
        <h4>Andre Funksjoner</h4>
        <p>
          Det ble også laget en del enklere funksjoner som Lundin mente det var
          nyttig å ha. Jeg designet en strategrafi og datatabell bildeserie.
          Piltastene brukes til å gå frem og tilbake, og bruker Jquery mobile
          animasjoner. Sidene er kategorisert etter hashtag, og på den måten kan
          den vite hvilke side den skal gå til.
        </p>
        <p>
          Jeg laget også muligheten til å gjøre forskjellige typer omregninger,
          laste inn data til kalkulatoren og jeg hadde en side hvor man kan
          finne nyttige kilder
        </p>
        <div className="imageGroup imageGroup-2">
          <div className="row">
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.strategrafi.src} alt="calculateOil" />
                <label>Strategrafi</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.datatables.src} alt="calculateGas" />
                <label>Datatabeller</label>
              </div>
            </div>
          </div>
        </div>
        <div className="imageGroup imageGroup-2">
          <div className="row">
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.conversions.src} alt="calculateGas" />
                <label>Konversjoner</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="imageArea">
                <img src={workImages.loadData.src} alt="calculateGas" />
                <label>Laste inn data</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackOilCalculator;
