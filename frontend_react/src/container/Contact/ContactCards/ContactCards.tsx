import React from "react";

import { images } from "../../../constants";
import "./ContactCards.module.scss";

interface Props {}

const ContactCards: React.FC<Props> = () => {
  return (
    <div className="app__contact-cards">
      <div className="app__contact-card">
        <img src={images.email} alt="email" />
        <a href="mailto:vegard.aaberge@gmail.com" className="p-text">
          vegard.aaberge@gmail.com
        </a>
      </div>
      <div className="app__contact-card">
        <img src={images.mobile} alt="email" />
        <a href="tel: +47 46285023" className="p-text">
          +47 46285023
        </a>
      </div>
    </div>
  );
};

export default ContactCards;
