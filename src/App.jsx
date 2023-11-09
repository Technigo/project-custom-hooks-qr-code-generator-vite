import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";


// Define the App component
export const App = () => {
  // Destructure variables, properties and methods from the useQRCodeGenerator hook that you imported above here :)
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
          {inputError && (
          <div className="error-container">
          <p className="error-message">{inputError}</p>
          </div>
          )}
          <div>
          <button onClick={generateQRCode}>Generate</button>
          </div>
        </div>
      ) : (
        <div>
          <img src={qrCodeData} alt="QR Code" />
          <div className="downloadandrepeatbtns">
          <button onClick={downloadQRCode}>Download</button>
          <button onClick={repeatAction}>Repeat</button>
          </div>
        </div>
      )}
    </div>
  );
};


