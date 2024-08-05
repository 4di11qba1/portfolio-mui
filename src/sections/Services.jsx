import { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme.jsx";
import Stepper from "../components/Stepper.jsx";
import Carousel from "../components/Carousel.jsx";

const services = [
  {
    heading: "UI/UX Design",
    desc: "User-friendly and visually appealing interfaces for websites, mobile apps, or software products.",
    icon: <i className=" devicon-react-original"></i>,
  },
  {
    heading: "Web Development",
    desc: "Designing and building websites for businesses, individuals, or organizations.",
    icon: <i className=" devicon-react-original"></i>,
  },
  {
    heading: "Mobile Development",
    desc: "Developing native or cross-platform mobile applications for iOS, Android, or both.",
    icon: <i className=" devicon-react-original"></i>,
  },
  {
    heading: "CS Development",
    desc: "Building tailor-made software solutions to address specific business needs or challenges.",
    icon: <i className=" devicon-react-original"></i>,
  },
  {
    heading: "API Integration",
    desc: "Integrating third-party APIs to add additional functionalities to websites or applications.",
    icon: <i className=" devicon-react-original"></i>,
  },
];

function Services() {
  const { colors } = useTheme();

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="services">
          <div className="services-content">
            <div className="wrapper-header">
              <Typography component={"div"} variant="h3">
                My{" "}
                <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                  Services
                </span>
              </Typography>
              <Typography
                component="div"
                variant="body1"
                className="wrapper-header-text"
              >
                From creating unique UI/UX designs that enhance user experiences
                to developing custom solutions, I ensure seamless integration
                across platforms.
              </Typography>
            </div>
            <Carousel services={services} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
