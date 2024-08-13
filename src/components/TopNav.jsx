import { useEffect, useState } from "react";
import { useTheme } from "../constants/Theme";

function TopNav({ sections, scrollToSection }) {
  const { colors } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "") {
            setActiveSection("contact");
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    // Select the elements to observe
    const elements = document.querySelectorAll(".observer");
    elements.forEach((element) => observer.observe(element));

    // Clean up the observer on component unmount
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [scrollY]);

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
                    element.id === activeSection ? "active" : ""
                  }`}
                  onClick={() =>
                    scrollToSection
                      ? scrollToSection(element.path, element.offset)
                      : null
                  }
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
