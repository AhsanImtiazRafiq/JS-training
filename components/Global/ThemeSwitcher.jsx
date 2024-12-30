import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@components/Global/themeContext";

export const ThemeSwitcher = () => {
  const { handleThemeChange } = useTheme();

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Button
        variant="contained"
        sx={{ mr: 1 }}
        onClick={() => handleThemeChange("light")}
      >
        Light Theme
      </Button>
      <Button
        variant="contained"
        sx={{ mr: 1 }}
        onClick={() => handleThemeChange("dark")}
      >
        Dark Theme
      </Button>
      <Button variant="contained" onClick={() => handleThemeChange("custom")}>
        Custom Theme
      </Button>
    </Box>
  );
};
