import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import "tailwindcss/tailwind.css";
import "./index.css";
import { QrCodeProvider } from "./context/QrcodeContext.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QrCodeProvider>
      <App />
    </QrCodeProvider>
  </React.StrictMode>
);
