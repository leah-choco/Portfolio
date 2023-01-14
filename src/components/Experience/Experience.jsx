import React from 'react';
import{AiOutlineRightCircle} from 'react-icons/ai'

import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h2> My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineRightCircle />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle />
              <h4>Javascript</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle />
              <h4>CSS Frameworks</h4>
              <small className='text-light'>Bootstrap, Bulma, MUI</small>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle />
              <h4>Handlebars</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle />
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiOutlineRightCircle />
                <h4>Express.js</h4>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle />
                <h4>Node.js</h4>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle />
                <h4>MySQL</h4>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle />
                <h4>MongoDB</h4>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle />
                <h4>Apollo GraphQL</h4>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle />
                <h4>RESTful APIs</h4>
              </article>
          </div>    
        </div>
      </div>
    </section>
  )
}

export default Experience