import React from "react";
import { CssBaseline } from "@mui/material";
import { RoutesConfig } from "../routes/RoutesConfig";

export const App = ({ children }) => {
  return (
    <>
      <RoutesConfig />
      <CssBaseline />
      {children}
    </>
  );
};
