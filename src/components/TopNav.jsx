import Logo from "./Logo";
import { useTheme } from "../constants/Theme";
import { useLocation, useNavigate } from "react-router-dom";

function TopNav({ sections }) {
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
          {sections.map((element, index) => {
            return element.element ? (
              <li key={index}>{element.element}</li>
            ) : (
              <li key={index}>
                <div
                  className={`top-nav-list-item ${
                    loc.pathname === `${element.path}` ? "active" : ""
                  }`}
                  onClick={() => nav(element.path)}
                >
                  {element.name}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
