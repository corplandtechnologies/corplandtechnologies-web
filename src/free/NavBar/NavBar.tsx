import React from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { company } from "../../data/site";
import { INav } from "../../interfaces/site.interface";
import scroll from "../../utils/helpers/scroll";
import playAudio from "../../utils/helpers/playAudio";

interface NavBarProps {
  nav: INav;
}

const goTo = (event: React.MouseEvent, id: string) => {
  event.preventDefault();
  scroll(id);
  window.history.replaceState(null, "", `#${id}`);
};

export default function NavBar({ nav }: NavBarProps) {
  const { pathname } = useLocation();

  const goHome = (event: React.MouseEvent) => {
    if (pathname !== "/") return;

    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(null, "", "/");
  };

  return (
    <motion.nav
      className="nav"
      aria-label="Main"
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
    >
      <Link
        className="nav__brand"
        to="/"
        aria-label={`${company.name}, home`}
        onClick={goHome}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <img src={require("../../assets/images/CORPLAND5.png")} alt="" />
        <span className="nav__name">{company.name}</span>
      </Link>
      {nav.links.map((link) => {
        const className = `nav__link${link.wideOnly ? " nav__link--wide" : ""}`;

        return link.to ? (
          <Link
            key={link.label}
            className={className}
            to={link.to}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={link.label}
            className={className}
            href={`#${link.id}`}
            onClick={(event) => goTo(event, link.id || "")}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            {link.label}
          </a>
        );
      })}
      <a
        className="nav__apply"
        href={`#${nav.action.id}`}
        onClick={(event) => goTo(event, nav.action.id)}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {nav.action.label}
      </a>
    </motion.nav>
  );
}
