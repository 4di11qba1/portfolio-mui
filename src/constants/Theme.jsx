import { useState, createContext, useContext, useEffect } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { getColors } from "./Colors";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyThemeProvider = ({ children }) => {
  const initialLight = localStorage.getItem("light") === "true";
  const initialAccentColor = parseInt(localStorage.getItem("accentColor"), 10) || 0;

  const [light, setLight] = useState(initialLight);
  const [accentColor, setAccentColor] = useState(initialAccentColor);
  const [colors, setColors] = useState(getColors(initialLight, initialAccentColor));
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
      colors?.surfaceContainer
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
