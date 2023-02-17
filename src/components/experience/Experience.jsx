import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCsswizardry, SiFlutter,SiJavascript, SiNestjs, SiBootstrap, SiTailwindcss, SiReact, SiMongodb, SiPython, SiDjango, SiPostgresql, SiDart } from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'

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
          <article className='experience__details'>
             <SiFlutter className='experience__details-icon'/>
              <div>
              <h4>Flutter</h4>
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
          <article className='experience__details'>
             <SiDart className='experience__details-icon'/>
              <div>
              <h4>Dart</h4>
               <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
             <SiNestjs className='experience__details-icon'/>
              <div>
              <h4>Nestjs</h4>
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