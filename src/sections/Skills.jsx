import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme.jsx";
import Skill from "../components/Skill.jsx";
import SkillDivider from "../components/SkillDivider.jsx";

function Skills({ id }) {
  const { colors, windowWidth } = useTheme();
  return (
    <div className="wrapper observer" id={id}>
      <div className="wrapper-content-simple">
        <div className="skills">
          <div className="skills-header">
            <Typography
              component={"div"}
              variant="h3"
              sx={{ color: colors?.secondary }}
            >
              Team{" "}
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
    title: "React & React Native",
    icon: <i className="devicon devicon-react-original"></i>,
    desc: "Transform your ideas into dynamic, high-impact applications with our team’s expertise in React and React Native. We create seamless, engaging user experiences across web and mobile platforms, blending innovation with performance to bring your vision to life.",
  },
  {
    title: "C++",
    icon: <i className="devicon devicon-cplusplus-plain"></i>,
    desc: "Unleash the power of top-notch software solutions with our team's exceptional skills in C++. We blend dynamic, user-centric web experiences with robust, high-performance applications to bring your most ambitious projects to life. Elevate your technology with our expertise and innovation!",
  },
  {
    title: "C# .NET",
    icon: <i className="devicon devicon-csharp-plain"></i>,
    desc: "Empower your business with our expertise in C# and .NET. We deliver scalable, high-performance applications that streamline your operations and drive growth. Our tailored solutions ensure robust, reliable software that meets your unique needs. Transform your vision into reality with our C# and .NET proficiency!",
  },
  {
    title: "MERN",
    icon: <i className="devicon devicon-nodejs-plain-wordmark"></i>,
    desc: "Elevate your projects with our team’s mastery of the MERN stack—MongoDB, Express.js, React, and Node.js. We deliver robust, scalable web applications that combine dynamic front-end experiences with powerful back-end functionality. Let’s build solutions that drive success and innovation.",
  },
  {
    title: "Python",
    icon: <i className="devicon devicon-python-plain"></i>,
    desc: "Empower your projects with our expertise in Python, Django, and Flask. From crafting sophisticated web applications to harnessing the potential of machine learning and AI, we deliver innovative solutions that drive results and transform ideas into reality.",
  },
  {
    title: "HTML/CSS/JS",
    icon: <i className="devicon devicon-devicon-plain"></i>,
    desc: "Transform your vision into stunning digital experiences with our expertise in HTML, CSS, and JavaScript. Combined with our advanced skills in Python, Django, Flask, machine learning, and AI, we craft innovative, user-friendly solutions that captivate and perform.",
  },
];
