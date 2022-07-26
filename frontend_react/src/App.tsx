import React from "react";

import { About, Contact, Home, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import styles from "./styles/App.module.scss";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
