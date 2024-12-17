import { Box, styled } from "@mui/material";

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
