import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// import HomePage from "@pages/Landing";
import { NotFoundPage } from "@pages/NotFoundPage";
import { Login } from "@pages/Registration/Login";
import { ForgotPassword } from "@pages/Registration/ForgotPassword";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};
