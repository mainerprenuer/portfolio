import React from 'react'
import './footer.css'
import {FaTwitter} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Abokin Tech</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://twitter.com/moustymainer'><FaTwitter /></a>
        <a href='https://linkedin.com/moustymainer'><BsLinkedin /></a>
        <a href='https://github.com/mainerprenuer'><FaGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Abokin Tech Inc. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer