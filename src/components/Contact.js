import React from "react";
import "../styles/Contact.scss";
import Mail from "../assets/Mail-sent.svg";

const Contact = () => {
  return (
    <div className="contact-block">
      <h2 id="contact-title">Contact</h2>
      <div className="underline"></div>
      <div className="contact-container">
        <div className="contact-content">
          <p>
            N'hésitez pas à me contacter via ce formulaire, <br />
            je vous répondrai avec plaisir ✌️
          </p>
          <img className="mail-picture" src={Mail} alt="" />
        </div>
        <div className="form-container">
          <form>
            <label>
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Nom et prénom"
              />
            </label>
            <label>
              <input
                className="mail"
                type="text"
                name="email"
                placeholder="Mail"
              />
            </label>

            <textarea
              className="message"
              name="message"
              placeholder="Votre message"
            ></textarea>

            <input className="submit" type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
