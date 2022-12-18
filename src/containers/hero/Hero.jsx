import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='card'>
        <div className="card-body hero-body"> 
            <h5 className='card-title text-center'>Looking for a new place? Make an enquiry.</h5>
            <p className='card-text text-center'>We have seven locations across London. Make anenquiry today with apartments immediately available to move into.</p>
            <div className="hero-btn">
                <button type='button' className='hero-btn'>Make an enquiry</button>
            </div> 
        </div>
    </div>
  )
}
export default Hero