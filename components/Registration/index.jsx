import React from "react";
import { Box, styled } from "@mui/material";
import { Logo } from "@components/Branding/Logo";

export const RegistrationBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: "1px solid",
  borderColor: theme.palette.border.main,
  borderRadius: 8,
  width: "100%",
  maxWidth: 500,
  margin: theme.spacing(10, "auto"),
  padding: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
}));

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
