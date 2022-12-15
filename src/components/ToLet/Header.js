import React from "react";
import "/home/tanu/tech-alchemy/src/index.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-details">
          <div className="colz">
            <nav className="navbar navbar-expand-lg bg-light ">
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  {/* LOGO LINK */}
                  <img
                    src="../src/assests/Home/stJohnLettingsLogo.png"
                    width="60px"
                    alt="logo"
                  />
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="#">
                        To Let
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ">Favourits</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <button className="btn" type="submit">
                      Contact Us
                    </button>
                    <button className="btn" type="submit">
                      Enquire
                    </button>
                  </form>
                </div>
              </div>
            </nav>
            <section className="searchbox">
              <div className="container box ">
                <form className="d-flex option" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Location"
                    aria-label="Search"
                  />
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Min Badroom"
                    aria-label="Search"
                  />
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Max Badroom "
                    aria-label="Search"
                  />
                  <button className="btn" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </section>
          </div>
          <div className="container home">
            <img src=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
