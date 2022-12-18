import React from 'react';
import './about.css';

const About = () => {
  return (

  <div className="card-body about-body">
    <h5 className="card-title text-center display-4 fw-semibold about-heading">About St John Lettings</h5>
    <p className="card-text text-center lead fw-normal about-para">Offering hight and flats in premium developments across London.</p>
    <div>
         <button type='button' className='about-btn'>Find out more</button>
    </div>
  </div>

  )
}

export default About