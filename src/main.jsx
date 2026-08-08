import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Global Styles
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/animations.css";
import "./styles/utilities.css";
import "./styles/scrollbar.css";
import "./styles/pageTransition.css";
import "./styles/global.css";

import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
