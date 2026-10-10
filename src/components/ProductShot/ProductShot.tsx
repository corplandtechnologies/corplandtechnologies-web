import React from "react";
import { motion } from "framer-motion";
import { company } from "../../data/site";
import { IN_VIEW, SOFT_SPRING, reveal, stagger } from "../../utils/motion";
import "./ProductShot.scss";

export default function ProductShot() {
  return (
    <motion.figure
      className="shot"
      variants={stagger(0.18)}
      initial="hidden"
      whileInView="visible"
      viewport={IN_VIEW}
    >
      <div className="shot__stage">
        <motion.a
          className="shot__browser"
          href={company.corplandUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Corpland in a new tab"
          variants={reveal}
          transition={SOFT_SPRING}
        >
          <span className="shot__bar">
            <span className="shot__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="shot__host">{company.corplandHost}</span>
          </span>
          <img
            src={require("../../assets/images/work/corpland-web.jpg")}
            alt="The Corpland marketplace in a desktop browser: a search page with filters and a grid of products priced in Ghana cedis."
            width={1440}
            height={900}
            loading="lazy"
          />
        </motion.a>
        <motion.div
          className="shot__phone"
          variants={reveal}
          transition={SOFT_SPRING}
        >
          <img
            src={require("../../assets/images/work/corpland-phone.jpg")}
            alt="The same Corpland page on a phone."
            width={780}
            height={1688}
            loading="lazy"
          />
        </motion.div>
      </div>
      <figcaption className="shot__caption">
        Corpland on the web, captured from the live site on{" "}
        {company.corplandSeen}.
      </figcaption>
    </motion.figure>
  );
}
