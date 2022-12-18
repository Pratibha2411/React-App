import React from 'react'
import "./propertyTwo.css";
import ArticlePropertyTwo from '../../assets/ContainerTwo.png';

const PropertyTwo = () => {
  return (
    <div className="card">
    <img src={ArticlePropertyTwo} className="card-img-top" alt="..." />
    <div className="card-body two-body">

      <h5 className="card-title">Royal Wharf</h5>
      <p className="card-text">Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park.

</p>
      <a href="#" className="btn btn-primary">View Properties2 </a>
    </div>
  </div>
  )
}

export default PropertyTwo