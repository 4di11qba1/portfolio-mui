import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import TestCard from "../components/TestCard";
import Scroller from "../components/Scroller";
import { motion } from "framer-motion";

export default function Testimonials({ id }) {
  const { colors, transition, delay } = useTheme();

  return (
    <div className="wrapper" id={id}>
      <div className="wrapper-content">
        <div className="services">
          <div className="services-content">
            <div
              className="wrapper-header"
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                textAlign: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition, delay: delay }}
              >
                <Typography
                  component={"div"}
                  variant="h3"
                  style={{ maxWidth: "500px" }}
                >
                  Testimonials That Speak to{" "}
                  <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                    Our Results
                  </span>
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...transition, delay: delay + 0.6 }}
              >
                <Typography
                  component={"div"}
                  variant="p"
                  className="testimonials-description"
                  style={{ maxWidth: "500px" }}
                >
                  Don’t just take our word for it—hear from those who’ve
                  experienced our innovation firsthand. Discover why businesses
                  choose us to bring their visions to life.
                </Typography>
              </motion.div>
            </div>
            <div className="horizontal-list" id="test-list">
              {tests.map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...transition, delay: delay + index * 0.2 }}
                >
                  <TestCard key={index} test={test} />
                </motion.div>
              ))}
            </div>
            <Scroller
              elementID={"test-list"}
              width={"300px"}
              height={"7px"}
              align={"center"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const tests = [
  {
    name: "Rizwan Abid",
    rating: 4.9,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente veritatis mollitia, odit perferendis veniam id recusandae ut cum nisi adipisci sint? Architecto, quibusdam tenetur veritatis sed eum earum?",
    relation: "Colleague",
    company: "i2c",
    img: "profile.png",
  },
  {
    name: "Rizwan Abid",
    rating: 4.5,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente veritatis mollitia, odit perferendis veniam id recusandae ut cum nisi adipisci sint? Architecto, quibusdam tenetur veritatis sed eum earum?",
    relation: "Colleague",
    company: "i2c",
    img: "profile.png",
  },
  {
    name: "Rizwan Abid",
    rating: 4.7,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente veritatis mollitia, odit perferendis veniam id recusandae ut cum nisi adipisci sint? Architecto, quibusdam tenetur veritatis sed eum earum?",
    relation: "Colleague",
    company: "i2c",
    img: "profile.png",
  },
  {
    name: "Rizwan Abid",
    rating: 5.0,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente veritatis mollitia, odit perferendis veniam id recusandae ut cum nisi adipisci sint? Architecto, quibusdam tenetur veritatis sed eum earum?",
    relation: "Colleague",
    company: "i2c",
    img: "profile.png",
  },
  {
    name: "Rizwan Abid",
    rating: 4.3,
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo sapiente veritatis mollitia, odit perferendis veniam id recusandae ut cum nisi adipisci sint? Architecto, quibusdam tenetur veritatis sed eum earum?",
    relation: "Colleague",
    company: "i2c",
    img: "profile.png",
  },
];
