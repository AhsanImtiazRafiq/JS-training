import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, Button } from "@mui/material";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <form>
      <Stack gap={{ xs: 5 }} alignItems="flex-start">
        <TextField label="Username" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button onClick={() => navigate("/reset-password")}>
          Forgot Password?
        </Button>
        <Button
          variant="contained"
          size="lg"
          fullWidth
          onClick={() => navigate("/")}
        >
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
