// Import the custom hook
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// Define the component
export const App = () => {
  // Destructure values custom hook
  const { url, setUrl, qr, showInput, generateQRCode, downloadQRCode, repeatAction } = useQRCodeGenerator();

  // Render the App component
  return (
    <div className="app">
      <h1>QR Code Generator</h1>

      {/* Conditionally render input or QR code based on state */}
      {showInput ? (
        <div className='input-wrapper'>
          {/* Input field for URL */}
          <input
            id="urlInput"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          {/* Button to trigger QR code generation */}
          <button onClick={generateQRCode}>Generate</button>
        </div>
      ) : (
        <div>
          {/* Display the generated QR code image */}
          <img src={qr} alt="Generated QR Code" />
          <div className="button-wrapper">
            {/* Button to download the generated QR code */}
            <button onClick={downloadQRCode}>Download</button>
            {/* Button to restart the QR code generation process */}
            <button onClick={repeatAction}>Restart</button>
          </div>
        </div>
      )}
    </div>
  );
};
