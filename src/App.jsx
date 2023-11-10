// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
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
      <button onClick={toggleTheme}>Change Theme</button>
      <div>
        {showInput ? (
          <div>
            <input
              type="text"
              placeholder="e.g. https://www.facebook.com/"
              value={url}
              onChange={handleInputChange}
            />
            <button onClick={generateQRCode}>Generate QR Code</button>
          </div>
        ) : (
          <div>
            <img src={qr} alt="QR Code" />
            <button onClick={downloadQRCode}>Download</button>
            <button onClick={repeatAction}>Repeat</button>
          </div>
        )}
      </div>
    </div>
  );
};

