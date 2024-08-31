import { useEffect, useState } from "react";
import { useTheme } from "../constants/Theme";
import { motion } from "framer-motion";

function TopNav({ sections, scrollToSection }) {
  const { colors, transition } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [showNavItems, setShowNavItems] = useState(false); // State to control the appearance of nav items

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
    <motion.div
      className="top-nav"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={transition}
    >
      <motion.div
        className="top-nav-content"
        style={{
          backgroundColor: colors?.secondaryContainer,
          color: colors?.secondary,
        }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        exit={{ width: "0%" }}
        transition={transition}
        onAnimationComplete={() => setShowNavItems(true)} // Set state to true when animation completes
      >
        <ul className="top-nav-list">
          {sections.map((element, index) => {
            return element.element ? (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: showNavItems ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  delay: showNavItems ? 0.2 * index : 0, // Stagger each item with delay
                }}
              >
                {element.element}
              </motion.li>
            ) : (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: showNavItems ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  delay: showNavItems ? 0.2 * index : 0, // Stagger each item with delay
                }}
              >
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
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default TopNav;
