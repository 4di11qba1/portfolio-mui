import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MyThemeProvider } from "./constants/Theme.jsx";

const Root = () => {
  return (
    <React.StrictMode>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
