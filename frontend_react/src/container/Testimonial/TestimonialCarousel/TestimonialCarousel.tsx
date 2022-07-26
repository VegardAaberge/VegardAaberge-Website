import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor } from "../../../client";
import { TestimonialItem } from "../models";

import styles from "./TestimonialCarousel.module.scss";
import mainStyles from "../../../styles/App.module.scss";

interface Props {
  testimonials: TestimonialItem[];
}

enum Direction {
  Back,
  Forward,
}

const TestimonialCarousel: React.FC<Props> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToIndex = (direction: Direction) => {
    let newIndex =
      direction === Direction.Back ? currentIndex - 1 : currentIndex + 1;

    newIndex = (newIndex + testimonials.length) % testimonials.length;

    setCurrentIndex(newIndex);
  };

  const testimonal = testimonials[currentIndex];
  if (testimonal === undefined) {
    return <div></div>;
  }

  return (
    <div className={styles.testimonial_carousel}>
      <div className={styles.testimonial_carousel_item}>
        <img src={urlFor(testimonal.imgurl).url()} alt={testimonal.name} />
        <div className={styles.testimonial_carousel_content}>
          <p className={mainStyles.p_text}>{testimonal.feedback}</p>
          <div>
            <h4 className={mainStyles.bold_text}>{testimonal.name}</h4>
            <h5 className={mainStyles.p_text}>{testimonal.company}</h5>
          </div>
        </div>
      </div>

      <div
        className={`${styles.testimonial_carousel_btns} ${mainStyles.flex_center}`}
      >
        <div
          className={mainStyles.flex_center}
          onClick={() => navigateToIndex(Direction.Back)}
        >
          <HiChevronLeft />
        </div>
        <div
          className={mainStyles.flex_center}
          onClick={() => navigateToIndex(Direction.Forward)}
        >
          <HiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
