// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator

// Other page stuff
import {
  NotALottieComponent,
  NotAnotherLottieComponent,
} from "./NotALottieComponent";
import logo from "/studio-qr-code-logo.png";
import { ChromePicker } from "react-color";
// import SketchExample from "./InputColor"

// ICONS
import { AiOutlineCloudDownload, AiFillGithub } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
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

  const handleColorInputChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  return (
    <div className="wrapper">
      <header>
        <div className="github-container header">
          <a href="https://github.com/JuliaHolm">
            <AiFillGithub className="github-icon" />
          </a>
          <a href="https://github.com/JuliaHolm">By Julia Holm</a>
        </div>
        <img className="logo" src={logo} alt="Studio QR code logo" />
        <div className="qr-header-container">
          <p>QR generator</p>
          <BsQrCodeScan className="qr-icon" />
        </div>
      </header>
      <main>
        <div className="hero-section">
          <div className="hero-text">
            <h1>QR Realm of Dreams</h1>
            <h2>Where Digital Magic Gleams</h2>
            <p>Create & Customize QR Codes with Ease.</p>
          </div>
          <NotALottieComponent />
        </div>
        {showSpinner ? (
          // Display a loading spinner while generating the QR code
          <div className="loading-container">
            <NotAnotherLottieComponent />
            <p>Creating QR Code...</p>
          </div>
        ) : qrcode ? (
          // Content to show when qrcode is available.
          <div className="download-container">
            <img src={qrcode} alt="QR Code" />
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
                <label className="visually-hidden">URL</label>
                <input
                  id="urlInput"
                  type="text"
                  placeholder="e.g. google.com"
                  value={inputURL}
                  onChange={(event) => setInputURL(event.target.value)}
                />
              </div>

              {/* COLOR PICKER */}
              <div className="color-picker-wrapper">
                {/* <label>Color</label> */}
                <div className="color-picker">
                  <div
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    style={{ background: color }}
                    className="color-box"
                    value={color}
                    onChange={handleColorInputChange}
                  ></div>
                  <span>{color}</span>
                </div>
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
