import React from 'react';

import './nav.css';

import{useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')

  return (
    <nav>
      <a href="#about" onClick ={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}>About</a>
      <a href="#experience" onClick ={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}>Experience</a>
      <a href="#projects" onClick ={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}>Projects</a>
      <a href="#references" onClick ={() => setActiveNav('#references')} className={activeNav === "#references" ? 'active' : ''}>References</a>
      <a href="#contact" onClick ={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}>Contact</a>
    </nav>
  )
}

export default Nav