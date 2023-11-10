// App.jsx

import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";

// App Component
export const App = () => {
  // Destructure variables, properties, and methods from the useQRCodeGenerator hook
  const {
    url,
    setUrl,
    qr,
    showInput,
    errorMessage,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return JSX to render the component
  return (
    <div className="">
      {/* Render Title */}
      <h1>Mirelba QR Codes</h1>
      <p>Get Your Code Here</p>

      {/* Conditionally render based on whether the user is inputting a URL to generate a QR Code or wants to download the generated QR Code */}
      {showInput ? (
        // Render input field and generate button
        <>
          {/* Input field for URL entry */}
          <input
            type="text"
            placeholder="https://"
            value={url}
            onChange={(e) => {
              // Update URL state on input change
              setUrl(e.target.value);
              // Clear error message when the user starts typing
              errorMessage && setErrorMessage('');
            }}
          />
          {/* Display the error message, if any */}
          {errorMessage && <p style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</p>}
          {/* Generate button */}
          <button onClick={generateQRCode} aria-label="Generate QR Code">
            Generate
          </button>
        </>
      ) : (
        // Render QR code, download button, and repeat button
        <>
          {/* Display generated QR code image */}
          <img src={qr} alt="QR Code" />
          {/* Download button for the generated QR code */}
          <button onClick={downloadQRCode} aria-label="Download QR Code">
            Download
          </button>
          {/* Button to reset and allow generating a new QR code */}
          <button onClick={repeatAction} aria-label="Repeat Action">
            Repeat
          </button>
        </>
      )}
    </div>
  );
};
