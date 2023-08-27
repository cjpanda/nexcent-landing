import React from 'react';
import './Testimonials.css';
import image from '../../assets/image.jpg';
import {ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5, ClientLogo6,} from './import'



const Testimonials = () => {
  return (
    <section className="nex__testimonials section__padding" id="testimonials" >
        <div className="nex__testimonials-image">
          <img src={image} alt='customer' />
        </div>
      <div className="nex__testimonials-wrapper">



        <div className="nex__testimonials-text">
          <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. </p>
          <h3>Tim Smith</h3>
          <p>British Dragon Boat Racing Association</p>
        </div>


        <div className="nex__textimonials-logo">
          <img src={ClientLogo1} alt="client1" />
          <img src={ClientLogo2} alt="client1" />
          <img src={ClientLogo3} alt="client1" />
          <img src={ClientLogo4} alt="client1" />
          <img src={ClientLogo5} alt="client1" />
          <img src={ClientLogo6} alt="client1" />
          <p>Meet all customers</p>
        </div>

      </div>
        
    
      
    </section>
  )
}

export default Testimonials