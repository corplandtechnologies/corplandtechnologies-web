import React from "react";
import "./Manifest.scss";
import { catchTerms } from "../../data/site";
import Reveal from "../../components/ui/Reveal/Reveal";
import TermList from "../../components/ui/TermList/TermList";

export default function Manifest() {
  return (
    <section
      id="catch"
      className="section section--base manifest"
      aria-labelledby="catch-title"
    >
      <div className="section__inner">
        <Reveal>
          <h2 id="catch-title" className="manifest__statement">
            Wondering what the catch is? We need a portfolio. After these
            ten, we charge.
          </h2>
        </Reveal>
        <TermList items={catchTerms} />
        <Reveal>
          <p className="manifest__close">
            No equity. No deposit. No card details.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
