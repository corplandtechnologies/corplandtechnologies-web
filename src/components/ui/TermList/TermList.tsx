import React from "react";
import { motion } from "framer-motion";
import { ITerm } from "../../../interfaces/site.interface";
import { IN_VIEW, SOFT_SPRING, reveal, stagger } from "../../../utils/motion";
import "./TermList.scss";

interface TermListProps {
  items: ITerm[];
  number?: number;
  columns?: 2 | 3 | 4;
  rows?: boolean;
}

export default function TermList({
  items,
  number,
  columns = 3,
  rows,
}: TermListProps) {
  return (
    <motion.dl
      className={`termlist termlist--${rows ? "rows" : `cols-${columns}`}`}
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={IN_VIEW}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          className="termlist__item"
          variants={reveal}
          transition={SOFT_SPRING}
        >
          <dt className="termlist__title">
            {number && (
              <span className="termlist__number">
                {number}.{index + 1}
              </span>
            )}
            <span>{item.title}</span>
          </dt>
          <dd className="termlist__body">{item.body}</dd>
          {item.meta && <dd className="termlist__meta">{item.meta}</dd>}
        </motion.div>
      ))}
    </motion.dl>
  );
}
