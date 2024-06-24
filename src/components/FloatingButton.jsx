import React from "react";
import { IconButton } from "@mui/material";
import { Edit, DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../constants/Theme";

function FloatingButton() {
  const { light, setLight, accentColor, setAccentColor, colors } = useTheme();
  return (
    // <IconButton>
    <div id="container-floating">
      <div
        className="nd4 nds hoverable"
        style={{ backgroundColor: colors?.primary }}
        onClick={() => setAccentColor(2)}
      >
        <div className="letter" style={{ backgroundColor: "red" }}></div>
      </div>

      <div
        className="nd3 nds hoverable"
        style={{ backgroundColor: colors?.primary }}
        onClick={() => setAccentColor(1)}
      >
        <div className="letter" style={{ backgroundColor: "green" }}></div>
      </div>

      <div
        className="nd1 nds hoverable"
        style={{ backgroundColor: colors?.primary }}
        onClick={() => setAccentColor(0)}
      >
        <div className="letter" style={{ backgroundColor: "blue" }}></div>
      </div>

      <div
        className="nd0 nds hoverable"
        onClick={() => setLight(!light)}
        style={{
          backgroundColor: colors?.primary,
          color: colors?.onSecondary,
        }}
      >
        <div className="letter" style={{ transform: "translate(0, -5px)" }}>
          {light ? <DarkMode /> : <LightMode />}
        </div>
      </div>

      <div id="floating-button" style={{ backgroundColor: colors?.primary }}>
        <p className="plus" style={{ color: colors?.onSecondary }}>
          {light ? <LightMode /> : <DarkMode />}
        </p>
        <Edit className="edit" style={{ color: colors?.onSecondary }} />
      </div>
    </div>
    // </IconButton>
  );
}

export default FloatingButton;
