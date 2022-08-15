import React, { useState, useEffect } from "react";

import { BrandItem, TestimonialItem } from "./models";
import { strings } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import Brand from "./Brand/Brand";

import styles from "./Testimonial.module.scss";
import mainStyles from "../../styles/App.module.scss";

interface Props {
  iBrands: BrandItem[];
  iTestimonials: TestimonialItem[];
}

const Testimonial: React.FC<Props> = ({ iBrands, iTestimonials }) => {
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [testimonials, setTestimonals] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    setBrands(iBrands);
    setTestimonals(iTestimonials);
  }, [iBrands, iTestimonials]);

  return (
    <>
      <TestimonialCarousel testimonials={testimonials} />

      <div className={`${styles.testimonial_brands} ${mainStyles.flex_center}`}>
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand} />
        ))}
      </div>
    </>
  );
};

export default Testimonial;
