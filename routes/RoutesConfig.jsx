import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@pages/Landing";
import NotFoundPage from "@pages/NotFoundPage";
import Login from "@pages/Registration/Login";
import ForgotPassword from "@pages/Registration/ForgotPassword";

export const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
