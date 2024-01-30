import "../styles/Projects.scss";
import Bluel from "../assets/Bluel-capture.png";
import Kasa from "../assets/kasa.png";
import Booki from "../assets/Booki.png";
import Manaia from "../assets/Manaia-bijoux.png";
import ReactLogo from "../assets/react-logo.png";
import Wordpress from "../assets/Wordpress-logo.png";
import Express from "../assets/expressjs-logo.png";
import MVG from "../assets/mon-vieux-grimoire.png";
import Node from "../assets/Node-logo.png";
import JavascriptLogo from "../assets/javascript-logo.png";
import Html from "../assets/html-logo.png";
import Css from "../assets/css-logo.png";
import Sass from "../assets/sass-logo.png";
import Mongo from "../assets/mongodb-logo.png";
import Tailwind from "../assets/tailwind.png";
import Vite from "../assets/vite.png";
import Portfolio from "../assets/portfolio.png";
import Meteo from "../assets/meteo-website.png";
import React from "react";
import Card from "./Card";
import ComU from "../assets/com-u.png";

const Projects = () => {
  const revealCardsContainer = () => {
    // Sélectionne l'élément du DOM avec la classe "cards-container"
    const container = document.querySelector(".cards-container");

    // Récupère la position relative de l'élément par rapport à la fenêtre du navigateur
    const containerTop = container.getBoundingClientRect().top;

    // Récupère la hauteur de la fenêtre du navigateur
    const windowHeight = window.innerHeight;

    // Vérifie si la partie supérieure de la "cards-container" est visible dans la fenêtre
    if (containerTop < windowHeight) {
      // Ajoute la classe "active" si la "cards-container" est visible
      container.classList.add("active");
    } else {
      // Supprime la classe "active" si la "cards-container" n'est pas visible
      container.classList.remove("active");
    }
  };
  // Ajout d'un écouteur d'événements de défilement à la fenêtre qui appelle revealCardsContainer
  window.addEventListener("scroll", revealCardsContainer);

  return (
    <div className="projects-container">
      <h2 id="projects-title">PROJETS</h2>
      <div className="underline"></div>
      <div className="cards-container reveal fade-bottom">
        <Card
          image={ComU}
          eyeLink="https://com-u-b7h2-cmcj0crhj-thomas-pthts-projects.vercel.app/"
          githubLink="https://github.com/ThomasPtht/Com-U"
          title="Com&U"
          text={
            <>
              Projet personnel de création d'un site web pour une agence
              marketing/communication
              <br />
              <br />
              Réalisé avec React, le builder Vite et ainsi que Tailwind pour
              appliquer le style. Les bibliothèques React Awesome et React
              CountUp ont permis d'implémenter des effets visuels pour une
              expérience utilisateur dynamique.
            </>
          }
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
          <img className="tech-logo" src={Vite} alt="" />
          <img className="tech-logo" src={Tailwind} alt="" />
        </Card>

        <Card
          image={Kasa}
          eyeLink="https://kasa-project-react.netlify.app"
          githubLink="https://github.com/ThomasPtht/Kasa"
          title="Kaza"
          text={
            <>
              Intégration d'une page d'accueil d'une agence de voyage à partir
              d'une maquette figma.
              <br />
              <br />
              Utilisation de composants React, utilisation de hooks pour gérer
              l'état, et transmission de données via les props. Ajout de media
              queries pour assurer la responsivité du site.
            </>
          }
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
          <img className="tech-logo" src={Sass} alt="" />
        </Card>

        <Card
          image={MVG}
          eyeLink=""
          githubLink="https://github.com/ThomasPtht/Mon-vieux-grimoire"
          title="Mon vieux grimoire"
          text="
          Conception du backend d'une plateforme d'évaluation de livres, incluant une organisation structurée du code. Mise en place sécurisée des opérations CRUD pour interagir avec la base de données, tout en intégrant un système d'authentification pour renforcer la sécurité de l'ensemble du système."
        >
          <img className="tech-logo" src={Node} alt="" />
          <img className="tech-logo" src={Express} alt="" />
          <img className="tech-logo" src={Mongo} alt="" />
        </Card>
        <Card
          image={Bluel}
          eyeLink="https://kasa-project-react.netlify.app"
          githubLink="https://github.com/ThomasPtht/Sophie-Bluel"
          title="Sophie Bluel"
          text="Création d'une page web dynamique pour une architecte, intégrant la gestion dynamique des travaux via une API. Cette solution inclut un filtre permettant de trier les travaux par catégorie, en plus des fonctionnalités d'ajout et de suppression de travaux à travers l'API, ainsi que la conception d'une page de connexion pour l'administrateur."
        >
          <img className="tech-logo" src={JavascriptLogo} alt="" />
          <img className="tech-logo" src={Html} alt="" />
          <img className="tech-logo" src={Css} alt="" />
        </Card>
        <Card
          image={Portfolio}
          eyeLink=""
          githubLink="https://github.com/ThomasPtht/Portfolio"
          title="Portfolio"
          text="
          La conception de mon portfolio avec React a été l'occasion d'appliquer mes compétences acquises, mettant en œuvre une structure basée sur des composants. Utilisation de Sass pour une gestion avancée des styles, ajout de librairies pour optimiser le formulaire et ajouter des effets spécifiques, contribuant ainsi à un résultat dynamique et professionnel."
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
          <img className="tech-logo" src={Sass} alt="" />
        </Card>
        <Card
          image={Meteo}
          eyeLink="https://meteo-website.netlify.app/"
          githubLink="https://github.com/ThomasPtht/Meteo-website"
          title="Météo Website"
          text="
          Création d'une interface affichant les prévisions météorologiques actuelles et à venir pour une ville saisie dans la barre de recherche. Pour alimenter ces informations, j'ai utilisé l'API OpenWeatherMap, offrant un accès en temps réel aux données météorologiques mondiales."
        >
          <img className="tech-logo" src={JavascriptLogo} alt="" />
          <img className="tech-logo" src={Html} alt="" />
          <img className="tech-logo" src={Css} alt="" />
        </Card>
        <Card
          image={Booki}
          eyeLink="https://booki-177e95.netlify.app/"
          githubLink="https://github.com/ThomasPtht/BOOKI"
          title="Booki"
          text="Intégration d'une interface pour une agence de voyages impliquant l'utilisation de Flexbox pour une mise en page flexible, des media queries pour des breakpoints adaptés aux divers appareils, et une validation systématique du code aux normes W3C, assurant ainsi la conformité et la qualité du site."
        >
          <img className="tech-logo" src={Html} alt="" />
          <img className="tech-logo" src={Css} alt="" />
        </Card>
        <Card
          image={Manaia}
          eyeLink="https://manaia-bijoux.fr/"
          title="Manaia bijoux"
          text="
          Élaboration d'une boutique en ligne sous WordPress en utilisant le thème Astra, ajout de divers plugins pour optimiser les performances du site. Rédaction de fiches produits basée sur l'analyse de mots-clés pour renforcer le référencement On-page. Analyse des données à travers Google Analytics et la Search Console."
        >
          <img className="tech-logo" src={Wordpress} alt="" />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
