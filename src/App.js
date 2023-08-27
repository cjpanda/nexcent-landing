import React from 'react';
import { Navbar, Clients, Community, Achievements } from './components';
import {Header, FAQ, Feature, Footer, Testimonials, Members } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='header_nav'>
        <Navbar />
        <Header />
      </div>
      <Clients />
      <Community />
      <Feature />
      <Achievements />
      <Members/>
      <Testimonials />
      <FAQ />
      <Footer />

    </div>
  )
}

export default App