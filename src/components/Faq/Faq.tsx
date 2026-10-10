import React from "react";
import { faqs } from "../../data/site";
import Accordion from "../ui/Accordion/Accordion";
import Reveal from "../ui/Reveal/Reveal";
import Section from "../ui/Section/Section";

export default function Faq() {
  return (
    <Section id="faq" tone="alt" narrow title="Questions you should ask us.">
      <Reveal>
        <Accordion id="faq" items={faqs} />
      </Reveal>
    </Section>
  );
}
