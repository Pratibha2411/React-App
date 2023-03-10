import React from 'react'
import "./propertyTwo.css";
import ArticlePropertyTwo from '../../assets/ContainerTwo.png';

const PropertyTwo = () => {
  return (
    <div className="card">
    <img src={ArticlePropertyTwo} className="card-img-top" alt="..." />
    <div className="card-body two-body">
      <div className="row">
        <div className="col">
        <h5 className="card-title two-heading display-5">Royal Wharf</h5>
      <p className="card-text lead two-para">Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park.
      </p>
        </div>
      </div>
      <div className="col">
      <a href="#" className="btn two-btn">View Properties</a>
      </div>
    </div>
  </div>
  )
}

export default PropertyTwo