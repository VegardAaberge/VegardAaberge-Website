import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "../../../client";
import { BrandItem } from "../models";
import Image from "next/image";

interface Props {
  brand: BrandItem;
}

const Brand: React.FC<Props> = ({ brand }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <Image
        src={urlFor(brand.imgUrl).url()}
        alt={brand.name}
        layout="fill"
        objectFit="contain"
      />
    </motion.div>
  );
};

export default Brand;
