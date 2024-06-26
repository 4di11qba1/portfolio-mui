import React from "react";
import { IconButton, MobileStepper } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useTheme } from "../constants/Theme";

function Stepper({ position, changeElement }) {
  const { colors } = useTheme();
  return (
    <div className="stepper">
      <MobileStepper
        variant="progress"
        steps={5}
        position="static"
        activeStep={position}
        className="stepper"
        sx={{
          "& .MuiLinearProgress-root": {
            borderRadius: "5px",
            height: "7px",
            width: "100%",
          },
          "& .MuiLinearProgress-determinate": {
            backgroundColor: "var(--secondary)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "var(--on-secondary)",
            },
          },
        }}
        nextButton={
          <IconButton onClick={() => changeElement(position + 2)}>
            <ArrowForward sx={{ color: colors?.secondary }} />
          </IconButton>
        }
        backButton={
          <IconButton onClick={() => changeElement(position)}>
            <ArrowBack sx={{ color: colors?.secondary }} />
          </IconButton>
        }
      />
    </div>
  );
}

export default Stepper;
