import React from 'react'

import './contact.css';

import{AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail />
            <h4>mrsleahchoco@gmail</h4>
            
            <a href='mailto:mrsleahchoco@gmail.com' target='_blank' rel='noreferrer'>Send me an email!</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact