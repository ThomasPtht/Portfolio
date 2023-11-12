import React from "react";
import "../styles/Banner.scss";
import Socials from "../components/Socials";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text-container">
        <p>
          Bienvenue sur mon Porfolio !{" "}
          <span className="wave-emoji" role="img" aria-label="waving hand">
            👋
          </span>
          <br />
          Je suis <span className="firstname">Thomas Potherat</span>, <br />
          <span className="typewriter">développeur front-end </span>
        </p>
      </div>
      <span class="scroll-btn">
        <a href="#about-title">
          <span class="mouse">
            <span></span>
          </span>
        </a>
      </span>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default Banner;
