import React, { useState } from "react";
import Blob from "../components/Blob";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import Stepper from "../components/Stepper";
import Carousel from "../components/Carousel";

function Services() {
  const [position, setPosition] = useState(3);
  const { colors } = useTheme();

  const changeElement = (pos) => {
    setPosition(pos);
  };
  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="services">
          {/* <Blob /> */}
          <div className="services-content">
            <div className="services-header">
              <Typography component={"div"} variant="h3">
                My{" "}
                <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                  Services
                </span>
              </Typography>
              <Typography component="div" variant="p" className="services-text">
                From creating unique UI/UX designs that enhance user experiences
                to developing custom solutions, I ensure seamless integration
                across platforms.
              </Typography>
            </div>
            <Carousel position={position} changeElement={changeElement} />
            <Stepper position={position - 1} changeElement={changeElement} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
