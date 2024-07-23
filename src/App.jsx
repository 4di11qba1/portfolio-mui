import {useEffect, useState} from "react";
import { useTheme } from "./constants/Theme";
import.meta.glob("/src/styles/*.(scss|css)", { eager: true });
import FloatingButton from "./components/FloatingButton";
import MoveToTop from "./components/MoveToTop";
import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./screens/Main.jsx";
import Test from "./screens/Test.jsx";
import LandingText from "./components/LandingText.jsx";
import { AnimatePresence, motion } from "framer-motion";

function App() {
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

          {!showLandingText &&
            <motion.div
                className={'main'}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5, delay: 2}}
            >
              <BrowserRouter>
                <div className="app">
                  {/* Floating Buttons */}
                  <FloatingButton />
                  <MoveToTop />

                  {/* Content */}
                  <TopNav />

                  {/* Home */}
                  <Routes>
                    <Route exact path={"/"} element={<Main />} />
                    {/*<Route exact path="/" element={<Home />} />*/}
                    {/*<Route exact path="/about" element={<About />} />*/}
                    {/*<Route exact path="/services" element={<Services />} />*/}
                    {/*<Route exact path="/skills" element={<Skills />} />*/}
                    <Route exact path="/test" element={<Test />} />
                  </Routes>
                </div>
              </BrowserRouter>
            </motion.div>
          }
      </AnimatePresence>
  );
}

export default App;
