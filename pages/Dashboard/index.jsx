import React from "react";
import { Typography } from "@mui/material";

import { DashboardLayout } from "@components/Global/Layout";

const HomePage = () => {
  return (
    <DashboardLayout>
      <Typography variant="h1">Welcome to the Home Page</Typography>
      <Typography>This is the main page of the app.</Typography>
      <Typography>Testing</Typography>
    </DashboardLayout>
  );
};

export default HomePage;
