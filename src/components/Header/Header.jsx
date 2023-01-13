import React from 'react';

import ME from '../../assets/IMG_1381.jpg'

import Socials from './Socials';

import './header.css';

import CTA from './CTA';

const Header = () => {
  return (
   <header>
      <div className='container header__container'>
        <h1>Leah Choco</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <Socials />
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
      </div>

   </header>
  )
}

export default Header