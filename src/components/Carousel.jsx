import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import "./Carousel.css";
import { motion } from "framer-motion";




export default function Carousel() {
  const [character, setCharacter] = useState([]);
 

  useEffect(() => {
    const movieRequest = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacter(data.results);
    };
    movieRequest();
  }, []);



  return (
    
    <motion.div className="slider-container"

      
      >
        
      <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-5420}}>
        {character.map((character) => (
          <motion.div className="item">
            <Character key={character.id} character={character} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}