import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Now</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div  className='about__content'>
          <div  className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ Years Working</small>
            </article>

            <article className='about__card'>
            <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small> 20+ Completed</small>
            </article>

          </div>
          <p>
          It has survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, and more 
          recently with desktop publishing software like Aldus PageMaker including versions 
          of Lorem Ipsum.
         </p> 
        
        <a href='#contact' className='btn btn-primary'>Let's Talks</a>
        </div>

      </div>
    
    </section>
      
  )
}
