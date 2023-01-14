import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCsswizardry} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
             <AiFillHtml5 className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiCsswizardry className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiJavascript className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiBootstrap className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiTailwindcss className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiReact className='experience__details-icon'/>
              <div>
              <h4>React</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
        </div>
      </div>
      {/* END OF FRONTEND */}

      <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
             <FaNodeJs className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiMongodb className='experience__details-icon'/>
             <div>
             <h4>MongoDB</h4>
               <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className='experience__details'>
             <SiPython className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiDjango className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
               <small className='text-light'>Intermediate</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiPostgresql className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
               <small className='text-light'>Basic</small>
              </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience