import React from 'react'
import PortalGif from '../assets/portal.gif'
import { useState } from 'react';
import './Portal.css';




export default function Portal() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  
  }

  return (
    <div>


<img src={PortalGif} alt="Mi gif" onClick={handleClick} className={visible ? '' : 'clicked'} />


    </div>
  )
}
