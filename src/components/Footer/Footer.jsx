import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={` innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br /> amazing together.
          </span>

          <span className="primaryText">
            Start by <a href="mailto:mohammeddolapo06@gmai.com"> saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText"> Location </span>
            <p> Lagos, Nigeria </p>
          </div>

          {/* <div className={css.menu}>
            <li>Services</li>
            <li> Works</li>
            <li> Notes</li>
            <li> Experience</li>
          </div> */}
          <div className="css-icon">
            <a href="https://github.com/therealhhybrid" target="_blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-dolapo-abiola/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
