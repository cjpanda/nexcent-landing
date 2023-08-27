import React from 'react';
import './Header.css';
import Illustration from '../../assets/Illustration.svg'


const Header = () => {
  return (
  <header className="nex__header section__padding" id="home">
    <div className="nex__header-content">
      <h1>Lessons and insights </h1>
      <span className="nex__text-green">from 8 years</span>
      <p>Where to grow your business as a photographer: site or social media?</p>

      <div className="nex__header-content__input">
        <input type="email" placeholder='Enter Email To Register' />
        <button type="button">Register</button>
      </div>
    </div>
    <div className="nex__header-image">
      <img src={Illustration} alt="Illustration" />
    </div>
      
  </header>
  )
}

export default Header