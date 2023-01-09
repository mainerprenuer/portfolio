import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {BsFolderSymlinkFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <img src={ME} alt='About Image'/>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <BsFillPeopleFill className='about__icon'/>
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>
          
          <article className='about__card'>
            <BsFolderSymlinkFill className='about__icon'/>
            <h5>Projects</h5>
            <small>37+ Completed</small>
          </article>
        </div>

        <p>
        This is just the test drive trying to know how much freedom we have.
        Another one will just be test for control and knowing how fast we can push this up and running.
        Life is good with technology and system security.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}  

export default About