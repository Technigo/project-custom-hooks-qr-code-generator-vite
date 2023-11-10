import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import { QrCodeProvider } from "./context/QrcodeContext.js";
import { ThemeProvider } from "./context/ThemeContext.js";
import "tailwindcss/tailwind.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QrCodeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QrCodeProvider>
  </React.StrictMode>
);
