import React from 'react'
import './Achievements.css';
import Feature from '../../assets/Feature.svg'

const Achievements = () => {
  return (
    <section className="nex__achieve section__padding " > 

      <div className="nex__achieve-wrapper">
        <div className="nex__achieve-image-wrapper">
          <img  src={Feature} alt='feature' />
        </div>
      </div>

        <div className="nex__achieve-text">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className="nex__achieve-button-wrapper">
            <button type="button">Learn More</button>
          </div>
          
        </div>
        


    </section>
  )
} 

export default Achievements