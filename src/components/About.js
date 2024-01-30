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
                <div className="square">HTML</div>
                <div className="square">CSS</div>
                <div className="square">Javascript</div>
                <div className="square">React</div>
                <div className="square">SASS</div>
                <div className="square">Tailwind</div>
                <div className="square">Node.js</div>
                <div className="square">Express</div>
                <div className="square">MongoDB</div>
                <div className="square">Wordpress</div>

                <div className="square">GIT</div>
                <div className="square">Github</div>
                <div className="square">Figma</div>
                <div className="square">SEO</div>
              </div>
            </Flip>
            <img className="about-pic" src={AboutPic} alt="" />
          </div>
        </div>
        <div className="presentation">
          <h3>Présentation</h3>
          <p className="presentation">
            Mon attrait pour le digital et la conception de sites internet est
            né de la création d’un site WordPress pour un proche. Avec tout ce
            qui en découle : mise en forme, référencement SEO/SEA, rédaction
            fiches produits, photos produits, développement réseaux sociaux,
            analyse de données Google Analytics, search console …
            <br />
            <br />
            Me sentant trop restreint dans la personnalisation de celui-ci et
            souhaitant également me reconvertir dans ce domaine qui m’intéresse,
            j'ai pris la décision d'effectuer une formation afin de devenir
            <strong> développeur web</strong>. 🧑‍💻
            <br />
            Ma formation, étalée sur une période de 6 mois, s'est avérée être
            une aventure enrichissante. Elle m'a permis d'acquérir les
            compétences nécessaires pour concevoir un site web de A à Z, que ce
            soit une simple page statique ou un projet plus complexe.
            <br />
            <br />
            Cette expérience formatrice a été l'occasion d'explorer et de
            maîtriser les technologies essentielles telles que HTML, CSS,
            JavaScript, React, SASS, Node.js, Express, et MongoDB.
            Parallèlement, j'ai pu développer mes compétences en gestion de
            versions avec GIT et Github. 🛠️ <br /> Ainsi, armé de ces nouvelles
            compétences, je suis prêt à relever les défis du développement web
            avec <strong> créativité</strong>, <strong> rigueur</strong> et{" "}
            <strong> passion</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
