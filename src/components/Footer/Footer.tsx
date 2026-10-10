import React from "react";
import { Link, useLocation } from "react-router-dom";
import { company } from "../../data/site";
import scroll from "../../utils/helpers/scroll";
import ThemeButton from "../../free/ThemeButton/ThemeButton";
import "./Footer.scss";

const socials = [
  { label: "LinkedIn", url: company.social.linkedin },
  { label: "X", url: company.social.x },
  { label: "WhatsApp", url: company.social.whatsapp },
];

const pages = [
  { label: "Home", path: "/", hash: "" },
  { label: "Free for the first ten", path: company.freePath, hash: "" },
  { label: "Start a project", path: "/", hash: "contact" },
];

export default function Footer() {
  const { pathname } = useLocation();

  const stay = (event: React.MouseEvent, page: (typeof pages)[number]) => {
    if (pathname !== page.path) return;

    event.preventDefault();

    if (page.hash) {
      scroll(page.hash);
      window.history.replaceState(null, "", `${page.path}#${page.hash}`);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(null, "", page.path);
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            src={require("../../assets/images/CORPLAND5.png")}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <p className="footer__name">{company.name}</p>
            {company.registration && (
              <p className="footer__place">
                Company number {company.registration}
              </p>
            )}
          </div>
        </div>

        <ul className="footer__links">
          {pages.map((page) => (
            <li key={page.label}>
              <Link
                to={{ pathname: page.path, hash: page.hash }}
                onClick={(event) => stay(event, page)}
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="footer__links">
          {company.emails.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          ))}
        </ul>

        <ul className="footer__links">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="footer__legal">
        © {new Date().getFullYear()} {company.name}
      </p>
      <ThemeButton />
    </footer>
  );
}
