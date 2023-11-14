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
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
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
