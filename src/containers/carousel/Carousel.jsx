import React from 'react';
import { backword, netflix, samsung, champion, rentalCars, booking, forword } from './imports';
import './carousel.css';

const Carousel = () => {
  return (
  <div className="carousel__brand section__padding container">
      <h4 className="carousel-heading">View our partners</h4>
    <div>
      <img src={backword} />
    </div>
    <div>
      <img src={netflix} />
    </div>
    <div>
      <img src={samsung} />
    </div>
    <div>
      <img src={champion} />
    </div>
    <div>
      <img src={rentalCars} />
    </div>
    <div>
      <img src={booking} />
    </div>
    <div>
      <img src={forword} />
    </div>
  </div>
);
}
export default Carousel

