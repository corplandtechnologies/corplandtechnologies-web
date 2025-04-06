import React, { useContext, useEffect, useMemo, useState } from "react";
import { store } from "../../App";
import { motion, AnimatePresence } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./CorplandConstructs.scss";
import Showcase from "../Showcase/Showcase";
import EndCards from "../EndCards/EndCards";
import scroll from "../../utils/helpers/scroll";
import RegistrationForm from "./components/RegistrationForm";
import PaymentService from "../../services/payment.service";
import SubscriptionService from "../../services/subscription.service";

export default function CorplandConstructs() {
  const [state, dispatch] = useContext(store);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const referenceCode = useMemo(() => {
    return new URLSearchParams(window.location.search).get("reference");
  }, [window.location.search]);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!referenceCode) return;
      const response = await PaymentService.verifyPayment(referenceCode);
      const corplandResponse = await SubscriptionService.verifyPayment(
        referenceCode
      );
      if (response.success || corplandResponse.success) {
        setIsSuccessModalOpen(true);
      }
    };

    if (referenceCode) {
      verifyPayment();
    }
  }, [referenceCode]);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
  };

  return (
    <div
      className={`container-aboutme ${
        state.darkmode ? "dark-bg-2" : "light-bg-2"
      }`}
    >
      <div className="anchor" id="corpland-constructs" />
      <motion.h3
        className={`start eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Corpland Constructs.
      </motion.h3>
      <motion.h1
        className={`heading start ${
          state.darkmode ? "dark-heading" : "light-heading"
        }`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Quality is priority.
      </motion.h1>
      <IntroCards
        title="Learn with Developers from Corpland Tech"
        description="Join our comprehensive 6-week bootcamp with seasoned senior developers from Corpland Technologies. Get hands-on experience through in-person and online tutorials in Mobile App Development, Web Development, Graphics Designing, Databases, and Structured Programming."
        cta="Register Now"
        onClick={handleRegisterClick}
        firstCardCount="150"
        firstCardLabel="CEDIS Fee"
        secondCardCount="6"
        secondCardLabel="Weeks Duration"
        thirdCardCount="5"
        thirdCardLabel="Core Topics"
        hideFirstPlus={true}
        hideSecondStars={true}
        hideThirdPlus={true}
      />
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
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
                  Thank you for registering. We will reach out to you soon.
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
