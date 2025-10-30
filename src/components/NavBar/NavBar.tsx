import React, { useContext } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/helpers/scroll";
import playAudio from "../../utils/helpers/playAudio";

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={`${state.darkmode ? "dark-nav" : "light-nav"}`}
    >
      <img
        onClick={(e) => scroll("hero")}
        src={require("../../assets/images/CORPLAND5.png")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      />
      {/* <h3
        className={`first ${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("about-me")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        About
      </h3> */}
      <h3
        className={` first ${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("corpland")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        Corpland
      </h3>
      {/* <h3
        className={`first ${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("corpland-constructs")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        Constructs
      </h3> */}
      <button
        className="btn-nav"
        type="button"
        onClick={(e) => scroll("contact")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "Kontakt" : "Contact"}
      </button>
    </motion.nav>
  );
}
