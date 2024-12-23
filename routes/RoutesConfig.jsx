import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import HomePage from "@pages/Dashboard";
import NotFoundPage from "@pages/NotFoundPage";
import Login from "@pages/Registration/Login";
import ForgotPassword from "@pages/Registration/ForgotPassword";
import Landing from "@pages/Landing";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Landing />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
