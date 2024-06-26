import { Divider } from "@mui/material";
import React from "react";

function SkillDivider() {
  return (
    <div className="skill-divider">
      <div className="skill-dot-border">
        <div className="skill-dot-inner">
          <div className="skill-dot"></div>
        </div>
      </div>
      <div className="skill-divider-line"></div>
      <div
        className="skill-dot-border"
        style={{ backgroundColor: "var(--primary)", marginTop: "-1px" }}
      >
        <div className="skill-dot-inner">
          <div
            className="skill-dot"
            style={{ backgroundColor: "var(--primary)" }}
          ></div>
        </div>
      </div>
      <div className="skill-divider-line" style={{ marginTop: "-1px" }}></div>
      <div className="skill-dot-border" style={{ marginTop: "-2px" }}>
        <div className="skill-dot-inner">
          <div className="skill-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillDivider;
