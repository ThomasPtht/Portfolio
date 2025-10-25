import React from "react";
import "../styles/About.scss";
import Flip from "react-reveal/Flip";
import AboutPic from "../assets/Code typing.png";

const About = () => {
  return (
    <div className="about-container">
      <h2 id="about-title">A propos</h2>
      <div className="underline"></div>

      <div className="about-content">
        <div>
          <h3>Skills</h3>
          <div className="skills-content">
            <Flip bottom>
              <div className="skills">
               
                <div className="square">Javascript</div>
                <div className="square">Typescript</div>
                <div className="square">React</div>
                <div className="square">NextJS</div>
                <div className="square">Tailwind</div>
                <div className="square">API REST/GraphQL</div>
                <div className="square">TypeORM</div>
                <div className="square">Prisma</div>
                <div className="square">MongoDB</div>
                <div className="square">PostgreSQL</div>
                <div className="square">GIT</div>
                <div className="square">Github</div>
                <div className="square">DevOps</div>
                <div className="square">Tests</div>
                <div className="square">Wordpress</div>
             
              </div>
            </Flip>
            <img className="about-pic" src={AboutPic} alt="" />
          </div>
        </div>
        <div className="presentation">
          <h3>Présentation</h3>
          <p className="presentation">
            Mon attrait pour le digital et la conception de sites internet est né de la création d’un site WordPress pour un proche. Avec tout ce qui en découle : mise en forme, référencement SEO/SEA, rédaction des fiches produits, photos produits, développement des réseaux sociaux et analyse de données via Google Analytics et Search Console...
            <br />
            <br />
        Souhaitant dépasser les limites offertes par WordPress et me reconvertir dans un domaine qui me passionne, j’ai entrepris une formation en développement web. 🧑‍💻
Cette première expérience m’a permis d’acquérir des bases solides et de confirmer mon intérêt pour la conception d’applications web modernes.
            <br/>
            <br />
            J’ai ensuite intégré le Crédit Agricole de Champagne Bourgogne pour une alternance de 15 mois, dans le cadre de la préparation du titre professionnel Concepteur Développeur d’Applications.
Cette expérience a été particulièrement enrichissante : elle m’a permis de travailler sur des projets concrets, de répondre à des besoins clients réels et d’évoluer dans une démarche DevSecOps, intégrant la sécurité et les tests dès la phase de conception.
Ce cadre m’a permis de renforcer mes compétences techniques, ma rigueur, mon sens de la qualité et ma capacité à répondre à un besoin client métier.
            <br />
            <br />
           Aujourd’hui, fort de ce parcours, je suis prêt à relever de nouveaux défis dans le développement web et applicatif, avec créativité, exigence et passion. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
