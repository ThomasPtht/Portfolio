import React from "react";
import "../styles/Banner.scss";
import Socials from "../components/Socials";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text-container">
        <p>
          Bienvenue sur mon Porfolio !{" "}
          <span className="wave-emoji" role="img" aria-label="waving hand">
            👋
          </span>
        </p>
        Je suis <span className="firstname">Thomas Potherat</span>, <br />
        <p className="typewriter">développeur front-end </p>
      </div>

      <span className="scroll-btn">
        <a href="#about-title">
          <span className="mouse">
            <span className="cursor"></span>
          </span>
        </a>
      </span>
      <div className="socials">
        <Fade bottom>
          <Socials />
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
