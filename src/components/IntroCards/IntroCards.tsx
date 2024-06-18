import React, { useContext, useRef } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import "./IntroCards.scss";

export default function IntroCards() {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section
        className={`left-intro big-card ${
          state.darkmode ? "dark-card" : "light-card"
        }`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>
          The All In One Business Kit!
        </h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
          Corpland as we know it has an aim and one aim only. We equip you with
          everything you need to name, start, brand and market your business or
          professional self. All in one place, all in one go!
        </p>
      </section>

      <section
        className="right-intro"
        ref={scrollRef}>
        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}>
          <div className="card-top">
            <h2 className="num green">21,500</h2>
            <h2 className="sign green-sign">+</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            Active Customers
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}>
          <div className="card-top">
            <h2 className="num place blue">4.9 Stars</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            User Satisfaction
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}>
          <div className="card-top">
            <h2 className="num purple">12,400</h2>
            <h2 className="sign purple-sign">+</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            Winning Sellers
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}>
          <div className="card-top">
            <h2 className="num red">100</h2>
            <h2 className="sign percent red-sign">%</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
            User Prioritization
          </h4>
        </motion.div>
      </section>
    </div>
  );
}
