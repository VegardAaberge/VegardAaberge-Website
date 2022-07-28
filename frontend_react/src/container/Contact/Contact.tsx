import React, { useState } from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import ContactCards from "./ContactCards/ContactCards";
import ContactForm from "./ContactForm/ContactForm";
import ContactSubmitted from "./ContactSubmitted/ContactSubmitted";

import styles from "./Contact.module.scss";
import mainStyles from "../../styles/App.module.scss";

const Contact: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmitted = (isSubmitted: boolean) => {
    setIsFormSubmitted(isSubmitted);
  };

  return (
    <>
      <h2 className={mainStyles.head_text}>Take a coffee & chat with me</h2>

      <ContactCards />

      {!isFormSubmitted ? (
        <ContactForm handleFormSubmitted={handleFormSubmitted} />
      ) : (
        <ContactSubmitted />
      )}
    </>
  );
};

export default Contact;
