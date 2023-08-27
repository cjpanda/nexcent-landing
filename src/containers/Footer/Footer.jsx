import React from 'react';
import { FiSend } from 'react-icons/fi';

import './Footer.css';
import footerLogo from '../../assets/footerLogo.png';
import { ball, twitter, instagram, youtube, } from './import'

const Footer = () => {
  return (
    <section className="nex__footer section__padding">
      <div className="nex__footer-up">
        <h2>Pellentesque suscipit fringilla libero eu.</h2>
      </div>
      <div className="nex__footer-button">
        <p>Get a Demo</p>
      </div>
      


      <div className="nex__footer-down-wrapper">
        <div className="nex__footer-down-logo">
          <img src={footerLogo} alt="footer logo" />
          <p>Copyright © 2020 Nexcent ltd. <br/> </p>
          
          <img src={instagram} alt="instagram" />
          <img src={ball} alt="ball" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>

        <div className="nex__footer-links">
          <h4>Company</h4>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>

        <div className="nex__footer-links">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Legal</p>
          <p>Privacy Policies</p>
          <p>Status</p>
        </div>

        <div className="nex__footer-links">
          <h4>Stay up to date</h4>
            <div className='nex__footer-input'>
              <input type='email' placeholder='Your email address' className='input-icon' /> 
              <FiSend  className='send-icon'/>
            </div>
          
        </div>


      </div>

    </section>
  )
}

export default Footer