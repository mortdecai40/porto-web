import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


export const Portofolio = () => {
  return (
    <section id='portofolio'>
     <h5>
      My Recent Work
     </h5>
     <h2>Portofolio</h2>

     <div className='container portofolio__container'>
      <article className='portofolio__item'>
        <div className='portofolio__item-image'></div>
         <img src={IMG1} alt=''/>
        <h3>This is a portofolio item tittle</h3>
        <div className='portofolio__item-cta'>
          <a href='http://github.com' className='btn' target='_blank'>Github</a>
          <a href='http://dribble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portofolio__item'>
        <div className='portofolio__item-image'></div>
         <img src={IMG2} alt=''/>
        <h3>This is a portofolio item tittle</h3>
        <div className='portofolio__item-cta'>
          <a href='http://github.com' className='btn' target='_blank'>Github</a>
          <a href='http://dribble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portofolio__item'>
        <div className='portofolio__item-image'></div>
         <img src={IMG3} alt=''/>
        <h3>This is a portofolio item tittle</h3>
        <div className='portofolio__item-cta'>
          <a href='http://github.com' className='btn' target='_blank'>Github</a>
          <a href='http://dribble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portofolio__item'>
        <div className='portofolio__item-image'></div>
         <img src={IMG4} alt=''/>
        <h3>This is a portofolio item tittle</h3>
        <div className='portofolio__item-cta'>
          <a href='http://github.com' className='btn' target='_blank'>Github</a>
          <a href='http://dribble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portofolio__item'>
        <div className='portofolio__item-image'></div>
         <img src={IMG5} alt=''/>
        <h3>This is a portofolio item tittle</h3>
        <div className='portofolio__item-cta'>
          <a href='http://github.com' className='btn' target='_blank'>Github</a>
          <a href='http://dribble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      <article className='portofolio__item'>
        <div className='portofolio__item-image'></div>
         <img src={IMG6} alt=''/>
        <h3>This is a portofolio item tittle</h3>
        <div className='portofolio__item-cta'>
          <a href='http://github.com' className='btn' target='_blank'>Github</a>
          <a href='http://dribble.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
      

     </div>
    </section>
  )
}
