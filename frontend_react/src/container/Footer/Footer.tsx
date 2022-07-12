import React, { useState } from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import "./Footer.scss";
import FooterCards from "./FooterCards/FooterCards";
import FooterForm from "./FooterForm/FooterForm";
import FooterSubmitted from "./FooterSubmitted/FooterSubmitted";

const Footer: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmitted = (isSubmitted: boolean) => {
    setIsFormSubmitted(isSubmitted);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <FooterCards />

      {!isFormSubmitted ? (
        <FooterForm handleFormSubmitted={handleFormSubmitted} />
      ) : (
        <FooterSubmitted />
      )}
    </>
  );
};

export default AppWrap(Footer, strings.ID_FOOTER, true, strings.CLASS_WHITE_BG);
