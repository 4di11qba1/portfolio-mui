import React, { useEffect } from "react";
import { useTheme } from "./constants/Theme";
import.meta.glob("/src/styles/*.(scss|css)", { eager: true });
import FloatingButton from "./components/FloatingButton";
import MoveToTop from "./components/MoveToTop";
import TopNav from "./components/TopNav";

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
    <div
      style={{
        backgroundColor: colors?.onSecondary,
        transition: "all 0.5s",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Floating Buttons */}
      <FloatingButton />
      <MoveToTop />

      {/* Content */}
      <TopNav />
    </div>
  );
}

export default App;
