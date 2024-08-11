import { ArrowForward } from "@mui/icons-material";
import React from "react";

export default function HighlightedService({ service }) {
  return (
    <div className="highlighted-service">
      {service.icon}
      <p style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        {service.heading}
      </p>
      <p>{service.desc}</p>
      <ArrowForward
        sx={{ width: "30px", height: "30px", color: "var(--on-secondary)" }}
      />
    </div>
  );
}
