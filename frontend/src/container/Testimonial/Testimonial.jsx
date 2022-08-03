import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"] | order(name asc)';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
