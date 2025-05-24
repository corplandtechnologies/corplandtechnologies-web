import React, { useContext, useEffect, useMemo, useState } from "react";
import { store } from "../../App";
import { AnimatePresence, motion } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./Corpland.scss";
import Showcase from "../Showcase/Showcase";
import EndCards from "../EndCards/EndCards";
import { useNavigate } from "react-router-dom";
import SubscriptionService from "../../services/subscription.service";
import AdService from "../../services/ad.service";

export default function Corpland() {
  const [state, dispatch] = useContext(store);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const referenceCode = useMemo(() => {
    return new URLSearchParams(window.location.search).get("reference");
  }, [window.location.search]);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!referenceCode) return;

      try {
        const response = await SubscriptionService.verifyPayment(referenceCode);
        if (response.success) {
          setIsSuccessModalOpen(true);
          return;
        }
      } catch (error) {
        console.log("Subscription verification failed:", error);
      }

      try {
        const adResponse = await AdService.verifyPayment(referenceCode);
        if (adResponse.success) {
          setIsSuccessModalOpen(true);
        }
      } catch (error) {
        console.log("Ad verification failed:", error);
      }
    };

    if (referenceCode) {
      verifyPayment();
    }
  }, [referenceCode]);

  return (
    <div
      className={`container-aboutme ${
        state.darkmode ? "dark-bg-2" : "light-bg-2"
      }`}
    >
      <div className="anchor" id="corpland" />
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
      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSuccessModalOpen(false)}
          >
            <motion.div
              className={`success-modal ${
                state.darkmode ? "dark-card" : "light-card"
              }`}
              initial={{ scale: 0, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="success-content">
                <div className="success-icon">✓</div>
                <h2
                  className={state.darkmode ? "dark-heading" : "light-heading"}
                >
                  Payment Successful!
                </h2>
                <p
                  className={state.darkmode ? "dark-eyebrow" : "light-eyebrow"}
                >
                  Thank you for Subscribing. You can go back to Corpland and
                  enjoy your amazing experience.
                </p>
                <button
                  className="close-success-btn"
                  onClick={() => setIsSuccessModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
