import React from "react";
import "./WorkFilter.module.scss";

interface Props {
  activeFilter: string;
  handleWorkFilter: (item: string) => void;
}

const WorkFilter: React.FC<Props> = ({ activeFilter, handleWorkFilter }) => {
  return (
    <div className="work-filter">
      {["Website", "Mobile App", "Software", "All"].map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`work-filter-item flex-center p-text ${
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
