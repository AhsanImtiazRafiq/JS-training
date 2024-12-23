import { createTheme } from "@mui/material";
import { styleOverrides } from "../../theme/style-override";

export const lightTheme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",

    primary: {
      main: "#131313",
    },
    secondary: {
      main: "#757575",
    },
    text: {
      main: "#333",
      light: "#fff",
    },

    border: {
      main: "#A9A9A9",
    },
  },
  components: styleOverrides,
});

export const darkTheme = createTheme({
  spacing: 4,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: styleOverrides,
});

export const customTheme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#4caf50",
    },
  },
  components: styleOverrides,
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
};
