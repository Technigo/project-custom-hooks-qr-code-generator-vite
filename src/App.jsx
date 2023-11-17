// Import necessary modules and components.
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator
import { useEffect, useRef } from "react";
import { ChromePicker } from "react-color";
import {
  LottieComponent,
  AnotherLottieComponent,
} from "./components/LottieComponent";
import logo from "/studio-qr-code-logo.png";

// ICONS
import { AiOutlineCloudDownload, AiFillGithub } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

// Define the App component.
export const App = () => {
  // Destructure variables, properties, and methods from the useQRCodeGenerator hook.
  const {
    inputURL,
    setInputURL,
    qrcode,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    showSpinner,
    color,
    setColor,
    showColorPicker,
    setShowColorPicker,
  } = useQRCodeGenerator();

  // Reference to the color picker element.
  const colorPickerRef = useRef(null);

  // Handle color input change.
  const handleColorInputChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  // Close the color picker if a click is detected outside of it.
  const closeColorPicker = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      setShowColorPicker(false);
    }
  };

  // Add event listener for closing the color picker on click outside.
  useEffect(() => {
    document.addEventListener("click", closeColorPicker);

    // Cleanup function to remove the event listener on component unmount.
    return () => {
      document.removeEventListener("click", closeColorPicker);
    };
  }, []);

  // Render the main content of the App.
  return (
    <div className="wrapper">
      <header>
        {/* GitHub link and author information */}
        <div className="github-container header">
          <a href="https://github.com/JuliaHolm">
            <AiFillGithub className="github-icon" />
          </a>
          <a href="https://github.com/JuliaHolm">By Julia Holm</a>
        </div>
        {/* Logo and QR code icon */}
        <img
          className="logo"
          src={logo}
          alt="Studio QR code logo"
          aria-label="Studio QR code logo"
        />
        <div className="qr-header-container">
          <p>QR generator</p>
          <BsQrCodeScan className="qr-icon" />
        </div>
      </header>
      <main>
        {/* Hero section with Lottie animation */}
        <h1>Create & Customize QR Codes with Ease.</h1>
        <div className="animation-wrapper">
          <LottieComponent />
        </div>
        {/* Show loading spinner while generating the QR code */}
        {showSpinner ? (
          <div className="loading-container">
            <AnotherLottieComponent />
            <p>Creating QR Code...</p>
          </div>
        ) : qrcode ? (
          // Content to show when QR code is available
          <div className="download-container">
            <img src={qrcode} alt="QR Code" aria-label="Generated QR Code" />
            <button
              className="download-btn"
              onClick={downloadQRCode}
              aria-label="Download the QR Code"
            >
              Download
              <AiOutlineCloudDownload className="download-icon" />
            </button>
            <button
              className="repeat-btn"
              onClick={repeatAction}
              aria-label="Reset and make another QR Code"
            >
              Make more QR Codes
            </button>
            {/* GitHub link and author information */}
            <div className="github-container footer">
              <a href="https://github.com/JuliaHolm">
                <AiFillGithub className="github-icon" />
              </a>
              <a href="https://github.com/JuliaHolm">By Julia Holm</a>
            </div>
          </div>
        ) : (
          // Content to show when qrcode is not available.
          <div className="qr-generator-wrapper">
            <div className="qr-generator-container">
              <div>
                {/* Input for URL */}
                <label htmlFor="urlInput" className="visually-hidden">
                  URL
                </label>
                <input
                  id="urlInput"
                  type="text"
                  placeholder="e.g. google.com"
                  aria-label="Enter URL"
                  value={inputURL}
                  onChange={(event) => setInputURL(event.target.value)}
                />
              </div>

              {/* COLOR PICKER */}
              <div className="color-picker-wrapper" ref={colorPickerRef}>
                {/* <label>Color</label> */}
                <div className="color-picker">
                  {/* Color box and value display */}
                  <div
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    style={{ background: color }}
                    className="color-box"
                    value={color}
                    onChange={handleColorInputChange}
                    role="button"
                    tabIndex="0"
                  ></div>
                  <span>{color}</span>
                </div>
                {/* Display the Chromecolor picker if showColorPicker is true */}
                {showColorPicker && (
                  <div className="chrome-picker">
                    <ChromePicker
                      color={color}
                      onChange={(newColor) => setColor(newColor.hex)}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* Generate and Reset buttons */}
            <button
              className="generate-btn"
              onClick={generateQRCode}
              aria-label="Generate QR Code"
            >
              Generate
            </button>
            <button
              className="reset-btn"
              onClick={repeatAction}
              aria-label="Reset"
            >
              Reset <IoClose className="icon" />
            </button>
            {/* GitHub link and author information */}
            <div className="github-container footer">
              <a href="https://github.com/JuliaHolm">
                <AiFillGithub className="github-icon" />
              </a>
              <a href="https://github.com/JuliaHolm">By Julia Holm</a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
