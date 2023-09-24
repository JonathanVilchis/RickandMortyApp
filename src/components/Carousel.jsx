import React from "react";
import { useState } from "react";
import "../styles/Travel.css";
import Characters from "./Characters";
import RickAndMortyTravel from '../assets/rick-and-morty-travel.gif';

export default function Carousel ({setShowInfo, setCharacterId}) {

  const [portalClicked, setPortalClicked] = useState(false);

  const handleClick = () => {
    setPortalClicked(true);
  };

  return (
    <div className="traveling">
      <img 
        src={RickAndMortyTravel}
        alt="gif"
        onClick={handleClick}
        className={portalClicked ? "travel" : ""}
      />

      <div
        className={`slider-container ${portalClicked ? "visible" : ""}`}
        animate={{
          opacity: portalClicked ? 1 : 0,
          x: portalClicked ? 0 : "-100vw",
        }}
        transition={{ duration: 2 }}
      >
        {portalClicked ? (
          <div className="slider">{<Characters setShowInfo={setShowInfo} setCharacterId={setCharacterId}/>}</div>
        ) : null}
      </div>
    </div>
  );
}
