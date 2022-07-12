import React, { useState, useEffect } from "react";

import { BrandItem, TestimonialItem } from "./models";
import { constants } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import "./Testimonial.scss";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import Brand from "./Brand/Brand";

const Testimonial: React.FC = () => {
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [testimonials, setTestimonals] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testimonalsQuery = '*[_type == "testimonials"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
    client.fetch(testimonalsQuery).then((data) => {
      setTestimonals(data);
    });
  }, []);

  return (
    <>
      <TestimonialCarousel testimonials={testimonials} />

      <div className="app__testimonial-brands app__flex-center">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand} />
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  Testimonial,
  constants.ID_TESTIMONIALS,
  true,
  constants.CLASS_PRIMARY_BG
);
