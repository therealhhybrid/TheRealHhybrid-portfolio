import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import PortImg from "../PortImg";

export const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* images */}

        <div className={`flexCenter ${css.showCase}`}>
          <motion.div variants={fadeIn("up", "tween", 0.7, 0.6)}>
            <PortImg
              img="./imagery.PNG"
              git="https://github.com/therealhhybrid/Next-Js-Image-Gallery"
              demo="https://nextjs-13-4-image-gallery-therealhhybrid.vercel.app/"
            />
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.7, 0.6)}>
            <PortImg
              img="./ecomm.PNG"
              git="https://github.com/therealhhybrid/ecommerce-next-demo"
              demo="https://ecommerce-app-demo-therealhhybrid.vercel.app/"
            />
          </motion.div>

          {/* <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./imagery.PNG"
            alt="project"
          /> */}
        </div>
      </div>
    </motion.section>
  );
};
