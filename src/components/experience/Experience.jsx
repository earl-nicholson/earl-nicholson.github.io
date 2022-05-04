import React from 'react'
import './Experience.css'
import {SiCheckmarx} from 'react-icons/si'

const Experience = () => {
  return (
  <section id='experience'>
    <h5>The Skills I Have</h5>
    <h2>Langues</h2>

    <div className='container experience__container'>


{/* frontend */}
      <div className='experience__frontend'>
        <h3>Frontend Dev</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>

{/* backend */}
      <div className='experience__backend'>
        <h3>Backend Dev</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>Ruby</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>Ruby on Rails</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>PostgreSQL/pgAdmin</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>APIs/Postman</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>


{/* extra content */}
      <div className='experience__backend'>
        <h3>Backend Dev</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>Ruby</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>Ruby on Rails</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          
          <article className='experience__details'>
          <SiCheckmarx className='experience__details-icon'/>
          <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>

    </div>

  </section>
  )
}

export default Experience