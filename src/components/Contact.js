import React, { useRef } from "react";
import "../styles/Contact.scss";
import Mail from "../assets/Mail-sent.svg";
import emailjs from "emailjs-com";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  // Création d'une référence pour le formulaire
  const form = useRef();

  //Empêche le rechargement de la page
  const sendEmail = (e) => {
    e.preventDefault();

    // Envoi du formulaire par e-mail via emailjs
    emailjs
      .sendForm(
        "service_j9wmrjj",
        "template_radhzq4",
        form.current,
        "pVZhs85_G5TxPO_Mx"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Réinitialise les champs du formulaire
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-block">
      <h2 id="contact-title">Contact</h2>
      <div className="underline"></div>

      <div className="contact-container">
        <div className="contact-content">
          <p className="contact-text">
            N'hésitez pas à me contacter via ce formulaire, <br />
            je vous répondrai avec plaisir ✌️
          </p>
          <img className="mail-picture" src={Mail} alt="" />
        </div>
        <Zoom right>
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
              <label>
                <input
                  className="name-form"
                  type="text"
                  name="user_name"
                  placeholder="Nom et prénom"
                  required
                />
              </label>
              <label>
                <input
                  className="mail"
                  type="email"
                  name="user_mail"
                  placeholder="Mail"
                  required
                />
              </label>

              <textarea
                className="message"
                name="message"
                placeholder="Votre message"
                required
              ></textarea>

              <input className="submit" type="submit" value="Envoyer" />
            </form>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Contact;
