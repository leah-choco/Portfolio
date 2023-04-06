import React from 'react';

import './projects.css';
import athletetracker from '../../assets/athletetracker.png';
import GoalE from '../../assets/Screen Shot 2023-01-24 at 1.02.30 PM.png';
import forecast from '../../assets/Screen Shot 2023-01-24 at 1.07.33 PM.png';
import gpt3 from '../../assets/Screen Shot 2023-03-07 at 2.16.58 PM.png';

const data = [
  {
    id: 1,
    image: athletetracker,
    title: 'athletetracker',
    description: 'Allows a personal trainer to track their athletes, update, and delete them. Contains options for waiver and payment. Uses full MERN stack with GraphQL.',
    github: 'https://github.com/leah-choco/athletetracker',
    link: 'https://athletetracker.herokuapp.com/'
  },
  {
    id: 2,
    image: GoalE,
    title: 'Goal-E',
    description:'Allows the user to login in and create goals. Uses CRUD to keep goals current as the user needs to update or delete goals. Uses MySQL and Handlebars.',
    github: 'https://github.com/leah-choco/Goal-E',
    link: ' https://evening-stream-22967.herokuapp.com/'
  },
  {
    id: 3,
    image: gpt3,
    title: 'GPT-3',
    description:'This project was a practice in more advanced CSS techniques. Uses React and CSS to form the front-end. No back-end involved.',
    github: 'https://github.com/leah-choco/GPT-3',
    link:'https://leah-choco.github.io/GPT-3/'
  },
  {
    id: 4,
    image: forecast,
    title: 'Weather Forecast',
    description:'Allows the user to search for a city to see current weather specfics. Uses HTML, CSS, JavaScript, and a free weather API.',
    github: 'https://github.com/leah-choco/Weather-Forecast',
    link:'https://leah-choco.github.io/Weather-Forecast/'
  },

]


const Projects = () => {
  return (
    <section id='projects'>
      <h2> Recent Projects</h2>

      <div className='container project__container'>
        {
          data.map(({ id, image, title, description, github, link}) =>{
            return (
              <article key={id} className='project__item'>
              <div className='project__item-image'>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <small>{description}</small>
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