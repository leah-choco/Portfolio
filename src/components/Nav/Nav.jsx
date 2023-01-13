import React from 'react';
import {FaHome} from 'react-icons/fa';
import{BsFillPersonLinesFill} from 'react-icons/bs';
import{ GiBookshelf} from 'react-icons/gi';
import{GoTools} from 'react-icons/go';
import{FaRegThumbsUp} from 'react-icons/fa';
import{AiOutlineMail} from 'react-icons/ai';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome /></a>
      <a href="#about"><BsFillPersonLinesFill /></a>
      <a href="#experience"><GiBookshelf /></a>
      <a href="#projects"><GoTools /></a>
      <a href="#recommendations"><FaRegThumbsUp /></a>
      <a href="#contact"><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav