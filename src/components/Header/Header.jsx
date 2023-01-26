import React from 'react';

import ME from '../../assets/Leah Laughing Portfolio.jpeg'

import './header.css';

import CTA from './CTA';

const Header = () => {
  return (
   <header>
      <div className='container header__container'>
        <h1>Leah Choco</h1>
        <h3 className='text-light'>Certified MERN Developer</h3>
        <CTA />
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <h3>Keep scrolling to see more!</h3>
      </div>

   </header>
  )
}

export default Header