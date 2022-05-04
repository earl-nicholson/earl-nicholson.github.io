import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className= ".container.header_container">
        <h5>Hello I am</h5>
        <h1>Earl</h1>
        <h5 class= "text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className= 'scroll_down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default Header