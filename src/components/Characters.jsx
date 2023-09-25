import React, { useEffect, useState } from "react";
import Character from "./Character";
import "../styles/Carousel.css";
import { motion } from "framer-motion";

export default function Carousel({ setCharacterId, setShowInfo }) {
  const [character, setCharacter] = useState([]);
  let [button, setButton] = useState(1);

  useEffect(() => {
    const movieRequest = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${button}`
      );
      const data = await response.json();
      setCharacter(data.results);
    };
    movieRequest();
  }, [button]);

  return (
    <div className="carousel">
      <div className="buttons">
        <button className="btn-shine" onClick={() => setButton(1)}>
          <span>|&lt;&lt;</span>
        </button>
        <button
          className="btn-shine"
          onClick={() => setButton(button <= 1 ? (button = 1) : button - 1)}
        >
          <span>PREV</span>
        </button>
        <button
          style={{ width: "80px", color: "orange" }}
          className="btn-shine"
        >
          <span>{button}</span>
        </button>
        <button
          className="btn-shine"
          onClick={() => setButton(button >= 42 ? (button = 42) : button + 1)}
        >
          <span>NEXT</span>
        </button>
        <button className="btn-shine" onClick={() => setButton(42)}>
          <span>&gt;&gt;|</span>
        </button>
      </div>
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -3400 }}
      >
        {character.map((character) => (
          <motion.div key={character.id} className="item">
            <Character
              key={character.id}
              character={character}
              setShowInfo={setShowInfo}
              setCharacterId={setCharacterId}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
