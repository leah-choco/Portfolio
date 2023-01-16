import React from 'react';

import './projects.css';
import athletetracker from '../../assets/coming soon.jpeg'
import GoalE from '../../assets/Screen Shot 2022-11-15 at 11.38.23 AM.png';
import forecast from '../../assets/Screen Shot 2022-09-23 at 1.52.25 PM.png';
import employees from '../../assets/Screen Shot 2023-01-16 at 2.40.14 PM.png';
import scheduler from '../../assets/Screen Shot 2022-08-31 at 2.49.13 PM.png';
import insomnia from "../../assets/Screen Shot 2023-01-16 at 2.50.26 PM.png";

const data = [
  {
    id: 1,
    image: GoalE,
    title: 'Goal_E',
    github: 'https://github.com/leah-choco/Goal-E',
  },
  {
    id: 2,
    image: athletetracker,
    title: 'athlete-tracker',
    github: 'https://github.com/leah-choco/Grand-Finale',
  },
  {
    id: 3,
    image: forecast,
    title: 'Weather Forecast',
    github: 'https://github.com/leah-choco/Weather-Forecast',
  },
  {
    id: 4,
    image: employees,
    title: 'SQL Employee Tracker',
    github:'https://github.com/leah-choco/SQL-Employee-Tracker',
  },
  {
    id: 5,
    image: scheduler,
    title: 'Work Day Scheduler',
    github:'https://github.com/leah-choco/Work-Day-Schedule',
  },
  {
    id: 6,
    image: insomnia,
    title: 'MongoDB-API',
    github: 'https://github.com/leah-choco/MongoDB-API',
  }

]


const Projects = () => {
  return (
    <section id='projects'>
      <h2> Recent Projects</h2>

      <div className='container project__container'>
        {
          data.map(({ id, image, title, github, link}) =>{
            return (
              <article key={id} className='project__item'>
              <div className='project__item-image'>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className='project__item-cta'>
                <a href={github} className='btn btn-primary' target='_blank' rel='noreferrer'>Github Repo</a>
              </div>
            </article>
            )
          })
        }
  
      </div>
    </section>
  )
}

export default Projects