import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes } from "../routes/RoutesConfig";

export const App = ({ children }) => {
  return (
    <>
      <Routes />
      <CssBaseline />
      {children}
    </>
  );
};
