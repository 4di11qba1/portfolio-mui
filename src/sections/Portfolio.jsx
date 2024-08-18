import React from "react";
import { Button, Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import VPCard from "../components/VPCard";
import Scroller from "../components/Scroller";
import CheckBoxGroup from "../components/CheckBoxGroup";
import { ArrowForward } from "@mui/icons-material";

export default function Portfolio({ id }) {
  const { colors } = useTheme();
  return (
    <div className="wrapper" id={id}>
      <div className="wrapper-content-simple">
        <div className="portfolio">
          <div className="wrapper-header">
            <Typography
              component={"div"}
              variant="h3"
              style={{ maxWidth: "500px" }}
            >
              Let's have a look at our{" "}
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
          <div className="horizontal-list" id="projects-list">
            {projects.map((project) => (
              <VPCard key={project.name} {...project} />
            ))}
          </div>
          <Scroller
            elementID={"projects-list"}
            width={"300px"}
            height={"7px"}
            align={"center"}
          />
          <CheckBoxGroup
            list={["E-Commerce", "Learning", "Hobby", "Portfolio"]}
          />
          <div className="highlighted-project">
            <div className="highlighted-project-header">
              <Typography
                className="highlighted-project-header-heading"
                component={"div"}
                variant="h3"
                color={"var(--primary)"}
              >
                Gamer's Utopia
              </Typography>
              <div
                className="icon-button button"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "var(--secondary-container)",
                  color: "var(--secondary)",
                }}
              >
                <ArrowForward
                  className="icon"
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
            </div>
            <Typography
              className="highlighted-project-description"
              component={"div"}
              variant="p"
              color={"var(--secondary)"}
            >
              Gamer's Utopia: The ultimate social app for gamers. Compare
              different game prices, get personalized game recommendations via
              machine learning, and enjoy real-time chat—all in one place.
            </Typography>
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
