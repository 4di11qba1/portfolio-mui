import React, { useState, createContext, useContext } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  const [accentColor, setAccentColor] = useState(1);

  const theme = createTheme({
    palette: {
      mode: light ? "light" : "dark",
    },
  });

  return (
    <ThemeContext.Provider
      value={{ light, setLight, accentColor, setAccentColor }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
