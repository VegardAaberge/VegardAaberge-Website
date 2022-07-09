import React from "react";

import { AppWrap } from "../../wrapper";
import "./Header.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderImg from "./HeaderImg/HeaderImg";
import HeaderCircles from "./HeaderCircles/HeaderCircles";

const Header: React.FC = () => {
  return (
    <div className="app__header app__flex-center">
      <HeaderInfo />
      <HeaderImg />
      <HeaderCircles />
    </div>
  );
};

export default AppWrap(Header, "home");
