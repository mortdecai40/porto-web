import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3> Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
          <BsPatchCheckFill/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div >
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Version Control</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>

    {/* END OF FRONTEND */}

         <div className='experience__backend'>
          <h3> Backend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>PostgreSQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>Spring Boot</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>


      </div>
    
    </section>
  )
}
