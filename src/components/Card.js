import React from "react";
import "../styles/Card.scss";
import eye from "../assets/eye.png";
import github from "../assets/github-logo.png";

const Card = ({ image, title, text, eyeLink, githubLink, children }) => {
  return (
    <div>
      <div className="card">
        <div className="image-container">
          <img className="card-image" src={image} alt={title} />
          <div className="icons">
            {/* Afficher le logo uniquement si eyeLink à une valeur définie */}
            {eyeLink && (
              <a href={eyeLink} target="_blank" rel="noopener noreferrer">
                <img className="icon-card" src={eye} alt="" />
              </a>
            )}
            {/* Afficher le logo uniquement si githubLink à une valeur définie */}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img className="icon-card" src={github} alt="" />
              </a>
            )}
          </div>
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
