import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='container'>
    <div className="tech__navbar container-fluid">
      <div className="tech__navbar-links">
        <div className="tech__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tech__navbar-links_container">
          <p><a href="#tolet">ToLet</a></p>
          <p><a href="#aboutUs">AboutUs</a></p>
          <p><a href="#favourites">Favourites</a></p>
          <p><a href="#news">News</a></p>
        </div>
      </div>
      <div className="tech__navbar-sign">
        <button type='button'>Enquire</button>
        <button type="button">ContactUs</button>
      </div>
      <div className="tech__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#00455A;" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#00455A;" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="tech__navbar-menu_container scale-up-center">
          <div className="tech__navbar-menu_container-links">
            <p><a href="#tolet">ToLet</a></p>
            <p><a href="#aboutUs">AboutUs</a></p>
            <p><a href="#favourite">Favourites</a></p>
            <p><a href="#news">News</a></p>
          </div>
          <div className="tech__navbar-menu_container-links-sign">
            <button type='button'>Enquire</button>
            <button type="button">ContactUs</button>
          </div>
        </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
