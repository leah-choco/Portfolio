import React from 'react';

import './projects.css';
import athletetracker from '../../assets/coming soon.jpeg'
import GoalE from '../../assets/Screen Shot 2022-11-15 at 11.38.23 AM.png';
import forecast from '../../assets/Screen Shot 2022-09-23 at 1.52.25 PM.png';
import schedule from '../../assets/Screen Shot 2022-08-31 at 2.49.13 PM.png';

const data = [
  {
    id: 1,
    image: athletetracker,
    title: 'athletetracker',
    github: 'https://github.com/leah-choco/athletetracker',
    link: ''
  },
  {
    id: 2,
    image: GoalE,
    title: 'Goal-E',
    github: 'https://github.com/leah-choco/Goal-E',
    link: ' https://evening-stream-22967.herokuapp.com/'
  },
  {
    id: 3,
    image: forecast,
    title: 'Weather Forecast',
    github: 'https://github.com/leah-choco/Weather-Forecast',
    link:'https://leah-choco.github.io/Weather-Forecast/'
  },
  {
    id: 5,
    image: schedule,
    title: 'Work Day Schedule',
    github:'https://github.com/leah-choco/Work-Day-Schedule',
    link:' https://leah-choco.github.io/Work-Day-Schedule/'
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
                <a href={link} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
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