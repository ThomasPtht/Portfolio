import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Header.scss";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="name">THOMAS POTHERAT</h1>
      </div>

      <div className="hamburger-menu">
        <input
          id="menu__toggle"
          type="checkbox"
          checked={menuVisible}
          onChange={toggle}
        />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className={`menu__box ${menuVisible ? "open" : ""}`}>
          <li>
            <a className="menu__item" href="#about-title" onClick={toggle}>
              a propos
            </a>
          </li>
          <li>
            <a className="menu__item" href="#projects-title" onClick={toggle}>
              mes projets
            </a>
          </li>
          <li>
            <a className="menu__item" href="#contact-title" onClick={toggle}>
              contact
            </a>
          </li>
          <li>
            <a className="menu__item" href="" onClick={toggle}>
              mon cv
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-light">
        <div className="light-mode">
          <ThemeButton />
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
      </div>
    </header>
  );
};

export default Header;
