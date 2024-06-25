import { ArrowForward } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import { Temp } from "../assets/Index";
import { useNavigate } from "react-router-dom";

function ServiceCard({ heading, img, link }) {
  const nav = useNavigate();
  return (
    <div className="services-card">
      <div className="services-card-title">
        <Typography component={"div"} variant="h6">
          {heading}
        </Typography>
      </div>
      <Divider
        flexItem
        oritentation="horizontal"
        sx={{ border: "0.8px solid var(--card-border)" }}
      />
      <div className="services-card-img-wrapper">
        <img className="services-card-img" src={img} />
      </div>
      <div className="services-card-button" onClick={() => nav(link)}>
        <ArrowForward sx={{ width: "50%", height: "50%" }} />
      </div>
    </div>
  );
}

export default ServiceCard;
