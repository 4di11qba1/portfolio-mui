import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme.jsx";
import Skill from "../components/Skill.jsx";
import SkillDivider from "../components/SkillDivider.jsx";
import { delay, motion } from "framer-motion";

function Skills({ id }) {
  const { colors, windowWidth, transition } = useTheme();
  return (
    <div className="wrapper observer" id={id}>
      <div className="wrapper-content-simple">
        <div className="skills">
          <motion.div
            className="skills-header"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={transition}
          >
            <Typography
              component={"div"}
              variant="h3"
              sx={{ color: colors?.secondary }}
              className={"section-header"}
            >
              My{" "}
              <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
                Skills
              </span>
            </Typography>
          </motion.div>
          <div className="skills-content">
            <div className="skills-column">
              {skills.slice(0, 3).map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ ...transition, delay: index * 0.2 }}
                >
                  <Skill {...skill} />
                </motion.div>
              ))}
            </div>
            <div className="skill-inner-divider">
              <SkillDivider />
            </div>
            <div className="skills-column">
              {skills.slice(3, 6).map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ ...transition, delay: index * 0.2 }}
                >
                  <Skill
                    key={skill.title}
                    {...skill}
                    align={windowWidth > 560 ? "right" : ""}
                    flexDirection={windowWidth > 560 ? "row-reverse" : ""}
                  />
                </motion.div>
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
    desc: "Transform your ideas into dynamic, high-impact applications with my expertise in React and React Native. I create seamless, engaging user experiences across web and mobile platforms, blending innovation with performance to bring your vision to life.",
  },
  {
    title: "C++",
    icon: <i className="devicon devicon-cplusplus-plain"></i>,
    desc: "Unleash the power of top-notch software solutions with my exceptional skills in C++. Blending dynamic, user-centric web experiences with robust, high-performance applications to bring your most ambitious projects to life. Elevate your technology with my expertise and innovation!",
  },
  {
    title: "C# .NET",
    icon: <i className="devicon devicon-csharp-plain"></i>,
    desc: "Empower your business with my expertise in C# and .NET. I deliver scalable, high-performance applications that streamline your operations and drive growth. My tailored solutions ensure robust, reliable software that meets your unique needs. Transform your vision into reality with my C# and .NET proficiency!",
  },
  {
    title: "MERN",
    icon: <i className="devicon devicon-nodejs-plain-wordmark"></i>,
    desc: "Elevate your projects with my mastery of the MERN stack—MongoDB, Express.js, React, and Node.js. I deliver robust, scalable web applications that combine dynamic front-end experiences with powerful back-end functionality. Let’s build solutions that drive success and innovation.",
  },
  {
    title: "Python",
    icon: <i className="devicon devicon-python-plain"></i>,
    desc: "Empower your projects with my expertise in Python, Django, and Flask. From crafting sophisticated web applications to harnessing the potential of machine learning and AI, I deliver innovative solutions that drive results and transform ideas into reality.",
  },
  {
    title: "HTML/CSS/JS",
    icon: <i className="devicon devicon-devicon-plain"></i>,
    desc: "Transform your vision into stunning digital experiences with my expertise in HTML, CSS, and JavaScript. Combined with my advanced skills in Python, Django, Flask, Machine Learning, and AI, I craft innovative, user-friendly solutions that captivate and perform.",
  },
];
