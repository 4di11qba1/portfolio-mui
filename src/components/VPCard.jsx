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
        <ListItemText primary={name} secondary={name} />
      </div>
      {/* <div
        className="vp-card-genre"
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        {item?.rating}{" "}
        <Star
          sx={{ width: "12px", height: "12px", transform: "translateY(1.5px)" }}
        />
      </div> */}
    </div>
  );
}

export default VPCard;
