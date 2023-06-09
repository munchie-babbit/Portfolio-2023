import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ArtPage from "./pages/ArtPage";
import DesignPage from "./pages/DesignPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a theme with customized primary and secondary colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF9F0", // Pale white
    },
    secondary: {
      main: "#0074A4", // Blue
    },
    background: {
      default: "#030816",
    },
  },
  transitions: {
    duration: {
      enteringScreen: 600,
      leavingScreen: 200,
    },
  },
  typography: {
    h1: {
      fontFamily: "'sanshiro', sans-serif",
      fontSize: "40px",
      color: "#ED6A40",
      letterSpacing: "30px",
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />}>
          <Route index element={<DevelopmentPage />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="dev" element={<DevelopmentPage />} />
          <Route path="art" element={<ArtPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
} else {
  console.error("Unable to find root element");
}
