// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.

// Import the custom hook useQRCodeGenerator
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import "./index.css";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)

  const {
    url,
    setUrl,
    generateQRCode,
    qr,
    downloadQRCode,
    formattedName,
    repeatAction,
    hideButtons,
    hideInput,
  } = useQRCodeGenerator();

  function handleDownloadClick() {
    downloadQRCode();
  }

  function handleRepeatClick() {
    repeatAction();
  }

  // Return the JSX to render the component
  return (
    <div>
      <h1>QR Code Generator</h1>
      <p>
        Enter your URL and click 'Generate QR Code' to create your own unique QR
        Code to download.
      </p>
      <div className={hideInput ? "inputHide" : "inputDisplay"}>
        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={generateQRCode}>Generate QR Code</button>
      </div>

      <>
        <img src={qr} />
        <a href={qr} download={formattedName}>
          <button
            href={qr}
            className={hideButtons ? "buttonHide" : "buttonDisplay"}
            onClick={handleDownloadClick}
          >
            Download
          </button>
        </a>
        <div id="insertHere"></div>
        <button
          className={hideButtons ? "buttonHide" : "buttonDisplay"}
          onClick={handleRepeatClick}
        >
          Try Again
        </button>
      </>
    </div>
  );
};
