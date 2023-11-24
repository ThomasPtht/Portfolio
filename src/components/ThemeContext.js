import React, { createContext, useContext, useState } from "react";

// Création du contexte de thème
const ThemeContext = createContext();

// Hook personnalisé pour accéder au contexte de thème
export const useTheme = () => {
  // Utilisation du hook useContext pour obtenir la valeur du contexte
  const context = useContext(ThemeContext);
  // Vérification si le hook est utilisé à l'intérieur d'un fournisseur de thème
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  // Retourne la valeur du contexte (contenant le mode de thème et la fonction de bascule du thème)
  return context;
};

// Fournisseur de thème
export const ThemeProvider = ({ children }) => {
  // État local pour gérer le mode de thème (true pour clair, false pour sombre)
  const [themeMode, setThemeMode] = useState(true);

  // Fonction pour basculer entre les modes de thème
  const toggleTheme = () => {
    // Utilisation de la fonction de mise à jour de l'état avec une fonction de rappel pour garantir la précision de l'état précédent
    setThemeMode((prevMode) => !prevMode);
  };

  // Valeur du contexte contenant le mode de thème et la fonction de bascule du thème
  const value = {
    themeMode,
    toggleTheme,
  };

  // Rendu du fournisseur de thème avec le contexte fourni aux composants descendants
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
