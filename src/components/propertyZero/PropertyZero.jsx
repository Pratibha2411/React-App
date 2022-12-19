import React from 'react';
import './propertyZero.css';
import ContainerZero from '../../assets/article.png';


const PropertyZero = () => {
  return (
    <div className="card">
    <img src={ContainerZero} className="card-img-top" alt="..." />
    <div className="card-body zero-body">
      <div className="row">
      <div className="col">
        <h5 className="card-title zero-heading display-5">Royal Wharf</h5>
        <p className="card-text lead zero-para">Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park.
    </p>
      </div>
      </div>
      <div className="col">
    <a href="#" className="btn zero-btn">View Properties</a>
    </div>
    </div>
  </div>
  )
}

export default PropertyZero