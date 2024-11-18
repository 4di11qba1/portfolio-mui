import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import Scroller from "../components/Scroller";
import CheckBoxGroup from "../components/CheckBoxGroup";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";

export default function Portfolio({ id }) {
  const { colors, transition, delay } = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="wrapper" id={id}>
      <div className="wrapper-content-simple">
        <div className="portfolio">
          <div className="wrapper-header">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={transition}
            >
              <Typography
                component={"div"}
                variant="h3"
                style={{ maxWidth: "500px" }}
                className={"section-header"}
              >
                Let's have a look at my{" "}
                <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                  Portfolio
                </span>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={transition}
            >
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
            </motion.div>
          </div>
          <div className="horizontal-list" id="projects-list">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index + 2) * 0.2,
                }}
              >
                <ProjectModal {...project} />
              </motion.div>
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...transition, delay: delay + 2 }}
              >
                <Typography
                  className="highlighted-project-header-heading"
                  component={"div"}
                  variant="h3"
                  color={"var(--primary)"}
                >
                  Gamer's Utopia
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...transition, delay: delay + 2 + 0.2 }}
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
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...transition, delay: delay + 2 + 0.4 }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Old Porfolio",
    image: "/OldPortfolio.png",
    screen: "/OldPortfolio.mp4",
    link: "https://portfolio-4di11qba1.web.app",
    desc: "My Old Portfolio showcasing my designing skills a year back.",
  },
  {
    name: "MyBank",
    image: "/MyBank.png",
    screen: "/MyBank.mp4",
    link: "/MyBank.pdf",
    desc: "Realtime banking transactions and balance management app developed using .NET.",
  },
  {
    name: "Classic Portfolio",
    image: "/ClassicPortfolio.png",
    screen: "/ClassicPortfolio.mp4",
    link: "https://portfolio-old-6f721.web.app/",
    desc: "My Classic Portfolio showcasing my designing skills 2 years back in the initial phase of my web development.",
  },
  {
    name: "To Do App",
    image: "/ToDo.png",
    screen: "/ToDo.mp4",
    link: "https://4di11qba1.github.io/react_to_do/",
    desc: "To Do List App developed using ReactJS.",
  },
  {
    name: "Web Documentation",
    image: "/Documentation.png",
    screen: "/Documentation.mp4",
    link: "https://refined-github-html-preview.kidonng.workers.dev/4di11qba1/programming_documentation/raw/main/Home%20Page.html",
    desc: "Web Documentation App developed using pure HTML/CSS during the initial phase of my programming.",
  },
  {
    name: "Windows Web",
    image: "/WindowsWeb.png",
    screen: "/WindowsWeb.mp4",
    link: "https://refined-github-html-preview.kidonng.workers.dev/4di11qba1/WindowsWeb/raw/main/WebPage/index.html",
    desc: "Windows Desktop UI developed using BootStrap.",
  },
];
