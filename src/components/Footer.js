import React from "react";
import Github from "../assets/github-logo.png";
import Linkedin from "../assets/logo-linkedin.png";
import Mail from "../assets/envelope.png";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials-footer">
        <a
          href="https://github.com/ThomasPtht"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-footer" src={Github} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/thomas-potherat-923868166/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo-footer" src={Linkedin} alt="" />
        </a>
        <a href="mailto:t.potherat@laposte.net">
          <img className="logo-footer" src={Mail} alt="" />
        </a>
      </div>
      <div className="copyright">Copyright &copy;2023 par Thomas Potherat</div>
    </div>
  );
};

export default Footer;
