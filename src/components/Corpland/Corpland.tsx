import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./Corpland.scss";
import Showcase from "../Showcase/Showcase";
import EndCards from "../EndCards/EndCards";
import { useNavigate } from "react-router-dom";

export default function Corpland() {
  const [state, dispatch] = useContext(store);

  return (
    <div
      className={`container-aboutme ${
        state.darkmode ? "dark-bg-2" : "light-bg-2"
      }`}
    >
      <div className="anchor" id="about-me" />
      <motion.h3
        className={`start eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Corpland.
      </motion.h3>
      <motion.h1
        className={`heading start ${
          state.darkmode ? "dark-heading" : "light-heading"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Beat your competition.
      </motion.h1>

      <IntroCards
        title="The All In One Business Kit!"
        description="Corpland as we know it has an aim and one aim only. We equip you with
          everything you need to name, start, brand and market your business or
          professional self. All in one place, all in one go!"
        cta="Download APK"
        externalLink="https://uc5026f2ba3c1e999c19aa659e0a.dl.dropboxusercontent.com/cd/0/get/CWiVRwp9u5LDUbhEjz7tkYgHEAESoPdCTqRRilZ5MX2vRNm9iLgtL78TGxUuPiwT7UIazPKGvZRSRBNHGGd00mzjqp7hmyRCFbyymW187KSNEqiQF-w8-Ab-SvEvgIzZSxB-Oqb0FHABF96SVVu2kvzgkCOwuxEh2yZXOLAyN__JDg/file#"
        firstCardCount="21,500"
        firstCardLabel="Active Customers"
        secondCardCount="4.9"
        secondCardLabel="User Satisfaction"
        thirdCardCount="12,400"
        thirdCardLabel="Winning Sellers"
        isCorpland
      />
      {/* <Showcase /> */}
      {/* <EndCards /> */}
    </div>
  );
}
