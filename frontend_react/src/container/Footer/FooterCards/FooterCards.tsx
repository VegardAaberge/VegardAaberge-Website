import React from "react";

import { images } from "../../../constants";
import "./FooterCards.scss";

interface Props {}

const FooterCards: React.FC<Props> = () => {
  return (
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:vegard.aaberge@gmail.com" className="p-text">
          vegard.aaberge@gmail.com
        </a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="email" />
        <a href="tel: +47 46285023" className="p-text">
          +47 46285023
        </a>
      </div>
    </div>
  );
};

export default FooterCards;
