import React from "react";

const LandingText = () => {
  return (
    <div className="landing-text">
      <h1 className="home-title">
        <span style={{ display: "flex", gap: "10px" }}>
          Welcome to{" "}
          <div
            style={{ color: "var(--primary) !important", fontWeight: "bold" }}
          >
            MAIM
          </div>
        </span>
        <span>where your ideas turn into reality.</span>
      </h1>
    </div>
  );
};

export default LandingText;
