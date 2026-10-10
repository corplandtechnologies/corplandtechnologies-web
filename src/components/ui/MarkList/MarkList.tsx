import React from "react";
import { motion } from "framer-motion";
import { IN_VIEW, SOFT_SPRING, reveal, stagger } from "../../../utils/motion";
import Icon from "../Icon/Icon";
import "./MarkList.scss";

interface MarkListProps {
  title: string;
  items: string[];
  mark: "yes" | "no";
}

export default function MarkList({ title, items, mark }: MarkListProps) {
  return (
    <div className="marklist">
      <h3 className="marklist__title">{title}</h3>
      <motion.ul
        className="marklist__items"
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={IN_VIEW}
      >
        {items.map((item) => (
          <motion.li
            key={item}
            className="marklist__item"
            variants={reveal}
            transition={SOFT_SPRING}
          >
            <span className={`marklist__mark marklist__mark--${mark}`}>
              <Icon name={mark === "yes" ? "check" : "cross"} size={14} />
            </span>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
