import React, { useState } from "react";
import { Box } from "@mui/material";
import { Header, headerHeight } from "@components/Global/Header";
import {
  Sidebar,
  drawerWidth,
  drawerClosedWidth,
} from "@components/Global/Sidebar";

export const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerState = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Header isMenuOpen={open} handleDrawerState={handleDrawerState} />

      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          overflow: "hidden",
          height: `calc(100vh - ${headerHeight})`,
        }}
      >
        <Sidebar isDrawerOpen={open} />
        <Box
          sx={{
            ml: open ? drawerWidth : drawerClosedWidth,
            transition: "0.3s all ease",
            p: 4,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
