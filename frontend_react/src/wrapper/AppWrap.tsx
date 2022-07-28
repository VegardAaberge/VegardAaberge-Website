import React from "react";
import { motion } from "framer-motion";
import AppWrapBody from "./AppWrapBody";

import mainStyles from "../styles/App.module.scss";

interface Props {
  idName: string;
  motionWrap: boolean;
  classBackground?: string;
  children: React.ReactNode;
}

const AppWrap: React.FC<Props> = ({
  idName,
  motionWrap,
  classBackground: classBackground,
  children,
}) => {
  if (motionWrap) {
    return (
      <motion.div
        whileInView={{ y: [150, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${mainStyles.flex_center}`}
      >
        <AppWrapBody idName={idName} className={classBackground}>
          {children}
        </AppWrapBody>
      </motion.div>
    );
  } else {
    return (
      <AppWrapBody idName={idName} className={classBackground}>
        {children}
      </AppWrapBody>
    );
  }
};

export default AppWrap;
