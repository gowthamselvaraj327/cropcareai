import React from "react";
import aboutImg from "../../assets/images/about.png";

const About = () => {
  return (
    <section className="about section container" id="about">
      <div className="about__container grid">
        <img src={aboutImg} alt="" className="about__img" />

        <div className="about__data">
          <h2 className="section__title about__title">
            Who we really are & <br /> why choose us
          </h2>

          <p className="about__description">
            Welcome to Plant Disease Detection, your ultimate resource for
            tackling one of agriculture's most significant
            challenges—identifying and managing plant diseases. Our mission is
            to empower farmers, gardeners, and agricultural enthusiasts with the
            knowledge and tools they need to protect their crops and gardens
            from the devastating effects of diseases.
          </p>

          <div className="about__details">
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              We provide comprehensive information on various plant diseases,
              including their causes, symptoms, and methods of prevention and
              control.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              Explore cutting-edge technologies and techniques for plant disease
              detection.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>
              We give you guides to protect and care for your plants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
