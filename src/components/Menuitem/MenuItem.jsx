import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="rehas__menuItem">
      <div className="rehas__menuItem-head">
        <div className="rehas__menutem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>

        <div className="rehas__menuItem-dash" />

        <div className="rehas__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="rehas__menuItem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
