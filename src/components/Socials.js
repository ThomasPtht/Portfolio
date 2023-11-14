import React from "react";
import linkedin from "../assets/logo-linkedin.png";
import github from "../assets/github-logo.png";
import envelope from "../assets/envelope.png";
import "../styles/Socials.scss";

function Socials() {
  return (
    <div className="socials-container">
      <div className="buttons-socials">
        <div className="container-git">
          <a
            href="https://github.com/ThomasPtht"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="logo github" className="github" />
          </a>
        </div>
        <div className="container-linkedin">
          <a
            href="https://www.linkedin.com/in/thomas-potherat-923868166/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="logo linkedin" className="linkedin" />
          </a>
        </div>
        <div className="container-envelope">
          <a href="mailto:t.potherat@laposte.net">
            <img src={envelope} alt="" className="envelope" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
