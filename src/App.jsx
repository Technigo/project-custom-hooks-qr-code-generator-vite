import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import { useState, useLayoutEffect } from "react";

export const App = () => {
  const {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setUrl(value);
  };

  // Changing theme color
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  };

  // Use the theme state to conditionally apply the dark/light class
  useLayoutEffect(() => {
    document.title = `QR generator ${theme} mode`;
    document.body.className = theme;
  }, [theme]);

return (
  <div className="app">
    <h1 className="title">QR Code Generator</h1>
    <div>
    <div><button className="button" onClick={toggleTheme}>
      Change Theme
    </button>
    </div>
      {showInput ? (
        <div>
          <input
            className="text-field"
            type="text"
            placeholder="e.g. https://www.facebook.com/"
            value={url}
            onChange={handleInputChange}
          />
          <div className="button">
            <button onClick={generateQRCode}>Generate QR Code</button>
          </div>
        </div>
      ) : (
        <div>
          <img src={qr} alt="QR Code" />
        </div>
      )}
      {!showInput && (
        <div className="button">
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
        </div>
      )}
    </div>
  </div>
);
};

