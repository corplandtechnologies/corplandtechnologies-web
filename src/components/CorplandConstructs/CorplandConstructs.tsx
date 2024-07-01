import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./CorplandConstructs.scss";
import Showcase from "../Showcase/Showcase";
import EndCards from "../EndCards/EndCards";
import scroll from "../../utils/helpers/scroll";

export default function CorplandConstructs() {
  const [state, dispatch] = useContext(store);

  return (
    <div
      className={`container-aboutme ${
        state.darkmode ? "dark-bg-2" : "light-bg-2"
      }`}>
      <div
        className="anchor"
        id="about-me"
      />
      <motion.h3
        className={`start eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>
        Corpland Constructs.
      </motion.h3>
      <motion.h1
        className={`heading start ${
          state.darkmode ? "dark-heading" : "light-heading"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>
        Quality is priority.
      </motion.h1>
      <IntroCards
        title="The Industry Level Software Solutions."
        description="Since Corpland Constructs is affiliated with one of the fastest growing online MarketPlaces (Corpland), you have industry level engineers bring your billion dollar ideas to life the using strict industry standards!"
        cta="Let's Talk"
        onClick={() => scroll("contact")}
        firstCardCount="67"
        firstCardLabel="Active Clients"
        secondCardCount="5.0"
        secondCardLabel="Client Satisfaction"
        thirdCardCount="241"
        thirdCardLabel="Happy Clients"
      />
      {/* <Showcase /> */}
      {/* <EndCards /> */}
    </div>
  );
}
