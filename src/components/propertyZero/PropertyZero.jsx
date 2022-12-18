import React from 'react';
import './propertyZero.css';
import ContainerZero from '../../assets/article.png';

const Feature = () => {
  return (
    <div class="card">
    <img src={ContainerZero} class="card-img-top" alt="..." />
    <div class="card-body zero-body">
      <h5 class="card-title">Royal Wharf</h5>
      <p class="card-text">Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park.

</p>
      <a href="#" class="btn btn-primary">View Properties0</a>
    </div>
  </div>
  )
}

export default Feature