import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/app.scss";
import { ThemeProviderWithContext } from "@components/Global/themeContext";
import { App } from "@components/App.jsx";

const rootElement = document.getElementById("app");

const root = createRoot(rootElement);
root.render(
  <ThemeProviderWithContext>
    <App />
  </ThemeProviderWithContext>
);
