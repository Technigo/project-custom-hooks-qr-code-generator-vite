import { useQRCodeGenerator } from "./hooks/useQRCodegenerator";
import Lottie from "lottie-react";
import QrAnimation from "./assets/lottieanimation/QrAnimation.json"
import "./index.css";



const App = () => {
  const {
    url,
    setURL,
    qrCode,
    isInputVisible,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Make sure to return some JSX here for your component to render
  return (
    // <div>
    //   {/* Display the Lottie animation */}
    //   <Lottie animationData={QrAnimation} loop autoplay style={{ width: 200, height: 200 }} />

    //   {/* Additional UI elements like input fields, buttons, QR Code display, etc., go here */}
    // </div>

<div className="flex flex-col items-center justify-center h-screen">
      {/* Conditional rendering based on qrCode state */}
      {qrCode ? (
        // Display QR code if it exists
        <div className="w-48 h-48">
          <img src={qrCode} alt="QR Code" className="w-full h-full" />
        </div>
      ) : (
        // Display the Lottie animation if qrCode does not exist
        <Lottie animationData={QrAnimation} loop autoplay style={{ width: 400, height: 400 }} />
      )}

      {/* Input field and button for generating QR code */}
      {isInputVisible && (
        <div className="mt-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            placeholder="Enter URL here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button
            className="btn btn-primary ml-2"
            onClick={generateQRCode} // Ensure this matches the function name
          >
            Generate QR Code
          </button>
        </div>
      )}

      {/* Button for downloading the QR code, shown only if the QR code exists */}
      {qrCode && (
        <button
          className="btn btn-secondary mt-4"
          onClick={downloadQRCode}
        >
          Download QR Code
        </button>
      )}

      {/* Button to reset and generate another QR code, shown only if the QR code exists */}
      {qrCode && (
        <button
          className="btn btn-accent mt-2"
          onClick={repeatAction}
        >
          Generate New QR Code
        </button>
      )}
    </div>
  );
};

export default App;
