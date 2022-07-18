import React from "react";
import "./WorkFilter.scss";

interface Props {
  activeFilter: string;
  handleWorkFilter: (item: string) => void;
}

const WorkFilter: React.FC<Props> = ({ activeFilter, handleWorkFilter }) => {
  return (
    <div className="app__work-filter">
      {["Website", "Mobile App", "Software", "All"].map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`app__work-filter-item app__flex-center p-text ${
            activeFilter === item ? "item-active" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default WorkFilter;
