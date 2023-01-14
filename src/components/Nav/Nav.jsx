import React from 'react';
import {FaHome} from 'react-icons/fa';
import{BsFillPersonLinesFill} from 'react-icons/bs';
import{ GiBookshelf} from 'react-icons/gi';
import{GoTools} from 'react-icons/go';
import{FaRegThumbsUp} from 'react-icons/fa';
import{AiOutlineMail} from 'react-icons/ai';
import './nav.css';

import{useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')

  return (
    <nav>
      <a href="#" onClick ={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick ={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><BsFillPersonLinesFill /></a>
      <a href="#experience" onClick ={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><GiBookshelf /></a>
      <a href="#projects" onClick ={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}><GoTools /></a>
      <a href="#recommendations" onClick ={() => setActiveNav('#recommendations')} className={activeNav === "#recommendations" ? 'active' : ''}><FaRegThumbsUp /></a>
      <a href="#contact" onClick ={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav