import React from 'react';
import './Feature.css';
import Icon1 from '../../assets/Icon1.svg';
import Icon2 from '../../assets/Icon2.svg';
import Icon3 from '../../assets/Icon3.svg';



const Feature = () => {
  return (
    <section className="nex__feature section__padding " id="feature">
      <div className="nex__feature-features">

        <div className="nex__features-card">
          <div className="nex__centered-content"> 
            <img src={Icon1} alt="Icon1" />
          </div>
          <div className="nex__features-card-text">
            <h2>Membership Organisations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>

        <div className="nex__features-card">
          <div className="nex__centered-content"> 
            <img src={Icon2} alt="Icon2" />
          </div>
          <div className="nex__features-card-text">
            <h2>National Associations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>

        <div className="nex__features-card">
          <div className="nex__centered-content"> 
            <img src={Icon3} alt="Icon3" />
          </div>
          <div className="nex__features-card-text">
            <h2>Clubs And Groups</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
        

      </div>

    </section>
  )
}

export default Feature