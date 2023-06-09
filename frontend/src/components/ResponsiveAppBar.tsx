import * as React from "react";
import { useState, useEffect } from "react";

import Menu, { MenuProps } from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { colors } from "../styles";

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
import logoColour from "../images/logo.png";
import { styled, alpha } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const roleMenuPages = {
  Developer: [
    { title: "Intro", link: "#intro" },
    { title: "Projects", link: "#projects" },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1d13E9CcL1_GLdI0I5EqDhPSjmG0DEzIZ/view?usp=sharing",
    },
  ],
  Designer: [
    { title: "Case studies", link: "https://dummylink.com" },
    { title: "UX mentorship", link: "https://dummylink.com" },
    { title: "Contact", link: "https://dummylink.com" },
  ],
  Artist: [
    { title: "Overview", link: "#overview" },
    { title: "Work", link: "#featured-work" },
    { title: "Hire me", link: "#hire-me" },
  ],
};
const roleBackgroundColours = {
  Developer: "#030816",
  Designer: "#0f1014",
  Artist: "white",
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
  const [pages, setPages] = useState([{ title: "", link: "" }]);
  const [currentColour, setCurrentColour] = useState("");
  const [roleTextColour, setRoleTextColour] = useState("");
  const updateRole = (role: string) => {
    setCurrentRole(role);
  };
  // Get the current URL path
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (currentPath === "/design") {
      setCurrentRole("The Product Designer");
      setCurrentColour(roleBackgroundColours.Designer);
      setPages(roleMenuPages.Designer);
      setRoleTextColour("white");
    } else if (currentPath === "/art") {
      setCurrentRole("The Artist");
      setCurrentColour(roleBackgroundColours.Artist);
      setPages(roleMenuPages.Artist);
      setRoleTextColour(colors.darkBlue);
    } else {
      setCurrentRole("The Developer");
      setCurrentColour(roleBackgroundColours.Developer);
      setPages(roleMenuPages.Developer);
      setRoleTextColour(colors.midBlue);
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const open = Boolean(anchorEl);
  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsCollapsed(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsCollapsed(true);
  };

  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = window.pageYOffset;
      setIsCollapsed((currentScrollOPost) => newScrollPos > currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: currentColour,
        paddingTop: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Fade in={true} timeout={1000}>
            <Box
              sx={{
                height: 40,
                borderRadius: 40,
                padding: 4,
                margin: 0,
                backgroundColor: isCollapsed
                  ? "rgba(0,129,186, 0.2)"
                  : "rgba(0,129,186, 0.6)",
                backdropFilter: "blur(10px) brightness(80%) saturate(120%)",
                alignItems: "center",
                position: "fixed",
                zIndex: 5,
                display: { xs: "none", md: "flex" },
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
                endIcon={<ExpandCircleDownRoundedIcon />}
                sx={{
                  backgroundColor: "rgba(0,0,0,0)",
                  color: "white",
                  letterSpacing: 2,
                  fontSize: 20,
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "none",
                  },
                }}
              >
                <h2>{isCollapsed ? null : currentRole} </h2>
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                onClose={handleClose}
                autoFocus={false}
                sx={{
                  width: "100%",
                  marginLeft: "-6px",
                  overflow: "hidden",
                  borderRadius: 20,
                  zIndex: 2,
                  "& .MuiMenu-paper": {
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {currentRole === "The Developer" ? (
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      sx={{
                        height: 60,
                        alignItems: "center",
                        overflow: "hidden",
                        backgroundColor: "rgba(0,129,186, 0.6)",
                        backdropFilter:
                          "blur(10px) brightness(80%) saturate(120%)",
                        borderRadius: 40,
                        "&:hover": {
                          backgroundColor: colors.darkBlue,
                          textDecoration: "none",
                        },
                      }}
                    >
                      <Button
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        href="/art"
                        sx={{
                          backgroundColor: "transparent",
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        <h2
                          style={{
                            // color: colors.darkBlue,
                            letterSpacing: 2,
                            fontSize: 20,
                          }}
                        >
                          The Artist
                        </h2>
                      </Button>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      disableRipple
                      sx={{
                        height: 60,
                        overflow: "hidden",
                        backgroundColor: "rgba(0,129,186, 0.6)",
                        backdropFilter:
                          "blur(10px) brightness(80%) saturate(120%)",
                        marginBottom: "6px",
                        borderRadius: 40,
                        "&:hover": {
                          backgroundColor: colors.darkBlue,
                          textDecoration: "none",
                        },
                        "&:active": {
                          backgroundColor: colors.darkBlue,
                          textDecoration: "none",
                        },
                      }}
                    >
                      <Button
                        href="/dev"
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        sx={{
                          backgroundColor: "transparent",
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        <h2
                          style={{
                            // color: colors.darkBlue,
                            letterSpacing: 2,
                            fontSize: 20,
                          }}
                        >
                          The Developer
                        </h2>
                      </Button>
                    </MenuItem>
                  </div>
                )}
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
              <MenuIcon
                sx={{
                  color: currentRole === "The Developer" ? "white" : "black",
                }}
              />
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
                maxWidth: "400px",
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Button href={page.link}>
                    <h2 style={{ textAlign: "center", color: colors.darkBlue }}>
                      {page.title}
                    </h2>
                  </Button>
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
            <LogoImage
              src={currentRole === "The Developer" ? logo : logoColour}
              alt="Estelle Chung"
            ></LogoImage>
          </Typography>
          <Box
            sx={{
              margin: "auto",
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
              maxWidth: "lg",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: roleTextColour,
                  px: 2,
                  backgroundColor: "transparent",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                    color: colors.darkOrange,
                  },
                }}
                disableFocusRipple
                disableRipple
                disableTouchRipple
                href={page.link}
                startIcon={
                  index === 0 ? (
                    <Brightness3Icon sx={{ color: colors.darkOrange }} />
                  ) : index === 1 ? (
                    <Brightness2Icon sx={{ color: colors.darkOrange }} />
                  ) : (
                    <Brightness1Icon sx={{ color: colors.darkOrange }} />
                  )
                }
              >
                <h2>{page.title}</h2>
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
