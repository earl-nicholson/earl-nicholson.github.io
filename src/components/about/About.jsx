import React from 'react'
import './About.css'
import Me from '../../assets/me-aabout.jpg'
import {SiFurrynetwork} from 'react-icons/si'
import {MdOutlineMilitaryTech} from 'react-icons/md'
import {MdMilitaryTech} from 'react-icons/md'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>More About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>

          <div className='about__me-image'>
            <img src={Me} alt='About me'/>
          </div>
        </div>

          <div className='about__content'>
            <div className='about__cards'>

              <article className='about__card'>
                <SiFurrynetwork className= 'about__icon'/>
                <h5>Skills </h5>
                <small>JavaScript Jest Ruby React Rails SQL Python</small>
              </article>

              <article className='about__card'>
                <MdOutlineMilitaryTech className= 'about__icon'/>
                <h5>Hobbies </h5>
                <small>Travel Movies/TV Gaming Music</small>
              </article>

              <article className='about__card'>
                <MdMilitaryTech className= 'about__icon'/>
                <h5>Military </h5>
                <small>3 years in the Army NG, and 6 years in the Navy </small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, porro! Totam deserunt, consequuntur quae possimus repellat ea vero sapiente voluptas sed laborum, eos expedita eveniet perferendis odio ut provident corporis!
            </p>

            <a href="#contact" className="btn btn-primary" >Lets Talk</a>

          </div>
        </div>
      






    </section>
  )
}

export default About