import React from "react";
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";
import { APKUrl, appleAppURL } from "../../data";
import "./StoreBadges.scss";

export default function StoreBadges() {
  return (
    <div className="stores">
      <GooglePlayButton url={APKUrl} theme="dark" className="custom-style" />
      <AppStoreButton url={appleAppURL} theme="dark" className="custom-style" />
    </div>
  );
}
