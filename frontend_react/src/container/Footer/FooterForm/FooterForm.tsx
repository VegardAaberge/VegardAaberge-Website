import React, { useState } from "react";

import { client } from "../../../client";
import "./FooterForm.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitData {
  _type: string;
  name: string;
  email: string;
  message: string;
}

interface Props {
  handleFormSubmitted: (isSubmitted: boolean) => void;
}

const FooterForm: React.FC<Props> = ({ handleFormSubmitted }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
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
  };

  return (
    <div className="app__footer-form app__flex-center">
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
      <div>
        <textarea
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
        ></textarea>
      </div>

      <button type="button" className="p-text" onClick={handleSubmit}>
        {loading ? "Sending" : "Send Message"}
      </button>
    </div>
  );
};

export default FooterForm;
