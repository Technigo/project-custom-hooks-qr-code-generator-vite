// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

// import logo from "./assets/technigo-logo.svg";
// import { QrExample } from "./components/QrExample";
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import "animate.css";
import Lottie from "lottie-react";
import animationData from "./assets/Animation.json";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    url,
    qr,
    showInput,
    setUrl,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return the JSX to render the component

  return (
    <div className="app">
      {/* Render the title */}

      <Lottie className="lottie-animation" animationData={animationData} />
      <h1 className="animate__fadeInDown">QR Code Generator</h1>

      {showInput ? (
        <div>
          {/* Render input field and "Generate" button when showInput is true */}
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        <div className="qr-buttons">
          {/* Render QR code image, "Download," and "Repeat" buttons when showInput is false */}
          <img src={qr} alt="QR Code" />
          <div className="buttons">
            <button onClick={downloadQRCode}>Download</button>
            <button onClick={repeatAction}>Repeat</button>
          </div>
        </div>
      )}

      {/* <QrExample /> */}
    </div>
  );
};
