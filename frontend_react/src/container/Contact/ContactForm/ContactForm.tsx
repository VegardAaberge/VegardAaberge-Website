import FormHelperText from "@mui/material/FormHelperText";
import React, { useState } from "react";

import { strings } from "../../../constants";
import { client } from "../../../client";
import "./ContactForm.scss";

interface SubmitData {
  _type: string;
  name: string;
  email: string;
  message: string;
}

interface Props {
  handleFormSubmitted: (isSubmitted: boolean) => void;
}

const ContactForm: React.FC<Props> = ({ handleFormSubmitted }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorData, setErrorData] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const { nameError, emailError, messageError } = errorData;

  const handleChangeInput = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    const newErrorData = {
      nameError: formData.name.length === 0 ? strings.ERROR_FORM_NAME : "",
      emailError: !strings.REGEX_EMAIL.test(formData.email)
        ? strings.ERROR_FORM_EMAIL
        : "",
      messageError:
        formData.message.length === 0 ? strings.ERROR_FORM_MESSAGE : "",
    };
    setErrorData(newErrorData);

    const hasError = [
      newErrorData.nameError,
      newErrorData.emailError,
      newErrorData.messageError,
    ].find((item) => item.length > 0);

    if (!hasError) {
      setLoading(true);

      const contact: SubmitData = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };

      client.create(contact).then(() => {
        setLoading(false);
        handleFormSubmitted(true);
      });
    }
  };

  return (
    <div className="app__contact-form app__flex-center">
      <div className="app__flex-center">
        <input
          className="p-text"
          type="text"
          placeholder="Your name"
          name="name"
          value={name}
          onChange={handleChangeInput}
        />
      </div>
      {nameError.length > 0 && (
        <FormHelperText className="app__contact-form-error" error={true}>
          {nameError}
        </FormHelperText>
      )}
      <div className="app__flex-center">
        <input
          className="p-text"
          type="email"
          placeholder="Your email"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />
      </div>
      {emailError.length > 0 && (
        <FormHelperText className="app__contact-form-error" error={true}>
          {emailError}
        </FormHelperText>
      )}
      <div>
        <textarea
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
        ></textarea>
      </div>
      {messageError.length > 0 && (
        <FormHelperText className="app__contact-form-error" error={true}>
          {messageError}
        </FormHelperText>
      )}
      <button type="button" className="p-text" onClick={handleSubmit}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
};

export default ContactForm;
