import React from 'react';
import ME from '../../assets/Leah Laughing Portfolio.jpeg'
import {BsLinkedin} from 'react-icons/bs';
import{FaGithubSquare} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';


import './about.css';

const About = () => {
  return (
   <section id='about'>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='Leah Laughing'/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <a href='https://www.linkedin.com/in/leah-choco-70531b245/' target='_blank' rel='noreferrer'className='about__icon'><BsLinkedin/></a>
            <h5>LinkedIn</h5>
            <small>Click the icon to see my LinkedIn profile.</small>
          </article>

          <article className='about__card'>
          <a href='https://github.com/leah-choco' target='_blank' rel='noreferrer' className='about__icon'><FaGithubSquare /></a>
            <h5>Github</h5>
            <small>Click the icon to see my Github Repos.</small>
          </article>

          <article className='about__card'>
          <a href='https://www.facebook.com/profile.php?id=100009366021089' target='_blank' rel='noreferrer' className='about__icon'><BsFacebook /></a>
            <h5>Facebook</h5>
            <small>Click the icon to see my Facebook profile.</small>
          </article>
        </div>  
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi? 
        Eaque, neque illo? Dolorum eius numquam tenetur praesentium voluptates et quo fugit expedita illo distinctio, 
        dicta explicabo sapiente consequatur debitis!
      </p>
    </div>
    </div>

   </section>
  )
}

export default About