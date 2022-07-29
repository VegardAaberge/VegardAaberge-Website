/* eslint-disable @next/next/no-img-element */
import React from "react";

import { workImages } from "../constants";

const AabergeBrudesalong: React.FC = () => {
  return (
    <div className="panel-body">
      <div className="page-header">
        <h2>
          Aaberge Brudesalong <small>Laget for Aaberge Brudesalong AS</small>
        </h2>
        <div className="articleTopText">
          <p>
            <strong>Periode:</strong> sep 2015 - des 2015
          </p>
          <p>
            <strong>Språk brukt:</strong> HTML, Javascript, SASS, Jquery, Ajax,
            Bootstrap, PHP, MySQL
          </p>
          <p>
            <strong>Github:</strong>{" "}
            <a href="https://github.com/VegardAaberge/Wedding_website">
              https://github.com/VegardAaberge/Wedding_website
            </a>
          </p>
          <p>
            <strong>Nettside:</strong>{" "}
            <a href="http://aabergebrudesalong.no/">
              http://aabergebrudesalong.no/
            </a>
          </p>
        </div>
      </div>

      <div className="articleText">
        <p>
          Min kone har startet en brudesalong og trengte en nettside og et
          databasesystem. Jeg startet å jobbe på nettsiden i september, da jeg
          ventet på at Lundin skulle gi meg noen bilder til faktakartet. Jeg
          startet med å lære MySQL, og så brukte dette til å lage et
          databasesystem. Da Lundins prosjekt var ferdig i starten av November,
          så fortsatte jeg å lage databasen og begynte å lage nettsiden.
        </p>

        <p>
          Når en bruker laster seg inn på siden, så ser de hovedsiden som vist
          under. Her kan kunden sende en melding, finne informasjon, og navigere
          seg til andre sider med topmenyen og bildene.
        </p>

        <div className="imageGroup imageGroup-1">
          <img
            className="featureImg"
            src={workImages.startside.src}
            alt="image"
          />
          <label>Hovedmeny</label>
        </div>

        <p>
          Bestillingskjemaet er koblet til Aaberge Brudesalong AS sin database.
          Når en kunde skriver inn sin informasjon og trykker på Bestill Time,
          så blir informasjonen sendt til Aaberge Brudesalong MySQL database.
          Hvis dette fungerer, så vil den sende en epost ut til kunden som
          bekrefter at hun har bestilt en time. Hvis kunden er på den engelske
          versjonen av siden, så vil den sende ut en melding på engelsk
          istedenfor.{" "}
        </p>

        <div className="imageGroup imageGroup-1">
          <img
            className="featureImg"
            src={workImages.bestill.src}
            alt="image"
          />
          <label>Bestille time</label>
        </div>

        <h3>Databasen</h3>
        <p>
          Databasen ble laget fordi Aaberge Brudesalong AS trengte en database
          hvor de kan lagre informasjon. Grunnen til at jeg ikke brukte google
          docs, er fordi den skal kunne kommunisere med hovedsiden, og tabellene
          trenger å kommunisere med hverandre.{" "}
        </p>

        <p>
          Denne databasen bruker mye PHP kode, som kommuniserer med MySQL. Det
          er mulig å redigere alle dataene, sortere dataene, slette dataene, og
          legge til nye data. Det er 6 faner med forskjellige tabeller. Når man
          velger å redusere eller legge til tilbehør og kjoler, så lager den en
          dropdownmeny basert på hva som er lagret under kjoler og tilbehør. For
          å logge inn, så trenger man å vite brukernavnet og passordet til MySQL
          databasen. For å øke sikkerheten så er loginformasjonen ikke lagret på
          serveren.{" "}
        </p>

        <div className="imageGroup imageGroup-1">
          <img
            className="featureImg"
            src={workImages.database.src}
            alt="image"
          />
          <label>Database login</label>
        </div>
        <div className="imageGroup imageGroup-1">
          <img
            className="featureImg"
            src={workImages.database2.src}
            alt="image"
          />
          <label>Database kunder</label>
        </div>
      </div>
    </div>
  );
};

export default AabergeBrudesalong;
