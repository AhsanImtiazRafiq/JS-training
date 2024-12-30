import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { themes } from "./theme";

// Create the context
const ThemeContext = createContext();

// Custom hook for consuming the ThemeContext
export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderWithContext = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem("theme", themeName); // Persist theme in localStorage
  };

  // Restore theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
