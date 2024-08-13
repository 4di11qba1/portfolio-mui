import React from "react";
import { ListItemText } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function VPCard({ name, image }) {
  return (
    <div
      className="vp-card"
      style={{
        backgroundImage: `url(${image})`,
        cursor: "pointer",
      }}
    >
      <div className="vp-card-content">
        <ListItemText
          primary={name}
          secondary={name}
          sx={{
            "& .MuiTypography-root": { color: "var(--secondary)" },
          }}
        />
      </div>
    </div>
  );
}

export default VPCard;
