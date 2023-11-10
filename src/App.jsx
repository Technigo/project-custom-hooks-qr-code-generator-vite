// Import the custom hook for QR code generation
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";


// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator
  const {
    url,
    setUrl,
    qrCodeData,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    inputError,
    setInputError,
  } = useQRCodeGenerator();

  // Return the JSX to render the component
  return (
    <div className="wrapper">
      <h1>QR Code Generator</h1>
      <p>Generate your own QR code!</p>

      {showInput ? (
        // Display input fields when showInput is true
        <div>
          <input
            type="text"
            placeholder="Enter URL eg. https://google.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setInputError(''); // Clear the error when the input field changes
            }}
          />
          {/* Display error message if inputError is present when input validation is not matching an URL */}
          {inputError && (
          <div className="error-container">
          <p className="error-message">{inputError}</p>
          </div>
          )}
          {/* Button to trigger QR code generation */}
          <div>
          <button onClick={generateQRCode}>Generate</button>
          </div>
        </div>
      ) : (
        // Display generated QR code when showInput is false
        <div>
          {/* Display the generated QR code image */}
          <img src={qrCodeData} alt="QR Code" />
          {/* Buttons for downloading the QR code and repeating the action */}
          <div className="downloadandrepeatbtns">
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
          </div>
        </div>
      )}
    </div>
  );
};


