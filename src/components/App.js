import React from "react";
import "../styles/App.scss";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import { ThemeProvider, useTheme } from "../components/ThemeContext.js";
import "../styles/DarkTheme.scss";

function App() {
  //  Rendu du composant ThemeProvider pour gérer le thème de l'application
  return (
    <ThemeProvider>
      {/* Rendu du composant AppContent, qui contient le contenu de l'application */}
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  // Utilisation du hook useTheme pour obtenir le mode de thème actuel
  const { themeMode } = useTheme();

  return (
    <div className={`App ${themeMode ? "" : "dark-mode"}`}>
      <Header />
      <div className="home">
        <Banner />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
