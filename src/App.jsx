// App Component Explanation
// The App component serves as a user interface for generating and downloading QR codes, utilizing the custom hook useQRCodeGenerator which encapsulates the logic for QR code generation and management. When rendered, the component displays a title ("Technigo QR Code Generator") and conditionally renders either an input field and a "Generate" button or a generated QR code image, a "Download" button, and a "Repeat" button, based on the showInput state variable. If showInput is true, users can input a URL and generate a QR code by clicking the "Generate" button. Once generated, the input field and "Generate" button are replaced by the QR code image and additional buttons. The "Download" button triggers a download of the QR code image, and the "Repeat" button resets the UI to allow for generating a new QR code. The url, setUrl, qr, showInput, generateQRCode, downloadQRCode, and repeatAction variables and functions are derived from the useQRCodeGenerator hook, providing the necessary state and actions to manage the QR code generation process.
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
  const {
    url,
    setUrl,
    qr,
    isVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();
  // Return the JSX to render the component
  // Handle changes to the URL input
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="app-container">
      {/* Conditionally render based on whether the user is inputting a URL to generate a QR code or wants to download the generated QR code from the input */}
      <h1>QR Code Generator</h1>
      {isVisible ? (
        <div className="generate-btn">
          <input
            type="text"
            placeholder="e.g. https://github.com/KroLuna"
            value={url}
            onChange={handleInputChange}
          />
          <button className="generate-btn" onClick={generateQRCode}>
            Generate
          </button>
        </div>
      ) : null}

      {qr && (
        <div className="download-btn">
          <img src={qr} alt="Generated QR Code" />
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Generate New</button>
        </div>
      )}
    </div>
  );
};
