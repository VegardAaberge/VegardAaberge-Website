import React from "react";

import { images } from "../../../constants";
import "./HomeImg.scss";

const HomeImg: React.FC = () => {
  return (
    <div className="app__home-img">
      <div className="app__home-img-bg"></div>
      <img src={images.profile} alt="" className="app__home-img-img" />
    </div>
  );
};

export default HomeImg;
