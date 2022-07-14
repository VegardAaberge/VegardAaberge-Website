import React, { useState } from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import "./Contact.scss";
import ContactCards from "./ContactCards/ContactCards";
import ContactForm from "./ContactForm/ContactForm";
import ContactSubmitted from "./ContactSubmitted/ContactSubmitted";

const Contact: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmitted = (isSubmitted: boolean) => {
    setIsFormSubmitted(isSubmitted);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <ContactCards />

      {!isFormSubmitted ? (
        <ContactForm handleFormSubmitted={handleFormSubmitted} />
      ) : (
        <ContactSubmitted />
      )}
    </>
  );
};

export default AppWrap(
  Contact,
  strings.ID_CONTACT,
  true,
  strings.CLASS_WHITE_BG
);
