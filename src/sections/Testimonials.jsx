import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "../constants/Theme";
import TestCard from "../components/TestCard";
import Scroller from "../components/Scroller";

export default function Testimonials() {
  const { colors } = useTheme();

  return (
    <div className="wrapper">
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
              <Typography
                component={"div"}
                variant="h3"
                style={{ maxWidth: "500px" }}
              >
                Testimonials That Speak to{" "}
                <span style={{ color: colors?.primary, fontWeight: "bold" }}>
                  My Results
                </span>
              </Typography>
              <Typography
                component={"div"}
                variant="p"
                className="testimonials-description"
                style={{ maxWidth: "500px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quo sapiente veritatis mollitia, odit perferendis
                veniam id recusandae ut cum nisi adipisci sint? Architecto,
                quibusdam tenetur veritatis sed eum earum?
              </Typography>
            </div>
            <div className="horizontal-list" id="test-list">
              {tests.map((test, index) => (
                <TestCard key={index} test={test} />
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
