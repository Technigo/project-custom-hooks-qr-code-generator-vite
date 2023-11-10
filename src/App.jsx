// imports the useQRCodeGenerator custom hook
import { useQRCodeGenerator } from "./hooks/useQRCodeGenerator";
import Lottie from "lottie-react";
import generateAnimation from "./assets/generateAnim.json";

// Component that renders the QR code generator UI
export const App = () => {
  // Desctructures the custom hook to access the state variables and functions needed to generate and download QR codes as well as to repeat the action
  const {
    url,
    setUrl,
    qr,
    showInput,
    showAnimation,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  // Defines the styling of the Lottie animation
  const style = {
    height: "10rem",
  };

  // Return the JSX to render the component
  return (
    <section>
      <div>
        {/* Render the title */}
        <h1>QR Code Generator</h1>

        {/* Conditional rendering of elements */}
        {showAnimation ? (
          // Display a loading spinner while generating the QR code
          <Lottie
            animationData={generateAnimation}
            style={style}
          />
        ) : showInput ? (
          // Renders the input field and generate button if showInput is true
          <>
            <p>Please enter a URL below</p>
            <input
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={generateQRCode}>Generate QR</button>
          </>
        ) : qr && (
          // Renders the QR code, download button, and repeat button if showInput is false
          <>
            <img src={qr} alt="QR Code" />
            <p className="text-lg">Want to go again?</p>
            <div>
              <button onClick={repeatAction}>Start over</button>
              <button className="secondary-btn">
                <a href={qr} onClick={downloadQRCode} download="qrcode.png">
                  Download QR Code 👇
                </a>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};