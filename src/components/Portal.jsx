import React from "react";
import PortalGif from "../assets/portal.gif";
import { useState } from "react";
import "./Portal.css";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

export default function Portal({info, setShowInfo, setCharacterId}) {
  const [portalClicked, setPortalClicked] = useState(false);

  const handleClick = () => {
    setPortalClicked(true);
  };

  return (
    <div>
      <motion.img
        src={PortalGif}
        alt="Mi gif"
        onClick={handleClick}
        className={portalClicked ? "clicked" : ""}
      />

      <motion.div
        className={`slider-container ${portalClicked ? "visible" : ""}`}
        animate={{
          opacity: portalClicked ? 1 : 0,
          x: portalClicked ? 0 : "-100vw",
        }}
        transition={{ duration: 2 }}
      >
        {portalClicked ? (
          <motion.div className="slider">{<Carousel info={info} setShowInfo={setShowInfo} setCharacterId={setCharacterId}/>}</motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
