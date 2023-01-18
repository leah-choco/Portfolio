import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './references.css';
import Tierney from '../../assets/Tierney Portfolio Avatar.jpeg';
import Seth from '../../assets/Seth Portfolio Avatar.jpeg';
import Amy from '../../assets/Amy Portfolio Avatar.jpeg';


const data = [
  {
    avatar: Seth,
    name:'Seth Gunnells',
    reference:'I have had insight into Leah learning as she has entered the world of software and she has shown tremendous aptitude in how quickly she has learned. She is driven by curiosity and a skillful learner. She seeks answers for herself whenever she can, but does not hesitate to ask for help when it is needed. If that is not enough, she is kind, empathetic, intelligent, and honest. I cannot recommend her highly enough!' 
  },
  {
    avatar: Tierney,
    name: 'Tierney Allen',
    reference: 'Leah has been a valuable asset to our Full Stack Coding Bootcamp. Her focus and attention to detail has allowed her to progress in each new topic. She shows a constant ability to take in new information and present it back to us with clarity. Her assistance in both group projects and individual day to day learning is something I am grateful to have had from the get go.'
  },
  {
    avatar: Amy,
    name: 'Amy Gonzalez',
    reference: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }

]

const References = () => {
  return (
    <section id='references'>
      <h2>References</h2>
      <Swiper className='container references__container'
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}>
        {
          data.map(({ avatar, name, reference}, index) => {
            return (
              <SwiperSlide key={index}className='references'>
              <div className='reference__avatar'>
                <img src={avatar} alt='Leah' />
              </div>
              <h5 className='reference__name'>{name}</h5>
              <small className='reference__review'>{reference}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default References