import React from 'react';

import './projects.css';
//import athletetracker from '../../assets/athletetracker'
import GoalE from '../../assets/Screen Shot 2022-11-15 at 11.38.23 AM.png';


const Projects = () => {
  return (
    <section id='projects'>
      <h2>Portfolio</h2>

      <div className='container project__container'>
        <article className='project__item'>
          <div className='portfolio__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>athlete-tracker</h3>
          <a href='https://github.com/leah-choco/Grand-Finale' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Deployed Link</a>
        </article>
        <article className='project__item'>
          <div className='portfolio__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>athlete-tracker</h3>
          <a href='https://github.com/leah-choco/Grand-Finale' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Deployed Link</a>
        </article>
        <article className='project__item'>
          <div className='portfolio__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>athlete-tracker</h3>
          <a href='https://github.com/leah-choco/Grand-Finale' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Deployed Link</a>
        </article>
        <article className='project__item'>
          <div className='portfolio__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>athlete-tracker</h3>
          <a href='https://github.com/leah-choco/Grand-Finale' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Deployed Link</a>
        </article>
        <article className='project__item'>
          <div className='portfolio__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>athlete-tracker</h3>
          <a href='https://github.com/leah-choco/Grand-Finale' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Deployed Link</a>
        </article>
        <article className='project__item'>
          <div className='portfolio__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>athlete-tracker</h3>
          <a href='https://github.com/leah-choco/Grand-Finale' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Deployed Link</a>
        </article>

      </div>
    </section>
  )
}

export default Projects