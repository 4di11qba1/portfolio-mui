import React from "react";
import { Avatar } from "../assets/Index";
import { Button } from "@mui/material";
import Stats from "../components/Stats";

function About() {
  return (
    <>
      <div className="wrapper">
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga necessitatibus delectus error dolorum voluptatem
                      aliquid quis ducimus enim accusamus ad voluptatum,
                      eligendi quae dignissimos ullam a excepturi rem iure
                      ipsam.
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
