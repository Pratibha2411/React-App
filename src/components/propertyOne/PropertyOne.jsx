import React from 'react'
import "./propertyOne.css";
import ArticlePropertyOne from '../../assets/ContainerOne.png';
const PropertyOne = () => {
  return (
    <div className="card">
    <img src={ArticlePropertyOne} className="card-img-top" alt="..." />
    <div className="card-body one-body">

      <h5 className="card-title">Royal Wharf</h5>
      <p className="card-text">Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park.

</p>
      <a href="#" className="btn btn-primary">View Properties1</a>
    </div>
  </div>
  )
}

export default PropertyOne