import React, { useContext, useEffect, useState } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import IntroCards from "../IntroCards/IntroCards";
import "./Corpland.scss";
import Showcase from "../Showcase/Showcase";
import EndCards from "../EndCards/EndCards";
import { useNavigate } from "react-router-dom";

export default function Corpland() {
  const [state, dispatch] = useContext(store);
  const [downloadUrl, setDownloadUrl] = useState("");
  const externalLink =
    "https://www.googleapis.com/drive/v3/files/10XVpQCi2wt9tJVyT_hJTuarEqxELdOVT?key=AIzaSyDrCgbPrI0GXR0utSYSgcEtyvrndAMNVHs&alt=media";
  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        const fileId = "10XVpQCi2wt9tJVyT_hJTuarEqxELdOVT"; // Directly use the known file ID
        const apiKey = "AIzaSyDrCgbPrI0GXR0utSYSgcEtyvrndAMNVHs"; // Your API key
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files/10XVpQCi2wt9tJVyT_hJTuarEqxELdOVT?fields=name,mimeType`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const url = `https://www.googleapis.com/drive/v3/files/10XVpQCi2wt9tJVyT_hJTuarEqxELdOVT?alt=media&key=${apiKey}`;
        setDownloadUrl(`${url}&name=${encodeURIComponent(data.name)}`);
      } catch (error) {
        console.error("Failed to fetch download URL:", error);
      }
    };

    fetchDownloadUrl();
  }, []);

  const handleDownloadClick = () => {
    if (downloadUrl) {
      window.location.href = downloadUrl;
    }
  };

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
        onClick={handleDownloadClick}
        title="The All In One Business Kit!"
        description="Corpland as we know it has an aim and one aim only. We equip you with
          everything you need to name, start, brand and market your business or
          professional self. All in one place, all in one go!"
        cta="Download APK"
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
