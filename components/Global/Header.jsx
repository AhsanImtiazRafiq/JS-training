import React, { useState } from "react";
import {
  Box,
  Grid2,
  IconButton,
  styled,
  InputBase,
  alpha,
  Menu,
  MenuItem,
  AppBar,
  Divider,
  ListItemIcon,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { Logo } from "../Branding/Logo";
import { drawerWidth } from "./Sidebar";

export const headerHeight = "80px";

const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.spacing(2),
  display: "inline-flex",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 0, 2, 4),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export const Header = ({ isMenuOpen, handleDrawerState }) => {
  const theme = useTheme();
  const isMobile = theme.breakpoints.up("md");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      open={isMenuOpen}
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        height: headerHeight,
        variants: [
          {
            props: ({ isMenuOpen }) => isMenuOpen,
            style: {
              marginLeft: drawerWidth,
              width: `calc(100% - ${drawerWidth}px)`,
              transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            },
          },
        ],
      }}
    >
      <Grid2 container>
        <Grid2 size={{ xs: 4 }} sx={{ textAlign: "start" }}>
          <IconButton
            sx={{ color: "common.white" }}
            size="large"
            aria-label="open drawer"
            onClick={handleDrawerState}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          {isMobile ? (
            <IconButton sx={{ color: "common.white" }}>
              <SearchIcon />
            </IconButton>
          ) : (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
        </Grid2>
        <Grid2 size={{ xs: 4 }}>
          <Logo sx={{ fontSize: 40 }} />
        </Grid2>
        <Grid2 size={{ xs: 4 }} sx={{ textAlign: "end" }}>
          <Box sx={{ display: "inline-flex" }}>
            <IconButton sx={{ color: "common.white" }} size="large">
              <NotificationsIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <IconButton
              sx={{ color: "common.white" }}
              size="large"
              onClick={handleClick}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,

                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                My account
              </MenuItem>
              <Divider />

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Grid2>
      </Grid2>
    </AppBar>
  );
};
