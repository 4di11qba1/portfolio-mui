import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import Skill from "../components/Skill";
import SkillDivider from "../components/SkillDivider";

function Skills() {
  const { colors, windowWidth } = useTheme();
  return (
    <div className="wrapper">
      <div className="wrapper-content-simple">
        <div className="skills">
          <div className="skills-header">
            <Typography
              component={"div"}
              variant="h3"
              sx={{ color: colors?.secondary }}
            >
              My{" "}
              <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
                Skills
              </span>
            </Typography>
          </div>
          <div className="skills-content">
            <div className="skills-column">
              {skills.slice(0, 3).map((skill) => (
                <Skill key={skill.title} {...skill} />
              ))}
            </div>
            <div className="skill-inner-divider">
              <SkillDivider />
            </div>
            <div className="skills-column">
              {skills.slice(3, 6).map((skill) => (
                <Skill
                  key={skill.title}
                  {...skill}
                  align={windowWidth > 560 ? "right" : ""}
                  flexDirection={windowWidth > 560 ? "row-reverse" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

const skills = [
  {
    title: "React",
    icon: <i className="devicon devicon-react-original"></i>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ultrices mauris at bibendum. Curabitur hendrerit tellus nec elit egestas, ut pretium.",
  },
  {
    title: "C++",
    icon: <i className="devicon devicon-cplusplus-plain"></i>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ultrices mauris at bibendum. Curabitur hendrerit tellus nec elit egestas, ut pretium.",
  },
  {
    title: "C# .NET",
    icon: <i className="devicon devicon-csharp-plain"></i>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ultrices mauris at bibendum. Curabitur hendrerit tellus nec elit egestas, ut pretium.",
  },
  {
    title: "MERN",
    icon: <i className="devicon devicon-nodejs-plain-wordmark"></i>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ultrices mauris at bibendum. Curabitur hendrerit tellus nec elit egestas, ut pretium.",
  },
  {
    title: "Python",
    icon: <i className="devicon devicon-python-plain"></i>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ultrices mauris at bibendum. Curabitur hendrerit tellus nec elit egestas, ut pretium.",
  },
  {
    title: "HTML/CSS/JS",
    icon: <i className="devicon devicon-devicon-plain"></i>,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius ultrices mauris at bibendum. Curabitur hendrerit tellus nec elit egestas, ut pretium.",
  },
];
