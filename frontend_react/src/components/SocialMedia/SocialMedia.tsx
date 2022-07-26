import React from "react";

import styles from "./SocialMedia.module.scss";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

interface Props {}

const SocialMedia: React.FC<Props> = () => {
  return (
    <div className={styles.social}>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
