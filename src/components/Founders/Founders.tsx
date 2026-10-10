import React from "react";
import { founders, workingFacts } from "../../data/site";
import Card from "../ui/Card/Card";
import Reveal from "../ui/Reveal/Reveal";
import Section from "../ui/Section/Section";
import TermList from "../ui/TermList/TermList";
import "./Founders.scss";

const tones = ["blue", "purple"];

const initialsOf = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${parts[0][0]}${last}`.toUpperCase();
};

interface FoundersProps {
  title?: string;
  tone?: "base" | "alt";
  number?: number;
}

export default function Founders({
  title = "You talk to the people who build it.",
  tone = "alt",
  number,
}: FoundersProps) {
  return (
    <Section
      id="team"
      tone={tone}
      number={number}
      title={title}
      lede="Agencies often put someone between you and the people building. We do not. You talk to the two engineers who write your code, and there is nobody else here."
    >
      <div className="founders">
        {founders.map((founder, index) => (
          <Reveal key={founder.email} delay={index * 0.08}>
            <Card className="founder">
              <div
                className={`founder__avatar founder__avatar--${
                  tones[index % tones.length]
                }`}
              >
                {founder.photo ? (
                  <img
                    src={founder.photo}
                    alt={`Portrait of ${founder.name}`}
                  />
                ) : (
                  <span aria-hidden="true">{initialsOf(founder.name)}</span>
                )}
              </div>
              <h3 className="founder__name">{founder.name}</h3>
              <p className="founder__role">{founder.role}</p>
              <ul className="founder__links">
                <li>
                  <a href={`mailto:${founder.email}`}>{founder.email}</a>
                </li>
                {founder.linkedin && (
                  <li>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {founder.github && (
                  <li>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                )}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
      <TermList items={workingFacts} number={number} />
    </Section>
  );
}
