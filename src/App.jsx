import React, { useEffect } from "react";
import { useTheme } from "./constants/Theme";
import.meta.glob("/src/styles/*.(scss|css)", { eager: true });
import FloatingButton from "./components/FloatingButton";
import MoveToTop from "./components/MoveToTop";
import TopNav from "./components/TopNav";
import Home from "./screens/Home";
import About from "./screens/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./screens/Services";

function App() {
  const { colors } = useTheme();
  useEffect(() => {
    document.body.style.backgroundColor = colors?.onSecondary;

    // Clean up on unmount
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [colors]);
  return (
    <BrowserRouter>
      <div className="app">
        {/* Floating Buttons */}
        <FloatingButton />
        <MoveToTop />

        {/* Content */}
        <TopNav />

        {/* Home */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
