import React from 'react'
import ImgHeader from '../assets/rm.png'
import './Header.css'

export default function Header() {
  return (
    <div className='headerImage'>
      <img src={ImgHeader} alt="imagen" />
    </div>
  )
}