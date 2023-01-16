import React from 'react';

import './projects.css';
//import athletetracker from '../../assets/athletetracker'
import GoalE from '../../assets/Screen Shot 2022-11-15 at 11.38.23 AM.png';


const Projects = () => {
  return (
    <section id='projects'>
      <h2> Recent Projects</h2>

      <div className='container project__container'>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={GoalE} alt=''/>
          </div>
          <h3>Goal-E</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/leah-choco/Goal-E'className='btn' target='_blank'>Github Repo</a>
            <a href='https://evening-stream-22967.herokuapp.com/' className='btn btn-primary' target='_blank'>Deployed Link</a>
          </div>
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