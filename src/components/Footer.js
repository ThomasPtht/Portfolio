import React from "react";
import "../styles/Footer.scss";
import Socials from "../components/Socials";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials-footer">
        <Socials customStyle />
      </div>
      <div className="copyright">Copyright &copy;2025 par Thomas Potherat</div>
    </div>
  );
};

export default Footer;
