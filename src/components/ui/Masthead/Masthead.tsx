import React from "react";
import { motion } from "framer-motion";
import { SOFT_SPRING, reveal, stagger } from "../../../utils/motion";
import "./Masthead.scss";

interface MastheadProps {
  id: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  actions: React.ReactNode;
  note?: React.ReactNode;
  wide?: boolean;
  children?: React.ReactNode;
}

export default function Masthead({
  id,
  title,
  lede,
  actions,
  note,
  wide,
  children,
}: MastheadProps) {
  return (
    <section
      className={`masthead${children ? " masthead--follow" : ""}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="masthead__stage">
        <motion.div
          className="masthead__inner"
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            id={`${id}-title`}
            className={`masthead__title${wide ? " masthead__title--wide" : ""}`}
            variants={reveal}
            transition={SOFT_SPRING}
          >
            {title}
          </motion.h1>

          <motion.p
            className="masthead__lede"
            variants={reveal}
            transition={SOFT_SPRING}
          >
            {lede}
          </motion.p>

          <motion.div
            className="masthead__actions"
            variants={reveal}
            transition={SOFT_SPRING}
          >
            {actions}
          </motion.div>

          {note && (
            <motion.p
              className="masthead__note"
              variants={reveal}
              transition={SOFT_SPRING}
            >
              {note}
            </motion.p>
          )}
        </motion.div>
      </div>

      {children && (
        <motion.div
          className="masthead__follow"
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ ...SOFT_SPRING, delay: 0.62 }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
