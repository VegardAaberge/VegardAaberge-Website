import React, { useState, useEffect } from "react";

import { BrandItem, TestimonialItem } from "./models";
import { strings } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import Brand from "./Brand/Brand";

import styles from "./Testimonial.module.scss";
import mainStyles from "../../styles/App.module.scss";

const Testimonial: React.FC = () => {
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [testimonials, setTestimonals] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    client.fetch(strings.QUERY_BRANDS).then((data) => {
      setBrands(data);
    });
    client.fetch(strings.QUERY_TESTIMONIALS).then((data) => {
      setTestimonals(data);
    });
  }, []);

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

export default AppWrap(
  Testimonial,
  strings.ID_TESTIMONIALS,
  true,
  strings.CLASS_PRIMARY_BG
);
