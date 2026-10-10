import React from "react";
import "./Corpland.scss";
import { builtFacts, company } from "../../data/site";
import ProductShot from "../../components/ProductShot/ProductShot";
import StoreBadges from "../../components/StoreBadges/StoreBadges";
import Button from "../../components/ui/Button/Button";
import Reveal from "../../components/ui/Reveal/Reveal";
import Section from "../../components/ui/Section/Section";
import TermList from "../../components/ui/TermList/TermList";

interface CorplandProps {
  id?: string;
  title?: string;
  tone?: "base" | "alt";
  number?: number;
}

export default function Corpland({
  id = "work",
  title = "You can judge us before you apply.",
  tone = "base",
  number,
}: CorplandProps) {
  return (
    <Section
      id={id}
      tone={tone}
      number={number}
      title={title}
      lede="You should not have to take our word for anything. We have no client work to show yet, but our own product is live and open to anyone. Open it, break it, judge us on it."
    >
      <ProductShot />
      <Reveal className="work__actions">
        <Button href={company.corplandUrl} external size="lg">
          Open Corpland
        </Button>
        <StoreBadges />
      </Reveal>
      <TermList items={builtFacts} number={number} columns={4} />
    </Section>
  );
}
