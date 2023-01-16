import React from 'react';

import './references.css';
import Leah from '../../assets/Leah Laughing Portfolio.jpeg';

const data = [
  {
    avatar: Leah,
    name: 'Tierney Allen',
    reference: 'Leah has been a valuable asset to our Full Stack Coding Bootcamp. Her focus and attention to detail has allowed her to progress in each new topic. She shows a constant ability to take in new information and present it back to us with clarity. Her assistance in both group projects and individual day to day learning is something I am grateful to have had from the get go.'
  },
  {
    avatar: Leah,
    name:'Seth Gunnells',
    reference:'Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
  },
  {
    avatar: Leah,
    name: 'Amy Gonzalez',
    reference: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: Leah,
    name: 'Kenny Parsons',
    reference: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const References = () => {
  return (
    <section id='references'>
      <h2>References</h2>
      <div className='container references__container'>
        {
          data.map(({ avatar, name, reference}, index) => {
            return (
              <article key={index}className='references'>
              <div className='reference__avatar'>
                <img src={avatar} alt='Leah' />
              </div>
              <h5 className='reference__name'>{name}</h5>
              <small className='reference__review'>{reference}</small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default References