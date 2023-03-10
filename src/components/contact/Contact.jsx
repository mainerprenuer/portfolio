import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zjct4ff', 'template_kkttnyk', form.current, 'oml223fwDDHk2QTq-')

    e.target.reset()
  };
  return (
    <section id="contact">
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
      
    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
        <MdMarkEmailRead className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>moustymainer@gmail.com</h5>
          <a href='mailto:moustymainer@gmail.com' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
        <FaTwitter className='contact__option-icon'/>
          <h4>Twitter</h4>
          <h5>moustymainer</h5>
          <a href='https://twitter.com/moustymainer' target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+2347031343181</h5>
          <a href="https://api.whatsapp.com/send?phone=+2347031343181" target="_blank">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name='message' rows="7" placeholder="Your Message" required ></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact