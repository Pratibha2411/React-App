import React from 'react';
import './feature.css';


const Feature = () => {
  return (
    <div className='container prop-body'>
      <div className='row'>
        <div className='col'>
          <h1 className='prop-heading'>Royal Wharf</h1>
          <p className='prop-para'>Just minutes from Canary Wharf, and less than 30 minutes from Oxford Street, this is a rich, textured neighbourhood, focused around the lively central high street, a broad market square and a rolling riverside park. </p>
        </div>
        <div className="col">
          <button type='button prop-btn'>View properties</button>
        </div>
      </div>
      
    </div>
  )
}

export default Feature