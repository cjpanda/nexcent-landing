import React from 'react';
import './FAQ.css';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';




const FAQ = () => {
  return (
    <section className="nex__blog section__padding" id="blog">

      <div className="nex__blog-heading">
        <h2>Caring is the new marketing</h2>
        <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      </div>

      <div className="nex__blog-main">

        <div className="nex__blog-card">
          <img src={blog1} alt='blog1'/>
          <div className="nex__blog-text">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <p>Readmore</p>
          </div>
        </div>


        <div className="nex__blog-card">
          <img src={blog2} alt='blog2'/>
          <div className="nex__blog-text">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <p>Readmore</p>
          </div>
        </div>


        <div className="nex__blog-card">
          <img src={blog3} alt='blog3'/>
          <div className="nex__blog-text">
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
            <p>Readmore</p>
          </div>
        </div>

      </div>

    


    </section>
  )
}

export default FAQ