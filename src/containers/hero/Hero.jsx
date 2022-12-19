import React from 'react';
import './hero.css';
import HeroImg from '../../assets/pablo-hero.png';

const Hero = () => {
  return (
    <div className='card'>
        <div className="card-body hero-body">
          <div className="row">
          <div className="col">
            <div className="hero-col-1">
            <h5 className='card-title text-center display-6 fw-normal hero-heading'>Looking for a new place? Make an enquiry.</h5>
              <p className='card-text text-center hero-para'>We have seven locations across London. Make anenquiry today with apartments immediately available to move into.</p>
              <div>
                  <button type='button' className='hero-btn'>Make an enquiry</button>
              </div> 
            </div>
          </div>
          <div className="col heroImage">
              <img src={HeroImg} alt="" srcset="" />
          </div>
          </div>  
        </div>
    </div>
  )
}
export default Hero