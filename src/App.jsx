// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { QRCode } from "qrcode";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator"; // Import the custom hook useQRCodeGenerator
import { useState } from "react";

// Other page stuff
import { Header } from "./components/Header";
import { LottieComponent } from "./components/LottieComponent";

// ICONS
import { AiOutlineCloudDownload } from "react-icons/ai";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const { qr, url, setUrl, generateQRCode, downloadQRCode, repeatAction } =
    useQRCodeGenerator();

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="column">
          <h1>QR Realm of Dreams</h1>
          <h2>Where Digital Magic Gleams</h2>
          <p>Create & Customize QR Codes with Ease.</p>
          <LottieComponent />
        </div>
        <div className="generator column">
          <input
            type="text"
            placeholder="e.g. google.com"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
          <button className="generate-btn" onClick={generateQRCode}>
            Generate
          </button>
          {qr && (
            <>
              <img src={qr} />
              <a href={qr} download="qrcode.png" className="flex button">
                Download <AiOutlineCloudDownload className="download-icon" />
              </a>
            </>
          )}
        </div>
      </main>
      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
    </div>
  );
};
