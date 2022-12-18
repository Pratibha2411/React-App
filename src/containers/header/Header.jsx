import React from 'react';
import './header.css';
// import HeaderImg from '../../assets/header.jpg';
const Header = () => {
  return (
    <div className='header-body container'>
      {/* <div className="card">
      <img className="header-img card-img-top" src="{HeaderImg}" alt="" srcset="" />
      </div> */}
      
      <div className='header-heading'>
        <h3>St John Residential Lettings</h3>
      </div>
      <div className='header-para'>
        <p>We offer high ends apartments in premium developments such as Westminster Quarter, Paddington Gardens, Goodman’s Field, Royal Wharf, London Docks and Smithfield Square.</p>
      </div>
      <button className="btn search-btn header-btn" type="button">View property</button>
      <button className="btn search-btn header-btn" type="button">Enquire</button>
      <div>
      <p className='header-partnership-para'>In partnership with: </p>
      <span className='partners1'></span>
      <span className='partners2'></span>
      </div>
    </div>
    
  )
}

export default Header