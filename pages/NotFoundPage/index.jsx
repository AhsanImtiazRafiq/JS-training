import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 5,
        px: { xs: 2, md: 5 },
        py: 5,
      }}
    >
      <img src="./assets/images/404.svg" alt="404" />
      <Typography variant="h3">
        The page you're looking for doesn't exist.
      </Typography>
      <Button onClick={() => navigate("/login")}>Go to Homepage</Button>
    </Box>
  );
};

export default NotFoundPage;
