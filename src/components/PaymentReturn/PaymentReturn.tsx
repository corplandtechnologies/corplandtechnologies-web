import React, { useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { store } from "../../App";
import SubscriptionService from "../../services/subscription.service";
import AdService from "../../services/ad.service";
import Icon from "../ui/Icon/Icon";
import "./PaymentReturn.scss";

export default function PaymentReturn() {
  const [state] = useContext(store);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const referenceCode = useMemo(() => {
    return new URLSearchParams(window.location.search).get("reference");
  }, []);

  useEffect(() => {
    const verifySubscription = async () => {
      if (!referenceCode) return;

      try {
        const response = await SubscriptionService.verifyPayment(referenceCode);
        if (response.success) {
          setIsSuccessModalOpen(true);
        }
      } catch (error) {
        console.log("Subscription verification failed:", error);
      }
    };

    if (referenceCode) {
      verifySubscription();
    }
  }, [referenceCode]);

  useEffect(() => {
    const verifyAd = async () => {
      if (!referenceCode) return;

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
      verifyAd();
    }
  }, [referenceCode]);

  return (
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
              <div className="success-icon">
                <Icon name="check" size={30} />
              </div>
              <h2 className={state.darkmode ? "dark-heading" : "light-heading"}>
                Payment Successful!
              </h2>
              <p className={state.darkmode ? "dark-eyebrow" : "light-eyebrow"}>
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
  );
}
