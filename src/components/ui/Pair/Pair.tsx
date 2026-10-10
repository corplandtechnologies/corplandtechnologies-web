import React from "react";
import Reveal from "../Reveal/Reveal";
import "./Pair.scss";

interface PairProps {
  first: React.ReactNode;
  second: React.ReactNode;
}

export default function Pair({ first, second }: PairProps) {
  return (
    <div className="pair">
      <Reveal>{first}</Reveal>
      <Reveal delay={0.08}>{second}</Reveal>
    </div>
  );
}
