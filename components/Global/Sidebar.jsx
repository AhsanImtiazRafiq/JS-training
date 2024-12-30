import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { headerHeight } from "./Header";
import { useNavigate } from "react-router-dom";

export const drawerWidth = "250px";
export const drawerClosedWidth = "66px";

const NAVIGATION = [
  {
    section: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon fontSize="large" />,
    path: "/dashboard",
  },

  {
    section: "student",
    title: "Students",
    icon: <BarChartIcon fontSize="large" />,
    path: "/student-list",
    children: [
      {
        title: "Students List",
        path: "/student-list",
      },
      {
        title: "Create new student",
        path: "/create-new-student",
      },
    ],
  },
];

export const Sidebar = ({ isDrawerOpen }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(null); // Tracks which accordion is expanded

  // Effect: Close all accordions when isDrawerOpen is false
  useEffect(() => {
    if (!isDrawerOpen) {
      setExpanded(null); // Reset expanded state
    }
  }, [isDrawerOpen]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null); // Toggle expanded state
  };

  return (
    <Drawer
      open={isDrawerOpen}
      variant="permanent"
      sx={{
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",

        "& .MuiDrawer-paper": {
          width: isDrawerOpen ? drawerWidth : drawerClosedWidth,
          overflow: "hidden",
          paddingTop: headerHeight,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List sx={{ p: 0 }}>
          {NAVIGATION.map(({ title, icon, path, children }) => (
            <ListItem
              key={title}
              sx={{
                flexDirection: "column",
                alignItems: "flex-start",
                p: 0,
                borderBottom: "1px solid",
                borderColor: "border.main",
              }}
            >
              {!children ? (
                // If no children, render a simple button
                <ListItemButton
                  sx={{ width: "100%", gap: 2, py: 4 }}
                  onClick={() => navigate(path)}
                >
                  {icon}
                  {isDrawerOpen && (
                    <Typography variant="h6">{title}</Typography>
                  )}
                </ListItemButton>
              ) : (
                <Accordion
                  expanded={expanded === title} // Controlled expansion
                  onChange={isDrawerOpen && handleAccordionChange(title)} // Handle toggle
                  sx={{ width: "100%", boxShadow: "none" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />} // Accordion toggle icon
                    sx={{
                      px: 0,
                      justifyContent: "flex-start",
                      "&.Mui-expanded": {
                        minHeight: "unset",
                      },
                      ".MuiAccordionSummary-content, .MuiAccordionSummary-content.Mui-expanded":
                        { m: 0 },
                    }}
                  >
                    <ListItemButton sx={{ width: "100%", gap: 2, py: 4 }}>
                      {icon}
                      {isDrawerOpen && (
                        <Typography variant="h6">{title}</Typography>
                      )}
                    </ListItemButton>
                  </AccordionSummary>

                  <AccordionDetails>
                    <List sx={{ py: 0 }}>
                      {children.map(
                        ({ index, title: childTitle, path: childPath }) => (
                          <ListItem
                            key={index}
                            sx={{
                              width: "100%",
                              py: 0,
                              "&:not(:last-child)": {
                                borderBottom: "1px solid",
                                borderColor: "border.main",
                              },
                            }}
                          >
                            <ListItemButton
                              key={childTitle}
                              disableRipple
                              disableTouchRipple
                              onClick={() => navigate(childPath)}
                            >
                              <Typography variant="body2">
                                {childTitle}
                              </Typography>
                            </ListItemButton>
                          </ListItem>
                        )
                      )}
                    </List>
                  </AccordionDetails>
                </Accordion>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
