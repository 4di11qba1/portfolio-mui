import { Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../constants/Theme";

function Skill({ title, icon, desc, align = "left", flexDirection = "row" }) {
  const { windowWidth } = useTheme();
  return (
    <div
      className="skill"
      style={{ textAlign: align, flexDirection: flexDirection }}
    >
      <div className="icon">{icon}</div>
      <div className="skill-content">
        <div className="skill-title">
          <Typography
            component={"div"}
            variant={windowWidth > 775 ? "h4" : windowWidth > 620 ? "h5" : "h6"}
          >
            {title}
          </Typography>
        </div>
        <div className="skill-description">{desc}</div>
      </div>
    </div>
  );
}

export default Skill;
