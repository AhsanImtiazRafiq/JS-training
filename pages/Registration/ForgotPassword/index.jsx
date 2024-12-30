import React from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { RegistrationLayout } from "@components/Registration";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <RegistrationLayout>
      <form>
        <Button
          sx={{ mb: 5, color: "link" }}
          onClick={() => navigate("/login")}
        >
          <ArrowBackIcon sx={{ mr: 2 }} />
          Back to Login
        </Button>
        <Stack gap={{ xs: 10 }} alignItems="flex-start">
          <TextField label="Enter Username or Email" fullWidth />

          <Button variant="contained" size="lg" fullWidth>
            Reset Password
          </Button>
        </Stack>
      </form>
    </RegistrationLayout>
  );
};
