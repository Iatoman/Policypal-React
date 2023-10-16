import React from 'react'
import logo from '../img/policypal-crop.png'
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CustomLink from './CustomLink';

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false);

  return (
    <header id='header' className={menuOpen?'header-menu-open':'header'}>
      {menuOpen? '':<div className='header-left'>
      <Link to='hero' smooth={true} duration={500} className='link-top'><img className='logo' src={logo} alt='logo'/></Link>
      <Link to='hero' smooth={true} duration={500} className='link-top'><h3>Policy Pal</h3></Link>     
      
      </div>}
      
    
      
      <div className='nav-btn-container'>
        <FontAwesomeIcon icon="fa-solid fa-bars" id='nav-mobile-btn' onClick={()=>{toggleMenu(!menuOpen)}}/>
        </div>
        <div className={menuOpen?'nav-menu-container-open':'nav-menu-container'}>


        <ul id='nav-menu'>
          <CustomLink to='hero' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
            Home
          </CustomLink>
          <CustomLink to='cover-levels' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
            Insurance Type
          </CustomLink>
          <CustomLink to='faqs' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
            FAQs
          </CustomLink>
          <CustomLink to='contact' smooth={true} duration={1000} onClick={() => toggleMenu(false)}>
            Contact Us
          </CustomLink>
      </ul>

        </div>
    </header>
  )
}

export default Header
