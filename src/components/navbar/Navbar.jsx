import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toogleOpen, setToogleOpen] = useState(false);
  let location = useLocation().pathname;

  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            <i className="ri-leaf-line nav__logo-icon"></i> Crop Care AI
          </Link>

          <div
            className={toogleOpen ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  to="/"
                  className={
                    location === "/" ? "nav__link active-link" : "nav__link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/about"
                  className={
                    location === "/about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/upload"
                  className={
                    location === "/upload"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  Upload
                </Link>
              </li>

              {/* <li className="nav__item">
                            <Link to="/contact" className={location==="/contact"? 'nav__link active-link' : "nav__link" }>Contact Us</Link>
                        </li> */}
            </ul>

            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setToogleOpen(false)}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__btns">
            {/* <!-- Theme change button --> */}
            {/* <i className="ri-moon-line change-theme" id="theme-button" ></i> */}

            <div
              className="nav__toggle"
              id="nav-toggle"
              onClick={() => setToogleOpen(true)}
            >
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
