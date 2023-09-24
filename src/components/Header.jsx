import React from "react";
import ImgHeader from "../assets/rm.png";
import "../styles/Header.css";
import MortiAstro from "../assets/mortyAstro.webp";
import RickGif from "../assets/rickgif.webp";
import TextBox from "./TextBox";

export default function Header() {
  return (
    <div className="header container">
      <img className="rickgif" src={RickGif} />
      <img className="headerImage" src={ImgHeader} alt="imagen" />
      <img className="mortyAstro" src={MortiAstro} />
      {/* <TextBox/> */}
    </div>
  );
}
