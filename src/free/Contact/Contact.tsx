import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.scss";
import { company } from "../../data/site";
import { IInquiryForm } from "../../interfaces/site.interface";
import Reveal from "../../components/ui/Reveal/Reveal";
import Section from "../../components/ui/Section/Section";

interface ContactProps {
  id: string;
  form: IInquiryForm;
  tone?: "base" | "alt";
  number?: number;
}

export default function Contact({
  id,
  form,
  tone = "base",
  number,
}: ContactProps) {
  return (
    <Section
      id={id}
      tone={tone}
      number={number}
      title={form.title}
      lede={form.lede}
    >
      <div className="apply">
        <Reveal>
          <ContactForm form={form} />
        </Reveal>

        <Reveal className="apply__aside" delay={0.08}>
          <div className="apply__note">
            <h3>Prefer email?</h3>
            <p>{form.emailNote}</p>
            <ul className="apply__emails">
              {company.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </div>
          {form.notes.map((note) => (
            <div key={note.title} className="apply__note">
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              {note.to && (
                <Link className="apply__link" to={note.to}>
                  {note.action}
                </Link>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
