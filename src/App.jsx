import { useState } from "react";
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator

// Other page stuff
import { NotAComponentButton } from "./NotAComponentButton";
import { NotALottieComponent } from "./NotALottieComponent";
import logo from "/studio-qr-code-logo.png";

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
  } = useQRCodeGenerator();

  return (
    <div className="wrapper">
      <header>
        <div className="flex">
          <a href="https://github.com/JuliaHolm">
            <AiFillGithub className="github-icon" />
          </a>
          <a href="https://github.com/JuliaHolm">By Julia Holm</a>
        </div>
        <img className="logo" src={logo} alt="" />
        <div className="flex">
          <p>QR generator</p>
          <BsQrCodeScan className="scan-icon" />
        </div>
      </header>
      <main>
        <div className="column">
          <h1>QR Realm of Dreams</h1>
          <h2>Where Digital Magic Gleams</h2>
          <p>Create & Customize QR Codes with Ease.</p>
          <NotALottieComponent />
        </div>
        {qrcode ? (
          // Content to show when qrcode is available.
          <div className="generator column">
            <img src={qrcode} alt="QR Code" />
            <NotAComponentButton
              className="download-btn"
              textContent="Download"
              icon={<AiOutlineCloudDownload className="download-icon" />}
              onClick={downloadQRCode}
              ariaLabel="Download the QR Code"
            />
            <NotAComponentButton
              className="repeat-btn"
              textContent="Make more QR Codes"
              onClick={repeatAction}
              ariaLabel="Reset and make another QR Code"
            />
          </div>
        ) : (
          // Content to show when qrcode is not available.
          <div className="generator column">
            <div className="url-wrapper">
              <label className="visually-hidden">URL</label>
              <input
                type="text"
                placeholder="e.g. google.com"
                value={inputURL}
                onChange={(event) => setInputURL(event.target.value)}
              />
            </div>
            <NotAComponentButton
              className="generate-btn"
              textContent="Generate"
              onClick={generateQRCode}
              aria-label="Generate QR Code"
            />
            <NotAComponentButton
              className="reset-btn"
              textContent="Reset"
              icon={<IoClose className="icon" />}
              onClick={repeatAction}
              aria-label="Reset"
            />
          </div>
        )}
      </main>
    </div>
  );
};

// <button class="noselect">
//   <span class="text">Delete</span>
//   <span class="icon">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//     >
//       <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
//     </svg>
//   </span>
// </button>;
