import React from "react";
import { Button, Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import VPCard from "../components/VPCard";

export default function Portfolio() {
  const { colors } = useTheme();
  return (
    <div className="wrapper">
      <div className="wrapper-content-simple">
        <div className="portfolio">
          <div className="wrapper-header">
            <Typography component={"div"} variant="h3">
              Let's have a look at my{" "}
              <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                Portfolio
              </span>
            </Typography>
            <Button
              variant="contained"
              className="button wrapper-header-button"
              style={{
                backgroundColor: "var(--secondary-container)",
                color: "var(--secondary)",
                height: "50px",
                width: "150px",
                fontSize: "1rem",
              }}
            >
              {" "}
              See All{" "}
            </Button>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <VPCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Project 1",
    image: "/temp.png",
  },
  {
    name: "Project 2",
    image: "/temp.png",
  },
  {
    name: "Project 3",
    image: "/temp.png",
  },
  {
    name: "Project 4",
    image: "/temp.png",
  },
  {
    name: "Project 5",
    image: "/temp.png",
  },
  {
    name: "Project 6",
    image: "/temp.png",
  },
];
