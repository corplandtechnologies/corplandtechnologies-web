import React, { useContext, useRef } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./IntroCards.scss";
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";
import { APKUrl, appleAppURL } from "../../data";

interface IntroCardsProps {
  title: string;
  description: string;
  cta?: string;
  externalLink?: string;
  onClick?: () => void;
  firstCardCount?: string;
  firstCardLabel: string;
  secondCardCount: string;
  secondCardLabel: string;
  thirdCardCount: string;
  thirdCardLabel: string;
  isCorpland?: boolean;
}

const IntroCards: React.FC<IntroCardsProps> = ({
  title,
  description,
  cta,
  onClick,
  firstCardCount,
  firstCardLabel,
  secondCardCount,
  secondCardLabel,
  thirdCardCount,
  thirdCardLabel,
  externalLink,
  isCorpland,
}) => {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section
        className={`left-intro big-card ${
          state.darkmode ? "dark-card" : "light-card"
        }`}
      >
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>
          {title}
        </h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
          {description}
        </p>
        <div className="link-container">
          {isCorpland ? (
            <>
              <GooglePlayButton
                url={APKUrl}
                theme={`${state.darkmode ? "dark" : "light"}`}
                className={"custom-style"}
              />
              <AppStoreButton
                url={appleAppURL}
                theme={`${state.darkmode ? "dark" : "light"}`}
                className={"custom-style"}
              />
            </>
          ) : (
            <button
              className="downloadBtn"
              onClick={() => {
                if (externalLink) {
                  window.open(externalLink, "_blank", "noopener,noreferrer");
                } else if (onClick) {
                  onClick();
                }
              }}
            >
              {cta}
            </button>
          )}
        </div>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num green">{firstCardCount}</h2>
            <h2 className="sign green-sign">+</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {firstCardLabel}
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num place blue">{secondCardCount} Stars</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {secondCardLabel}
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num purple">{thirdCardCount}</h2>
            <h2 className="sign purple-sign">+</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {thirdCardLabel}
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num red">100</h2>
            <h2 className="sign percent red-sign">%</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            User Prioritization
          </h4>
        </motion.div>
      </section>
    </div>
  );
};

export default IntroCards;
