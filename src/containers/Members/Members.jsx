import React from 'react';
import './Members.css';
import { clubs, events, members, payments } from './import';


const Members = () => {
  return (
    <section className="nex__members section__padding" id="members">
      <div className="nex__members-text">
        <h2>Helping a local <span>business reinvent itself</span></h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="nex__member-image">
        
        <img  src={members} alt="members" />
        <img  src={clubs} alt="club" />
        <img  src={events} alt="events" />
        <img  src={payments} alt="payments" />
      </div>
    </section>
  )
}

export default Members