import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import animationData from "./assets/animations/animation.json";

export const App = () => {
  const {
    // Destructure the custom hook
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator(); // Call the custom hook

  return (
    // Render the UI
    <div className="app-body">
      <h1>Easy QR Code Generator</h1>
      <Lottie className="lottie-animation" animationData={animationData} />{" "}
      {/* Render the Lottie animation */}
      {showInput ? ( // Render the input element when showInput is true
        <>
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url} // Bind the input element to the url state
            onChange={(e) => setUrl(e.target.value)} // Bind the onChange event to the setUrl function
          />
          <button onClick={generateQRCode}>Generate</button>{" "}
          {/* Bind the onClick event to the generateQRCode function */}
        </>
      ) : (
        <>
          {/* Render QR code image, "Download," and "Repeat" buttons when showInput is false */}
          {qr && (
            <>
              <img src={qr} /> {/* Render the QR code image */}
              <div className="button-container">
                <button onClick={downloadQRCode}>Download</button>{" "}
                {/* Bind the onClick event to the downloadQRCode function */}
                <button onClick={repeatAction}>New code</button>{" "}
                {/* Bind the onClick event to the repeatAction function */}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
