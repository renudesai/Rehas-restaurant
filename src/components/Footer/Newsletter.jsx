import React from "react";
import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => {
  return (
    <div className="rehas__newsletter">
      <div className="rehas__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates</p>
      </div>
      <div className="rehas__newsletter-input flex__center">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
