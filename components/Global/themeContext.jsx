import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#4caf50",
    },
  },
});

const themes = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
};

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
