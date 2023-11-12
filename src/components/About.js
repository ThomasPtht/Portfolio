import React from "react";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h2 id="about-title">A propos</h2>
      <div className="underline"></div>

      <div className="about-content">
        <div className="skills-content">
          <h3>Skills</h3>
          <div className="skills">
            <div className="square">HTML</div>
            <div className="square">CSS</div>
            <div className="square">Javascript</div>
            <div className="square">React</div>
            <div className="square">SASS</div>
            <div className="square">Node.js</div>
            <div className="square">Express</div>
            <div className="square">MongoDB</div>
            <div className="square">Wordpress</div>

            <div className="square">GIT</div>
            <div className="square">Github</div>
            <div className="square">Figma</div>
            <div className="square">SEO</div>
          </div>
        </div>
        <div className="presentation">
          <h3>Présentation</h3>
          <p className="presentation">
            Mon attrait pour le digital et la conception de sites internet est
            né de la création d’un site WordPress pour un proche. Avec tout ce
            qui en découle : mise en forme, référencement SEO/SEA, rédaction
            fiches produits, photos produits, développement réseaux sociaux,
            analyse de données Google Analytics, search console…
            <br />
            Me sentant trop limité dans la modification de celui-ci et
            souhaitant également me reconvertir dans ce domaine qui m’intéresse,
            j’ai décidé de franchir le pas de me former afin de devenir
            développeur web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
