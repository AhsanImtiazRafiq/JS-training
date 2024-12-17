import React, { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

import { RegistrationLayout } from "@components/Registration";
import { SignUpForm } from "@components/Registration/signup";
import { LoginForm } from "@components/Registration/login";

export const Login = () => {
  const [page, setPage] = useState("signIn");
  const handleChange = (event, newPage) => {
    if (newPage !== null) {
      setPage(newPage);
    }
  };

  return (
    <RegistrationLayout>
      <Box sx={{ textAlign: "center", mb: { xs: 5, lg: 10 } }}>
        <ToggleButtonGroup
          color="primary"
          value={page}
          fullWidth
          exclusive
          onChange={handleChange}
          aria-label="Page"
        >
          <ToggleButton value="signIn">Sign-In</ToggleButton>
          <ToggleButton value="signUp">Sign-Up</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {page === "signIn" ? <LoginForm /> : <SignUpForm />}
    </RegistrationLayout>
  );
};

export default Login;
