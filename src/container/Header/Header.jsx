import React from "react";
import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="rehas__header app__wrapper section__padding" id="home">
      <div className="rehas__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="rehas__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div rehas__wrapper_img>
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
