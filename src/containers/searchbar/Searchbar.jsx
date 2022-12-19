import React from 'react';
import './searchbar.css';


const Searchbar = () => {
  return (
    <div className='container'>
       {/* search location nav */}
       <section className="searchbox">
        <div className="box">
          <form className="d-flex option" role="search">
            <input className="form-control me-2" type="search" placeholder="Location" aria-label="Search" />
            <input className="form-control me-2" type="search" placeholder="Min Badroom" aria-label="Search" />
            <input className="form-control me-2" type="search" placeholder="Max Badroom " aria-label="Search" />
            <button className="btn search-btn" type="button">Search</button>
          </form>
        </div>
      </section>
      </div>
  )
}

export default Searchbar