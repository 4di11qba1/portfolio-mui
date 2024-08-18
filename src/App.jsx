import React, { lazy, useRef, useEffect, useState } from "react";
import { useTheme } from "./constants/Theme";
import.meta.glob("/src/styles/*.(scss|css)", { eager: true });
import FloatingButton from "./components/FloatingButton";
import MoveToTop from "./components/MoveToTop";
import TopNav from "./components/TopNav";
import LandingText from "./components/LandingText.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./sections/Footer.jsx";
import Logo from "./components/Logo.jsx";
import LazyLoad from "./LazyLoader.jsx";
import Test from "./Test.jsx";

const Home = lazy(() => import("./sections/Home.jsx"));
const About = lazy(() => import("./sections/About.jsx"));
const Services = lazy(() => import("./sections/Services.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Portfolio = lazy(() => import("./sections/Portfolio.jsx"));
const Testimonials = lazy(() => import("./sections/Testimonials.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

function App() {
  // Srollers
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref, offset = 0) => {
    if (ref.current) {
      const elementRect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the component is fully within the viewport
      const isFullyInView =
        elementRect.top >= 0 && elementRect.bottom <= viewportHeight;

      if (!isFullyInView) {
        // Calculate the scroll position
        const scrollPosition =
          window.scrollY + elementRect.top - viewportHeight / 2 + offset;

        // Scroll to the calculated position
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sections
  const sections = [
    {
      name: "Home",
      path: homeRef,
      offset: 0,
      id: "home",
    },
    {
      name: "Services",
      path: servicesRef,
      offset: 260,
      id: "services",
    },
    {
      name: "Skills",
      path: skillsRef,
      offset: 275,
      id: "skills",
    },
    {
      element: <Logo />,
    },
    {
      name: "About",
      path: aboutRef,
      offset: 260,
      id: "about",
    },
    {
      name: "Portfolio",
      path: portfolioRef,
      offset: 305,
      id: "portfolio",
    },
    {
      name: "Contact",
      path: contactRef,
      offset: 280,
      id: "contact",
    },
  ];

  // Colors and Landing Text
  const { colors } = useTheme();
  const [showLandingText, setShowLandingText] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = colors?.onSecondary;

    // Clean up on unmount
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [colors]);

  useEffect(() => {
    // Hide landing text after a delay (adjust the delay as needed)
    const timeoutId = setTimeout(() => {
      setShowLandingText(false);
    }, 4000);

    return () => {
      // Clear timeout on component unmount
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <AnimatePresence>
      {showLandingText && (
        <motion.div
          key="landingText"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <LandingText />
        </motion.div>
      )}

      {!showLandingText && (
        <motion.div
          className={"main"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <div className="app">
            {/* Floating Buttons */}
            <FloatingButton />
            <MoveToTop moveToTop={moveToTop} />

            {/* Content */}
            <TopNav sections={sections} scrollToSection={scrollToSection} />

            {/* Home */}
            <div className={"main"}>
              <LazyLoad>
                <div ref={homeRef}>
                  <Home id={sections.filter((s) => s.name === "Home")[0].id} />
                </div>
              </LazyLoad>
              <LazyLoad>
                <div ref={servicesRef}>
                  <Services
                    id={sections.filter((s) => s.name === "Services")[0].id}
                  />
                </div>
              </LazyLoad>
              <LazyLoad>
                <div ref={skillsRef}>
                  <Skills
                    id={sections.filter((s) => s.name === "Skills")[0].id}
                  />
                </div>
              </LazyLoad>
              <LazyLoad>
                <div ref={aboutRef}>
                  <About
                    id={sections.filter((s) => s.name === "About")[0].id}
                  />
                </div>
              </LazyLoad>
              <div
                className="observer"
                id={sections.filter((s) => s.name === "Portfolio")[0].id}
              >
                <LazyLoad>
                  <div ref={portfolioRef}>
                    <Portfolio />
                  </div>
                </LazyLoad>
                <LazyLoad>
                  <div ref={testimonialsRef}>
                    <Testimonials />
                  </div>
                </LazyLoad>
              </div>
              <LazyLoad>
                <div ref={contactRef}>
                  <Contact
                    id={sections.filter((s) => s.name === "Contact")[0].id}
                  />
                </div>
              </LazyLoad>
            </div>
          </div>
          <Footer sections={sections} />
          {/* <Test /> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
