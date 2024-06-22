import React, { useState, createContext, useContext, useEffect } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { getColors } from "./Colors";

const ThemeContext = createContext();

export const MyThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  const [accentColor, setAccentColor] = useState(0);
  const [colors, setColors] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setColors(getColors(light, accentColor));
  }, [accentColor, light]);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", colors?.primary);
    document.documentElement.style.setProperty(
      "--primary-fixed",
      colors?.primaryFixed
    );
    document.documentElement.style.setProperty(
      "--on-primary-container",
      colors?.onPrimaryContainer
    );
    document.documentElement.style.setProperty(
      "--secondary",
      colors?.secondary
    );
    document.documentElement.style.setProperty(
      "--secondary-fixed",
      colors?.secondaryFixed
    );
    document.documentElement.style.setProperty(
      "--secondary-container",
      colors?.secondaryContainer
    );
    document.documentElement.style.setProperty(
      "--on-secondary",
      colors?.onSecondary
    );
    document.documentElement.style.setProperty(
      "--surface-container",
      colors?.SurfaceContainer
    );
  }, [colors]);

  const theme = createTheme({
    palette: {
      mode: light ? "light" : "dark",
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        light,
        setLight,
        accentColor,
        setAccentColor,
        colors,
        windowWidth,
      }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
