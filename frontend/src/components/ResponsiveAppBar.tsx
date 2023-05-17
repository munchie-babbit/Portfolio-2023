import * as React from "react";
import { useState, useEffect } from "react";

import Menu, { MenuProps } from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Container,
  Box,
  Fade,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Button,
  useTheme,
} from "@mui/material";

import logo from "../images/logo-white.png";
import { styled, alpha } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Outlet } from "react-router-dom";

const roleMenuPages = {
  Developer: ["Intro", "Projects", "Resume"],
  Designer: ["Case studies", "UX mentorship", "Contact"],
  Artist: ["Overview", " Work", "Hire me"],
};
const roleBackgroundColours = {
  Developer: "#FFF9F0",
  Designer: "#0f1014",
  Artist: "#FFF9F0",
};

const LogoImage = styled("img")({
  maxWidth: 100,
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function ResponsiveAppBar() {
  //Get current page
  const [currentRole, setCurrentRole] = useState("");
  const [pages, setPages] = useState([""]);
  const [currentColour, setCurrentColour] = useState("");
  const [roleTextColour, setRoleTextColour] = useState("");
  const updateRole = (role: string) => {
    setCurrentRole(role);
  };
  // Get the current URL path
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath === "/design") {
      setCurrentRole("Product Designer");
      setCurrentColour(roleBackgroundColours.Designer);
      setPages(roleMenuPages.Designer);
      setRoleTextColour("white");
    } else if (currentPath === "/art") {
      setCurrentRole("Artist");
      setCurrentColour(roleBackgroundColours.Artist);
      setPages(roleMenuPages.Artist);
      setRoleTextColour("black");
    } else {
      setCurrentRole("Developer");
      setCurrentColour(roleBackgroundColours.Developer);
      setPages(roleMenuPages.Developer);
      setRoleTextColour("#1F263C");
    }
  }, [currentPath]);

  //Mobile hamburger
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // Developer, designer dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: currentColour,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }} */}
          {/* > */}
          <Fade in={true}>
            <Box
              sx={{
                height: 40,
                borderRadius: 40,
                padding: 2,
                margin: 0,
                backgroundColor: "rgba(0,129,186, 0.6)",
                backdropFilter: "blur(10px) brightness(80%) saturate(120%)",
                display: "flex",
                alignItems: "center",
                position: "fixed",
                zIndex: "1",
              }}
            >
              <LogoImage src={logo} alt="Estelle Chung"></LogoImage>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onMouseEnter={handleHover}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  backgroundColor: "rgba(0,0,0,0)",
                }}
              >
                The {currentRole}
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                // transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={open}
                onClose={handleClose}
                sx={{
                  width: "100%",
                  zIndex: 2,
                  margin: 4,
                  "& .MuiMenu-paper": {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px) brightness(80%) saturate(120%)",
                  },
                }}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <Button href="/dev" onClick={() => updateRole("Developer")}>
                    The Developer
                  </Button>
                </MenuItem>
                {/* <MenuItem onClick={handleClose} disableRipple>
                  <Button href="/design" onClick={()=>updateRole("Product Designer")}>
                    The Product Designer
                  </Button>

                  </MenuItem> */}
                <MenuItem onClick={handleClose} disableRipple>
                  <Button href="/art" onClick={() => updateRole("Artist")}>
                    The Artist
                  </Button>
                </MenuItem>
              </StyledMenu>
            </Box>
          </Fade>
          {/* </Typography> */}
          {/* menu collapsed*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                maxWidth: "md",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <LogoImage src={logo} alt="Estelle Chung"></LogoImage>
          </Typography>
          <Box
            sx={{
              margin: "auto",
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
              maxWidth: "md",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: roleTextColour, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Outlet />
    </AppBar>
  );
}
export default ResponsiveAppBar;
