import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "../../../client";
import "./Brand.scss";
import { BrandItem } from "../models";

interface Props {
  brand: BrandItem;
}

const Brand: React.FC<Props> = ({ brand }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
    </motion.div>
  );
};

export default Brand;
