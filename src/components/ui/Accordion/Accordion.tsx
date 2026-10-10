import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SPRING, collapse } from "../../../utils/motion";
import playAudio from "../../../utils/helpers/playAudio";
import Icon from "../Icon/Icon";
import "./Accordion.scss";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  id: string;
  items: AccordionItem[];
}

export default function Accordion({ id, items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${id}-question-${index}`;
        const panelId = `${id}-answer-${index}`;

        return (
          <div className="accordion__item" key={item.question}>
            <h3 className="accordion__heading">
              <button
                id={buttonId}
                className="accordion__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onMouseDown={playAudio}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <motion.span
                  className="accordion__icon"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={SPRING}
                >
                  <Icon name="plus" size={20} />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  className="accordion__panel"
                  role="region"
                  aria-labelledby={buttonId}
                  variants={collapse}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={SPRING}
                >
                  <p className="accordion__answer">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
