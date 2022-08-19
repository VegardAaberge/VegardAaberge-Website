import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { GrDocumentPdf } from "react-icons/gr";
import FileOpenIcon from "@mui/icons-material/FileOpen";

import { urlFor } from "../../../client";
import { TestimonialItem } from "../models";

import styles from "./TestimonialCarousel.module.scss";
import mainStyles from "../../../styles/App.module.scss";
import Image from "next/image";
import { IconContext } from "react-icons";
import Link from "next/link";

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
        <div className={styles.testimonial_carousel_item_image}>
          <Image
            src={urlFor(testimonal.imgurl).url()}
            alt={testimonal.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.testimonial_carousel_content}>
          <p className={mainStyles.p_text}>{testimonal.feedback}</p>
          <div className={styles.testimonial_carousel_info}>
            <div>
              <h4 className={mainStyles.bold_text}>{testimonal.name}</h4>
              <h5 className={mainStyles.p_text} style={{ fontStyle: "italic" }}>
                {testimonal.position}
              </h5>
              <h5 className={mainStyles.p_text}>{testimonal.company}</h5>
            </div>
            <div className={styles.testimonial_pdf}>
              <a
                href={`/pdf/${testimonal.documentPath}`}
                target="_blank"
                rel="noreferrer"
                className={styles.testimonial_pdf}
              >
                <GrDocumentPdf />
                {testimonal.documentPath}
              </a>
            </div>
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
