import React from "react";
import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => {
  return (
    <div
      className="rehas__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="rehas__aboutus-overlay flex__center">
        <img src={images.R} alt="R letter" />
      </div>

      <div className="rehas__aboutus-content flex-center">
        <div className="rehas__aboutus-content_about">
          <h1 className="headtext__cormorant">About us</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__imag" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="rehas__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about knife" />
        </div>

        <div className="rehas__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__imag" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
