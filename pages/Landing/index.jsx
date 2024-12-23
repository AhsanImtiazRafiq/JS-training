import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Registration
      </Button>
      <Button variant="contained" onClick={() => navigate("/dashboard")}>
        Dashboard
      </Button>
    </Box>
  );
};

export default Landing;
