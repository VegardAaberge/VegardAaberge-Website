import React from "react";

import { About, Footer, Home, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
