import React from "react";
import { urlFor } from "../../../client";
import { AboutItem } from "../AboutItem";
import "./AboutCard.scss";

interface Props {
  about: AboutItem;
}

const AboutCard: React.FC<Props> = ({ about }) => {
  return (
    <div className="home-feature-card">
      <img
        alt={about.title}
        src={urlFor(about.imgUrl).url()}
        className="home-image"
      />
      <span className="home-heading card-Heading">{about.title}</span>
      <span className="home-text2 card-Text">{about.description}</span>
    </div>
  );
};

export default AboutCard;
