import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='container hero-body'>
        <div className="row"> 
            <div className="col">
                <div className="hero-heading">
                    <h3>Looking for a new place? Make an enquiry.</h3>
                </div>
                <div className="hero-para">
                    <p>We have seven locations across London. Make anenquiry today with apartments immediately available to move into.</p>
                </div>
                <div className="hero-btn">
                    <button type='button' className='hero-btn'>Make an enquiry</button>
                </div>
            </div> 
            <div className="col hero-img">
                
            </div>
        </div>
    </div>
  )
}

export default Hero