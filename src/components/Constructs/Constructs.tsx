import React, { useContext, useEffect, useMemo, useState } from "react";
import { store } from "../../App";
import { AnimatePresence, motion } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./Constructs.scss";
// import Showcase from "../Showcase/Showcase";
// import EndCards from "../EndCards/EndCards";
// import { useNavigate } from "react-router-dom";
import SubscriptionService from "../../services/subscription.service";
import AdService from "../../services/ad.service";

export default function Constructs() {
  const [state, dispatch] = useContext(store);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // const referenceCode = useMemo(() => {
  //   return new URLSearchParams(window.location.search).get("reference");
  // }, [window.location.search]);

  // // Subscription verification effect
  // useEffect(() => {
  //   const verifySubscription = async () => {
  //     if (!referenceCode) return;

  //     try {
  //       const response = await SubscriptionService.verifyPayment(referenceCode);
  //       if (response.success) {
  //         setIsSuccessModalOpen(true);
  //       }
  //     } catch (error) {
  //       console.log("Subscription verification failed:", error);
  //     }
  //   };

  //   if (referenceCode) {
  //     verifySubscription();
  //   }
  // }, [referenceCode]);

  // // Ad verification effect
  // useEffect(() => {
  //   const verifyAd = async () => {
  //     if (!referenceCode) return;

  //     try {
  //       const adResponse = await AdService.verifyPayment(referenceCode);
  //       if (adResponse.success) {
  //         setIsSuccessModalOpen(true);
  //       }
  //     } catch (error) {
  //       console.log("Ad verification failed:", error);
  //     }
  //   };

  //   if (referenceCode) {
  //     verifyAd();
  //   }
  // }, [referenceCode]);

  return (
    <div
      className={`container-aboutme ${
        state.darkmode ? "dark-bg-2" : "light-bg-2"
      }`}
    >
      <div className="anchor" id="constructs" />
      <motion.h3
        className={`start eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Constructs.
      </motion.h3>
      <motion.h1
        className={`heading start ${
          state.darkmode ? "dark-heading" : "light-heading"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Your Startup Team as a Service.
      </motion.h1>

      <IntroCards
        title="We Build, Maintain, and Grow"
        description="We design, build and ship your MVP, then iterate like a full dev team for a fraction of the cost. Upfront build + a monthly retainer covering updates, fixes, and unlimited features & revisions per month. Hire a company, not just a coder."
        firstCardCount="45"
        firstCardLabel="Day MVPs"
        hideFirstPlus={true}
        secondCardCount="5.0"
        secondCardLabel="Client Satisfaction"
        thirdCardCount="Unlimited"
        thirdCardLabel="Features Monthly"
        hideThirdPlus={true}
        cta="Book a Call"
        externalLink="https://calendly.com/corpland-gh/30min"
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
                  Thank you for Subscribing. You can go back to Constructs and
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
