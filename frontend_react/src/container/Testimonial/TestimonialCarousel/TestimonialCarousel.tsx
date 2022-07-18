import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor } from "../../../client";
import { TestimonialItem } from "../models";
import "./TestimonialCarousel.scss";

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
    <div className="app__testimonial-carousel">
      <div className="app__testimonial-carousel-item">
        <img src={urlFor(testimonal.imgurl).url()} alt={testimonal.name} />
        <div className="app__testimonial-carousel-content">
          <p className="p-text">{testimonal.feedback}</p>
          <div>
            <h4 className="bold-text">{testimonal.name}</h4>
            <h5 className="p-text">{testimonal.company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-carousel-btns app__flex-center">
        <div
          className="app__flex-center"
          onClick={() => navigateToIndex(Direction.Back)}
        >
          <HiChevronLeft />
        </div>
        <div
          className="app__flex-center"
          onClick={() => navigateToIndex(Direction.Forward)}
        >
          <HiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
