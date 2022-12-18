import React from 'react';
import './header.css';
import PartnerOne from '../../assets/partnership-1.png';
import PartnerTwo from '../../assets/partnership-2.png';
// import HeaderImg from '../../assets/header.jpg';
const Header = () => {
  return (
    <div className="text-center justify-content-center">
    <div className='header-body'>
      {/* <div className="card">
      <img className="header-img card-img-top" src="{HeaderImg}" alt="" srcset="" />
      </div> */}
      <h3 className='header-heading'>St John Residential Lettings</h3>
    
        <p className='header-para'>We offer high ends apartments in premium developments such as Westminster Quarter, Paddington Gardens, Goodman’s Field, Royal Wharf, London Docks and Smithfield Square.</p>
    
      <button className="view-property-btn" type="button">View property</button>
      <button className="enquire-btn" type="button">Enquire</button>
      <div>
      <p className='header-partnership-para'>In partnership with: </p>
      <span className='partners1'>
        <img src={PartnerOne} alt="" srcset="" />
      </span>
      <span className='partners2'>
      <img src={PartnerTwo} alt="" srcset="" />
      </span>
      </div>
    </div>
    </div>
  )
}

export default Header