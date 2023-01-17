import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Learning is a recursive function, Learning is a recursive function,
             Learning is a recursive function, Learning is a recursive function, Learning is a recursive function
             Learning is a recursive function, Learning is a recursive function,
             </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Learning is a recursive function, Learning is a recursive function,
             Learning is a recursive function, Learning is a recursive function, Learning is a recursive function
             Learning is a recursive function, Learning is a recursive function,
             </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Learning is a recursive function, Learning is a recursive function,
             Learning is a recursive function, Learning is a recursive function, Learning is a recursive function
             Learning is a recursive function, Learning is a recursive function,
             </small>
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='Avatar One' />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Learning is a recursive function, Learning is a recursive function,
             Learning is a recursive function, Learning is a recursive function, Learning is a recursive function
             Learning is a recursive function, Learning is a recursive function,
             </small>
        </article>
       
      </div>
    </section>
  )
}

export default Testimonials