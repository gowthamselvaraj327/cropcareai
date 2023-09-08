import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/images/home.png";

const Hero = () => {
  return (
    <div className="home" id="home">
      <div className="home__container container grid">
        <img src={homeImg} alt="" className="home__img" />

        <div className="home__data">
          <h1 className="home__title">
            Plants will make <br /> your life better
          </h1>
          <p className="home__description">
            Through the lens of machine learning, we diagnose plant diseases to
            nurture healthier crops and a thriving planet.
          </p>
          <Link to="/upload" className="button button--flex">
            Explore <i className="ri-arrow-right-down-line button__icon"></i>
          </Link>
        </div>

        <div className="home__social">
          <span className="home__social-follow">Follow Us</span>

          <div className="home__social-links">
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
