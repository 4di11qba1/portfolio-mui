import React from "react";
import { getColors } from "./constants/Colors";
import { useTheme } from "./constants/Theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function App({ windowWidth }) {
  const { light, setLight, accentColor, setAccentColor } = useTheme();
  const colors = getColors(light, accentColor);
  return (
    <div
      style={{
        backgroundColor: colors.primary,
        transition: "all 0.5s",
        width: "100vw",
        height: "100vh",
      }}
    >
      <IconButton
        onClick={() => setLight(!light)}
        sx={{ position: "absolute" }}
      >
        {light ? <LightMode /> : <DarkMode />}
      </IconButton>
    </div>
  );
}

export default App;
