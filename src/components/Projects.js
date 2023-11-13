import "../styles/Projects.scss";
import Bluel from "../assets/Bluel-capture.png";
import Kasa from "../assets/kasa.png";
import Booki from "../assets/Booki.png";
import Manaia from "../assets/Manaia-bijoux.png";
import Nina from "../assets/nina-carducci.png";
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
import React from "react";
import Card from "./Card";

const Projects = () => {
  const revealCardsContainer = () => {
    const container = document.querySelector(".cards-container");
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  };

  window.addEventListener("scroll", revealCardsContainer);

  return (
    <div className="projects-container">
      <h2 id="projects-title">PROJETS</h2>
      <div className="underline"></div>
      <div className="cards-container reveal fade-bottom">
        <Card
          image={Kasa}
          eyeLink="https://kasa-project-react.netlify.app"
          githubLink="https://github.com/ThomasPtht/Kasa"
          title="Kaza"
          text="Intégration d'une page d'accueil d'une agence de voyage à partir d'une maquette figma. 
          Utilisation de media queries afin de rendre le site responsive sur ordinateurs, tablettes et mobiles.  "
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
          <img className="tech-logo" src={Sass} alt="" />
        </Card>

        <Card
          image={MVG}
          eyeLink=""
          githubLink="https://github.com/ThomasPtht/Mon-vieux-grimoire"
          title="Mon vieux grimoire"
          text="Développement du back-end d'un site de notation de livres. Structuration du code (contrôleurs, routeurs, middlewares...), mise en oeuvre d'opérations CRUD de manière sécurisée, implémentation d'un système d'authentification.  "
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
          text="Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ea ducimus nobis eveniet tenetur, distinctio aliquid
      minima veritatis alias temporibus assumenda possimus ut, consequuntur
      deleniti a saepe. Doloremque commodi voluptatibus amet deleniti tempora
      temporibus culpa delectus dolorum quaerat et eius, aut consequuntur illum
      non architecto quod quidem ea ex nulla officiis!"
        >
          <img className="tech-logo" src={JavascriptLogo} alt="" />
          <img className="tech-logo" src={Html} alt="" />
          <img className="tech-logo" src={Css} alt="" />
        </Card>
        <Card
          image={Nina}
          eyeLink="https://nina-carducci-project.netlify.app/"
          githubLink="https://github.com/ThomasPtht/nina-carducci.github.io"
          title="Nina Carducci"
          text="Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ea ducimus nobis eveniet tenetur, distinctio aliquid
      minima veritatis alias temporibus assumenda possimus ut, consequuntur
      deleniti a saepe. Doloremque commodi voluptatibus amet deleniti tempora
      temporibus culpa delectus dolorum quaerat et eius, aut consequuntur illum
      non architecto quod quidem ea ex nulla officiis!"
        />
        <Card
          image={Booki}
          eyeLink="https://booki-177e95.netlify.app/"
          githubLink="https://github.com/ThomasPtht/BOOKI"
          title="Booki"
          text="Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Ea ducimus nobis eveniet tenetur, distinctio aliquid
      minima veritatis alias temporibus assumenda possimus ut, consequuntur
      deleniti a saepe. Doloremque commodi voluptatibus amet deleniti tempora
      temporibus culpa delectus dolorum quaerat et eius, aut consequuntur illum
      non architecto quod quidem ea ex nulla officiis!"
        >
          <img className="tech-logo" src={Html} alt="" />
          <img className="tech-logo" src={Css} alt="" />
        </Card>
        <Card
          image={Manaia}
          eyeLink="https://manaia-bijoux.fr/"
          title="Manaia bijoux"
          text="Création d'une boutique e-commerce avec Wordpress et l'intégration du thème Astra.
           Ajout de différents plugins permettant d'optimiser le site. Rédaction de fiches produits après l'étude de mots clés liés à l'activité (Travail de référencement On page). Analyse de données via Google Analytics et la Search Console."
        >
          <img className="tech-logo" src={Wordpress} alt="" />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
