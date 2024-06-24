import React from "react";
import Logo from "./Logo";
import { useTheme } from "../constants/Theme";
import { useLocation, useNavigate } from "react-router-dom";

function TopNav() {
  const { colors } = useTheme();
  const loc = useLocation();
  const nav = useNavigate();
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
              className={`top-nav-list-item ${
                loc.pathname === "/" && "active"
              }`}
              onClick={() => nav("/")}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className={`top-nav-list-item ${
                loc.pathname === "/services" && "active"
              }`}
              onClick={() => nav("/services")}
            >
              Services
            </div>
          </li>
          <li>
            <div
              className={`top-nav-list-item ${
                loc.pathname === "/skills" && "active"
              }`}
              onClick={() => nav("/skills")}
            >
              Skills
            </div>
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <div
              className={`top-nav-list-item ${
                loc.pathname === "/about" && "active"
              }`}
              onClick={() => nav("/about")}
            >
              About
            </div>
          </li>
          <li>
            <div
              className={`top-nav-list-item ${
                loc.pathname === "/portfolio" && "active"
              }`}
              onClick={() => nav("/portfolio")}
            >
              Portfolio
            </div>
          </li>
          <li>
            <div
              className={`top-nav-list-item ${
                loc.pathname === "/contact" && "active"
              }`}
              onClick={() => nav("/contact")}
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
