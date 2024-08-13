import React from "react";
import { Avatar } from "../assets/Index";
import { Button } from "@mui/material";
import Stats from "../components/Stats";

function About({ id }) {
  return (
    <>
      <div className="wrapper observer" id={id}>
        <div className="wrapper-content">
          <div className="ltrans-outer">
            <div className="ltrans-container">
              <div className="ltrans-container-content">
                <div className="ltrans-container-content-inner">
                  <div className="ltrans-title">
                    <p className="ltrans-head">
                      Why <span>Hire Us</span>?
                    </p>
                  </div>
                  <div className="ltrans-par">
                    <p className="ltrans-p">
                      Why choose us? Our team combines deep expertise in React,
                      React Native, Python, Django, Flask, and the MERN stack
                      with cutting-edge skills in HTML, CSS, and JavaScript. We
                      blend innovation with technical prowess to deliver
                      seamless, high-performance applications. From crafting
                      engaging web experiences to harnessing the power of
                      machine learning and AI, we turn complex challenges into
                      elegant solutions. Partner with us to transform your
                      vision into impactful, future-ready technology.
                    </p>
                    <div className="about-stats">
                      <Stats count={"10"} desc={"Projects Completed"} />
                      <Stats count={"5"} desc={"Technology Stacks"} />
                    </div>
                  </div>
                  <div className="ltrans-btns">
                    <div className="ltrans-btns-more">
                      <Button
                        variant="contained"
                        className="button"
                        style={{
                          backgroundColor: "var(--on-secondary)",
                          color: "var(--secondary)",
                          height: "60px",
                          width: "200px",
                          fontSize: "1.5rem",
                        }}
                      >
                        {" "}
                        Hire Us{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ltrans-container-outer-img">
                <div className="ltrans-img-inner">
                  <img src={Avatar} alt="" className="ltrans-container-img" />
                </div>
              </div>
            </div>
            <div className="ltrans-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
