import React from 'react'
import PortalGif from '../assets/portal.gif'
import { useState } from 'react';
import './Portal.css';
import { motion } from "framer-motion";
import Carousel from './Carousel';

export default function Portal() {
  const [portalClicked, setPortalClicked] = useState(false);

  const handleClick = () => {
    setPortalClicked(true);
  }

  return (
    <div className='carousel'>

{/* {!portalClicked ? motion.img : null} */}
      <motion.img src={PortalGif} alt="Mi gif" onClick={handleClick} className={portalClicked ? 'clicked' : ''} />

      <motion.div
        className={`slider-container ${portalClicked ? "visible" : ""}`}
        animate={{ opacity: portalClicked ? 1 : 0, x: portalClicked ? 0 : "-100vw" }}
        transition={{ duration: 2 }}
      >
        <motion.div className="slider">
          {<Carousel/>}
    
        </motion.div>
      </motion.div> 
    </div>
  )
}




// import React from 'react'
// import PortalGif from '../assets/portal.gif'
// import { useState } from 'react';
// import './Portal.css';




// export default function Portal() {
//   const [visible, setVisible] = useState(true);

//   const handleClick = () => {
//     setVisible(false);
  
//   }

//   return (
//     <div>


// <img src={PortalGif} alt="Mi gif" onClick={handleClick} className={visible ? '' : 'clicked'} />


//     </div>
//   )
// }
