import React from 'react';

import './references.css';
import Leah from '../../assets/Leah Laughing Portfolio.jpeg';

const References = () => {
  return (
    <section id='references'>
      <h2>References</h2>
      <div className='container references__container'>
        <article className='references'>
          <div className='reference__avatar'>
            <img src={Leah} alt='Leah' />
            <h5 className='reference__name'>Tierney Allen</h5>
            <small className='reference__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic dolore laborum nam dolor quam nostrum voluptas amet officiis 
              itaque provident voluptatibus fugiat adipsum qui nobis vero, optio quia incidunt!
            </small>
          </div>
        </article>
        <article className='references'>
          <div className='reference__avatar'>
            <img src={Leah} alt='Leah' />
            <h5 className='reference__name'>Seth</h5>
            <small className='reference__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic dolore laborum nam dolor quam nostrum voluptas amet officiis 
              itaque provident voluptatibus fugiat adipsum qui nobis vero, optio quia incidunt!
            </small>
          </div>
        </article>
        <article className='references'>
          <div className='reference__avatar'>
            <img src={Leah} alt='Leah' />
            <h5 className='reference__name'>Amy</h5>
            <small className='reference__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic dolore laborum nam dolor quam nostrum voluptas amet officiis 
              itaque provident voluptatibus fugiat adipsum qui nobis vero, optio quia incidunt!
            </small>
          </div>
        </article>
        <article className='references'>
          <div className='reference__avatar'>
            <img src={Leah} alt='Leah' />
            <h5 className='reference__name'>Kenny</h5>
            <small className='reference__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic dolore laborum nam dolor quam nostrum voluptas amet officiis 
              itaque provident voluptatibus fugiat adipsum qui nobis vero, optio quia incidunt!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default References