import React from "react";
import "./AppWrap.scss";
import { motion } from "framer-motion";
import AppWrapBody from "./AppWrapBody";

const AppWrap = (
  Component: React.FC,
  idName: string,
  motionWrap: boolean,
  className?: string
) =>
  function HOC(): JSX.Element {
    if (motionWrap) {
      return (
        <motion.div
          whileInView={{ y: [150, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className={`app__${className} app__flex-center`}
        >
          <AppWrapBody
            Component={Component}
            idName={idName}
            className={className}
          />
        </motion.div>
      );
    } else {
      return (
        <AppWrapBody
          Component={Component}
          idName={idName}
          className={className}
        />
      );
    }
  };

export default AppWrap;
