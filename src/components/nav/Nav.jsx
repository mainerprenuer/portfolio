import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {GiNotebook} from 'react-icons/gi'
// import {FcServices} from 'react-icons/fc'
import {TiMessages} from 'react-icons/ti'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><GiNotebook /></a>
    {/* <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><FcServices /></a> */}
    <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><TiMessages /></a>
   </nav>
  )
}

export default Nav