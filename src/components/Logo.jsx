import React from "react";
import { useTheme } from "../constants/Theme";

function Logo() {
  const { colors } = useTheme();
  return (
    <div
      className="logo"
      style={{
        color: colors?.secondary,
      }}
    >
      <div
        className="logo-initials"
        style={{
          backgroundColor: colors?.onSecondary,
        }}
      >
        AI
      </div>
      <div className="logo-text">MAIM</div>
    </div>
  );
}

export default Logo;
