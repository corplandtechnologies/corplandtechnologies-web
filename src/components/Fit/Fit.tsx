import React from "react";
import { Link } from "react-router-dom";
import { fit } from "../../data/site";
import MarkList from "../ui/MarkList/MarkList";
import Pair from "../ui/Pair/Pair";
import Reveal from "../ui/Reveal/Reveal";
import Section from "../ui/Section/Section";
import "./Fit.scss";

export default function Fit() {
  return (
    <Section
      id="fit"
      tone="base"
      title="You will know if this fits you."
      lede="Ten spots is not many, so we pick the projects we can finish well. Read both lists and you will know before you apply."
    >
      <Pair
        first={<MarkList title="A good fit" items={fit.yes} mark="yes" />}
        second={<MarkList title="Not a fit" items={fit.no} mark="no" />}
      />
      <Reveal>
        <p className="fit__paid">
          Need something bigger, or want to pay for the work and start sooner?{" "}
          <Link to="/#sign">Start a paid project</Link> and we will quote it.
        </p>
      </Reveal>
    </Section>
  );
}
