import React from "react";
import Logo from "./Logo";
import { useTheme } from "../constants/Theme";

function TopNav() {
  const { colors } = useTheme();
  return (
    <div className="top-nav">
      <div
        className="top-nav-content"
        style={{
          backgroundColor: colors?.secondaryContainer,
          color: colors?.secondary,
        }}
      >
        <ul className="top-nav-list">
          <li>
            <div
              className="top-nav-list-item"
              style={{ backgroundColor: colors?.onSecondary }}
            >
              Home
            </div>
          </li>
          <li>
            <div className="top-nav-list-item">About</div>
          </li>
          <li>
            <div className="top-nav-list-item">Services</div>
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <div className="top-nav-list-item">Skills</div>
          </li>
          <li>
            <div className="top-nav-list-item">Portfolio</div>
          </li>
          <li>
            <div className="top-nav-list-item">Contact</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
