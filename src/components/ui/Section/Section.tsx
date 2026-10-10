import React from "react";
import Reveal from "../Reveal/Reveal";
import "./Section.scss";

interface SectionProps {
  id: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "base" | "alt";
  narrow?: boolean;
  number?: number;
  children: React.ReactNode;
}

export default function Section({
  id,
  title,
  lede,
  tone = "base",
  narrow,
  number,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section section--${tone}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={`section__inner${narrow ? " section__inner--narrow" : ""}`}>
        <Reveal className="section__head">
          <h2
            id={`${id}-title`}
            className={`section__title${
              number ? " section__title--numbered" : ""
            }`}
          >
            {number && <span className="section__number">{number}</span>}
            {title}
          </h2>
          {lede && <p className="section__lede">{lede}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
