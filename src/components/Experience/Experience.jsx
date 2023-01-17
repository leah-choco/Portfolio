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
              <AiOutlineRightCircle className='experience__details-icon' />
                <div>
                 <h4>HTML</h4>
                </div>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                </div>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle className='experience__details-icon'/>
                <div>
                  <h4>Javascript</h4>
                </div>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle className='experience__details-icon'/>
                <div>
                  <h4>CSS Frameworks</h4>
                  <small className='text-light'>Bootstrap, Bulma, MUI</small>
                </div>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                </div>
            </article>
            <article className='experience__details'>
              <AiOutlineRightCircle className='experience__details-icon'/>
                <div>
                 <h4>Handlebars</h4>
                </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <AiOutlineRightCircle className='experience__details-icon'/>
                  <div>
                   <h4>MongoDB</h4>
                  </div>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle className='experience__details-icon'/>
                  <div>
                   <h4>Node.js</h4>
                  </div>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle className='experience__details-icon'/>
                  <div>
                    <h4>Express.js</h4>
                  </div>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle className='experience__details-icon'/>
                  <div>
                    <h4>Apollo GraphQL</h4>
                  </div>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle className='experience__details-icon'/>
                  <div>
                    <h4>MySQL</h4>
                  </div>
              </article>
              <article className='experience__details'>
                <AiOutlineRightCircle className='experience__details-icon'/>
                  <div>
                    <h4>RESTful APIs</h4>
                  </div>
              </article>
          </div>    
        </div>
      </div>
    </section>
  )
}

export default Experience