import React from "react";
import { Navbar } from "../components";
import { strings } from "../constants";
import { MainProps } from "./MainProps";
import { About, Contact, Home, Skills, Testimonial, Work } from "../container";
import AppWrap from "../wrapper/AppWrap";

import styles from "../styles/App.module.scss";

const MainApp: React.FC<MainProps> = ({
  works,
  brands,
  testimonials,
  workExperience,
  experiences,
  skills,
}) => {
  return (
    <div className={styles.app}>
      <Navbar />
      <AppWrap
        idName={strings.ID_HOME}
        motionWrap={false}
        classBackground={strings.CLASS_PRIMARY_BG}
      >
        <Home />
      </AppWrap>
      <AppWrap
        idName={strings.ID_ABOUT}
        motionWrap={true}
        classBackground={strings.CLASS_WHITE_BG}
      >
        <About />
      </AppWrap>
      <AppWrap
        idName={strings.ID_WORK}
        motionWrap={true}
        classBackground={strings.CLASS_PRIMARY_BG}
      >
        <Work iWorks={works} />
      </AppWrap>
      <AppWrap
        idName={strings.ID_SKILLS}
        motionWrap={true}
        classBackground={strings.CLASS_WHITE_BG}
      >
        <Skills
          iWorks={workExperience}
          iExperiences={experiences}
          iSkills={skills}
        />
      </AppWrap>
      <AppWrap
        idName={strings.ID_SKILLS}
        motionWrap={true}
        classBackground={strings.CLASS_PRIMARY_BG}
      >
        <Testimonial iBrands={brands} iTestimonials={testimonials} />
      </AppWrap>
      <AppWrap
        idName={strings.ID_CONTACT}
        motionWrap={true}
        classBackground={strings.CLASS_WHITE_BG}
      >
        <Contact />
      </AppWrap>
    </div>
  );
};

export default MainApp;
