import React from "react";
import Image from "next/image";

import { images } from "../../../constants";

import styles from "./ContactCards.module.scss";
import mainStyles from "../../../styles/App.module.scss";

interface Props {}

const ContactCards: React.FC<Props> = () => {
  return (
    <div className={styles.contact_cards}>
      <div className={styles.contact_card}>
        <Image src={images.email} alt="email" />
        <a href="mailto:vegard.aaberge@gmail.com" className={mainStyles.p_text}>
          vegard.aaberge@gmail.com
        </a>
      </div>
      <div className={styles.contact_card}>
        <Image src={images.mobile} alt="email" />
        <a href="tel: +47 46285023" className={mainStyles.p_text}>
          +47 46285023
        </a>
      </div>
    </div>
  );
};

export default ContactCards;
