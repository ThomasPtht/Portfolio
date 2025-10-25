import React, { useRef, useState, useEffect } from "react";
import "../styles/Contact.scss";
import Mail from "../assets/Mail-sent.svg";
import emailjs from "emailjs-com";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  // Création d'une référence pour le formulaire
  const form = useRef();
  // state pour afficher le toast de succès
  const [showToast, setShowToast] = useState(false);
  // timer ref pour nettoyer le timeout si le composant se démonte
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
          // afficher le toast de succès
          setShowToast(true);
          // masquer le toast après 3s (et garder une référence pour cleanup)
          timerRef.current = setTimeout(() => setShowToast(false), 3000);
        },
        (error) => {
      
          console.error("EmailJS error (full):", error);

          // Si la réponse réseau est disponible, loguons le status et le corps
          try {
            if (error && error.status) console.error("HTTP status:", error.status);
            if (error && error.text) console.error("response text:", error.text);
            // some environments return a response property
            if (error && error.response) {
              console.error("response object:", error.response);
            }
          } catch (e) {
            console.error("Error while logging EmailJS response:", e);
          }

          // Message lisible pour l'utilisateur
          const userMessage = (error && (error.text || error.message))
            ? `Échec de l'envoi : ${error.text || error.message}`
            : "Échec de l'envoi du message (voir console pour détails)";

          alert(userMessage);
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
            {showToast && (
              <div className="toast toast-success" role="status">
                Message envoyé avec succès !
              </div>
            )}
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Contact;
