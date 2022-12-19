import React from 'react'
import "./propertyOne.css";
import ArticlePropertyOne from '../../assets/ContainerOne.png';

const PropertyOne = () => {
  return (
    <div className="card">
    <img src={ArticlePropertyOne} className="card-img-top" alt="..." />
    <div className="card-body one-body">
    <div className="row">
      <div className="col">
        <h5 className="card-title one-heading display-5">Royal Wharf</h5>
        <p className="card-text lead one-para">Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park.
        </p>
      </div>
    </div>
     <div className="col">
      <a href="#" className="btn one-btn">View Properties</a>
    </div>
    </div>
  </div>
  )
}

export default PropertyOne