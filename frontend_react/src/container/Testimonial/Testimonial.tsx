import React, { useState, useEffect } from "react";

import { BrandItem, TestimonialItem } from "./models";
import { strings } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import Brand from "./Brand/Brand";

import styles from "./Testimonial.module.scss";
import mainStyles from "../../styles/App.module.scss";
import { Grid } from "@mui/material";

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

      <Grid container sx={{ maxWidth: "1000px", minHeight: "130px" }}>
        {brands.map((brand) => (
          <Grid key={brand.name} item lg={3} md={4} xs={6}>
            <Brand key={brand._id} brand={brand} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Testimonial;
