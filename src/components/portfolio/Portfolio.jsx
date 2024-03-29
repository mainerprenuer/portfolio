import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
    	      <img src={IMG3} alt=""/>
          </div>
          <h3>Farm Products Ordering and Delivery System</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/mainerprenuer/farmPlug' className='btn'>Github</a>
          <a href='https://farm-plug.vercel.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
    	      <img src={IMG2} alt=""/>
          </div>
          <h3>Campaign Social Networking Platform</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/mainerprenuer/malami-connect' className='btn'>Github</a>
          <a href='www.malamiconnect.org' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
    	      <img src={IMG3} alt=""/>
          </div>
          <h3>Snack Ordering App</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/mainerprenuer/godelicious/tree/master' className='btn'>Github</a>
          <a href='https://godelbackend.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
    	      <img src={IMG1} alt=""/>
          </div>
          <h3>Party Agent Information Management System</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/mainerprenuer/election_data' className='btn'>Github</a>
          <a href='https://apcaims.org' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
    	      <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/mainerprenuer' className='btn'>Github</a>
          <a href='https://apcaims.org' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
       
      </div>
    </section>
  )
}

export default Portfolio