import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const SpecialMenu = () => {
  return (
    <div className="rehas__specialMenu flex__center section__padding" id="menu">
      <div className="rehas__specialMenu-title">
        <SubHeading title="Menu That Fits Your Palettes" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="rehas__specialMenu-menu">
        <div className="rehas__specialMenu-menu_wine flex__center">
          <p className="rehas__spcielMenu_menu_heading">Wine & Beer</p>
          <div className="rehas__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="rehas__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="rehas__specialMenu-menu_cocktails flex__center">
          <p className="rehas__spcielMenu_menu_heading">Wine & Beer</p>
          <div className="rehas__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
