import React from "react";
import { createRoot } from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./styles/app.scss";
import { ThemeProviderWithContext } from "@components/Global/themeContext";
import { App } from "@components/App.jsx";

const rootElement = document.getElementById("app");

const root = createRoot(rootElement);
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProviderWithContext>
      <App />
    </ThemeProviderWithContext>
  </LocalizationProvider>
);
