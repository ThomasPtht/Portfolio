import React from "react";
import "../styles/Card.scss";
import eye from "../assets/eye.png";
import github from "../assets/github-logo.png";

const Card = ({ image, title, text, children }) => {
  return (
    <div>
      <div className="card">
        <img className="card-image" src={image} alt={title} />
        <div className="icons">
          <img className="icon-card" src={eye} alt="" />
          <img className="icon-card" src={github} alt="" />
        </div>
        <div className="card-infos">
          <h3 className="card-title">{title}</h3>
          <div className="tech-buttons">{children}</div>
        </div>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
