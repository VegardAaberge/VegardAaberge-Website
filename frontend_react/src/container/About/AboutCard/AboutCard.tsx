import React from "react";
import { urlFor } from "../../../client";
import { AboutItem } from "../AboutItem";
import "./AboutCard.module.scss";

interface Props {
  about: AboutItem;
}

const AboutCard: React.FC<Props> = ({ about }) => {
  return (
    <div className="app__about-card">
      <img
        alt={about.title}
        src={urlFor(about.imgUrl).url()}
        className="app__about-card-image"
      />
      <span className="app__about-card-title bold-title">{about.title}</span>
      <span className="app__about-card-description">{about.description}</span>
    </div>
  );
};

export default AboutCard;
