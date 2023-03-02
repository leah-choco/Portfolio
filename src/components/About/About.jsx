import React from 'react';
import ME from '../../assets/Leah Laughing Portfolio.jpeg';
import './about.css';

const About = () => {
  return (
   <section id='about'>
    <h1 className='name__styling'>Leah Choco</h1>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='Leah Laughing'/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>

        <article className='about__card'>
          <a href='https://docs.google.com/document/d/1-B0Bd3GqD-P8bBREHyThjBUX6MdnrExAtxKIVBB67Yw/edit?usp=sharing' target='_blank' rel='noreferrer' className='about__icon'>Resume</a>
          </article>

          <article className='about__card'>
          <a href='https://www.linkedin.com/in/leah-choco-70531b245/' target='_blank' rel='noreferrer'className='about__icon'>LinkedIn</a>
           </article> 

          <article className='about__card'>
          <a href='https://github.com/leah-choco' target='_blank' rel='noreferrer' className='about__icon'>Github</a>
          </article>

        </div>  
        <p>I am currently located in Middle Tennessee with my husband and three children.
          My background is in Christian Ministry, but I have chosen to follow the web development 
          career path. Recently, I became a Certified MERN Developer through the Vanderbilt University Bootcamp. 
         Contributing to the future in this field is exciting! My hobbies involve being outdoors with my family and 
          coffee. 
        </p>
      </div>
    </div>

  </section>
  )
}

export default About