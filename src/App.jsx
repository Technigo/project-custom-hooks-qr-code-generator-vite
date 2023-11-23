// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

import qrAnimation from "./assets/Animation - 1699813014648.json";
// Import the custom hook useQRCodeGenerator
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

import Lottie from "lottie-react";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    qrData,
    generateQRCode,
    inputURL,
    setInputURL,
    repeatAction,
    inputVisibility,
    downloadQRCode,
    downloadRef,
  } = useQRCodeGenerator();

  // Return the JSX to render the component
  return (
    <div className="container">
      {/* Render the title */}
      {inputVisibility && (
        <Lottie
          animationData={qrAnimation}
          loop={true}
          style={{
            maxWidth: "300px",
            alignSelf: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        />
      )}
      <h1>QR Code Generator</h1>
      {inputVisibility && (
        <div className="url-input">
          <input
            type="text"
            placeholder="Enter website here..."
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
          />
          {/* <button onClick={generateQRCode} className="submitBtn">
            Generate
          </button> */}
          <button onClick={generateQRCode} className="glowing-btn">
            <span className="glowing-txt">
              GEN<span className="faulty-letter">ER</span>ATE
            </span>
          </button>
        </div>
      )}

      {qrData && (
        <>
          <img src={qrData} alt="qr code" className="qr-image" />
          <div className="button-container">
            <a ref={downloadRef} style={{ display: "none" }}></a>
            <button onClick={downloadQRCode} className="glowing-btn">
              <span className="glowing-txt">
                DOW<span className="faulty-letter">NL</span>OAD
              </span>
            </button>
            <button onClick={repeatAction} className="glowing-btn">
              <span className="glowing-txt">
                R<span className="faulty-letter">ES</span>ET
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
