import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import animationData from './Animation-QR.json';
import Lottie from 'lottie-react';

// App Component
export const App = () => {
  // Destructure variables, properties, and methods from the useQRCodeGenerator hook
  const {
    url,
    setUrl,
    qr,
    showInput,
    errorMessage,
    setErrorMessage,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Return JSX to render the component
  return (
    <div className="">
      <nav className="navbar">
        <h1>QR Code Generator</h1>
      </nav>
      <div className="pageWrapper">

        {/* Conditionally render based on whether the user is inputting a URL to generate a QR Code or wants to download the generated QR Code */}
        {showInput ? (
          <> {/* Lottie animation as a visual cue while waiting for user action */}
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="lottie-animation"
            />
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
            />
            {errorMessage && <p style={{ color: '#800000', marginTop: '5px' }}>{errorMessage}</p>}
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
    </div>
  );
};