import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { strings } from "../../constants";
import { client } from "../../client";
import { WorkItem } from "./WorkItem";
import AppWrap from "../../wrapper/AppWrap";
import WorkCard from "./WorkCard/WorkCard";
import WorkFilter from "./WorkFilter/WorkFilter";
import styles from "./Work.module.scss";

import mainStyles from "./../../styles/App.module.scss";

interface AnimateCard {
  y: number;
  opacity: number;
}

let works: WorkItem[] = [];

interface Props {
  iWorks: WorkItem[];
}

const Works: React.FC<Props> = ({ iWorks }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState<AnimateCard>({
    y: 0,
    opacity: 1,
  });

  const [filterWorks, setFilterWorks] = useState<WorkItem[]>([]);

  useEffect(() => {
    works = iWorks;
    setFilterWorks(works);
  }, [iWorks]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className={styles.work}>
      <h2 className={mainStyles.head_text}>
        My <span>Portfolio</span>
      </h2>

      <WorkFilter
        activeFilter={activeFilter}
        handleWorkFilter={handleWorkFilter}
      />

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.work_portfolio}
      >
        {filterWorks.map((work, index) => (
          <WorkCard work={work} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
