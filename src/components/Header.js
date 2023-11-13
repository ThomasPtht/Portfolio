import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import LightMode from "./LightMode";
import "../styles/Header.scss";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [lightModeVisible, setLightMode] = useState(false);

  const toggle = () => {
    setMenuVisible(!menuVisible);
  };

  // const toggleLightMode = () => {
  //   setLightMode(!lightModeVisible);
  // };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="name">THOMAS POTHERAT</h1>
      </div>

      {/* <div className="light-mode"> */}
      <LightMode />
      {/* </div> */}
      <div class="hamburger-menu">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={menuVisible}
          onChange={toggle}
        />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className={`menu__box ${menuVisible ? "open" : ""}`}>
          <li>
            <a class="menu__item" href="#about-title" onClick={toggle}>
              a propos
            </a>
          </li>
          <li>
            <a class="menu__item" href="#projects-title" onClick={toggle}>
              mes projets
            </a>
          </li>
          <li>
            <a class="menu__item" href="#contact-title" onClick={toggle}>
              contact
            </a>
          </li>
          <li>
            <a class="menu__item" href="" onClick={toggle}>
              mon cv
            </a>
          </li>
        </ul>
      </div>

      <nav>
        <a href="#about-title">a propos</a>
        <a href="#projects-title">mes projets</a>
        <a href="#contact-title">contact</a>
        <a
          href="https://drive.google.com/file/d/19wJJJx3w0ieO-0XNyf-TysBaa02sEECX/view?usp=drive_link"
          target="_blank"
          className="button-cv"
        >
          Télécharger CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
