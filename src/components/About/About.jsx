import React from 'react';
import ME from '../../assets/Leah Laughing Portfolio.jpeg'
import{TbCertificate} from 'react-icons/tb';
import {GoLocation} from 'react-icons/go';
import{GiStack} from 'react-icons/gi';


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
        <div className='about__cards'></div>
          <article className='about__card'>
            <TbCertificate className='about__icon' />
            <h5>Education</h5>
            <small>Vanderbilt University Certification</small>
          </article>

          <article className='about__card'>
            <GoLocation className='about__icon' />
            <h5>Location</h5>
            <small>Middle Tennessee</small>
          </article>

          <article className='about__card'>
            <GiStack className='about__icon' />
            <h5>MERN Stack</h5>
            <small>MongoDB, Express, React, Node</small>
          </article>
      </div>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi? 
        Eaque, neque illo? Dolorum eius numquam tenetur praesentium voluptates et quo fugit expedita illo distinctio, 
        dicta explicabo sapiente consequatur debitis!
        </p>
    </div>
   </section>
  )
}

export default About