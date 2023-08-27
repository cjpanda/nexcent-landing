import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.svg';
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import { useState } from 'react';



const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#feature">Feature</a></p>
    <p><a href="#members">Members</a></p>
    <p><a href="#testimonials">Testimonials</a></p>
    <p><a href="#blog">FAQ</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className="nex__navbar">
      <div className="nex__navbar-links">
        
        <div className="nex__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="nex__navbar-links_container">
          <Menu />
        </div>

        <div className="nex__navbar-sign">
          <p>Login</p>
          <button type="button">Sign up</button>
        </div>
        
        <div className="nex__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="#4caf4f" size={27} onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color="#4caf4f" size={27} onClick={() => setToggleMenu(true)} /> 
          }
          {toggleMenu && (
            <div className="nex__navbar-menu_container slide-top">
              <div className="nex__navbar-menu_container-links">
                <Menu />
                <div className="nex__navbar-menu_container-links-sign">
                  <p>Login</p>
                  <button type="button">Sign up</button>
                </div>
              </div> 
            </div>
          )}
        </div>
      </div>

    </nav>
  )
}

export default Navbar