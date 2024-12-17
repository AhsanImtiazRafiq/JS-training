import React from "react";
import { Box } from "@mui/material";
import { RegistrationBox } from "@styles/styledComponents";
import { Logo } from "@components/Branding/Logo";

export const RegistrationLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      mx={{ xs: 4, md: 8 }}
      mt={{ xs: 4 }}
    >
      <Logo />
      <RegistrationBox>{children}</RegistrationBox>
    </Box>
  );
};

export default RegistrationLayout;
