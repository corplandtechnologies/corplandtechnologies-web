import React from "react";
import { motion } from "framer-motion";
import { IN_VIEW, SOFT_SPRING, reveal } from "../../../utils/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={IN_VIEW}
      transition={{ ...SOFT_SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}
