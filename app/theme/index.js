"use client";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    palette: {
      primary: "#FFFFFF",
      secondary: "4A4D4E",
    },
  },
  palette: {
    primary: {
      main: "#B28648",
    },
    secondary: {
      main: "#fff",
    },
    college: {
      main: "#E7BD69",
    },
    tertiary: {
      main: "#000",
    },
  },
});

export default theme;
