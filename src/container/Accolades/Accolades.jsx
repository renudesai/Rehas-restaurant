import React from "react";
import "./Accolades.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="rehas__accolades_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="rehas__accolades_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Accolades = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormoraant">Our Accolades</h1>
        <div className="rehas__accolades_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="accolades" />
      </div>
    </div>
  );
};

export default Accolades;
