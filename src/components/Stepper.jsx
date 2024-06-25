import React from "react";
import { MobileStepper } from "@mui/material";

function Stepper({ position, changeElement }) {
  return (
    <div className="stepper">
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={position}
        sx={{
          maxWidth: "60%",
          flexGrow: 1,
          backgroundColor: "transparent",
          color: "var(--secondary)",
          "& .MuiLinearProgress-root": {
            // Target root element for overall styling
            borderRadius: "5px",
            height: "7px",
            width: "100%",
          },
          "& .MuiLinearProgress-determinate": {
            backgroundColor: "var(--secondary)", // Adjust background for better contrast
            "& .MuiLinearProgress-bar": {
              backgroundColor: "var(--on-secondary)", // Set progress bar color here
            },
          },
        }}
      />
    </div>
  );
}

export default Stepper;
