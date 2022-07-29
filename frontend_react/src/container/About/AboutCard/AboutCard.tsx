import React from "react";
import { urlFor } from "../../../client";
import { AboutItem } from "../AboutItem";

import styles from "./AboutCard.module.scss";
import mainStyles from "./../../../styles/App.module.scss";
import Image from "next/image";

interface Props {
  about: AboutItem;
}

const AboutCard: React.FC<Props> = ({ about }) => {
  return (
    <div className={styles.about_card}>
      <div className={styles.about_card_image}>
        <Image
          alt={about.title}
          src={urlFor(about.imgUrl).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <span className={`${styles.about_card_title} ${mainStyles.bold_title}`}>
        {about.title}
      </span>
      <span className={styles.about_card_description}>{about.description}</span>
    </div>
  );
};

export default AboutCard;
