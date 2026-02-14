import "../styles/Projects.scss";
import Bluel from "../assets/Bluel-capture.png";
import Kasa from "../assets/kasa.png";
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

import Meteo from "../assets/meteo-website.png";

import Card from "./Card";
import ComU from "../assets/com-u.png";
import Move from "../assets/move-on.png";
import Sonar from "../assets/Sonar.png";
import MTB from "../assets/my-travel-book.png";
import TypeOrm from "../assets/typeOrm.png";
import PostgreSQL from "../assets/Postgresql.png";
import GraphQL from "../assets/graphql.png";
import NextJs from "../assets/next-js.svg";
import Prisma from "../assets/prisma.png";
import PulseOn from "../assets/pulseon.png";

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
          image={MTB}
  
          githubLink="https://github.com/ThomasPtht/MyTravelBook/tree/main"
          title="My Travel Book"
          text={
            <>
             Web App permettant aux utilisateurs de lister leurs voyages en leur attribuant une note et un commentaire, ainsi que de les visualiser sur une carte interactive.
              <br />
              <br />
              Build avec Next.js 16, Prisma et PostgreSql pour le backend. NextAuth pour l'authentification.
              Tests avec Jest, React Testing Library.
            </>
          }
        >
          <img className="tech-logo" src={NextJs} alt="" />
           <img className="tech-logo" src={Prisma} alt="" />
           <img className="tech-logo" src={PostgreSQL} alt="" />
          <img className="tech-logo" src={Tailwind} alt="" />
        </Card>

<Card
          image={PulseOn}
          eyeLink=""
          githubLink="https://github.com/ThomasPtht/PulseOn"
          title="PulseOn"
          text={
            <>
           App permettant de saisir et analyser ses séances de sport(running et musculation)
              <br />
              <br />
              Frontend en React, TypeScript et Apollo Client. Back en Node.js, Express et Apollo Server, avec TypeORM et PostgreSQL.
Auth sécurisée via JWT et argon2.
Tests via Vitest et React Testing Library.
            </>
          }
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
           <img className="tech-logo" src={PostgreSQL} alt="" />
           <img className="tech-logo" src={TypeOrm} alt="" />
          <img className="tech-logo" src={GraphQL} alt="" />
          <img className="tech-logo" src={Tailwind} alt="" />
        </Card>

<Card
          image={Sonar}
          eyeLink=""
          githubLink="https://github.com/WildCodeSchool/2024-09-wns-bleu-3"
          title="Sonar"
          text={
            <>
             Application web de monitoring d'adresses URLs.
              <br />
              <br />
              Réalisé en React pour le frontend et GraphQL Yoga avec Express pour le backend, PostgreSQL pour la base de données ainsi que TypeORM pour échanger avec celle ci. Intégration d'authentification sécurisée, pipeline CI/CD.
            </>
          }
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
           <img className="tech-logo" src={PostgreSQL} alt="" />
           <img className="tech-logo" src={TypeOrm} alt="" />
          <img className="tech-logo" src={GraphQL} alt="" />
          <img className="tech-logo" src={Tailwind} alt="" />
        </Card>


        <Card
          image={Move}
          eyeLink="https://move-on-pi.vercel.app/"
          githubLink="https://github.com/ThomasPtht/Move-on"
          title="Move'on"
          text={
            <>
              Création d'une landing page pour une application de programmes
              sportifs.
              <br />
              <br />
              Construit avec la bibliothèque React et optimisé par le builder
              Vite, ce projet bénéficie d'une esthétique élégante grâce à
              Tailwind. Les composants sont mis en valeur par la bibliothèque
              React Awesome, offrant une expérience utilisateur moderne.
            </>
          }
        >
          <img className="tech-logo" src={ReactLogo} alt="" />
         
          <img className="tech-logo" src={Vite} alt="" />
          <img className="tech-logo" src={Tailwind} alt="" />
        </Card>

        <Card
          image={ComU}
          eyeLink="https://com-u-b7h2.vercel.app/"
          githubLink="https://github.com/ThomasPtht/Com-U"
          title="Com&U"
          text={
            <>
              Projet personnel de création d'un site web pour une agence
              marketing/communication.
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
        {/* <Card
          image={Booki}
          eyeLink="https://booki-177e95.netlify.app/"
          githubLink="https://github.com/ThomasPtht/BOOKI"
          title="Booki"
          text="Intégration d'une interface pour une agence de voyages impliquant l'utilisation de Flexbox pour une mise en page flexible, des media queries pour des breakpoints adaptés aux divers appareils, et une validation systématique du code aux normes W3C, assurant ainsi la conformité et la qualité du site."
        >
          <img className="tech-logo" src={Html} alt="" />
          <img className="tech-logo" src={Css} alt="" />
        </Card> */}
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
