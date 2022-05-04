import React from 'react'
import './Nav.css'
import {SiHomebridge} from 'react-icons/si'
import {RiMapPinUserFill} from 'react-icons/ri'
import {BiNetworkChart} from 'react-icons/bi'
import {SiPagerduty} from 'react-icons/si'
import {MdAlternateEmail} from 'react-icons/md'
import {useState} from 'react'

function Nav() {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className= { activeNav === '#' ? 'active' : ''}> <SiHomebridge/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className= { activeNav === '#about' ? 'active' : ''}> <RiMapPinUserFill/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className= { activeNav === '#experience' ? 'active' : ''}> <BiNetworkChart/> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className= { activeNav === '#portfolio' ? 'active' : ''}> <SiPagerduty/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className= { activeNav === '#contact' ? 'active' : ''}> <MdAlternateEmail/> </a>

    </nav>
  )
}

export default Nav