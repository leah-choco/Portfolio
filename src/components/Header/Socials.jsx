import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import{FaGithubSquare} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/leah-choco-70531b245/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/leah-choco' target='_blank'><FaGithubSquare /></a>
        <a href='https://www.facebook.com/profile.php?id=100009366021089' target='_blank'><BsFacebook /></a>

    </div>
  )
}

export default Socials