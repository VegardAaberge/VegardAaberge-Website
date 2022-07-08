import React from "react";

import "./Header.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderImg from "./HeaderImg/HeaderImg";
import HeaderCircles from "./HeaderCircles/HeaderCircles";

const Header: React.FC = () => {
  return (
    <div id="home" className="app__header app__flex-center">
      <HeaderInfo />
      <HeaderImg />
      <HeaderCircles />
    </div>
  );
};

export default Header;
