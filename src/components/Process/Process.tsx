import React from "react";
import { motion } from "framer-motion";
import { steps } from "../../data/site";
import { IN_VIEW, SOFT_SPRING, reveal, stagger } from "../../utils/motion";
import Section from "../ui/Section/Section";
import "./Process.scss";

export default function Process() {
  return (
    <Section
      id="process"
      tone="alt"
      title="You will always hear back."
      lede="Most applications disappear into silence. Ours do not. Everyone who applies gets an answer, and if it is a no, we tell you why."
    >
      <motion.ol
        className="process"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={IN_VIEW}
      >
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            className="process__step"
            variants={reveal}
            transition={SOFT_SPRING}
          >
            <span className="process__number" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__body">{step.body}</p>
            <p className="process__from">
              <span className="process__from-label">From you</span>
              {step.fromYou}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
